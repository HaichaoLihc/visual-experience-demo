# Card Gallery source

This is the HTML, CSS, JavaScript, and photo catalog used by the platform demo.

Download or clone the complete [demo repository](https://github.com/HaichaoLihc/visual-experience-demo) to preserve relative paths. This work uses the shared photographs in `../stream-implement-3d/assets/photos/` and their WebP thumbnails (480 px on the short side) in `../stream-implement-3d/assets/thumbs/`; photo credits are in that work's `photos.json`. Ring and arc cards show the thumbnail when the screen needs no more pixels; cards shown large always use the full photo.

Serve the repository root over HTTP and open `experiences/card-gallery/`. When adapting it to personal photos, replace the catalog paths in `assets/cards.json` (`thumb` is optional; without it a card uses `src`), include those photos in the generated project, and preserve credits for any retained sample photos. No build step is required.
