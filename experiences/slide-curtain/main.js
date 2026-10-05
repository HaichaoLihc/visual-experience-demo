// Slide Curtain: photographs as 35 mm slides, hung in chains from a rod and lit from behind.
// One draw for the room and one instanced draw for every slide. The chains are simulated
// only while something moves; a still curtain draws nothing.
const ROOT = '../stream-implement-3d/'; // shared demo photographs and their credits
const LAYER = 256; // texture size per photograph; the light box shows the full file
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (id) => document.getElementById(id);
const canvas = $('scene');
const gl = canvas.getContext('webgl2', { alpha: false, antialias: false });
if (!gl) { document.body.append('This work needs WebGL 2.'); throw new Error('WebGL 2 unavailable'); }

let W, H, s, cols, rows, N, X, Y, PX, PY, TW, TV, dyn, photoOf;
let raf = 0, last = 0, acc = 0, still = 0, hover = -1, focus = -1, down = null, prev = null;

// The platform feed tells works when they are off screen; standalone, the work simply runs.
let hostActive = true;
const running = () => hostActive && !document.hidden;
addEventListener('message', (e) => {
  if (e.source === parent && e.data?.type === 'platform:visibility') { hostActive = !!e.data.active; wake(); }
});
document.addEventListener('visibilitychange', wake);
if (parent !== window) parent.postMessage({ type: 'platform:hello' }, '*');

// ---------------------------------------------------------------------------
// Shaders. Coordinates are device pixels with the origin at the top left.
// ---------------------------------------------------------------------------
const LIGHT = `
uniform vec4 uWin; uniform float uCell;
float box(vec2 p, vec4 r) { vec2 d = abs(p - (r.xy + r.zw) * .5) - (r.zw - r.xy) * .5; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }
float light(vec2 p) { vec2 q = (p - (uWin.xy + uWin.zw) * .5) / ((uWin.zw - uWin.xy) * .5); return (.72 + .5 * exp(-dot(q, q) * 1.4)) * smoothstep(uCell * .5, -uCell * .3, box(p, uWin)); }`;

const room = program(`
void main() { gl_Position = vec4(vec2(gl_VertexID & 1, gl_VertexID >> 1) * 4. - 1., 0, 1); }`, `
${LIGHT}
uniform vec2 uRes; uniform vec3 uRod; uniform float uCols;
out vec4 o;
void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y), c = (uWin.xy + uWin.zw) * .5;
  float s = uCell, dw = box(p, uWin), out_ = max(dw, 0.);
  // the wall, lit only by what escapes around the curtain
  vec3 col = vec3(.42, .39, .35) * (.012 + .55 * exp(-out_ / (s * 1.1)) + .1 * exp(-out_ / (s * 6.)));
  col *= 1. + .3 * smoothstep(1., -1., box(p, uWin + vec4(-.4, -.4, .4, .4) * s));
  // the window behind, seen through the gaps
  float l = min(light(p) * 1.25, 1.) * (1. - .25 * smoothstep(s * .14, s * .1, abs(p.x - c.x)));
  col = mix(col, vec3(1, .96, .88) * l, smoothstep(1., -1., dw));
  // rod, finials and a ring for every chain
  float rod = max(abs(p.y - uRod.y) - s * .065, abs(p.x - c.x) - uRod.z);
  float fin = length(vec2(abs(p.x - c.x) - uRod.z, p.y - uRod.y)) - s * .15;
  float j = clamp(floor((p.x - uRod.x) / s), 0., uCols - 1.);
  float ring = abs(length(p - vec2(uRod.x + (j + .5) * s, uRod.y + s * .09)) - s * .14) - s * .024;
  vec3 metal = vec3(.06, .055, .05) + .16 * smoothstep(s * .025, 0., abs(p.y - uRod.y + s * .035));
  col = mix(col, metal, smoothstep(1., -1., min(min(rod, fin), ring)));
  o = vec4(col, 1);
}`);

