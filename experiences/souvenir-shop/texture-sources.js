import { PERSONAL_CATALOG, PRINTED_PROTOTYPES } from "./personal.js";
import { TRIP_ART, artUrl } from "./trip-art.js";
import { BOOK_COVER, BOOK_BACK } from "./trip-book.js";

// Original photos remain lazy-loaded in the inspector, outside the GPU atlas.
// The third field marks large images that are only used on the GPU (never
// painted into a canvas), so they may be decoded off the main thread.
export const TEXTURE_SOURCES = [
  ...Object.values(PERSONAL_CATALOG)
    .filter((gift) => PRINTED_PROTOTYPES.includes(gift.number))
    .map((gift) => [`prototype-${gift.number}`, gift.prototype, true]),
  ...TRIP_ART.map((_, i) => [`art-${i}`, artUrl(i)]),
  ["mobiles", "./assets/trip-art/travel-ornaments.webp", true],
  ["book-cover", BOOK_COVER, true],
  ["book-back", BOOK_BACK, true],
];
