import * as T from "./assets/three.module.js";
import {
  mat,
  mesh,
  box,
  sphere,
  cyl,
  ring,
  tube,
  lathe,
  rounded,
  plane,
  canvasTexture,
  printTexture,
  imageCover,
  label,
  textured,
  cream,
  navy,
  silver,
} from "./materials.js";
import { artForPhoto } from "./trip-art.js";
const rows = [
  [
    "postcards",
    "山野来信",
    "明信片",
    "棉纸 · 双面印刷",
    "蓝湖、云中椅子、黄墙前的一次停留。把旅途里的三张照片，寄给未来的自己。",
  ],
  [
    "magnet",
    "把蓝湖带回家",
    "分层冰箱贴",
    "彩印亚克力 · 双磁铁",
    "红色越野车、车顶的折叠椅和那片蓝湖。近看是照片，侧看是三层小小的风景。",
  ],
  [
    "keychain",
    "今天的帽子有访客",
    "钥匙链",
    "透明亚克力 · 拉丝银环",
    "一只海鸥恰好停在帽子上。这个偶然的旅途瞬间，变成每天随身的小挂件。",
  ],
  [
    "desk-mat",
    "在山谷里歇一会",
    "桌垫",
    "织物 · 缝边 · 防滑底",
    "坐下来，看山，也看看身边的背包。把山谷里的片刻宁静带回书桌。",
  ],
  [
    "mug",
    "山路补给站",
    "马克杯",
    "奶白陶瓷 · 钴蓝内釉",
    "山路上的两个人、一张小桌、几只背包。一杯热饮的时间，回到那次停留。",
  ],
  [
    "coasters",
    "四种旅行温度",
    "杯垫套装",
    "陶瓷 · 软木底",
    "蓝湖、云海、绿水和黄墙。四张真实照片，装下四种不同的旅行温度。",
  ],
  [
    "tote",
    "慢慢走",
    "帆布袋",
    "原色棉帆布 · 织带",
    "背着橙色背包，向云里的小径走去。抬手就能带走的一段山路。",
  ],
  [
    "pins",
    "4680 的那一天",
    "珐琅徽章",
    "彩色珐琅 · 镍色金属",
    "4680、山脊，还有蓝色冲锋衣。三个小徽章，记下抵达高处的那一天。",
  ],
  [
    "stickers",
    "旅途里的小意外",
    "照片贴纸",
    "哑光贴纸 · 格拉辛纸袋",
    "侧手翻、抱小羊、海鸥、摸狗和车顶座位。旅途里最好玩的几个瞬间。",
  ],
  [
    "journal",
    "把路留下",
    "旅行手账",
    "织物书脊 · 纸质封面",
    "黄墙前的肖像做封面，深蓝色书脊把记忆装订起来。下一段旅途，留在空白页。",
  ],
];
export const PERSONAL_CATALOG = Object.fromEntries(
  rows.map(([slug, name, kind, material, description], i) => [
    "memory-" + slug,
    {
      name,
      category: kind,
      material,
      description,
      zone: "旅途系列",
      personal: true,
      tripRelated: true,
      sourcePhoto: [278, 64, 4, 210, 209, 81, 73, 225, 3, 259][i],
      prototype: `./assets/personal/${String(i + 1).padStart(2, "0")}-${slug}.jpg`,
      slug,
      number: i + 1,
    },
  ]),
);
export const PERSONAL_TYPES = Object.keys(PERSONAL_CATALOG);
const source = (textures, n) => artForPhoto(textures, n);
const generated = (textures, n) => textures["prototype-" + n];
// The printed silhouette uses the finished prototype as its UV artwork.
// Real beveled geometry supplies edges, thickness and back faces.
export function photoShape(
  p,
  points,
  tex,
  width,
  depth = 0.005,
  side = silver,
) {
  const xs = points.map((v) => v[0]),
    ys = points.map((v) => v[1]),
    minX = Math.min(...xs),
    maxX = Math.max(...xs),
    minY = Math.min(...ys),
    maxY = Math.max(...ys),
    scale = width / (maxX - minX),
    s = new T.Shape();
  points.forEach(([x, y], i) => {
    const px = (x - (minX + maxX) / 2) * scale,
      py = (maxY - y) * scale;
    i ? s.lineTo(px, py) : s.moveTo(px, py);
  });
  s.closePath();
  mesh(
    p,
    new T.ExtrudeGeometry(s, {
      depth,
      bevelEnabled: true,
      bevelSize: 0.0012,
      bevelThickness: 0.0008,
      bevelSegments: 2,
    }),
    side,
  );
  const geo = new T.ShapeGeometry(s),
    pos = geo.attributes.position,
    uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++)
    uv.setXY(
      i,
      (pos.getX(i) / scale + (minX + maxX) / 2) / 1536,
      1 - (maxY - pos.getY(i) / scale) / 1024,
    );
  mesh(
    p,
    geo,
    textured(tex, 0.32, { side: T.DoubleSide }),
    0,
    0,
    depth + 0.001,
  );
  return (maxY - minY) * scale;
}
export function makeMug(g, body = cream, inner = navy, photo = null) {
  lathe(
    g,
    [
      [0.065, 0],
      [0.084, 0.009],
      [0.09, 0.025],
      [0.092, 0.205],
      [0.091, 0.23],
      [0.083, 0.231],
      [0.081, 0.217],
      [0.078, 0.034],
      [0.008, 0.032],
    ],
    body,
  );
  cyl(g, 0.079, 0.078, 0.003, 0, 0.034, 0, inner);
  lathe(
    g,
    [
      [0.082, 0.039],
      [0.083, 0.216],
      [0.087, 0.229],
    ],
    inner,
  );
  ring(g, 0.088, 0.003, 0, 0.23, 0, inner);
  const h = mesh(
    g,
    new T.TorusGeometry(0.066, 0.014, 10, 36, Math.PI * 1.7),
    body,
    0.098,
    0.126,
    0,
  );
  h.rotation.z = -Math.PI * 0.85;
  if (photo) {
    const m = textured(photo, 0.29);
    mesh(
      g,
      new T.CylinderGeometry(0.0923, 0.087, 0.174, 56, 1, true, -0.65, 1.3),
      m,
      0,
      0.125,
      0,
    );
  }
}
export function buildPersonal(g, type, textures) {
  const slug = PERSONAL_CATALOG[type].slug;
  if (slug === "postcards") {
    const ids = [278, 7, 259],
      titles = ["BLUE HOURS", "ABOVE THE CLOUDS", "GOLDEN AFTERNOON"];
    ids.forEach((n, i) => {
      const c = new T.Group();
      g.add(c);
      c.position.set((i - 1) * 0.11, i === 1 ? 0.1 : 0, -0.008 - i * 0.008);
      c.rotation.z = (i - 1) * -0.11;
      box(c, 0.19, 0.28, 0.004, 0, 0.14, 0, cream);
      plane(
        c,
        0.189,
        0.279,
        printTexture(source(textures, n), titles[i], "#f5f0e5", true),
        0,
        0.14,
        0.0026,
      );
      const back = plane(
        c,
        0.188,
        0.278,
        canvasTexture(840, 600, (ctx) => {
          ctx.fillStyle = "#f5f0e5";
          ctx.fillRect(0, 0, 840, 600);
          ctx.strokeStyle = "#bcb7a6";
          ctx.lineWidth = 2;
          ctx.strokeRect(718, 44, 82, 104);
          ctx.beginPath();
          ctx.moveTo(428, 70);
          ctx.lineTo(428, 520);
          for (let y = 290; y < 500; y += 62) {
            ctx.moveTo(478, y);
            ctx.lineTo(780, y);
          }
          ctx.stroke();
          ctx.font = "14px Georgia";
          ctx.fillStyle = "#4d574a";
          ctx.fillText("FIELD NOTES / MOMENTS TO KEEP", 40, 552);
        }),
        0,
        0.14,
        -0.0026,
      );
      back.rotation.y = Math.PI;
    });
  } else if (slug === "magnet") {
    const pts = [
      [131, 780],
      [117, 697],
      [118, 395],
      [143, 337],
      [182, 312],
      [201, 268],
      [231, 216],
      [302, 164],
      [434, 115],
      [576, 94],
      [716, 90],
      [831, 116],
      [932, 168],
      [1000, 242],
      [1039, 341],
      [1070, 394],
      [1080, 671],
      [1065, 757],
      [1021, 805],
      [901, 835],
      [287, 874],
      [198, 867],
      [153, 840],
    ];
    const h = photoShape(g, pts, generated(textures, 2), 0.29, 0.013, navy);
    const fg = new T.Group();
    g.add(fg);
    fg.position.set(-0.012, 0.025, 0.017);
    photoShape(
      fg,
      [
        [193, 768],
        [198, 706],
        [227, 665],
        [323, 620],
        [356, 579],
        [435, 553],
        [545, 542],
        [533, 492],
        [542, 441],
        [558, 400],
        [591, 374],
        [616, 373],
        [627, 402],
        [611, 417],
        [614, 441],
        [652, 469],
        [667, 491],
        [667, 521],
        [681, 536],
        [804, 536],
        [827, 581],
        [843, 636],
        [865, 675],
        [865, 739],
        [832, 775],
        [728, 798],
        [272, 817],
        [209, 803],
      ],
      generated(textures, 2),
      0.201,
      0.003,
      cream,
    );
    for (const x of [-0.088, 0.088]) {
      const m = cyl(
        g,
        0.022,
        0.022,
        0.006,
        x,
        h * 0.44,
        -0.005,
        mat("#454a48", 0.33, 0.65),
      );
      m.rotation.x = Math.PI / 2;
    }
  } else if (slug === "keychain") {
    const h = photoShape(
      g,
      [
        [246, 786],
        [263, 650],
        [280, 551],
        [308, 534],
        [373, 531],
        [416, 515],
        [457, 520],
        [500, 510],
        [528, 488],
        [535, 451],
        [527, 421],
        [529, 393],
        [554, 379],
        [594, 380],
        [603, 355],
        [590, 330],
        [600, 304],
        [619, 282],
        [651, 275],
        [680, 285],
        [709, 322],
        [718, 345],
        [707, 373],
        [710, 403],
        [710, 438],
        [727, 478],
        [746, 526],
        [754, 580],
        [764, 612],
        [804, 633],
        [855, 651],
        [871, 684],
        [849, 880],
        [836, 916],
        [810, 928],
        [290, 845],
        [249, 823],
      ],
      generated(textures, 3),
      0.175,
      0.004,
      mat("#d1e0dc", 0.12, 0.15),
    );
    ring(g, 0.043, 0.0035, 0.015, h + 0.041, 0, silver, false);
    for (let i = 0; i < 3; i++)
      ring(
        g,
        0.009,
        0.0018,
        0.015,
        h - 0.005 + i * 0.013,
        0,
        silver,
        i % 2 === 0,
      );
    const disc = cyl(
      g,
      0.036,
      0.036,
      0.004,
      0.13,
      h - 0.074,
      0.003,
      mat("#195c9d", 0.18),
    );
    disc.rotation.x = Math.PI / 2;
    mesh(
      g,
      new T.CircleGeometry(0.031, 40),
      textured(source(textures, 278), 0.3),
      0.13,
      h - 0.074,
      0.006,
    );
    for (let i = 0; i < 3; i++)
      ring(
        g,
        0.008,
        0.0016,
        0.096 + i * 0.009,
        h + 0.003 - i * 0.016,
        0,
        silver,
        i % 2 === 0,
      );
    tube(
      g,
      [
        [0.047, h + 0.065, 0],
        [0.095, h + 0.04, 0],
        [0.158, h + 0.013, 0],
        [0.178, h + 0.034, 0],
        [0.139, h + 0.064, 0],
        [0.061, h + 0.083, 0],
      ],
      0.007,
      navy,
    );
  } else if (slug === "desk-mat") {
    const tex = canvasTexture(1600, 700, (c, w, h) => {
      c.fillStyle = "#414d35";
      c.fillRect(0, 0, w, h);
      [210, 73, 7].forEach((n, i) =>
        c.drawImage(source(textures, n).image, 360 + i * 410, 12, 408, h - 24),
      );
      c.strokeStyle = "#bc7548";
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(353, 0);
      c.lineTo(353, h);
      c.stroke();
      c.fillStyle = "#eee5cc";
      c.font = "24px Georgia";
      c.fillText("A MOMENT", 55, 530);
      c.fillText("IN THE VALLEY", 55, 570);
      c.strokeStyle = "#d5bc87";
      c.lineWidth = 2;
      c.setLineDash([4, 4]);
      c.strokeRect(10, 10, w - 20, h - 20);
    });
    rounded(g, 0.8, 0.35, 0.009, 0.019, mat("#34382d", 0.88));
    plane(g, 0.785, 0.335, tex, 0, 0.175, 0.007);
  } else if (slug === "mug") {
    const tex = canvasTexture(600, 840, (c, w, h) => {
      c.fillStyle = "#f4eee2";
      c.fillRect(0, 0, w, h);
      imageCover(c, source(textures, 209).image, 28, 86, w - 56, h - 98);
      c.fillStyle = "#283947";
      c.textAlign = "center";
      c.font = "25px Georgia";
      c.fillText("TRAIL BREAK", w / 2, 47);
    });
    makeMug(g, cream, navy, tex);
  } else if (slug === "coasters") {
    [278, 7, 81, 259].forEach((n, i) => {
      const p = new T.Group();
      p.position.set(
        ((i % 2) - 0.5) * 0.163,
        Math.floor(i / 2) * 0.015,
        Math.floor(i / 2) * -0.145,
      );
      g.add(p);
      cyl(p, 0.075, 0.075, 0.011, 0, 0.006, 0, mat("#b89562", 0.9));
      cyl(p, 0.075, 0.075, 0.01, 0, 0.016, 0, cream);
      ring(p, 0.071, 0.004, 0, 0.024, 0, cream);
      const tex = printTexture(source(textures, n), "", "#f6f2e7");
      const disc = mesh(
        p,
        new T.CircleGeometry(0.066, 48),
        textured(tex, 0.3),
        0,
        0.024,
        0,
      );
      disc.rotation.x = -Math.PI / 2;
    });
  } else if (slug === "tote") {
    rounded(g, 0.34, 0.37, 0.04, 0.035, mat("#e5dcc1", 0.93));
    box(g, 0.29, 0.018, 0.033, 0, 0.363, 0.004, mat("#c1b79b", 1));
    const image = printTexture(source(textures, 73), "WALK SLOW", "#e8dec5");
    plane(g, 0.267, 0.265, image, 0, 0.181, 0.023);
    for (const z of [-0.01, 0.026]) {
      tube(
        g,
        [
          [-0.11, 0.36, z],
          [-0.112, 0.51, z],
          [-0.065, 0.6, z],
          [0.065, 0.6, z],
          [0.112, 0.51, z],
          [0.11, 0.36, z],
        ],
        0.011,
        mat("#465037", 0.98),
      );
    }
    for (const x of [-0.145, 0.145])
      box(g, 0.001, 0.31, 0.001, x, 0.184, 0.022, mat("#ad9d7c"));
    box(g, 0.017, 0.05, 0.003, 0.181, 0.28, 0, mat("#ba6c3f"));
  } else if (slug === "pins") {
    box(g, 0.4, 0.28, 0.006, 0, 0.14, 0, cream);
    plane(g, 0.34, 0.033, label("THAT DAY / 4680"), 0, 0.256, 0.004);
    const a = new T.Group();
    a.position.set(-0.088, 0.099, 0.006);
    g.add(a);
    photoShape(
      a,
      [
        [179, 487],
        [184, 433],
        [221, 387],
        [251, 377],
        [289, 310],
        [317, 329],
        [347, 294],
        [364, 310],
        [388, 260],
        [412, 280],
        [439, 278],
        [465, 252],
        [496, 233],
        [516, 263],
        [529, 277],
        [537, 295],
        [558, 282],
        [583, 301],
        [595, 278],
        [629, 301],
        [666, 327],
        [689, 387],
        [707, 410],
        [730, 493],
        [737, 535],
        [719, 558],
        [693, 565],
        [202, 501],
      ],
      generated(textures, 8),
      0.175,
      0.003,
      silver,
    );
    const b = new T.Group();
    b.position.set(0.053, 0.035, 0.006);
    g.add(b);
    photoShape(
      b,
      [
        [757, 780],
        [774, 756],
        [790, 687],
        [798, 578],
        [808, 525],
        [803, 492],
        [786, 480],
        [784, 454],
        [807, 411],
        [833, 386],
        [843, 367],
        [850, 352],
        [848, 319],
        [858, 304],
        [883, 294],
        [910, 295],
        [928, 316],
        [928, 341],
        [916, 363],
        [932, 384],
        [949, 401],
        [966, 458],
        [964, 486],
        [946, 505],
        [930, 508],
        [927, 540],
        [918, 604],
        [919, 690],
        [912, 748],
        [920, 785],
        [914, 827],
        [898, 843],
        [877, 833],
        [865, 808],
        [862, 747],
        [846, 706],
        [835, 660],
        [829, 713],
        [837, 747],
        [822, 780],
        [786, 801],
        [763, 795],
      ],
      generated(textures, 8),
      0.067,
      0.003,
      silver,
    );
    const c = new T.Group();
    c.position.set(0.135, 0.118, 0.006);
    g.add(c);
    photoShape(
      c,
      [
        [987, 563],
        [1008, 539],
        [1011, 515],
        [1034, 491],
        [1060, 482],
        [1077, 465],
        [1109, 465],
        [1121, 439],
        [1148, 429],
        [1171, 419],
        [1195, 402],
        [1222, 408],
        [1248, 427],
        [1260, 456],
        [1287, 460],
        [1308, 486],
        [1338, 492],
        [1368, 501],
        [1385, 520],
        [1375, 542],
        [1360, 548],
        [1373, 581],
        [1394, 590],
        [1394, 610],
        [1373, 624],
        [1290, 627],
        [1268, 618],
        [1230, 622],
        [1200, 608],
        [1007, 584],
      ],
      generated(textures, 8),
      0.123,
      0.003,
      silver,
    );
    plane(g, 0.14, 0.084, source(textures, 225), -0.111, 0.051, 0.004);
  } else if (slug === "stickers") {
    const p = photoShape(
      g,
      [
        [193, 113],
        [1357, 22],
        [1501, 958],
        [207, 1016],
      ],
      generated(textures, 9),
      0.27,
      0.002,
      cream,
    );
    box(g, 0.273, p + 0.012, 0.001, 0, p / 2, -0.002, mat("#ece4d6"));
  } else if (slug === "journal") {
    rounded(g, 0.215, 0.3, 0.029, 0.008, mat("#c49a37", 0.7));
    box(g, 0.012, 0.297, 0.034, -0.102, 0.151, 0.013, navy);
    box(g, 0.191, 0.281, 0.019, 0.005, 0.148, 0.012, cream);
    box(g, 0.215, 0.301, 0.003, 0, 0.151, 0.033, mat("#c49a37", 0.82));
    plane(
      g,
      0.169,
      0.237,
      printTexture(source(textures, 259), "FIELD NOTES", "#c49a37", true),
      0.006,
      0.16,
      0.035,
    );
    box(g, 0.014, 0.035, 0.001, 0.066, -0.015, 0.012, mat("#a25133"));
    for (let i = 0; i < 14; i++)
      box(
        g,
        0.185,
        0.0004,
        0.021,
        0.005,
        0.018 + i * 0.019,
        0.012,
        mat("#c7bca0"),
      );
    const back = plane(
      g,
      0.17,
      0.036,
      label("MOMENTS TO KEEP", "#c49a37", "#183748"),
      0,
      0.148,
      -0.003,
    );
    back.rotation.y = Math.PI;
  }
}
