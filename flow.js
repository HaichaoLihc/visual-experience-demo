const stage = document.querySelector('.flow-stage');
const feed = document.querySelector('.flow-page');
const cards = new Map();
const count = experienceCatalog.length;
const wrap = value => (value % count + count) % count;
const requested = new URLSearchParams(location.search).get('experience');
let index = Math.max(0, experienceCatalog.findIndex(work => work.id === requested));
let moving = false;
let drag = null;
let wheelAmount = 0;
let wheelTime = 0;
let wheelBlockedUntil = 0;
let mountToken = 0;
let stageHeight = stage.clientHeight;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
// Works are stacked vertically; each sits one stage height (plus a gap) from the next.
const distance = () => stageHeight + 16;
const at = y => `translate3d(0, ${y}px, 0)`;

function makeCard(i, offset) {
  const work = experienceCatalog[i];
  const card = document.createElement('article');
  card.className = 'flow-card';
  card.dataset.experience = work.id;
  card.setAttribute('aria-label', work.title);
  const iframe = document.createElement('iframe');
  iframe.className = 'experience-app';
  iframe.title = work.title;
  iframe.allowFullscreen = true;
  iframe.src = work.url;
  // Frames stay alive through a slide. No platform overlay covers the app.
  card.append(iframe);
  card.settled = new Promise(resolve => {
    card.markReady = resolve;
    // Works that never report ready count as settled shortly after loading.
    iframe.addEventListener('load', () => setTimeout(resolve, 1200), { once: true });
    setTimeout(resolve, 10000);
  });
  iframe.addEventListener('load', () => {
    watchInteraction(iframe);
    // A work loading off screen finishes its first frames, then freezes.
    card.settled.then(() => { if (!card.active) hold(iframe)?.freeze(); });
  });
  place(card, offset);
  stage.append(card);
  cards.set(i, card);
  return card;
}

function place(card, offset) {
  card.dataset.offset = offset;
  card.style.transform = at(offset * distance());
  card.inert = offset !== 0;
  card.querySelector('iframe').inert = offset !== 0;
  card.setAttribute('aria-hidden', String(offset !== 0));
  setActive(card, offset === 0);
}

// Off-screen works are told they are inactive, and frozen in case they don't listen.
function setActive(card, active) {
  card.active = active;
  const iframe = card.querySelector('iframe');
  iframe.contentWindow?.postMessage({ type: 'platform:visibility', active }, '*');
  if (active) hold(iframe)?.thaw();
  else if (iframe.contentDocument?.readyState === 'complete') hold(iframe)?.freeze();
}

// Holds a same-origin work's animation frames, Web Animations and media while it is off screen,
// including any frames nested inside it. Cross-origin works are left to the browser.
function hold(iframe) {
  let win;
  try {
    win = iframe.contentWindow;
    if (!win?.document || win.location.href === 'about:blank') return null;
  } catch {
    return null;
  }
  if (win.platformHold) return win.platformHold;
  const nativeRequest = win.requestAnimationFrame.bind(win);
  const nativeCancel = win.cancelAnimationFrame.bind(win);
  const waiting = new Map();
  const paused = new Set();
  let frozen = false;
  let nextId = -1;
  win.requestAnimationFrame = callback => {
    if (!frozen) return nativeRequest(callback);
    waiting.set(nextId, callback);
    return nextId--;
  };
  win.cancelAnimationFrame = id => (id < 0 ? waiting.delete(id) : nativeCancel(id));
  const nested = () => [...win.document.querySelectorAll('iframe')].map(hold).filter(Boolean);
  win.platformHold = {
    freeze() {
      if (frozen) return;
      frozen = true;
      for (const animation of win.document.getAnimations()) {
        if (animation.playState === 'running') { animation.pause(); paused.add(animation); }
      }
      for (const media of win.document.querySelectorAll('video, audio')) {
        if (!media.paused) { media.pause(); paused.add(media); }
      }
      nested().forEach(child => child.freeze());
    },
    thaw() {
      if (!frozen) return;
      frozen = false;
      paused.forEach(item => item.play()?.catch?.(() => {}));
      paused.clear();
      nested().forEach(child => child.thaw());
      const callbacks = [...waiting.values()];
      waiting.clear();
      if (callbacks.length) nativeRequest(time => callbacks.forEach(callback => callback(time)));
    },
  };
  return win.platformHold;
}

