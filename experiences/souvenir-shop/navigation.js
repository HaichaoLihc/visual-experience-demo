export const ZONES = {
  overview: {
    pos: [-0.84, 1.67, 4.85],
    target: [0.18, 2.12, -1.2],
    title: "A shop made of journeys",
    copy: "Look up, look back, and explore your travels.",
  },
  memories: {
    pos: [-0.73, 1.55, 3.13],
    target: [0.55, 1.03, 2.63],
    title: "Journeys become little things",
    copy: "Ten personal souvenirs, gathered on this table.",
  },
  photobook: {
    pos: [-1.4, 1.53, 2.22],
    target: [-2.57, 1.5, 2.22],
    title: "Turn the journey, page by page",
    copy: "Left bookshelf · Tibet and Yunnan. Click its cover to read.",
  },
  crafts: {
    pos: [-0.72, 1.55, 3.7],
    target: [-1.94, 1.48, 3.64],
    title: "Give memories a shape",
    copy: "Seagulls, red cars, koi, and stones become twelve sculpted keepsakes.",
  },
  cards: {
    pos: [1.72, 1.6, 1.95],
    target: [2.7, 1.61, 1.2],
    title: "Every card is a departure",
    copy: "One hundred postcards, each a different view of the journey.",
  },
  ceiling: {
    pos: [-0.71, 1.68, 3.88],
    target: [-0.12, 2.85, 0.5],
    title: "A little garden overhead",
    copy: "Seagulls, red cars, and hikers hold memories in the air.",
  },
  back: {
    pos: [-0.44, 1.65, -3.69],
    target: [-0.39, 1.72, -5.58],
    title: "Walk to the window",
    copy: "Vases, paper objects, and light through the window.",
  },
};
export function positionAllowed(x, z, colliders, margin = 0.17) {
  if (x < -2.45 || x > 2.16 || z < -5.1 || z > 5.28) return false;
  return !colliders.some((c) =>
    c.r
      ? Math.hypot(x - c.x, z - c.z) < c.r + margin
      : Math.abs(x - c.x) < c.w / 2 + margin &&
        Math.abs(z - c.z) < c.d / 2 + margin,
  );
}
