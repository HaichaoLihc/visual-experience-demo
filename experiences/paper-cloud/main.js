// Paper Cloud: photographs printed on cotton paper and hung as a cloud above a circle of
// broken mirror that throws light back onto the ceiling. Raw WebGL2: the room, every sheet
// (one instanced draw) and their threads, plus a half-resolution pass for the mirror.
const ROOT = '../stream-implement-3d/'; // shared demo photographs and their credits
const LAYER = 256; // texture size per photograph; a selected sheet loads the full file
const [RX, RH, RZ] = [8, 5.4, 8]; // room half width, height, half depth in metres
const FOV = 45 * Math.PI / 180;
const HOME = { yaw: .3, pitch: .1, dist: 10.5, x: 0, y: 2.6, z: 0 };
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (id) => document.getElementById(id);
const canvas = $('scene');
const gl = canvas.getContext('webgl2', { alpha: false, antialias: true, powerPreference: 'high-performance' });
if (!gl) { document.body.append('This work needs WebGL 2.'); throw new Error('WebGL 2 unavailable'); }

let W = 1, H = 1, live = false, raf = 0, last = 0, time = 0, idleSince = 0, sel = -1, hover = -1, fullFor = -1, ready = false;
const cam = { ...HOME }, goal = { ...HOME }, view = {};

// The platform feed tells works when they are off screen; standalone, the work simply runs.
let hostActive = true;
const running = () => hostActive && !document.hidden;
addEventListener('message', (e) => {
  if (e.source === parent && e.data?.type === 'platform:visibility') { hostActive = !!e.data.active; wake(); }
});
document.addEventListener('visibilitychange', wake);
if (parent !== window) parent.postMessage({ type: 'platform:hello' }, '*');

// ---------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------
const NOISE = `
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec2 hash2(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f *= f * (3. - 2. * f); return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + 1.), f.x), f.y); }`;
// Sheets turn and drift on their threads; pick() repeats this in JavaScript.
const SWAY = `
uniform float uTime;
void sway(vec4 a, vec4 b, out vec3 c, out float yaw) {
  yaw = a.w + sin(uTime * .35 + b.z) * .1 + sin(uTime * .17 + b.z * 1.7) * .06;
  c = a.xyz + vec3(sin(uTime * .23 + b.z * 2.1), 0, cos(uTime * .19 + b.z * 1.3)) * .015;
}`;

