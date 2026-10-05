import * as THREE from 'three';
import { loadCatalog, extractPalette } from './data.js';
import { CanopyScene } from './scene.js';

const $ = (sel) => document.querySelector(sel);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isPhone = () => window.innerWidth <= 760;

const state = {
  mode: 'whole', // 'whole' | 'story' | 'photo'
  story: null,
  photo: null,
  photos: [],
  stories: [],
};

let scene;
let readyResolve;
const ready = new Promise((r) => { readyResolve = r; });

// ---------------------------------------------------------------------------
async function init() {
  const canvas = $('#scene');
  let catalog;
  try {
    catalog = await loadCatalog('photos.json');
  } catch (err) {
    $('#loader-text').textContent = 'Could not load photos.json. Serve this folder over http (see report).';
    console.error(err);
    return;
  }
  state.photos = catalog.photos;
  state.stories = catalog.stories;
  $('#subtitle').textContent = `${state.photos.length} photographs in ${state.stories.length} stories, hung like crystals`;

  buildChips();
  buildIndex();

  try {
    scene = new CanopyScene(canvas, { reducedMotion });
  } catch (err) {
    console.warn('WebGL unavailable, showing the index instead.', err);
    $('#loader').classList.add('is-done');
    openIndex();
    $('#index-close').hidden = true;
    return;
  }
  scene.setPhotos(state.photos, state.stories);

  // opening view: a little further back, then drift in once photos are hung
  const whole = scene.wholeView(0.35);
  const start = whole.pos.clone().multiplyScalar(1.25);
  start.y = 2.2;
  scene.camera.position.copy(start);
  scene.controls.target.copy(whole.target);
  scene.camera.lookAt(whole.target);
  scene.start();

  bindPointer(canvas);
  bindUI();
  scene.on('frame', onFrame);
  scene.on('interact', () => {
    hideTooltipIfDragging();
    setTimeout(() => $('#hint').classList.add('is-hidden'), 4000);
  });
  window.addEventListener('resize', () => {
    applyInset();
  });

  await loadTextures();
  scene.recolorCarpet();
  $('#loader').classList.add('is-done');

  if (!applyHash()) scene.flyTo(scene.wholeView(0.35), 2.4);
  readyResolve();
}

function loadTextures() {
  const loader = new THREE.TextureLoader();
  let done = 0;
  const total = state.photos.length;
  const text = $('#loader-text');
  return new Promise((resolve) => {
    const finish = () => resolve();
    const timer = setTimeout(finish, 15000);
    state.photos.forEach((p) => {
      loader.load(
        p.thumb,
        (tex) => {
          try { p.palette = extractPalette(tex.image); } catch { p.palette = null; }
          scene.setPhotoTexture(p, tex);
          step();
        },
        undefined,
        () => { console.warn('Missing photo', p.thumb); step(); },
      );
    });
    function step() {
      done++;
      text.textContent = `Hanging photographs… ${done} / ${total}`;
      if (done >= total) { clearTimeout(timer); finish(); }
    }
  });
}

// ---------------------------------------------------------------------------
// UI construction
// ---------------------------------------------------------------------------
function buildChips() {
  const nav = $('#chips');
  nav.innerHTML = '';
  for (const s of state.stories) {
    const b = document.createElement('button');
    b.className = 'chip';
    b.type = 'button';
    b.style.setProperty('--c', s.color);
    b.dataset.story = s.id;
    b.setAttribute('aria-pressed', 'false');
    b.innerHTML = '<span class="dot" aria-hidden="true"></span>';
    b.setAttribute('aria-label', s.title);
    b.title = s.title;
    b.addEventListener('click', () => {
      if (state.story === s && state.mode === 'story') goWhole();
      else selectStory(s);
    });
    nav.appendChild(b);
  }
}