// Neighbours wait to load until the visitor has paused interacting with the selected work.
let lastInteraction = 0;
function watchInteraction(iframe) {
  try {
    for (const type of ['pointerdown', 'pointermove', 'wheel', 'keydown', 'touchmove']) {
      iframe.contentWindow.addEventListener(type, () => { lastInteraction = performance.now(); }, { capture: true, passive: true });
    }
  } catch {}
}

// Removed works give their GPU memory back straight away instead of at garbage collection.
function releaseGraphics(iframe) {
  try {
    for (const canvas of iframe.contentDocument.querySelectorAll('canvas')) {
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      gl?.getExtension('WEBGL_lose_context')?.loseContext();
    }
  } catch {}
}

addEventListener('message', event => {
  const card = [...cards.values()].find(item => item.querySelector('iframe').contentWindow === event.source);
  if (!card) return;
  if (event.data?.type === 'platform:hello') setActive(card, card.active);
  if (event.data?.type === 'platform:ready') card.markReady();
});

function removeCard(i) {
  const card = cards.get(i);
  releaseGraphics(card.querySelector('iframe'));
  card.remove();
  cards.delete(i);
}

const idle = () => new Promise(resolve => (window.requestIdleCallback || setTimeout)(resolve, { timeout: 1500 }));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Neighbours load one at a time, after the visible work is ready, so their setup never competes with it.
async function mountNeighbours(token) {
  await cards.get(index).settled;
  for (const offset of [1, -1]) {
    const i = wrap(index + offset);
    if (cards.has(i)) continue;
    await idle();
    while (moving || drag || performance.now() - lastInteraction < 1500) await wait(200);
    if (token !== mountToken) return;
    await makeCard(i, offset).settled;
    if (token !== mountToken) return;
  }
}

function arrange() {
  const nearby = new Set([-1, 0, 1].map(offset => wrap(index + offset)));
  for (const i of [...cards.keys()]) if (!nearby.has(i)) removeCard(i);
  for (const offset of [-1, 0, 1]) {
    const card = cards.get(wrap(index + offset));
    if (card) place(card, offset);
    else if (offset === 0) makeCard(index, 0);
  }
  mountNeighbours(++mountToken);
  const work = experienceCatalog[index];
  stage.dataset.active = work.id;
  stage.setAttribute('aria-label', `${work.title}. Swipe or scroll to browse experiences`);
  document.querySelector('.flow-number').textContent = String(index + 1).padStart(2, '0');
  document.querySelector('.flow-title').textContent = work.title;
  window.sourceCopy.setExperience(work.id);
  history.replaceState(null, '', `./?experience=${encodeURIComponent(work.id)}`);
  document.title = `${work.title} — Flow`;
}

async function navigate(step, displacement = 0) {
  if (moving || !step) return;
  moving = true;
  for (const [i, card] of cards) card.querySelector('iframe').inert = moving || i !== index;
  const direction = Math.sign(step);
  const next = wrap(index + step);
  const target = cards.get(next) || makeCard(next, direction);
  // The incoming work resumes as it slides in; the outgoing one holds its last frame.
  setActive(cards.get(index), false);
  setActive(target, true);
  const animations = [...cards.values()].map(card => {
    const start = Number(card.dataset.offset) * distance();
    return card.animate([
      { transform: at(start + displacement) },
      { transform: at(start - direction * distance()) },
    ], { duration: reducedMotion.matches ? 0 : 480, easing: 'cubic-bezier(.22,.8,.22,1)', fill: 'forwards' });
  });
  await Promise.all(animations.map(animation => animation.finished));
  index = next;
  lastInteraction = performance.now();
  arrange();
  animations.forEach(animation => animation.cancel());
  moving = false;
}