const roomProgram = program(`
layout(location = 0) in vec3 aPos;
layout(location = 1) in float aFace;
uniform mat4 uVP;
out vec3 vP; flat out int vFace;
void main() { vP = aPos; vFace = int(aFace); gl_Position = uVP * vec4(aPos, 1); }`, `
${NOISE}
uniform vec3 uEye; uniform vec2 uRes; uniform float uTime; uniform int uMirror; uniform sampler2D uRefl;
in vec3 vP; flat in int vFace;
out vec4 o;
const vec3 N[6] = vec3[6](vec3(0, 1, 0), vec3(0, -1, 0), vec3(-1, 0, 0), vec3(1, 0, 0), vec3(0, 0, -1), vec3(0, 0, 1));
float caustic(vec2 uv) { // light thrown up by the mirror shards
  vec2 p = mod(uv * 6.2832, 6.2832) - 250., i = p; float c = 1.;
  for (int n = 0; n < 4; n++) {
    float t = uTime * .2 * (1. - 3.5 / float(n + 1));
    i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
    c += 1. / length(vec2(p.x / (sin(i.x + t) / .005), p.y / (cos(i.y + t) / .005)));
  }
  return pow(abs(1.17 - pow(c / 4., 1.4)), 8.);
}
void main() {
  // seen from outside, a wall steps aside; the mirror pass leaves out the floor
  if (dot(N[vFace], uEye - vP) < 0. || (uMirror == 1 && vFace == 0)) discard;
  float r = length(vP.xz);
  vec3 col;
  if (vFace == 0) {
    vec2 suv = gl_FragCoord.xy / uRes;
    if (r < 2.5) {
      // broken mirror: every shard tilts a little and shows its own piece of the room
      vec2 q = vP.xz * 4.2 + noise(vP.xz * 2.) * .6, i = floor(q), f = fract(q), id; float d1 = 9., d2 = 9.;
      for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
        vec2 g = vec2(x, y), v = g + hash2(i + g) - f; float d = dot(v, v);
        if (d < d1) { d2 = d1; d1 = d; id = i + g; } else if (d < d2) d2 = d;
      }
      vec2 h = hash2(id + 3.1);
      float crack = 1. - smoothstep(0., .015 + length(uEye - vP) * .004, sqrt(d2) - sqrt(d1));
      col = texture(uRefl, suv + (h - .5) * vec2(.12, .3)).rgb * (.55 + .3 * h.x) + step(.97, h.y) * .3;
      col = mix(col, vec3(.8), crack * .35);
    } else if (r < 2.57) col = vec3(.9, .89, .86);
    else col = vec3(.6, .59, .56) * (.6 + .4 * exp(-r * r * .02)) * (.78 + .22 * smoothstep(2.57, 3.2, r)) + texture(uRefl, suv).rgb * .1;
  } else if (vFace == 1) {
    vec2 g = abs(fract(vP.xz / 1.2) - .5);
    col = vec3(.2, .2, .21) * (1. - .25 * step(.485, max(g.x, g.y)));
    col += vec3(1, .97, .9) * caustic(vP.xz * .13) * smoothstep(7., 1., r) * .8;
    col = mix(col, vec3(1.3), smoothstep(.13, .1, length(vec2(abs(vP.x) - 2.6, vP.z - 2.2))));
  } else {
    col = vec3(.74, .73, .7) * (.62 + .38 * smoothstep(${RH.toFixed(1)}, 1.2, vP.y)) * (vP.y < .1 ? .45 : 1.) * (.97 + .03 * noise(vP.xy * 3. + vP.z));
  }
  o = vec4(col, 1);
}`);

const sheetProgram = program(`
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aA;    // centre, yaw
layout(location = 2) in vec4 aB;    // width, height, phase, layer
layout(location = 3) in vec4 aCrop; // photo crop in texture space
${SWAY}
uniform mat4 uVP;
out vec2 vUV; out vec3 vN, vP; flat out vec4 vCrop; flat out vec3 vMeta; flat out int vId;
void main() {
  vec3 c; float yaw; sway(aA, aB, c, yaw);
  vec3 r = vec3(cos(yaw), 0, -sin(yaw)), n = vec3(sin(yaw), 0, cos(yaw));
  vec2 q = aCorner * aB.xy;
  float curl = (fract(aB.z * 7.31) - .5) * .5; // the paper bows a little
  vP = c + r * q.x + vec3(0, q.y, 0) + n * curl * (q.x * q.x - aB.x * aB.x * .25);
  vN = n - r * 2. * curl * q.x;
  vUV = vec2(aCorner.x + .5, .5 - aCorner.y);
  vCrop = aCrop; vMeta = vec3(aB.w, aB.xy); vId = gl_InstanceID;
  gl_Position = uVP * vec4(vP, 1);
}`, `
${NOISE}
uniform mediump sampler2DArray uPhotos; uniform sampler2D uFull; uniform int uSel, uHover; uniform bool uFullOn; uniform vec3 uEye, uFocus;
in vec2 vUV; in vec3 vN, vP; flat in vec4 vCrop; flat in vec3 vMeta; flat in int vId;
out vec4 o;
void main() {
  // sheets between the eye and the selected one dissolve
  if (uSel >= 0 && vId != uSel) {
    vec3 seg = uFocus - uEye; float t = clamp(dot(vP - uEye, seg) / dot(seg, seg), 0., 1.);
    if (t < .95 && smoothstep(.75, .25, length(uEye + seg * t - vP)) > hash(gl_FragCoord.xy)) discard;
  }
  vec2 size = vMeta.yz, m = .035 / size, a = m, b = 1. - m * vec2(1, 2.2); // wider paper below
  vec2 cuv = mix(vCrop.xy, vCrop.zw, clamp((vUV - a) / (b - a), 0., 1.));
  vec3 photo = vId == uSel && uFullOn ? texture(uFull, cuv).rgb : texture(uPhotos, vec3(cuv, vMeta.x)).rgb;
  // pigment on cotton paper: lighter and softer, bleeding unevenly at its edges
  vec3 ink = 1. - (1. - mix(vec3(dot(photo, vec3(.3, .59, .11))), photo, .85)) * .85;
  if (vId == uSel) ink = mix(ink, photo, .7);
  vec2 d = (abs(vUV - (a + b) * .5) - (b - a) * .5) * size;
  float inked = smoothstep(.003, -.003, max(d.x, d.y) + (noise(vUV * size * 28.) - .5) * .008);
  vec3 paper = vec3(.95, .935, .9) * (.97 + .03 * noise(vUV * size * 160.));
  vec3 n = normalize(vN);
  bool front = dot(n, uEye - vP) > 0.; // only the front is printed; the back shows through faintly
  vec3 col = paper * mix(vec3(1), ink, inked * (front ? 1. : .12));
  float lit = (.74 + .2 * abs(dot(n, normalize(vec3(.35, .55, .75)))) + .08 * smoothstep(1.5, 4.6, vP.y)) * (vId == uHover ? 1.1 : 1.);
  o = vec4(col * lit, 1);
}`);

