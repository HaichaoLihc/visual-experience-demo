/* Browser-local reading and visibility preferences, shared by both library views and readers. */
(() => {
  const prefix = 'photo-library-reading-v1:';
  const root = new URL('.', document.currentScript.src);
  const key = href => prefix + new URL(href, root).pathname;
  const get = href => {
    try {
      const value = JSON.parse(localStorage.getItem(key(href)));
      return value && Number.isFinite(value.page) && Number.isFinite(value.furthest) ? value : null;
    } catch { return null; }
  };
  const set = (href, value) => {
    try {
      if (value === null) localStorage.removeItem(key(href));
      else localStorage.setItem(key(href), JSON.stringify(value));
      return true;
    } catch { return false; }
  };
  window.LibraryReading = { get, set, prefix };

  // Store visibility separately so hiding or restoring a book preserves its reading position.
  const hiddenPrefix = 'photo-library-hidden-v1:';
  const hiddenKey = href => hiddenPrefix + new URL(href, root).pathname;
  window.LibraryVisibility = {
    prefix: hiddenPrefix,
    isHidden(href) {
      try { return localStorage.getItem(hiddenKey(href)) === '1'; } catch { return false; }
    },
    setHidden(href, hidden) {
      try {
        if (hidden) localStorage.setItem(hiddenKey(href), '1');
        else localStorage.removeItem(hiddenKey(href));
        return true;
      } catch { return false; }
    },
  };

  if (!document.querySelector('#book') || typeof pageFlip === 'undefined') return;
  // This demo has no grid view, so the back link keeps its gallery target in both cases.
  const fromGrid = new URLSearchParams(location.search).get('from') === 'grid';
  const last = pageFlip.getPageCount() - 1;
  const previous = get(location.href);
  const save = page => {
    const state = get(location.href);
    const furthest = Math.max(page, state?.furthest || 0);
    set(location.href, { page, furthest, finished: Boolean(state?.finished) || page >= last, opened: Date.now() });
  };
  pageFlip.on('flip', event => save(Number(event.data)));
  // Resume only when entering from the grid; ordinary shelf links still start at the cover.
  const resume = fromGrid && previous && !previous.finished ? Math.max(0, Math.min(last, previous.page)) : 0;
  if (resume) requestAnimationFrame(() => pageFlip.turnToPage(resume));
  save(resume);
})();