function buildIndex() {
  const list = $('#index-list');
  list.innerHTML = '';
  for (const s of state.stories) {
    const sec = document.createElement('section');
    sec.className = 'index-story';
    sec.innerHTML = `<h3 style="--c:${s.color}"><span class="dot"></span>${escapeHtml(s.title)} <span class="count">${s.photos.length} photos</span></h3><p>${escapeHtml(s.intro)}</p>`;
    const grid = document.createElement('div');
    grid.className = 'index-grid';
    for (const p of s.photos) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'index-item';
      b.innerHTML = `<img loading="lazy" src="${p.thumb}" alt=""><span>${escapeHtml(p.description)}</span>`;
      b.setAttribute('aria-label', `${p.description}, by ${p.photographer}`);
      b.addEventListener('click', () => {
        if (!scene) { window.open(p.full, '_blank', 'noopener'); return; } // no WebGL: just show the photo
        closeIndex();
        openPhoto(p);
      });
      grid.appendChild(b);
    }
    sec.appendChild(grid);
    list.appendChild(sec);
  }
}

function renderStoryCard(story) {
  const card = $('#story-card');
  if (!story || state.mode !== 'story') { card.hidden = true; return; }
  card.hidden = false;
  card.style.setProperty('--c', story.color);
  card.querySelector('.dot').style.setProperty('--c', story.color);
  $('#story-title').textContent = story.title;
  $('#story-intro').textContent = `${story.intro} ${story.photos.length} photographs.`;
  fillStrip($('#story-strip'), story);
}

function fillStrip(strip, story) {
  strip.innerHTML = '';
  strip.style.setProperty('--c', story.color);
  for (const p of story.photos) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'thumb';
    b.setAttribute('role', 'listitem');
    b.style.backgroundImage = `url("${p.thumb}")`;
    b.setAttribute('aria-label', p.description);
    b.title = p.description;
    if (p === state.photo) b.setAttribute('aria-current', 'true');
    b.addEventListener('click', () => openPhoto(p));
    b.addEventListener('mouseenter', () => scene.setHovered(p));
    b.addEventListener('mouseleave', () => scene.setHovered(null));
    strip.appendChild(b);
  }
}