const threadProgram = program(`
layout(location = 1) in vec4 aA;
layout(location = 2) in vec4 aB;
${SWAY}
uniform mat4 uVP;
void main() { // two threads per sheet, from its top corners to the ceiling
  vec3 c; float yaw; sway(aA, aB, c, yaw);
  float side = (gl_VertexID < 2 ? -.4 : .4) * aB.x;
  vec3 p = (gl_VertexID & 1) == 0 ? c + vec3(cos(yaw), 0, -sin(yaw)) * side + vec3(0, aB.y * .5, 0)
                                  : vec3(aA.x + cos(aA.w) * side, ${RH.toFixed(1)}, aA.z - sin(aA.w) * side);
  gl_Position = uVP * vec4(p, 1);
}`, `
out vec4 o;
void main() { o = vec4(.85, .84, .8, 1) * .3; }`);

function program(vs, fs) {
  const p = gl.createProgram();
  for (const [type, src] of [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]]) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, `#version 300 es\nprecision highp float;\n${src}`);
    gl.compileShader(sh);
    gl.attachShader(p, sh);
  }
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getAttachedShaders(p).map((sh) => gl.getShaderInfoLog(sh)).join('\n'));
  const u = {};
  for (let i = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); i--;) { const { name } = gl.getActiveUniform(p, i); u[name] = gl.getUniformLocation(p, name); }
  return { p, u };
}
const buffer = (data) => { const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); return b; };
const attrib = (loc, n, stride, offset, divisor) => { gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, n, gl.FLOAT, false, stride, offset); gl.vertexAttribDivisor(loc, divisor); };

// ---------------------------------------------------------------------------
// Photographs and the cloud
// ---------------------------------------------------------------------------
const photos = (await (await fetch(`${ROOT}photos.json`)).json()).photos.map((p) => {
  const [, w, h] = p.width ? [0, p.width, p.height] : /\/(\d+)\/(\d+)\.jpg$/.exec(p.source_url) || [0, 3, 2]; // shape from the picsum URL
  return { ...p, aspect: w / h, thumb: `${ROOT}assets/thumbs/${p.id}.webp`, full: ROOT + p.src };
});
const P = photos.length;