const slide = program(`
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aDyn;  // centre, swing, twist
layout(location = 2) in vec4 aCrop; // photo crop in texture space
layout(location = 3) in vec2 aMeta; // layer, portrait
uniform vec2 uRes; uniform float uSize;
out vec2 vLocal, vWorld; flat out vec4 vCrop; flat out vec3 vMeta; flat out int vId;
void main() {
  float c = cos(aDyn.z), s = sin(aDyn.z);
  vec2 v = aCorner * vec2(cos(aDyn.w), 1) * uSize;
  vWorld = aDyn.xy + vec2(v.x * c + v.y * s, v.y * c - v.x * s);
  vLocal = aCorner; vCrop = aCrop; vMeta = vec3(aMeta, aDyn.w); vId = gl_InstanceID;
  gl_Position = vec4(vWorld / uRes * vec2(2, -2) + vec2(-1, 1), 0, 1);
}`, `
${LIGHT}
uniform mediump sampler2DArray uPhotos; uniform int uHover, uFocus; uniform float uAA;
in vec2 vLocal, vWorld; flat in vec4 vCrop; flat in vec3 vMeta; flat in int vId;
out vec4 o;
float rbox(vec2 p, vec2 h, float r) { vec2 d = abs(p) - h + r; return length(max(d, 0.)) + min(max(d.x, d.y), 0.) - r; }
void main() {
  vec2 p = vLocal;
  float face = cos(vMeta.z), aa = uAA / max(face, .25), lamp = light(vWorld);
  float mount = rbox(p, vec2(.5), .07), ring = abs(length(p - vec2(0, -.555)) - .045) - .013;
  float a = clamp(.5 - min(mount, ring) / aa, 0., 1.);
  if (a < .004) discard;
  // the film, lit from behind and dimmer as the slide turns away
  vec2 h = vMeta.y > .5 ? vec2(.27, .38) : vec2(.38, .27), uv = p / (2. * h) + .5;
  vec3 film = texture(uPhotos, vec3(mix(vCrop.xy, vCrop.zw, uv), vMeta.x)).rgb;
  film *= lamp * mix(.5, 1.3, face) * (vId == uHover ? 1.25 : 1.) * (1. - .3 * pow(length(uv - .5) * 1.25, 3.));
  // the card mount, its edge catching the light behind it
  vec3 col = vec3(.085, .078, .07) * (1.15 - p.y * .4) + vec3(.18, .16, .15) * smoothstep(-.04, 0., mount) * lamp;
  col = mix(film, col, clamp(.5 + rbox(p, h, .025) / aa, 0., 1.));
  if (ring < mount) col = vec3(.5, .48, .44) * (.4 + .6 * lamp);
  if (vId == uFocus) col = mix(col, vec3(1, .9, .7), clamp(1. - abs(mount + .03) / (aa * 2.), 0., 1.));
  o = vec4(col * a, a);
}`);

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

const vao = gl.createVertexArray();
gl.bindVertexArray(vao);
const buffer = (data, usage = gl.STATIC_DRAW) => { const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, usage); return b; };
const attrib = (loc, n, stride = 0, offset = 0, divisor = 1) => { gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, n, gl.FLOAT, false, stride, offset); gl.vertexAttribDivisor(loc, divisor); };
buffer(new Float32Array([-.5, -.62, .5, -.62, -.5, .5, .5, .5])); // the slide's own ring sits above it
attrib(0, 2, 0, 0, 0);
const dynBuf = buffer(1, gl.DYNAMIC_DRAW);
attrib(1, 4);
const cropBuf = buffer(1);
attrib(2, 4, 24, 0);
attrib(3, 2, 24, 16);
gl.bindVertexArray(null);
gl.enable(gl.BLEND);
gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

