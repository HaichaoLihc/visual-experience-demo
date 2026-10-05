import { NEW_POSTCARDS } from "./postcard-collections.js";
// Stable links between every print and the user's reviewed photo collection.
export const TRIP_ART = [
  {
    photo: 3,
    title: "把身体交给风",
    caption: "UPSIDE DOWN",
    scene: "蓝湖边单手侧翻的那个瞬间",
  },
  {
    photo: 4,
    title: "帽子上的访客",
    caption: "UNEXPECTED COMPANY",
    scene: "海鸥落在黑色帽子上的湖边瞬间",
  },
  {
    photo: 7,
    title: "坐在云上",
    caption: "ABOVE THE CLOUDS",
    scene: "朋友们坐在折叠椅上看云雾山谷",
  },
  {
    photo: 25,
    title: "新认识的小伙伴",
    caption: "A NEW FRIEND",
    scene: "怀里抱着白色小羊的旅行肖像",
  },
  {
    photo: 64,
    title: "最好的座位",
    caption: "THE BEST SEAT",
    scene: "红色越野车、车顶折叠椅和蓝湖",
  },
  {
    photo: 73,
    title: "慢慢走进山里",
    caption: "WALK SLOW",
    scene: "橙色背包沿着云里的山路前行",
  },
  {
    photo: 81,
    title: "把这一汪蓝带走",
    caption: "A LITTLE TURQUOISE",
    scene: "碧蓝湖水与周围的山林",
  },
  {
    photo: 210,
    title: "在山谷里歇一会",
    caption: "A MOMENT IN THE VALLEY",
    scene: "旅人背影与身旁的橙色背包",
  },
  {
    photo: 225,
    title: "4680 的那一天",
    caption: "THAT DAY / 4680",
    scene: "穿蓝色冲锋衣站在 4680 标识前的身影",
  },
  {
    photo: 259,
    title: "黄墙前的午后",
    caption: "GOLDEN AFTERNOON",
    scene: "黄色墙面前的黑衣旅行肖像",
  },
  {
    photo: 1,
    title: "风有好多种颜色",
    caption: "COLOURS IN THE WIND",
    scene: "铺满彩色经幡的巨大帐篷与前方的旅人",
  },
  {
    photo: 8,
    title: "山路还很长",
    caption: "FURTHER INTO THE GREEN",
    scene: "在绿色峡谷山路上行走的徒步者",
  },
  {
    photo: 12,
    title: "一座山的倒影",
    caption: "THE MOUNTAIN IN THE LAKE",
    scene: "雪山与碧蓝湖面组成的山水画面",
  },
  {
    photo: 13,
    title: "把脚伸进夏天",
    caption: "BY THE WATER",
    scene: "几位同行者在水边石岸歇脚",
  },
  {
    photo: 209,
    title: "山路补给站",
    caption: "TRAIL BREAK",
    scene: "两位旅人、折叠桌椅和登山背包",
  },
  {
    photo: 223,
    title: "路上有好朋友",
    caption: "GOOD COMPANY",
    scene: "蓝衣旅人弯腰抚摸背着行囊的狗",
  },
  {
    photo: 226,
    title: "山的轮廓",
    caption: "RIDGELINES",
    scene: "旅行照片中层层起伏的高山轮廓",
  },
  {
    photo: 268,
    title: "抬头，风在头顶",
    caption: "LOOKING UP",
    scene: "从旅人身后仰望头顶放射展开的彩色经幡",
  },
  {
    photo: 278,
    title: "一层一层的蓝",
    caption: "BLUE HOURS",
    scene: "黑帽旅人在弯曲蓝色湖湾前的停留",
  },
  {
    photo: 23,
    title: "再见之前，起飞",
    caption: "TAKING FLIGHT",
    scene: "湖边旅人与在头顶展开双翼的鸟",
  },
]
  .map((a) => ({ ...a, style: "水粉版画", collection: "Painted journeys" }))
  .concat(NEW_POSTCARDS);
export const MOBILE_SOURCE_IDS = [
  3, 4, 7, 25, 64, 73, 81, 210, 225, 259, 223, 226, 268, 209, 278, 1,
];
export const MOBILE_TITLES = [
  "湖边侧手翻",
  "帽子上的海鸥",
  "坐在云上",
  "抱小羊的旅人",
  "红车上的好座位",
  "橙色背包",
  "蓝湖",
  "山谷歇脚",
  "4680 旅人",
  "黄墙肖像",
  "路上的小狗",
  "雪山轮廓",
  "仰望经幡",
  "山路补给站",
  "蓝色湖湾",
  "风里的经幡",
];
export const sourceUrl = (n) =>
  `./assets/personal/photo-${String(n).padStart(3, "0")}.jpg`;
export const artUrl = (i) =>
  `./assets/trip-art/art-${String(i).padStart(2, "0")}.jpg`;
export function artForPhoto(textures, n) {
  const i = TRIP_ART.findIndex((a) => a.photo === n);
  return (
    textures["art-" + i] || textures["photo-" + String(n).padStart(3, "0")]
  );
}

// A coprime stride interleaves media across rows; each print occurs once.
export function postcardOrder() {
  const count = TRIP_ART.length,
    gcd = (a, b) => (b ? gcd(b, a % b) : a);
  let step = 27;
  while (gcd(step, count) !== 1) step += 2;
  return Array.from(
    { length: Math.min(100, count) },
    (_, i) => (20 + i * step) % count,
  );
}
