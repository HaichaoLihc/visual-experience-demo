// Hanging Lenses: one small photograph on a dark wall, with two magnifying lenses hanging on
// wires in front of it. A spotlight above throws their shadows on the wall, each with the bright
// point the glass gathers. Drag a lens across the print to look through it; it swings back on its
// wire and stays at the height you leave it. One full-screen fragment shader traces the scene:
// the wall and print, the lenses' glass (a thin lens with a little chromatic aberration), their
// rims, bails and wires, and the light that reaches the wall past and through them.
const PHOTO = {
  src: '../stream-implement-3d/assets/photos/190.jpg', // the one photograph this scene needs
  title: 'Forest path',
  credit: 'James Forbes',
  source: 'https://unsplash.com/photos/jrzvClypPq8',
};
const PRINT_W = .3; // metres; the print hangs on the wall (z = 0) at the origin
const LIGHT = [.3, 1.4, 1.05], SPOT = [.01, -.07, 0];
const EYE = [0, .012, .95];
const TOP = .9; // the wires' hooks, out of sight above
// A round hand lens in a black ring, and a loupe in an aluminium tube. Radii, rim, depth and
// focal length in metres; y is where each hangs at rest.
const LENSES = [
  { kind: 0, a: .034, w: .006, depth: .011, f: .095, x: -.072, y: .036, z: .06, yaw: .14, phase: 0 },
  { kind: 1, a: .036, w: .004, depth: .032, f: .155, x: .088, y: -.028, z: .08, yaw: -.38, phase: 2.1 },
];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('scene');
const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, powerPreference: 'high-performance' });
if (!gl) { document.body.append('This work needs WebGL 2.'); throw new Error('WebGL 2 unavailable'); }
Object.assign(document.getElementById('credit'), { href: PHOTO.source, textContent: `${PHOTO.title} · ${PHOTO.credit} ↗` });

let W = 1, H = 1, raf = 0, last = 0, time = 0, ready = false, active = 0, grab = null;
let half = [PRINT_W / 2, PRINT_W / 3];
const eye = [...EYE], look = [0, 0];

// The platform feed tells works when they are off screen; standalone, the work simply runs.
let hostActive = true;
const running = () => hostActive && !document.hidden;
addEventListener('message', (e) => {
  if (e.source === parent && e.data?.type === 'platform:visibility') { hostActive = !!e.data.active; wake(); }
});
document.addEventListener('visibilitychange', wake);
if (parent !== window) parent.postMessage({ type: 'platform:hello' }, '*');

// Each lens hangs from a hook at TOP on a wire of length len, swung by angle phi in the wall's
// plane, and turns slowly about its wire. bail is the height of the wire's loop above its centre.
const lenses = LENSES.map((l) => {
  const bail = l.a + l.w + .012;
  return { ...l, bail, len: TOP - l.y - bail, phi: 0, v: 0, turn: 0 };
});

