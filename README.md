# Experience UI demo

Six interactive photo experiences from the local UI collection, photography book library, souvenir shop, and umbrella installation projects are available in two discovery views. Explore is a rounded-card grid; Flow is an immersive, looping feed of the actual apps. Your personal gallery contains only the Undertow waterfall.

```sh
python3 -m http.server 8002 --directory demo
```

Open http://localhost:8002 for Flow or http://localhost:8002/explore.html for Explore. The centered navigation switches views. Selecting a card opens that work in Flow, and the “placeholder” logo returns to Flow. `gallery.html` remains an Explore alias; existing `detail.html?experience=…` links still open a single interactive app.

## Interaction

In Flow, use Prev / Next beside Use to browse. You can also drag or swipe the footer, scroll the surrounding feed area, or use arrow keys when the platform has focus. The entire rounded work translates. The feed loops in either direction. Small position markers also select a work. Each position has a shareable URL, such as `/?experience=souvenir-shop`. `flow.html` remains a compatible feed entry point.

Apps are interactive immediately. Their internal drag, scroll, keyboard, and touch controls remain available; feed navigation lives outside the app viewport. The selected work and its immediate neighbors stay mounted through transitions; other frames are removed. Inactive frames are excluded from keyboard focus and the accessibility tree. Reduced-motion preferences skip slide animation.

The platform adds no loading overlay, artificial delay, or opacity transition to the embedded website. Navigation and actions remain outside the app viewport. Use remains a visual placeholder.

## Imported experiences

- Undertow — WebGL light-thread curtain and flowing photo stories, shown first.
- Souvenir Shop — the existing explorable 3D shop, shown second, with a clear scene and compact WASD keycaps. Objects and its nested travel book remain interactive; the scene’s old branding, captions, area tabs, toolbar, and text hints are removed.
- Chongqing · Between Levels — the library catalog’s 16-page photobook, with its original artwork and page turning.
- Card Gallery — ring, arc, stack, and unfolded cards.
- Image Atlas — spatial photo archive, year navigation, local text search, and photo focus.
- Umbrella Canopy — a 3D installation of white paper umbrellas and hanging photos, with icon controls and six quiet color dots for story browsing. Opening copy and hover captions are removed; photo titles, attribution, and source links remain in the photo detail view.

The numbered image samples in the card gallery and atlas were replaced with the collection's existing local Undertow photos. Dates and category text in those examples remain demo metadata. Photo credits and source links are preserved in `experiences/stream-implement-3d/photos.json`. Platform and main controls use English; original artwork and product descriptions are preserved. The source projects are unchanged.

## Refresh local artifacts

```sh
python3 scripts/import-experiences.py /path/to/ui-collections "/path/to/photo books library" /path/to/souvenir-shop /path/to/umbrella-project
```

The importer copies the three selected UI-collection experiences, the Chongqing photobook, the souvenir shop’s `dist/` website, and the standalone umbrella installation. To refresh only the book, run `python3 scripts/import-chongqing.py "/path/to/photo books library"`. To refresh only the shop, run `python3 scripts/import-souvenir-shop.py /path/to/souvenir-shop`. To refresh only the canopy, run `python3 scripts/import-umbrella-canopy.py /path/to/project`. Artwork and the embedded book are preserved. Preview images in `demo/previews/` are browser captures and should be refreshed after design changes.

No backend or upload/deployment service is included. These trusted local copies use iframes for layout independence; this is not a production sandbox for arbitrary uploads.
