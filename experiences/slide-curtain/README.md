# Slide Curtain

Photographs mounted as 35 mm slides hang in chains from a curtain rod in front of a lit window. Brushing the pointer through the curtain swings and turns the slides; selecting one holds it up to the light at full size. Arrow keys choose a slide and Enter opens it.

Download or clone the complete [demo repository](https://github.com/HaichaoLihc/visual-experience-demo) to preserve relative paths. This work uses the shared photographs in `../stream-implement-3d/assets/photos/`, their WebP thumbnails in `../stream-implement-3d/assets/thumbs/`, and that work's `photos.json`, which also holds the photo credits. Every photograph appears on several slides, as the whole frame or a closer crop. The number of chains and slides follows the window size.

Serve the repository root over HTTP and open `experiences/slide-curtain/`. It is plain HTML, CSS, and one JavaScript module drawing with WebGL 2; there is no build step or dependency. To use personal photos, point `ROOT` at the top of `main.js` to a folder with the same `photos.json` layout (each entry needs `id`, `src`, `description`, `photographer`, `source_page`, and `width` and `height` for its shape) and matching `assets/thumbs/<id>.webp` files. Preserve credits for any retained sample photos.