// ---------------------------------------------------------------------------
// The shader
// ---------------------------------------------------------------------------
const vs = `void main() { gl_Position = vec4(vec2(gl_VertexID & 1, gl_VertexID >> 1) * 4. - 1., 0, 1); }`;
const fs = `
uniform vec2 uRes; uniform vec3 uEye, uR, uU, uF; uniform float uTan;
uniform vec3 uLight, uSpot; uniform sampler2D uPhoto; uniform vec2 uHalf;
uniform vec3 uC[2], uX[2], uY[2], uZ[2], uTop[2], uHook[2];
uniform vec4 uLens[2]; // aperture radius, rim width, depth, focal length
uniform vec3 uMeta[2]; // kind, glass plane z, bounding radius
out vec4 o;
const float BOARD = .006, WIRE = .00045;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f *= f * (3. - 2. * f); return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + 1.), f.x), f.y); }
vec3 toL(int i, vec3 v) { return vec3(dot(v, uX[i]), dot(v, uY[i]), dot(v, uZ[i])); }
vec3 toW(int i, vec3 v) { return uX[i] * v.x + uY[i] * v.y + uZ[i] * v.z; }
float spot(vec3 l) { return smoothstep(.984, .9995, dot(-l, uSpot)); } // l points toward the light

// A lens's rim (or tube) and the wire loop on top, in its own frame: z along its axis.
float sdLens(int i, vec3 p, out int part) {
  vec4 L = uLens[i];
  vec2 q = abs(vec2(length(p.xy) - L.x - L.y * .5, p.z)) - vec2(L.y, L.z) * .5 + .0012;
  float body = length(max(q, 0.)) + min(max(q.x, q.y), 0.) - .0012;
  float loop = length(vec2(length(p.xy - vec2(0, L.x + L.y + .006)) - .006, p.z)) - .0011;
  part = loop < body ? 1 : 0;
  return min(body, loop);
}
vec3 lensNormal(int i, vec3 p) {
  int m; const vec2 k = vec2(1, -1) * .0002;
  return normalize(k.xyy * sdLens(i, p + k.xyy, m) + k.yyx * sdLens(i, p + k.yyx, m) + k.yxy * sdLens(i, p + k.yxy, m) + k.xxx * sdLens(i, p + k.xxx, m));
}
// The closest approach of a ray to a wire: distance, and how far along the ray.
vec2 toWire(int i, vec3 ro, vec3 rd) {
  vec3 ba = uHook[i] - uTop[i], w = ro - uTop[i];
  float bard = dot(ba, rd), wrd = dot(w, rd);
  float u = clamp((dot(w, ba) - wrd * bard) / max(dot(ba, ba) - bard * bard, 1e-6), 0., 1.);
  float t = max(u * bard - wrd, 0.);
  return vec2(length(w + rd * t - ba * u), t);
}

// Light reaching X past lens i: its rim, tube and loop shade X; its glass takes away the light
// that would have passed straight through and gathers it into a bright spot, edged in colour.
vec3 pastLens(int i, vec3 X, vec3 l) {
  vec3 oc = X - uC[i];
  float R = uMeta[i].z, b = dot(oc, l), c = dot(oc, oc) - R * R, disc = b * b - c;
  if (disc < 0. || -b + sqrt(disc) < 0.) return vec3(1);
  vec3 o = toL(i, oc), d = toL(i, l);
  float t = max(-b - sqrt(disc), 0.), t1 = -b + sqrt(disc), soft = 1.;
  int m;
  for (int s = 0; s < 40; s++) {
    float h = sdLens(i, o + d * t, m);
    soft = min(soft, h / (.02 * t + .0004));
    if (soft < .01) break;
    t += max(h, .0006);
    if (t > t1) break;
  }
  soft = smoothstep(0., 1., max(soft, 0.));
  float a = uLens[i].x, gz = uMeta[i].y, tg = (gz - o.z) / d.z;
  float direct = tg > 0. ? smoothstep(a - .001, a + .001, length((o + d * tg).xy)) : 1.;
  vec3 Ls = toL(i, uLight - uC[i]) - vec3(0, 0, gz), P = o - vec3(0, 0, gz), gather = vec3(0);
  float D = -P.z, s = Ls.z;
  if (D > 0. && s > 0.) {
    vec2 centre = -D * Ls.xy / s;
    float slant = mix(1., s / length(Ls), .6); // a beam crossing the lens at a slant comes to focus sooner
    for (int ch = 0; ch < 3; ch++) { // a thin lens: the beam through it shrinks by k on its way to X
      float f = uLens[i].w * slant * (1. + (float(ch) - 1.) * .025), k = 1. + D / s - D / f;
      gather[ch] = smoothstep(a, a - .0015 - D * .03, length(P.xy - centre) / abs(k)) * .9 / max(k * k, .12);
    }
  }
  return soft * direct + gather;
}

// Light from the spot that reaches a point on the wall or print.
vec3 sunAt(vec3 X) {
  vec3 L = uLight - X;
  vec3 l = normalize(L);
  float k = spot(l) * max(l.z, 0.);
  if (k <= 0.) return vec3(0);
  vec3 vis = vec3(1);
  if (X.z < BOARD * .5) { // the print's board shades a thin line below it
    vec2 q = abs(X.xy + l.xy * (BOARD / l.z)) - uHalf;
    vis *= smoothstep(-.001, .0015, max(q.x, q.y));
  }
  for (int i = 0; i < 2; i++) {
    vis *= pastLens(i, X, l);
    vec2 w = toWire(i, X, l);
    float pen = WIRE + w.y * .02;
    vis *= 1. - smoothstep(pen, 0., w.x) * WIRE / pen * .9;
  }
  return vis * k * vec3(1.55, 1.48, 1.38);
}

// Where a ray meets the print or the wall, and what it finds there.
vec3 surface(vec3 ro, vec3 rd, out vec3 X) {
  X = ro + rd * ((BOARD - ro.z) / rd.z);
  if (all(lessThan(abs(X.xy), uHalf))) {
    vec2 uv = X.xy / uHalf * .5 + .5;
    return pow(texture(uPhoto, vec2(uv.x, 1. - uv.y)).rgb, vec3(2.2)) * .85;
  }
  X = ro + rd * (-ro.z / rd.z);
  return vec3(.15, .142, .152) * (.9 + .1 * noise(X.xy * 45.)) * (.96 + .04 * noise(X.xy * 420.));
}
vec3 shade(vec3 ro, vec3 rd) {
  vec3 X, alb = surface(ro, rd, X);
  return alb * (.07 + sunAt(X));
}

// Looking through a lens: three rays, one per colour, bent as a thin lens bends them.
vec3 glass(int i, vec3 hp, vec3 d, vec3 Xw, vec3 rd) {
  float a = uLens[i].x, rr = dot(hp.xy, hp.xy) / (a * a);
  vec2 m = d.xy / -d.z;
  vec3 X, col, light = vec3(0);
  for (int ch = 0; ch < 3; ch++) {
    float f = uLens[i].w * (1. - (float(ch) - 1.) * .012);
    vec3 dw = normalize(toW(i, vec3(m - hp.xy / f * (1. + .12 * rr), -1)));
    vec3 alb = surface(Xw, dw, X);
    if (ch == 1) light = .07 + sunAt(X); // lit once, at the green ray's point
    col[ch] = alb[ch];
  }
  col *= light * .93 * (1. - .4 * smoothstep(.7, 1., rr));
  vec3 n = normalize(toW(i, vec3(hp.xy / uLens[i].w, 1)));
  float F = .04 + .96 * pow(1. - abs(dot(n, rd)), 5.);
  vec3 l = normalize(uLight - Xw);
  float spec = pow(max(dot(reflect(rd, n), l), 0.), 900.) * 40. + pow(max(dot(reflect(rd, n), l), 0.), 40.) * .15;
  return col * (1. - F) + F * vec3(.035, .033, .036) + spec;
}

// Draws lens i over col where the ray meets it before the wall.
vec3 lens(int i, vec3 ro, vec3 rd, vec3 col, float pix) {
  vec3 oc = ro - uC[i];
  float R = uMeta[i].z, b = dot(oc, rd), disc = b * b - dot(oc, oc) + R * R;
  if (disc < 0.) return col;
  vec3 o = toL(i, oc), d = toL(i, rd);
  float gz = uMeta[i].y, tg = (gz - o.z) / d.z;
  vec3 hp = o + d * tg;
  bool inGlass = tg > 0. && length(hp.xy) < uLens[i].x;
  if (inGlass) col = glass(i, hp, d, ro + rd * tg, rd);
  // the rim, by sphere tracing; a near miss gives its antialiased edge
  float t = -b - sqrt(disc), t1 = -b + sqrt(disc), best = 1e9, bestT = t;
  int part;
  for (int s = 0; s < 64; s++) {
    float h = sdLens(i, o + d * t, part);
    float cover = h / (pix * t);
    if (cover < best) { best = cover; bestT = t; }
    if (h < pix * t * .25 || t > t1) break;
    t += h;
  }
  float alpha = clamp(1. - best, 0., 1.);
  if (alpha <= 0. || (inGlass && bestT > tg)) return col;
  vec3 p = o + d * bestT, n = toW(i, lensNormal(i, p)), X = ro + rd * bestT;
  sdLens(i, p, part); // which part the edge belongs to
  vec3 l = normalize(uLight - X), hv = normalize(l - rd);
  bool metal = part == 1 || uMeta[i].x > .5; // the loop and the loupe's tube are bright metal; the ring is black
  vec3 base = metal ? vec3(.42, .42, .43) : vec3(.012);
  float lit = spot(l);
  vec3 c = base * (.12 + max(dot(n, l), 0.) * lit * 1.2) + pow(max(dot(n, hv), 0.), metal ? 70. : 160.) * (metal ? .9 : .5) * lit;
  return mix(col, c, alpha);
}

void main() {
  vec2 q = (gl_FragCoord.xy * 2. - uRes) / uRes.y;
  vec3 rd = normalize(uF + (uR * q.x + uU * q.y) * uTan);
  float pix = 2. * uTan / uRes.y;
  vec3 col = shade(uEye, rd);
  // the farther lens first, so the nearer one draws over it
  int near = distance(uEye, uC[0]) < distance(uEye, uC[1]) ? 0 : 1;
  col = lens(1 - near, uEye, rd, col, pix);
  col = lens(near, uEye, rd, col, pix);
  for (int i = 0; i < 2; i++) {
    vec2 w = toWire(i, uEye, rd);
    float wp = pix * w.y;
    col = mix(col, vec3(.02), clamp((WIRE + wp * .5 - w.x) / wp, 0., 1.) * min(1., 2. * WIRE / wp + .3));
  }
  col = pow(1. - exp(-col * 1.7), vec3(1. / 2.2));
  o = vec4(col + (hash(gl_FragCoord.xy) - .5) / 255., 1);
}`;

