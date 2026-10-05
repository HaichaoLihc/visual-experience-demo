const stage = document.querySelector('.flow-stage');
const feed = document.querySelector('.flow-page');
const position = document.querySelector('.flow-position');
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
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const distance = () => stage.clientWidth + 16;

const dots = experienceCatalog.map((work, i) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `View ${work.title}`);
  dot.addEventListener('click', () => {
    const forward = wrap(i - index);
    const backward = wrap(index - i);
    if (forward) navigate(forward <= backward ? forward : -backward);
  });
  position.append(dot);
  return dot;
});

function makeCard(i) {
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
  stage.append(card);
  cards.set(i, card);
  return card;
}


function arrange() {
  const nearby = new Set([-1, 0, 1].map(offset => wrap(index + offset)));
  for (const [i, card] of cards) {
    if (!nearby.has(i)) {
      card.remove();
      cards.delete(i);
    }
  }
  for (const offset of [-1, 0, 1]) {
    const i = wrap(index + offset);
    const card = cards.get(i) || makeCard(i);
    card.dataset.offset = offset;
    card.style.transform = `translate3d(${offset * distance()}px, 0, 0)`;
    card.inert = offset !== 0;
    card.querySelector('iframe').inert = offset !== 0;
    card.setAttribute('aria-hidden', String(offset !== 0));
  }
  const work = experienceCatalog[index];
  stage.dataset.active = work.id;
  stage.setAttribute('aria-label', `${work.title}. Swipe or scroll to browse experiences`);
  document.querySelector('.flow-number').textContent = String(index + 1).padStart(2, '0');
  document.querySelector('.flow-title').textContent = work.title;
  document.querySelector('.use').dataset.experience = work.id;
  dots.forEach((dot, i) => {
    dot.setAttribute('aria-current', i === index ? 'true' : 'false');
  });
  history.replaceState(null, '', `./?experience=${encodeURIComponent(work.id)}`);
  document.title = `${work.title} — Flow`;
}

async function navigate(step, displacement = 0) {
  if (moving || !step) return;
  moving = true;
  for (const [i, card] of cards) card.querySelector('iframe').inert = moving || i !== index;
  const direction = Math.sign(step);
  const next = wrap(index + step);
  // Dot navigation also moves whole works, without flashing intervening apps.
  if (Math.abs(step) > 1) {
    for (const card of cards.values()) {
      if (Number(card.dataset.offset) === direction) card.style.visibility = 'hidden';
    }
    const target = cards.get(next) || makeCard(next);
    target.dataset.offset = direction;
    target.style.visibility = 'visible';
    target.style.transform = `translate3d(${direction * distance()}px, 0, 0)`;
  }
  const animations = [...cards.values()].filter(card => card.style.visibility !== 'hidden').map(card => {
    const start = Number(card.dataset.offset) * distance();
    return card.animate([
      { transform: `translate3d(${start + displacement}px, 0, 0)` },
      { transform: `translate3d(${start - direction * distance()}px, 0, 0)` },
    ], { duration: reducedMotion.matches ? 0 : 480, easing: 'cubic-bezier(.22,.8,.22,1)', fill: 'forwards' });
  });
  await Promise.all(animations.map(animation => animation.finished));
  index = next;
  arrange();
  animations.forEach(animation => animation.cancel());
  for (const card of cards.values()) card.style.visibility = '';
  moving = false;
}

feed.addEventListener('pointerdown', event => {
  if (moving || !event.isPrimary || event.button !== 0 || event.target.closest('button, a, iframe')) return;
  drag = { id: event.pointerId, x: event.clientX, y: event.clientY, dx: 0, time: performance.now() };
  stage.setPointerCapture(event.pointerId);
  stage.classList.add('is-dragging');
});
feed.addEventListener('pointermove', event => {
  if (!drag || drag.id !== event.pointerId) return;
  drag.dx = event.clientX - drag.x;
  for (const card of cards.values()) {
    card.style.transform = `translate3d(${Number(card.dataset.offset) * distance() + drag.dx}px, 0, 0)`;
  }
});
async function endDrag(event, cancelled = false) {
  if (!drag || drag.id !== event.pointerId) return;
  const gesture = drag;
  drag = null;
  stage.classList.remove('is-dragging');
  if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
  const dy = event.clientY - gesture.y;
  const horizontal = Math.abs(gesture.dx) >= Math.abs(dy);
  const delta = horizontal ? gesture.dx : dy;
  const threshold = Math.min(120, stage.clientWidth * .16);
  const flick = Math.abs(delta) > 36 && performance.now() - gesture.time < 300;
  if (!cancelled && (Math.abs(delta) > threshold || flick)) {
    await navigate(delta < 0 ? 1 : -1, gesture.dx);
  } else {
    moving = true;
    const animations = [...cards.values()].map(card => {
      const end = Number(card.dataset.offset) * distance();
      return card.animate([
        { transform: `translate3d(${end + gesture.dx}px, 0, 0)` },
        { transform: `translate3d(${end}px, 0, 0)` },
      ], { duration: reducedMotion.matches ? 0 : 220, easing: 'ease-out' });
    });
    for (const card of cards.values()) card.style.transform = `translate3d(${Number(card.dataset.offset) * distance()}px, 0, 0)`;
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
  if (event.altKey || event.metaKey || event.ctrlKey || event.target.closest('input, textarea, select, [contenteditable]')) return;
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
  if (!moving && !drag) for (const card of cards.values()) card.style.transform = `translate3d(${Number(card.dataset.offset) * distance()}px, 0, 0)`;
}).observe(stage);
arrange();