function updateChips() {
  document.querySelectorAll('.chip').forEach((b) => {
    b.setAttribute('aria-pressed', String(!!state.story && b.dataset.story === state.story.id && state.mode !== 'whole'));
  });
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
function goWhole({ fly = true } = {}) {
  closeDetailPanel();
  state.mode = 'whole';
  state.story = null;
  state.photo = null;
  scene.setSelected(null);
  scene.setFocusStory(null);
  renderStoryCard(null);
  updateChips();
  applyInset();
  if (fly) scene.flyTo(scene.wholeView(), 1.6);
  setHash('');
}

function selectStory(story, { fly = true } = {}) {
  closeDetailPanel();
  state.mode = 'story';
  state.story = story;
  state.photo = null;
  scene.setSelected(null);
  scene.setFocusStory(story);
  renderStoryCard(story);
  updateChips();
  applyInset();
  if (fly) scene.flyTo(scene.storyView(story), 1.6);
  setHash(`story/${story.id}`);
}

function openPhoto(photo, { fly = true } = {}) {
  state.mode = 'photo';
  state.story = photo.story;
  state.photo = photo;
  scene.setSelected(photo);
  scene.setFocusStory(photo.story);
  scene.setHovered(null);
  hideTooltip();
  renderStoryCard(photo.story);
  updateChips();
  fillDetail(photo);
  document.body.classList.add('detail-open');
  $('#detail').setAttribute('aria-hidden', 'false');
  applyInset();
  if (fly) scene.flyTo(scene.photoView(photo), 1.5);
  setHash(`photo/${photo.id}`);
}

function closeDetailPanel() {
  document.body.classList.remove('detail-open');
  $('#detail').setAttribute('aria-hidden', 'true');
}

function stepBack() {
  if (!$('#index').hidden) { if (scene) closeIndex(); return; }
  if (state.mode === 'photo') selectStory(state.photo.story);
  else if (state.mode === 'story') goWhole();
}

function stepPhoto(dir) {
  if (!state.photo) return;
  const list = state.photo.story.photos;
  const i = (state.photo.indexInStory + dir + list.length) % list.length;
  openPhoto(list[i]);
}

function fillDetail(p) {
  const img = $('#d-img');
  img.src = p.full;
  img.alt = p.description;
  img.style.aspectRatio = `${1 / p.aspect}`;
  $('#detail .d-story .dot').style.setProperty('--c', p.story.color);
  $('#d-story').textContent = p.story.title;
  $('#d-count').textContent = `${p.indexInStory + 1} / ${p.story.photos.length}`;
  $('#d-title').textContent = p.description;
  $('#d-meta').textContent = `Photograph by ${p.photographer}`;
  const a = $('#d-source');
  if (p.source_page) { a.href = p.source_page; a.parentElement.hidden = false; } else a.parentElement.hidden = true;
  $('#d-more-story').textContent = p.story.title;
  fillStrip($('#d-strip'), p.story);
  const many = p.story.photos.length > 1;
  $('#d-prev').disabled = !many;
  $('#d-next').disabled = !many;
}

function applyInset() {
  if (!scene) return;
  if (state.mode !== 'photo') scene.setInset(0, 0);
  else if (isPhone()) scene.setInset(0, Math.round($('#detail').offsetHeight || window.innerHeight * 0.4));
  else scene.setInset(400, 0);
}

// ---------------------------------------------------------------------------
// Index dialog
// ---------------------------------------------------------------------------
let lastFocus = null;
function openIndex() {
  lastFocus = document.activeElement;
  $('#index').hidden = false;
  $('#index-close').focus();
}
function closeIndex() {
  $('#index').hidden = true;
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

// ---------------------------------------------------------------------------
// Pointer: hover tooltip and click-to-open
// ---------------------------------------------------------------------------
const pointer = { x: 0, y: 0, inside: false, down: null, dragging: false, type: 'mouse', dirty: false };

function bindPointer(canvas) {
  canvas.addEventListener('pointermove', (e) => {
    pointer.x = e.clientX; pointer.y = e.clientY; pointer.inside = true; pointer.type = e.pointerType;
    pointer.dirty = true;
    if (pointer.down && Math.hypot(e.clientX - pointer.down.x, e.clientY - pointer.down.y) > 6) {
      pointer.dragging = true;
      canvas.classList.add('is-grabbing');
    }
  });
  canvas.addEventListener('pointerleave', () => { pointer.inside = false; scene.setHovered(null); hideTooltip(); });
  canvas.addEventListener('pointerdown', (e) => {
    pointer.down = { x: e.clientX, y: e.clientY, t: performance.now() };
    pointer.dragging = false;
    pointer.type = e.pointerType;
  });
  window.addEventListener('pointerup', (e) => {
    const d = pointer.down;
    pointer.down = null;
    canvas.classList.remove('is-grabbing');
    if (!d || e.target !== canvas) return;
    const moved = Math.hypot(e.clientX - d.x, e.clientY - d.y);
    if (moved > 6 || performance.now() - d.t > 700) return;
    const hit = scene.pick(e.clientX, e.clientY);
    if (hit) openPhoto(hit.photo);
  });
}

let hoverCheckFrame = 0;
function onFrame() {
  // hover: re-pick when the pointer moved, and every few frames while things drift
  hoverCheckFrame++;
  if (pointer.inside && pointer.type === 'mouse' && !pointer.dragging && (pointer.dirty || hoverCheckFrame % 6 === 0)) {
    pointer.dirty = false;
    const hit = scene.pick(pointer.x, pointer.y);
    const photo = hit ? hit.photo : null;
    scene.setHovered(photo);
    $('#scene').classList.toggle('is-pointer', !!photo);
    if (photo && photo !== state.photo) showTooltip(photo, hit.kind);
    else hideTooltip();
  }
  // idle drift around the canopy when nobody is touching it
  if (!reducedMotion && state.mode === 'whole' && !scene.flight && autoRotateAllowed) {
    scene.controls.autoRotate = performance.now() - scene.lastInteraction > 7000;
  } else {
    scene.controls.autoRotate = false;
  }
}

let autoRotateAllowed = true;

function showTooltip(photo, kind) {
  const tt = $('#tooltip');
  tt.hidden = false;
  tt.querySelector('.dot').style.setProperty('--c', photo.story.color);
  tt.querySelector('.tt-story-name').textContent = photo.story.title;
  tt.querySelector('.tt-title').textContent = photo.description;
  tt.querySelector('.tt-meta').textContent = kind === 'umbrella'
    ? `Its umbrella in the canopy · click to see the photo`
    : `${photo.photographer} · click to open`;
  const w = tt.offsetWidth, h = tt.offsetHeight;
  let x = pointer.x + 16, y = pointer.y + 18;
  if (x + w > window.innerWidth - 8) x = pointer.x - w - 16;
  if (y + h > window.innerHeight - 8) y = pointer.y - h - 18;
  tt.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
}
function hideTooltip() { $('#tooltip').hidden = true; }
function hideTooltipIfDragging() { if (pointer.dragging) hideTooltip(); }

// ---------------------------------------------------------------------------
function bindUI() {
  $('#btn-whole').addEventListener('click', () => goWhole());
  $('#btn-index').addEventListener('click', openIndex);
  $('#index-close').addEventListener('click', closeIndex);
  $('#index').addEventListener('click', (e) => { if (e.target.id === 'index') closeIndex(); });
  $('#d-close').addEventListener('click', () => stepBack());
  $('#d-prev').addEventListener('click', () => stepPhoto(-1));
  $('#d-next').addEventListener('click', () => stepPhoto(1));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { stepBack(); return; }
    if (!$('#index').hidden) return;
    if (state.mode === 'photo' && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
      e.preventDefault();
      stepPhoto(e.key === 'ArrowRight' ? 1 : -1);
    }
  });
  window.addEventListener('hashchange', () => applyHash());
}