const prog = gl.createProgram();
for (const [type, src] of [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]]) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, `#version 300 es\nprecision highp float;\n${src}`);
  gl.compileShader(sh);
  gl.attachShader(prog, sh);
}
gl.linkProgram(prog);
if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getAttachedShaders(prog).map((sh) => gl.getShaderInfoLog(sh)).join('\n'));
const u = {};
for (let i = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS); i--;) { const { name } = gl.getActiveUniform(prog, i); u[name.replace('[0]', '')] = gl.getUniformLocation(prog, name); }
gl.useProgram(prog);
gl.bindVertexArray(gl.createVertexArray());

const sub = (a, b) => a.map((x, i) => x - b[i]);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (a) => { const l = Math.hypot(...a); return a.map((x) => x / l); };
gl.uniform3fv(u.uLight, LIGHT);
gl.uniform3fv(u.uSpot, unit(sub(SPOT, LIGHT)));
gl.uniform1i(u.uPhoto, 0);

gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([90, 90, 90, 255]));
const loaded = fetch(PHOTO.src).then((r) => r.blob()).then((b) => createImageBitmap(b)).then((img) => {
  const aspect = img.width / img.height; // the print keeps the photograph's shape
  half = aspect >= 1 ? [PRINT_W / 2, PRINT_W / 2 / aspect] : [PRINT_W / 2 * aspect * .8, PRINT_W / 2 * .8];
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}).catch((err) => console.warn('Missing photo', PHOTO.src, err)).then(() => { ready = true; wake(); });

