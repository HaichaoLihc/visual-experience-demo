# Paper Cloud

Photographs printed on cotton paper hang as a cloud above a circle of broken mirror, with reflected light moving across the ceiling. Drag to walk around, scroll or pinch to move closer, and select a print to fly to it; arrow keys step through the photographs and Escape returns.

Download or clone the complete [demo repository](https://github.com/HaichaoLihc/visual-experience-demo) to preserve relative paths. This work uses the shared photographs in `../stream-implement-3d/assets/photos/`, their WebP thumbnails in `../stream-implement-3d/assets/thumbs/`, and that work's `photos.json`, which also holds the photo credits. Every photograph hangs twice: once whole and once as a closer study.

Serve the repository root over HTTP and open `experiences/paper-cloud/`. It is plain HTML, CSS, and one JavaScript module drawing with WebGL 2; there is no build step or dependency. To use personal photos, point `ROOT` at the top of `main.js` to a folder with the same `photos.json` layout (each entry needs `id`, `src`, `description`, `photographer`, `source_page`, and `width` and `height` for its shape) and matching `assets/thumbs/<id>.webp` files. Preserve credits for any retained sample photos.