// ---------------------------------------------------------------------------
// Photographs: one texture layer each, stretched square; crops restore their shape.
// ---------------------------------------------------------------------------
const photos = (await (await fetch(`${ROOT}photos.json`)).json()).photos.map((p) => {
  const [, w, h] = p.width ? [0, p.width, p.height] : /\/(\d+)\/(\d+)\.jpg$/.exec(p.source_url) || [0, 3, 2]; // shape from the picsum URL
  return { ...p, aspect: w / h, thumb: `${ROOT}assets/thumbs/${p.id}.webp`, full: ROOT + p.src };
});
const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D_ARRAY, tex);
gl.texStorage3D(gl.TEXTURE_2D_ARRAY, Math.log2(LAYER) + 1, gl.RGBA8, LAYER, LAYER, photos.length);
gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
const scratch = Object.assign(document.createElement('canvas'), { width: LAYER, height: LAYER }).getContext('2d');
const loaded = Promise.all(photos.map(async (p, i) => {
  try {
    // decoded and scaled off the main thread where the browser supports it
    let img = await createImageBitmap(await (await fetch(p.thumb)).blob(), { resizeWidth: LAYER, resizeHeight: LAYER, resizeQuality: 'high' });
    if (img.width !== LAYER || img.height !== LAYER) { scratch.drawImage(img, 0, 0, LAYER, LAYER); img = scratch.canvas; }
    gl.bindTexture(gl.TEXTURE_2D_ARRAY, tex);
    gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, LAYER, LAYER, 1, gl.RGBA, gl.UNSIGNED_BYTE, img);
    wake();
  } catch (err) { console.warn('Missing photo', p.thumb, err); }
})).then(() => {
  gl.bindTexture(gl.TEXTURE_2D_ARRAY, tex);
  gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
});

// ---------------------------------------------------------------------------
// Layout and chains. Slide i is column i / rows, row i % rows, and hangs between
// chain points k and k + 1 of its column; point 0 of every column is fixed.
// ---------------------------------------------------------------------------
function layout() {
  const ratio = Math.min(devicePixelRatio || 1, 2);
  W = canvas.width = Math.round(innerWidth * ratio);
  H = canvas.height = Math.round(innerHeight * ratio);
  s = Math.min(Math.max(Math.min(W, H) / 13, 28 * ratio), 62 * ratio);
  cols = Math.max(4, Math.min(24, Math.floor(W * .8 / s)));
  rows = Math.max(4, Math.floor(H * .86 / s - .6));
  N = cols * rows;
  const x0 = (W - cols * s) / 2, rodY = (H - (rows + .6) * s) / 2 + .2 * s, R1 = rows + 1;
  X = new Float32Array(cols * R1); Y = new Float32Array(cols * R1);
  for (let j = 0; j < cols; j++) for (let k = 0; k < R1; k++) { X[j * R1 + k] = x0 + (j + .5) * s; Y[j * R1 + k] = rodY + (.26 + k) * s; }
  PX = X.slice(); PY = Y.slice();
  TW = new Float32Array(N); TV = new Float32Array(N); dyn = new Float32Array(N * 4);

  // Neighbouring slides rarely repeat a photograph. Most are landscape frames of the
  // whole picture; some are portrait or closer crops of it.
  const rand = mulberry32(7), crops = new Float32Array(N * 6);
  photoOf = new Int16Array(N);
  for (let i = 0; i < N; i++) {
    let p, tries = 0;
    do p = rand() * photos.length | 0; while (tries++ < 9 && ((i % rows && p === photoOf[i - 1]) || (i >= rows && p === photoOf[i - rows])));
    photoOf[i] = p;
    const portrait = rand() < .16, frame = portrait ? 2 / 3 : 1.5, zoom = rand() < .5 ? 1 : 1 + rand() * .7;
    const cw = Math.min(1, frame / photos[p].aspect) / zoom, ch = Math.min(1, photos[p].aspect / frame) / zoom;
    const u = rand() * (1 - cw), v = rand() * (1 - ch);
    crops.set([u, v, u + cw, v + ch, p, portrait], i * 6);
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, cropBuf); gl.bufferData(gl.ARRAY_BUFFER, crops, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, dynBuf); gl.bufferData(gl.ARRAY_BUFFER, dyn.byteLength, gl.DYNAMIC_DRAW);

  const win = [x0 - .12 * s, rodY + .12 * s, x0 + cols * s + .12 * s, rodY + (rows + .45) * s];
  for (const { p, u } of [room, slide]) {
    gl.useProgram(p);
    gl.uniform2f(u.uRes, W, H); gl.uniform4fv(u.uWin, win); gl.uniform1f(u.uCell, s);
  }
  gl.useProgram(room.p);
  gl.uniform3f(room.u.uRod, x0, rodY, cols * s / 2 + .55 * s); gl.uniform1f(room.u.uCols, cols);
  gl.useProgram(slide.p);
  gl.uniform1f(slide.u.uSize, s * .9); gl.uniform1f(slide.u.uAA, 1.2 / (s * .9));
  gl.viewport(0, 0, W, H);
  hover = focus = -1;
}

