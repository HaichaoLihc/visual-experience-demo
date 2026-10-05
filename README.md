# Experience UI demo

Twelve interactive photo experiences are available in two discovery views: nine from the local UI collection, photography book library, souvenir shop, and umbrella installation projects, and three scenes recreated from reference photos of installations, one of which shows a single photo. Explore is a rounded-card grid; Flow is an immersive, looping feed of the actual apps. Profiles are not built yet: the avatar in the header opens a small “coming soon” dialog.

```sh
python3 -m http.server 8002 --directory demo
```

Open http://localhost:8002 for Flow or http://localhost:8002/explore.html for Explore. The centered navigation switches views. Selecting a card opens that work in Flow, and the “placeholder” logo returns to Flow. `gallery.html` remains an Explore alias; existing `detail.html?experience=…` links still open a single interactive app.

## Interaction

Flow is a vertical feed. Use the Prev / Next control in the middle of the footer to browse. You can also drag or swipe the footer up or down, scroll the surrounding feed area, or use arrow keys when the platform has focus. The entire rounded work slides up to reveal the next one, or down for the previous one. The feed loops in either direction. Each position has a shareable URL, such as `/?experience=souvenir-shop`. `flow.html` remains a compatible feed entry point.

Apps are interactive immediately. Their internal drag, scroll, keyboard, and touch controls remain available; feed navigation lives outside the app viewport. The selected work loads first. Its immediate neighbors load one at a time once it is ready and the visitor has paused interacting, then stay mounted through transitions; other frames are removed and release their graphics memory. Only the selected work runs: once a neighbor has drawn its first frames, the feed freezes it by holding its animation frames, Web Animations, and media, and resumes it as it slides in. This needs no changes to the work itself. Inactive frames are excluded from keyboard focus and the accessibility tree. Reduced-motion preferences skip slide animation.

Works may also follow an optional message contract to pause more precisely. At startup a work posts `{ type: 'platform:hello' }` to its parent, and the feed replies with `{ type: 'platform:visibility', active }`, sent again whenever that changes. After its first frame a work can post `{ type: 'platform:ready' }`, which lets the feed load the next neighbor sooner. Opened on their own or in `detail.html`, works receive no reply and simply run.

The platform adds no loading overlay, artificial delay, or opacity transition to the embedded website. Navigation and actions remain outside the app viewport. Use opens a compact dialog for the selected work. Copy Prompt copies a ready-to-paste instruction to recreate the selected experience with the user’s own photos, with its public GitHub source-folder URL. View Source opens the source folder in a new tab. A brief Copied confirmation appears after a successful clipboard write. If the browser blocks clipboard access, a selectable prompt is shown for manual copying. No user content is uploaded. Card Gallery, Image Atlas, and the recreated scenes share sample photos with Undertow; their source READMEs explain how to download the complete repository.

## Imported experiences

- Undertow — WebGL light-thread curtain and flowing photo stories.
- Souvenir Shop — the existing explorable 3D shop, with a clear scene and compact WASD keycaps. Objects and its nested travel book remain interactive; the scene’s old branding, captions, area tabs, toolbar, and text hints are removed.
- Chongqing · Between Levels — the library catalog’s 16-page photobook, with its original artwork and page turning.
- After Blue, Chongqing · A City in Layers, and After Weather — three more library photobooks, listed last. Each is an `index.html` and WebP pages that reuse the Between Levels reader in `../chongqing-book/`; A City in Layers' spreads are split into single pages.
- Card Gallery — ring, arc, stack, and unfolded cards.
- Image Atlas — spatial photo archive, year navigation, local text search, and photo focus.
- Umbrella Canopy — a 3D installation of white paper umbrellas and hanging photos, with icon controls and six quiet color dots for story browsing. Opening copy and hover captions are removed; photo titles, attribution, and source links remain in the photo detail view.

The numbered image samples in the card gallery and atlas were replaced with the collection's existing local Undertow photos. Dates and category text in those examples remain demo metadata. Photo credits and source links are preserved in `experiences/stream-implement-3d/photos.json`. Platform and main controls use English; original artwork and product descriptions are preserved. The source projects are unchanged.

## Recreated scenes

Each scene restages a photographed installation with the shared Undertow photos. It is one small WebGL 2 module with no dependencies. Every photo set is a single instanced draw from one texture array (256 px per photo), and only a selected photo loads its full file. Scenes follow the platform message contract, and when off screen they only redraw.

- Slide Curtain — 35 mm slides hung in chains from a curtain rod and lit from behind. Brushing through swings the slides, and selecting one holds it up to the light. The chains are simulated only while they move, so a still curtain draws nothing.
- Paper Cloud — prints on cotton paper hung as a cloud above a circle of broken mirror, with light moving on the ceiling. The mirror is a half-resolution reflection pass, and each shard is offset within it.

In Paper Cloud, drag to walk around, scroll or pinch to move closer, and select a photo to fly to it. Arrow keys step through the photos and Escape returns. Its preview image was captured with headless Chrome.

## Single-photo scene

Hanging Lenses shows a small print on a dark wall, with a hand lens and a loupe hanging on wires in front of it. Drag a lens across the print to look through it: it swings back on its wire and stays at the height you leave it. Arrow keys swing and raise a lens, and Enter switches lenses. It is one dependency-free WebGL 2 module that follows the message contract, and a single full-screen shader traces the scene: the glass magnifies the print as a thin lens with slight color fringing, and each lens's shadow holds the bright spot its glass focuses. The photo is named by the `PHOTO` constant at the top of `main.js`; change its path, title, credit, and source link there to show another. Its preview image was also captured with headless Chrome.

## Refresh local artifacts

```sh
python3 scripts/import-experiences.py /path/to/ui-collections "/path/to/photo books library" /path/to/souvenir-shop /path/to/umbrella-project
```

The importer copies the three selected UI-collection experiences, the Chongqing photobook, the souvenir shop’s `dist/` website, and the standalone umbrella installation. To refresh only the book, run `python3 scripts/import-chongqing.py "/path/to/photo books library"`. To refresh only the shop, run `python3 scripts/import-souvenir-shop.py /path/to/souvenir-shop`. To refresh only the canopy, run `python3 scripts/import-umbrella-canopy.py /path/to/project`. Artwork and the embedded book are preserved. The demo copies carry performance changes that the importers do not reproduce (WebP pages and thumbnails, minified three.js, on-demand page turning, off-screen pausing, and the shop's retry of failed textures), so re-importing a work replaces them. Preview images in `demo/previews/` are browser captures and should be refreshed after design changes.

No backend or upload/deployment service is included. These trusted local copies use iframes for layout independence; this is not a production sandbox for arbitrary uploads.
