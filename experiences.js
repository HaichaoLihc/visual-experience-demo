// A shared catalog for Explore, Flow, and the profile's demo collection.
const experienceCatalog = [
  { id: 'stream-implement-3d', title: 'Undertow' },
  { id: 'souvenir-shop', title: 'Souvenir Shop', poster: 'previews/souvenir-shop.jpg?v=clean-cover' },
  { id: 'chongqing-book', title: 'Chongqing · Between Levels' },
  { id: 'card-gallery', title: 'Card Gallery' },
  { id: 'image-atlas', title: 'Image Atlas' },
  { id: 'umbrella-canopy', title: 'Umbrella Canopy' },
].map(experience => ({
  ...experience,
  url: `experiences/${experience.id}/`,
  poster: experience.poster || `previews/${experience.id}.jpg`,
  sourceUrl: `https://github.com/HaichaoLihc/visual-experience-demo/tree/main/experiences/${experience.id}`,
}));
