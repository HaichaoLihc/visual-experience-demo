# Hanging Lenses

One small photograph hangs on a dark wall, with a hand lens and a loupe hanging on wires in front of it. A spotlight above throws their shadows on the wall, each holding the bright point its glass focuses. Drag a lens across the print to look through it: it swings back on its wire and stays at the height you leave it. Arrow keys swing and raise a lens, and Enter switches lenses.

Download or clone the complete [demo repository](https://github.com/HaichaoLihc/visual-experience-demo) to preserve relative paths. This work shows one of the shared photographs in `../stream-implement-3d/assets/photos/`; its credit is in that work's `photos.json`.

Serve the repository root over HTTP and open `experiences/hanging-lenses/`. It is plain HTML, CSS, and one JavaScript module; a single WebGL 2 fragment shader traces the whole scene, and there is no build step or dependency. To use a personal photo, change `PHOTO` at the top of `main.js` (its `src`, `title`, `credit`, and `source`) and include that photo in the project; the print takes the photo's shape. Use a photo of at least about 1200 px on its long side, since the lenses magnify it. Preserve the credit if the sample photo is kept.