// A lens's frame: hanging along its wire (swung by phi), turned about it by yaw.
function frameOf(l) {
  const s = Math.sin(l.phi), c = Math.cos(l.phi), yaw = l.yaw + l.turn;
  const up = [-s, c, 0], x0 = [c, s, 0], z0 = [0, 0, 1];
  const X = x0.map((v, i) => v * Math.cos(yaw) - z0[i] * Math.sin(yaw));
  const Z = x0.map((v, i) => v * Math.sin(yaw) + z0[i] * Math.cos(yaw));
  const hook = [l.x, TOP, l.z], C = hook.map((v, i) => v - up[i] * (l.len + l.bail));
  return { C, X, Y: up, Z, hook, top: hook.map((v, i) => v - up[i] * l.len) };
}

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  W = canvas.width = Math.round(innerWidth * dpr);
  H = canvas.height = Math.round(innerHeight * dpr);
  gl.viewport(0, 0, W, H);
  wake();
}

function camera() {
  const F = unit(sub([0, -.005, 0], eye)), R = unit(cross(F, [0, 1, 0])), U = cross(R, F);
  return { F, R, U, tan: Math.max(.2, .24 / (W / H)) }; // the print, both lenses and their shadows fit any frame
}
function render() {
  const { F, R, U, tan } = camera();
  gl.uniform2f(u.uRes, W, H);
  gl.uniform3fv(u.uEye, eye);
  gl.uniform3fv(u.uF, F);
  gl.uniform3fv(u.uR, R);
  gl.uniform3fv(u.uU, U);
  gl.uniform1f(u.uTan, tan);
  gl.uniform2fv(u.uHalf, half);
  const frames = lenses.map(frameOf);
  for (const k of ['C', 'X', 'Y', 'Z']) gl.uniform3fv(u[`u${k}`], frames.flatMap((f) => f[k]));
  gl.uniform3fv(u.uTop, frames.flatMap((f) => f.top));
  gl.uniform3fv(u.uHook, frames.flatMap((f) => f.hook));
  gl.uniform4fv(u.uLens, lenses.flatMap((l) => [l.a, l.w, l.depth, l.f]));
  gl.uniform3fv(u.uMeta, lenses.flatMap((l) => [l.kind, l.kind ? l.depth / 2 - .004 : 0, Math.hypot(l.a + l.w + .02, l.depth / 2) + .004]));
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

// ---------------------------------------------------------------------------
// Motion: each lens is a damped pendulum on its wire, turning slowly in the air; the view
// leans a little toward the pointer.
// ---------------------------------------------------------------------------
function wake() { if (!raf) raf = requestAnimationFrame(frame); }
function frame(now) {
  raf = 0;
  const dt = last ? Math.min((now - last) / 1000, .05) : 1 / 60;
  let moving = false;
  if (running()) {
    last = now;
    if (!reduced) time += dt;
    for (const [i, l] of lenses.entries()) {
      if (grab?.lens !== i) {
        for (let n = 0; n < 4; n++) { // a few small steps keep the swing steady
          l.v += (-9.8 / (l.len + l.bail) * Math.sin(l.phi) - .9 * l.v) * dt / 4;
          l.phi += l.v * dt / 4;
        }
        if (Math.abs(l.phi) + Math.abs(l.v) > 1e-5) moving = true; else l.phi = l.v = 0;
      }
      if (!reduced) l.turn = .24 * Math.sin(time * .23 + l.phase) + .08 * Math.sin(time * .51 + l.phase * 2);
    }
    const k = 1 - Math.exp(-dt * 4);
    const goal = [EYE[0] + look[0] * .06, EYE[1] + look[1] * .035, EYE[2]];
    for (let i = 0; i < 3; i++) { const d = goal[i] - eye[i]; if (Math.abs(d) > 1e-5) { eye[i] += d * k; moving = true; } }
    moving ||= !reduced || !!grab;
  }
  render();
  if (moving) wake(); else last = 0;
}

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------
function ray(cx, cy) {
  const { F, R, U, tan } = camera(), x = (cx / innerWidth * 2 - 1) * tan * innerWidth / innerHeight, y = (1 - cy / innerHeight * 2) * tan;
  return unit([0, 1, 2].map((i) => F[i] + R[i] * x + U[i] * y));
}
// The lens under the pointer, and where on the plane through its centre the pointer is.
function pick(cx, cy) {
  const d = ray(cx, cy);
  let best = null;
  lenses.forEach((l, i) => {
    const f = frameOf(l), t = dot(sub(f.C, eye), f.Z) / dot(d, f.Z);
    const p = eye.map((v, k) => v + d[k] * t);
    if (t > 0 && Math.hypot(...sub(p, f.C)) < l.a + l.w + .01 && (!best || t < best.t)) best = { lens: i, t };
  });
  return best;
}
const onPlane = (cx, cy, z) => { const d = ray(cx, cy), t = (z - eye[2]) / d[2]; return [eye[0] + d[0] * t, eye[1] + d[1] * t]; };
// A lens may hang anywhere from 17 cm above the print's centre to 17 cm below it.
const setLength = (l, len) => { l.len = Math.max(TOP - .17 - l.bail, Math.min(TOP + .17 - l.bail, len)); };
// Hold a lens where the pointer is: the swing follows across, the wire lets out or takes up.
function hold(l, x, y) {
  const dx = x - l.x, dy = TOP - y;
  setLength(l, Math.hypot(dx, dy) - l.bail);
  return Math.max(-.45, Math.min(.45, Math.atan2(dx, dy)));
}

canvas.addEventListener('pointerdown', (e) => {
  if (!ready) return;
  const hit = pick(e.clientX, e.clientY);
  if (!hit) return;
  const l = lenses[hit.lens], f = frameOf(l), [x, y] = onPlane(e.clientX, e.clientY, f.C[2]);
  canvas.setPointerCapture(e.pointerId);
  grab = { id: e.pointerId, lens: hit.lens, dx: f.C[0] - x, dy: f.C[1] - y, z: f.C[2], at: performance.now() };
  active = hit.lens;
  l.v = 0;
  canvas.classList.add('is-dragging');
  wake();
});
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerType === 'mouse') { look[0] = e.clientX / innerWidth * 2 - 1; look[1] = 1 - e.clientY / innerHeight * 2; }
  if (grab?.id === e.pointerId) {
    const l = lenses[grab.lens], [x, y] = onPlane(e.clientX, e.clientY, grab.z), now = performance.now();
    const phi = hold(l, x + grab.dx, y + grab.dy);
    l.v = (phi - l.phi) / Math.max((now - grab.at) / 1000, 1 / 120) * .6; // carried into the swing on release
    l.phi = phi; grab.at = now;
  } else if (e.pointerType === 'mouse' && ready) canvas.classList.toggle('is-pointer', !!pick(e.clientX, e.clientY));
  wake();
});
const release = (e) => {
  if (grab?.id !== e.pointerId) return;
  if (performance.now() - grab.at > 80) lenses[grab.lens].v = 0; // held still, then let go
  grab = null;
  canvas.classList.remove('is-dragging');
  wake();
};
canvas.addEventListener('pointerup', release);
canvas.addEventListener('pointercancel', release);
canvas.addEventListener('pointerleave', () => { look[0] = look[1] = 0; wake(); });
addEventListener('keydown', (e) => {
  const l = lenses[active];
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') l.v += e.key === 'ArrowLeft' ? -.8 : .8;
  else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') setLength(l, l.len + (e.key === 'ArrowUp' ? -.015 : .015));
  else if (e.key === 'Enter' || e.key === ' ') active = (active + 1) % lenses.length;
  else return;
  e.preventDefault();
  wake();
});
addEventListener('resize', resize);

resize();
await loaded;
if (parent !== window) {
  let sent = false;
  const done = () => { if (!sent) { sent = true; parent.postMessage({ type: 'platform:ready' }, '*'); } };
  requestAnimationFrame(() => requestAnimationFrame(done));
  setTimeout(done, 200); // frames may be held while the work is off screen
}