// Every photograph hangs twice: sheet k (k < P) shows photo k whole, sheet P + k a closer
// study of it. Sheets fill an upturned cone, wider above, each facing roughly outward.
const rand = mulberry32(11), sheets = [];
for (let n = 0; n < P * 2; n++) {
  let best, score = -1;
  for (let k = 0; k < 30; k++) {
    const y = 1.55 + rand() * 3, R = 1 + 1.6 * ((y - 1.55) / 3) ** .6, a = rand() * Math.PI * 2, r = R * Math.sqrt(rand());
    const x = Math.cos(a) * r * 1.15, z = Math.sin(a) * r;
    let d = 9;
    for (const s of sheets) d = Math.min(d, Math.hypot(s.x - x, (s.y - y) * 1.4, s.z - z));
    if (d > score) { score = d; best = { x, y, z }; }
  }
  const w = .42 + rand() * .16, h = w * (rand() < .35 ? 1.3 : .74), photo = n % P;
  const ai = (w - .07) / (h - .112), ap = photos[photo].aspect, zoom = n < P ? 1 : 1.25 + rand() * .35;
  const cw = Math.min(1, ai / ap) / zoom, ch = Math.min(1, ap / ai) / zoom, u = rand() * (1 - cw), v = rand() * (1 - ch);
  sheets.push({ ...best, yaw: Math.atan2(best.x, best.z) + (rand() - .5) * 1.2, w, h, phase: rand() * 100, photo, crop: [u, v, u + cw, v + ch] });
}

const quad = (a, b, c, d, f) => [a, b, c, a, c, d].flatMap((v) => [...v, f]);
const roomVao = gl.createVertexArray();
gl.bindVertexArray(roomVao);
buffer(new Float32Array([
  ...quad([-RX, 0, -RZ], [RX, 0, -RZ], [RX, 0, RZ], [-RX, 0, RZ], 0),
  ...quad([-RX, RH, -RZ], [-RX, RH, RZ], [RX, RH, RZ], [RX, RH, -RZ], 1),
  ...quad([RX, 0, -RZ], [RX, RH, -RZ], [RX, RH, RZ], [RX, 0, RZ], 2),
  ...quad([-RX, 0, -RZ], [-RX, 0, RZ], [-RX, RH, RZ], [-RX, RH, -RZ], 3),
  ...quad([-RX, 0, RZ], [RX, 0, RZ], [RX, RH, RZ], [-RX, RH, RZ], 4),
  ...quad([-RX, 0, -RZ], [-RX, RH, -RZ], [RX, RH, -RZ], [RX, 0, -RZ], 5),
]));
attrib(0, 3, 16, 0, 0);
attrib(1, 1, 16, 12, 0);

const instances = buffer(new Float32Array(sheets.flatMap((s) => [s.x, s.y, s.z, s.yaw, s.w, s.h, s.phase, s.photo, ...s.crop])));
const sheetVao = gl.createVertexArray();
gl.bindVertexArray(sheetVao);
buffer(new Float32Array(Array.from({ length: 7 }, (_, i) => [i / 6 - .5, -.5, i / 6 - .5, .5]).flat()));
attrib(0, 2, 0, 0, 0);
gl.bindBuffer(gl.ARRAY_BUFFER, instances);
for (let i = 0; i < 3; i++) attrib(i + 1, 4, 48, i * 16, 1);
const threadVao = gl.createVertexArray();
gl.bindVertexArray(threadVao);
gl.bindBuffer(gl.ARRAY_BUFFER, instances);
attrib(1, 4, 48, 0, 1);
attrib(2, 4, 48, 16, 1);
gl.bindVertexArray(null);