function simulate() {
  const R1 = rows + 1, g = s * .016;
  for (let j = 0; j < cols; j++) for (let i = j * R1 + 1; i < (j + 1) * R1; i++) {
    const vx = clamp((X[i] - PX[i]) * .985, s * .4), vy = clamp((Y[i] - PY[i]) * .985, s * .4);
    PX[i] = X[i]; PY[i] = Y[i]; X[i] += vx; Y[i] += vy + g;
  }
  // links are rigid: relax them, sweeping down and up the chains in turn
  for (let it = 0; it < 12; it++) for (let j = 0; j < cols; j++) for (let n = 1; n < R1; n++) {
    const k = it & 1 ? R1 - n : n;
    link(j * R1 + k - 1, k === 1 ? 1 : .5);
  }
  let energy = 0;
  for (let i = 0; i < N; i++) { TV[i] = TV[i] * .95 - TW[i] * .012; TW[i] += TV[i]; energy = Math.max(energy, Math.abs(TV[i]) * s); }
  for (let i = 0; i < X.length; i++) energy = Math.max(energy, Math.abs(X[i] - PX[i]) + Math.abs(Y[i] - PY[i]));
  return energy;
}
function link(a, share) {
  const b = a + 1, dx = X[b] - X[a], dy = Y[b] - Y[a], e = 1 - s / (Math.hypot(dx, dy) || 1);
  X[b] -= dx * e * share; Y[b] -= dy * e * share;
  if (share < 1) { X[a] += dx * e * share; Y[a] += dy * e * share; }
}

// A hand brushing through: slides near the pointer take on some of its motion.
function brush(x, y, vx, vy) {
  const r = s * .9, R1 = rows + 1;
  vx = clamp(vx, s * .5); vy = clamp(vy, s * .5);
  for (let i = 0; i < N; i++) {
    const b = ((i / rows) | 0) * R1 + i % rows + 1, d = Math.hypot(x - (X[b] + X[b - 1]) / 2, y - (Y[b] + Y[b - 1]) / 2);
    if (d > r) continue;
    const f = 1 - d / r;
    X[b] += vx * f * .5; Y[b] += vy * f * .15; TV[i] += vx / s * f * .04;
  }
}

function draw() {
  const R1 = rows + 1;
  for (let i = 0; i < N; i++) {
    const a = ((i / rows) | 0) * R1 + i % rows, b = a + 1, o = i * 4;
    dyn[o] = (X[a] + X[b]) / 2; dyn[o + 1] = (Y[a] + Y[b]) / 2;
    dyn[o + 2] = Math.atan2(X[b] - X[a], Y[b] - Y[a]); dyn[o + 3] = TW[i];
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, dynBuf);
  gl.bufferSubData(gl.ARRAY_BUFFER, 0, dyn);
  gl.useProgram(room.p);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  gl.useProgram(slide.p);
  gl.uniform1i(slide.u.uHover, hover); gl.uniform1i(slide.u.uFocus, focus);
  gl.bindVertexArray(vao);
  gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, N);
  gl.bindVertexArray(null);
}

// Off screen a frame only redraws (for arriving photos); on screen it also simulates
// in fixed 60 Hz steps until the curtain has been still for a moment.
function wake() { if (!raf && X) raf = requestAnimationFrame(frame); }
function frame(now) {
  raf = 0;
  if (running()) {
    acc += last ? Math.min(now - last, 50) : 16.7;
    last = now;
    for (; acc >= 16.7; acc -= 16.7) still = simulate() < .05 ? still + 1 : 0;
    if (still < 20) wake(); else last = acc = 0;
  } else last = acc = 0;
  draw();
}

