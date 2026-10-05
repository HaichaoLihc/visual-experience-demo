import { PERSONAL_CATALOG } from "./personal.js";
import { TRIP_ART, artUrl } from "./trip-art.js";
import { BOOK_COVER, BOOK_BACK } from "./trip-book.js";

// Original photos remain lazy-loaded in the inspector, outside the GPU atlas.
export const TEXTURE_SOURCES = [
  ...Object.values(PERSONAL_CATALOG).map((gift) => [
    `prototype-${gift.number}`,
    gift.prototype,
  ]),
  ...TRIP_ART.map((_, i) => [`art-${i}`, artUrl(i)]),
  ["mobiles", "./assets/trip-art/travel-ornaments.png"],
  ["book-cover", BOOK_COVER],
  ["book-back", BOOK_BACK],
];