// Texture units: 0 photographs (one stretched layer each), 1 the selected photo in full, 2 the mirror.
const texture = (unit, target) => { const t = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(target, t); gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, gl.LINEAR); return t; };
const fullTex = texture(1, gl.TEXTURE_2D);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
const reflTex = texture(2, gl.TEXTURE_2D);
const depth = gl.createRenderbuffer();
const fbo = gl.createFramebuffer();
const photoTex = texture(0, gl.TEXTURE_2D_ARRAY);
gl.texStorage3D(gl.TEXTURE_2D_ARRAY, Math.log2(LAYER) + 1, gl.RGBA8, LAYER, LAYER, P);
const scratch = Object.assign(document.createElement('canvas'), { width: LAYER, height: LAYER }).getContext('2d');
const loaded = Promise.all(photos.map(async (p, i) => {
  try {
    let img = await createImageBitmap(await (await fetch(p.thumb)).blob(), { resizeWidth: LAYER, resizeHeight: LAYER, resizeQuality: 'high' });
    if (img.width !== LAYER || img.height !== LAYER) { scratch.drawImage(img, 0, 0, LAYER, LAYER); img = scratch.canvas; }
    gl.activeTexture(gl.TEXTURE0);
    gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, LAYER, LAYER, 1, gl.RGBA, gl.UNSIGNED_BYTE, img);
  } catch (err) { console.warn('Missing photo', p.thumb, err); }
})).then(() => {
  gl.activeTexture(gl.TEXTURE0);
  gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  ready = true;
  wake();
});

for (const [prog, units] of [[roomProgram, { uRefl: 2 }], [sheetProgram, { uPhotos: 0, uFull: 1 }]]) {
  gl.useProgram(prog.p);
  for (const name in units) gl.uniform1i(prog.u[name], units[name]);
}
gl.enable(gl.DEPTH_TEST);
gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
gl.clearColor(.16, .16, .15, 1);

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  W = canvas.width = Math.round(innerWidth * dpr);
  H = canvas.height = Math.round(innerHeight * dpr);
  // the mirror is drawn at half resolution
  gl.activeTexture(gl.TEXTURE2);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, W >> 1, H >> 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.bindRenderbuffer(gl.RENDERBUFFER, depth);
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, W >> 1, H >> 1);
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, reflTex, 0);
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depth);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  wake();
}

// ---------------------------------------------------------------------------
// Camera and drawing
// ---------------------------------------------------------------------------
function updateView() {
  const cp = Math.cos(cam.pitch), z = [Math.sin(cam.yaw) * cp, Math.sin(cam.pitch), Math.cos(cam.yaw) * cp];
  const x = [Math.cos(cam.yaw), 0, -Math.sin(cam.yaw)], y = [z[1] * x[2] - z[2] * x[1], z[2] * x[0] - z[0] * x[2], z[0] * x[1] - z[1] * x[0]];
  const eye = [cam.x + z[0] * cam.dist, cam.y + z[1] * cam.dist, cam.z + z[2] * cam.dist];
  const dot = (a) => a[0] * eye[0] + a[1] * eye[1] + a[2] * eye[2];
  const f = 1 / Math.tan(FOV / 2), aspect = W / H, n = .05, far = 80;
  const v = [x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x), -dot(y), -dot(z), 1];
  const pr = [f / aspect, f, (far + n) / (n - far), -1, 2 * far * n / (n - far)];
  // projection × view, written out for this projection's few non-zero terms
  const vp = new Float32Array(16);
  for (let c = 0; c < 4; c++) {
    vp[c * 4] = pr[0] * v[c * 4]; vp[c * 4 + 1] = pr[1] * v[c * 4 + 1];
    vp[c * 4 + 2] = pr[2] * v[c * 4 + 2] + pr[4] * v[c * 4 + 3]; vp[c * 4 + 3] = -v[c * 4 + 2];
  }
  const mirror = vp.slice(); // reflected in the floor: y → −y
  for (let i = 4; i < 8; i++) mirror[i] = -mirror[i];
  Object.assign(view, { eye, x, y, z, aspect, vp, mirror, eyeM: [eye[0], -eye[1], eye[2]] });
}