// ---------------------------------------------------------------------------
// Deep links: #story/<id> and #photo/<id>
// ---------------------------------------------------------------------------
let settingHash = false;
function setHash(h) {
  settingHash = true;
  const url = h ? `#${h}` : location.pathname + location.search;
  history.replaceState(null, '', url);
  settingHash = false;
}
function applyHash() {
  if (settingHash) return false;
  const m = /^#(story|photo)\/(.+)$/.exec(location.hash);
  if (!m) return false;
  if (m[1] === 'story') {
    const s = state.stories.find((x) => x.id === m[2]);
    if (s) { selectStory(s); return true; }
  } else {
    const p = state.photos.find((x) => x.id === m[2]);
    if (p) { openPhoto(p); return true; }
  }
  return false;
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ---------------------------------------------------------------------------
// Small hook for automated checks (screenshots, fps).
// ---------------------------------------------------------------------------
window.canopy = {
  ready,
  get scene() { return scene; },
  state,
  whole: () => goWhole(),
  story: (id) => selectStory(state.stories.find((s) => s.id === id)),
  photo: (id) => openPhoto(state.photos.find((p) => p.id === id)),
  screenPos: (id) => scene.screenPosition(state.photos.find((p) => p.id === id)),
  setAutoRotate: (on) => { autoRotateAllowed = on; },
  isFlying: () => !!scene.flight,
  stats: () => scene.stats(),
  fps: (ms = 3000) => new Promise((resolve) => {
    let n = 0; const t0 = performance.now();
    const tick = () => { n++; if (performance.now() - t0 < ms) requestAnimationFrame(tick); else resolve(Math.round((n / (performance.now() - t0)) * 10000) / 10); };
    requestAnimationFrame(tick);
  }),
};

init();
