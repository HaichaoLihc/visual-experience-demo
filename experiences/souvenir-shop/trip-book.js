import * as T from "./assets/three.module.js";
import { box, plane, mat, textured } from "./materials.js";

export const BOOK_TYPE = "journey-photobook";
export const BOOK_URL = "./books/tibet-yunnan/index.html";
export const BOOK_COVER = "./books/tibet-yunnan/assets/pages/page-00.png";
export const BOOK_BACK = "./books/tibet-yunnan/assets/pages/page-41.png";
export const BOOK_CATALOG = {
  [BOOK_TYPE]: {
    name: "Tibet and Yunnan",
    category: "42-page photo book",
    kind: "photobook",
    material: "Textured paper cover · Bound pages",
    zone: "Left bookshelf",
    description:
      "Lakes, clouds, mountain roads, and companions, gathered into a forty-two-page photo book.",
    personal: true,
    tripRelated: true,
    sourcePhoto: 278,
    number: 23,
    prototype: BOOK_COVER,
    reader: BOOK_URL,
  },
};

export function buildTripBook(parent, textures) {
  const paper = mat("#eae1cc", 0.93),
    cloth = mat("#e9dfc8", 0.9),
    edge = mat("#cfc2a5", 0.88);
  // The front and back use the supplied complete leaves at exactly their 3:5 ratio.
  const width = 0.276,
    height = 0.46,
    depth = 0.036;
  box(
    parent,
    width - 0.01,
    height - 0.012,
    depth - 0.009,
    0.002,
    height / 2,
    0,
    paper,
  );
  box(parent, width, height, 0.0045, 0, height / 2, depth / 2, cloth);
  box(parent, width, height, 0.0045, 0, height / 2, -depth / 2, cloth);
  box(
    parent,
    0.009,
    height,
    depth + 0.004,
    -width / 2 + 0.0045,
    height / 2,
    0,
    cloth,
  );
  const front = plane(
    parent,
    width,
    height,
    textures["book-cover"],
    0,
    height / 2,
    depth / 2 + 0.0024,
  );
  front.name = "original-book-front-cover";
  front.material = textured(textures["book-cover"], 0.84);
  const back = plane(
    parent,
    width,
    height,
    textures["book-back"],
    0,
    height / 2,
    -depth / 2 - 0.0024,
  );
  back.rotation.y = Math.PI;
  back.name = "original-book-back-cover";
  back.material = textured(textures["book-back"], 0.84);
  for (let i = 0; i < 21; i++) {
    const z = -0.0128 + i * 0.00128;
    box(
      parent,
      0.0003,
      height - 0.014,
      0.0002,
      width / 2 - 0.0029,
      height / 2,
      z,
      edge,
    );
    box(parent, width - 0.014, 0.00022, 0.0002, 0.002, height - 0.006, z, edge);
  }
  // A shallow cloth hinge leaves the cover image completely unobstructed.
  box(
    parent,
    0.002,
    height - 0.002,
    0.0015,
    -width / 2 + 0.001,
    height / 2,
    depth / 2 + 0.001,
    cloth,
  );
  parent.userData.reader = BOOK_URL;
}