function draw(vp, eye, mirror) {
  gl.useProgram(roomProgram.p);
  gl.uniformMatrix4fv(roomProgram.u.uVP, false, vp);
  gl.uniform3fv(roomProgram.u.uEye, eye);
  gl.uniform1i(roomProgram.u.uMirror, mirror);
  gl.uniform1f(roomProgram.u.uTime, time);
  gl.uniform2f(roomProgram.u.uRes, W, H);
  gl.bindVertexArray(roomVao);
  gl.drawArrays(gl.TRIANGLES, 0, 36);
  if (!ready) return;
  gl.useProgram(sheetProgram.p);
  gl.uniformMatrix4fv(sheetProgram.u.uVP, false, vp);
  gl.uniform3fv(sheetProgram.u.uEye, eye);
  gl.uniform1f(sheetProgram.u.uTime, time);
  gl.uniform1i(sheetProgram.u.uSel, sel);
  if (sel >= 0) gl.uniform3f(sheetProgram.u.uFocus, sheets[sel].x, sheets[sel].y, sheets[sel].z);
  gl.uniform1i(sheetProgram.u.uHover, hover);
  gl.uniform1i(sheetProgram.u.uFullOn, fullFor === sel);
  gl.bindVertexArray(sheetVao);
  gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 14, sheets.length);
  if (mirror) return;
  gl.useProgram(threadProgram.p);
  gl.uniformMatrix4fv(threadProgram.u.uVP, false, vp);
  gl.uniform1f(threadProgram.u.uTime, time);
  gl.bindVertexArray(threadVao);
  gl.enable(gl.BLEND); gl.depthMask(false);
  gl.drawArraysInstanced(gl.LINES, 0, 4, sheets.length);
  gl.disable(gl.BLEND); gl.depthMask(true);
}