feed.addEventListener('pointerdown', event => {
  if (moving || !event.isPrimary || event.button !== 0 || event.target.closest('button, a, iframe')) return;
  drag = { id: event.pointerId, x: event.clientX, y: event.clientY, dy: 0, time: performance.now() };
  stage.setPointerCapture(event.pointerId);
  stage.classList.add('is-dragging');
});
feed.addEventListener('pointermove', event => {
  if (!drag || drag.id !== event.pointerId) return;
  drag.dy = event.clientY - drag.y;
  for (const card of cards.values()) {
    card.style.transform = at(Number(card.dataset.offset) * distance() + drag.dy);
  }
});
async function endDrag(event, cancelled = false) {
  if (!drag || drag.id !== event.pointerId) return;
  const gesture = drag;
  drag = null;
  stage.classList.remove('is-dragging');
  if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
  const dx = event.clientX - gesture.x;
  // Swiping up shows the next work; a sideways swipe also browses.
  const delta = Math.abs(gesture.dy) >= Math.abs(dx) ? gesture.dy : dx;
  const threshold = Math.min(120, stage.clientHeight * .16);
  const flick = Math.abs(delta) > 36 && performance.now() - gesture.time < 300;
  if (!cancelled && (Math.abs(delta) > threshold || flick)) {
    await navigate(delta < 0 ? 1 : -1, gesture.dy);
  } else {
    moving = true;
    const animations = [...cards.values()].map(card => {
      const end = Number(card.dataset.offset) * distance();
      return card.animate([
        { transform: at(end + gesture.dy) },
        { transform: at(end) },
      ], { duration: reducedMotion.matches ? 0 : 220, easing: 'ease-out' });
    });
    for (const card of cards.values()) card.style.transform = at(Number(card.dataset.offset) * distance());
    await Promise.all(animations.map(animation => animation.finished));
    moving = false;
  }
}
feed.addEventListener('pointerup', event => endDrag(event));
feed.addEventListener('pointercancel', event => endDrag(event, true));
feed.addEventListener('wheel', event => {
  if (event.ctrlKey) return;
  event.preventDefault();
  const now = performance.now();
  // A trackpad's trailing momentum belongs to the same gesture.
  const elapsed = now - wheelTime;
  wheelTime = now;
  if (moving || now < wheelBlockedUntil || elapsed < 160 && wheelAmount === 0) return;
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  const scaled = delta * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stage.clientHeight : 1);
  if (elapsed > 160 || Math.sign(scaled) !== Math.sign(wheelAmount)) wheelAmount = 0;
  wheelAmount += scaled;
  if (Math.abs(wheelAmount) > 48) {
    navigate(wheelAmount > 0 ? 1 : -1);
    wheelAmount = 0;
    wheelBlockedUntil = now + 600;
  }
}, { passive: false });
document.addEventListener('keydown', event => {
  if (event.altKey || event.metaKey || event.ctrlKey || event.target.closest('input, textarea, select, [contenteditable], dialog')) return;
  if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(event.key)) {
    event.preventDefault();
    navigate(['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1);
  }
});
document.querySelector('.feed-prev').addEventListener('click', () => navigate(-1));
document.querySelector('.feed-next').addEventListener('click', () => navigate(1));
window.addEventListener('popstate', () => {
  const id = new URLSearchParams(location.search).get('experience');
  const found = experienceCatalog.findIndex(work => work.id === id);
  if (!moving && found >= 0) { index = found; arrange(); }
});
new ResizeObserver(() => {
  stageHeight = stage.clientHeight;
  if (!moving && !drag) for (const card of cards.values()) card.style.transform = at(Number(card.dataset.offset) * distance());
}).observe(stage);
arrange();