// ---------------------------------------------------------------------------
// Pointer and keyboard
// ---------------------------------------------------------------------------
const dpr = () => W / innerWidth;
function pick(x, y) {
  const size = s * .9;
  for (let i = N; i--;) {
    const o = i * 4, dx = x - dyn[o], dy = y - dyn[o + 1];
    if (dx * dx + dy * dy > s * s) continue;
    const c = Math.cos(dyn[o + 2]), sn = Math.sin(dyn[o + 2]);
    if (Math.abs((dx * c - dy * sn) / (size * Math.max(Math.cos(dyn[o + 3]), .2))) < .5 && Math.abs((dx * sn + dy * c) / size) < .5) return i;
  }
  return -1;
}
canvas.addEventListener('pointermove', (e) => {
  const x = e.clientX * dpr(), y = e.clientY * dpr();
  if (prev && !reduced) { brush(x, y, x - prev.x, y - prev.y); still = 0; }
  prev = { x, y };
  hover = e.pointerType === 'mouse' ? pick(x, y) : -1;
  canvas.classList.toggle('is-pointer', hover >= 0);
  wake();
});
canvas.addEventListener('pointerleave', () => { prev = null; hover = -1; wake(); });
canvas.addEventListener('pointerdown', (e) => {
  down = { x: e.clientX, y: e.clientY, t: e.timeStamp };
  prev = { x: e.clientX * dpr(), y: e.clientY * dpr() };
});
canvas.addEventListener('pointerup', (e) => {
  if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 8 || e.timeStamp - down.t > 600) return;
  const i = pick(e.clientX * dpr(), e.clientY * dpr());
  if (i >= 0) open(i);
});
canvas.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && focus >= 0) { e.preventDefault(); open(focus); return; }
  const move = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[e.key];
  if (!move) return;
  e.preventDefault();
  const j = focus < 0 ? cols >> 1 : Math.max(0, Math.min(cols - 1, ((focus / rows) | 0) + move[0]));
  const k = focus < 0 ? rows >> 1 : Math.max(0, Math.min(rows - 1, focus % rows + move[1]));
  focus = j * rows + k;
  if (!reduced) TV[focus] += .08;
  still = 0;
  $('live').textContent = photos[photoOf[focus]].description;
  wake();
});
canvas.addEventListener('blur', () => { focus = -1; wake(); });
addEventListener('resize', () => { layout(); wake(); });

// ---------------------------------------------------------------------------
// Light box
// ---------------------------------------------------------------------------
const box = $('box'), img = $('box-img');
let shown = 0;
function show(k) {
  const want = shown = (k + photos.length) % photos.length, p = photos[want];
  img.style.setProperty('--a', p.aspect);
  img.src = p.thumb; img.alt = p.description;
  $('box-title').textContent = p.description;
  $('box-credit').textContent = p.photographer;
  $('box-source').href = p.source_page;
  const full = new Image();
  full.src = p.full;
  full.decode().then(() => { if (shown === want) img.src = full.src; }, () => {});
}
function open(i) {
  const o = i * 4;
  box.style.setProperty('--from', `translate(${dyn[o] / dpr() - innerWidth / 2}px, ${dyn[o + 1] / dpr() - innerHeight / 2}px) scale(.08)`);
  show(photoOf[i]);
  box.showModal();
}
$('box-close').onclick = () => box.close();
$('box-prev').onclick = () => show(shown - 1);
$('box-next').onclick = () => show(shown + 1);
box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
box.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') show(shown + (e.key === 'ArrowRight' ? 1 : -1)); });

function clamp(v, lim) { return Math.max(-lim, Math.min(lim, v)); }
function mulberry32(a) {
  return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---------------------------------------------------------------------------
layout();
if (!reduced) {
  // the curtain has just been let go: a gentle sway that settles
  for (let i = 0; i < X.length; i++) PX[i] = X[i] += Math.sin(((i / (rows + 1)) | 0) * .55 + 1) * (i % (rows + 1)) * s * .03;
}
wake();
await loaded;
wake();
if (parent !== window) {
  let sent = false;
  const ready = () => { if (!sent) { sent = true; parent.postMessage({ type: 'platform:ready' }, '*'); } };
  requestAnimationFrame(() => requestAnimationFrame(ready));
  setTimeout(ready, 200); // frames may be held while the work is off screen
}