function render() {
  updateView();
  // the mirror's view, drawn while its texture is unbound (a texture cannot be read while drawn into)
  gl.activeTexture(gl.TEXTURE2);
  gl.bindTexture(gl.TEXTURE_2D, null);
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.viewport(0, 0, W >> 1, H >> 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  draw(view.mirror, view.eyeM, 1);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.bindTexture(gl.TEXTURE_2D, reflTex);
  gl.viewport(0, 0, W, H);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  draw(view.vp, view.eye, 0);
}

// The camera eases toward its goal. Off screen a frame only redraws; on screen the sheets sway
// (unless reduced motion is preferred) and the loop stops once nothing moves.
function wake() { if (live && !raf) raf = requestAnimationFrame(frame); }
function frame(now) {
  raf = 0;
  const dt = last ? Math.min((now - last) / 1000, .05) : 1 / 60;
  let moving = false;
  if (running()) {
    last = now;
    if (!reduced) {
      time += dt;
      if (sel < 0 && now - idleSince > 8000) goal.yaw += dt * .04; // a slow walk around when left alone
    }
    const k = 1 - Math.exp(-dt * 4);
    for (const key in goal) {
      const d = goal[key] - cam[key];
      if (Math.abs(d) > 1e-4) { cam[key] += d * k; moving = true; } else cam[key] = goal[key];
    }
    moving ||= !reduced;
  }
  render();
  if (moving) wake(); else last = 0;
}

// ---------------------------------------------------------------------------
// Picking, selection and input
// ---------------------------------------------------------------------------
function pick(cx, cy) {
  const { eye, x, y, z, aspect } = view, t = Math.tan(FOV / 2);
  const nx = (cx / innerWidth * 2 - 1) * t * aspect, ny = (1 - cy / innerHeight * 2) * t;
  const d = [0, 1, 2].map((i) => x[i] * nx + y[i] * ny - z[i]);
  let best = -1, bestT = Infinity;
  sheets.forEach((s, i) => {
    const yaw = s.yaw + Math.sin(time * .35 + s.phase) * .1 + Math.sin(time * .17 + s.phase * 1.7) * .06;
    const c = [s.x + Math.sin(time * .23 + s.phase * 2.1) * .015, s.y, s.z + Math.cos(time * .19 + s.phase * 1.3) * .015];
    const sn = Math.sin(yaw), cs = Math.cos(yaw), den = d[0] * sn + d[2] * cs;
    if (Math.abs(den) < 1e-5) return;
    const hit = ((c[0] - eye[0]) * sn + (c[2] - eye[2]) * cs) / den;
    if (hit <= 0 || hit >= bestT) return;
    const hx = eye[0] + d[0] * hit - c[0], hy = eye[1] + d[1] * hit - c[1], hz = eye[2] + d[2] * hit - c[2];
    if (Math.abs(hx * cs - hz * sn) < s.w / 2 && Math.abs(hy) < s.h / 2) { best = i; bestT = hit; }
  });
  return best;
}

const caption = $('caption');
function select(i) {
  sel = i;
  idleSince = performance.now();
  if (i < 0) {
    Object.assign(goal, { ...HOME, yaw: goal.yaw });
    caption.hidden = true;
    canvas.focus({ preventScroll: true });
  } else {
    const s = sheets[i], p = photos[s.photo], t = Math.tan(FOV / 2);
    const turn = Math.atan2(Math.sin(s.yaw - cam.yaw), Math.cos(s.yaw - cam.yaw));
    Object.assign(goal, { x: s.x, y: s.y, z: s.z, yaw: cam.yaw + turn, pitch: .04, dist: Math.max(s.h / (1.1 * t), s.w / (1.2 * t * W / H)) });
    $('title').textContent = p.description;
    $('credit').textContent = p.photographer;
    $('source').href = p.source_page;
    caption.hidden = false;
    fetch(p.full).then((r) => r.blob()).then((b) => createImageBitmap(b)).then((img) => {
      if (sel !== i) return;
      gl.activeTexture(gl.TEXTURE1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      fullFor = i;
      wake();
    }, () => {});
  }
  wake();
}
const step = (dir) => select(sel < 0 ? 0 : (sheets[sel].photo + dir + P) % P);
$('prev').onclick = () => step(-1);
$('next').onclick = () => step(1);
$('close').onclick = () => select(-1);

const pointers = new Map();
let moved = 0, spread = 0;
const pinch = () => { const [a, b] = [...pointers.values()]; return Math.hypot(a.x - b.x, a.y - b.y) || 1; };
const touched = () => { idleSince = performance.now(); wake(); };
canvas.addEventListener('pointerdown', (e) => {
  canvas.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  moved = 0;
  if (pointers.size === 2) spread = pinch();
  touched();
});
canvas.addEventListener('pointermove', (e) => {
  const p = pointers.get(e.pointerId);
  if (!p) {
    if (e.pointerType !== 'mouse' || !ready) return;
    const i = pick(e.clientX, e.clientY);
    if (i !== hover) { hover = i; canvas.classList.toggle('is-pointer', i >= 0); wake(); }
    return;
  }
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  p.x = e.clientX; p.y = e.clientY; moved += Math.abs(dx) + Math.abs(dy);
  if (pointers.size === 1) {
    goal.yaw -= dx * .005;
    goal.pitch = Math.max(-.05, Math.min(1.1, goal.pitch + dy * .004));
  } else {
    const d = pinch();
    goal.dist = Math.max(1, Math.min(13, goal.dist * spread / d));
    spread = d;
  }
  touched();
});
const release = (e) => {
  pointers.delete(e.pointerId);
  if (e.type === 'pointerup' && !pointers.size && moved < 6 && ready) { const i = pick(e.clientX, e.clientY); if (i >= 0) select(i); }
};
canvas.addEventListener('pointerup', release);
canvas.addEventListener('pointercancel', release);
canvas.addEventListener('pointerleave', () => { if (hover >= 0) { hover = -1; wake(); } });
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  goal.dist = Math.max(1, Math.min(13, goal.dist * Math.exp(e.deltaY * (e.deltaMode ? .05 : .0015))));
  touched();
}, { passive: false });
addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); step(e.key === 'ArrowRight' ? 1 : -1); }
  else if (e.key === 'Escape' && sel >= 0) select(-1);
});
addEventListener('resize', resize);

function mulberry32(a) {
  return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---------------------------------------------------------------------------
live = true; // everything is in place: frames may run
resize();
await loaded;
if (parent !== window) {
  let sent = false;
  const done = () => { if (!sent) { sent = true; parent.postMessage({ type: 'platform:ready' }, '*'); } };
  requestAnimationFrame(() => requestAnimationFrame(done));
  setTimeout(done, 200); // frames may be held while the work is off screen
}
