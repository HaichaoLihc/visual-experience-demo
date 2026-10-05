# Image Atlas source

This is the HTML, CSS, JavaScript, and photo catalog used by the platform demo.

Download or clone the complete [demo repository](https://github.com/HaichaoLihc/visual-experience-demo) to preserve relative paths. This work uses the shared photographs in `../stream-implement-3d/assets/photos/` and their WebP thumbnails (480 px on the short side) in `../stream-implement-3d/assets/thumbs/`; photo credits are in that work's `photos.json`. Cards show the thumbnail (`src`); a focused or nearby card switches to the full photo (`full`) once it has decoded.

Serve the repository root over HTTP and open `experiences/image-atlas/`. When adapting it to personal photos, replace the `src` (thumbnail) and `full` paths in `gallery.js` (both may point to the same file), include those photos in the generated project, and replace the fictional demo dates. Preserve credits for any retained sample photos. No build step is required.
