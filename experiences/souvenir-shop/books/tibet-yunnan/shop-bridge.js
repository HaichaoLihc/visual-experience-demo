// Let the surrounding shop close the reader while keyboard focus is inside the book.
if (window.parent !== window) {
  window.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    window.parent.postMessage({type: 'travel-book-close'}, window.location.origin);
  });
}
