// A shared catalog for Explore, Flow, and the profile's demo collection.
const experienceCatalog = [
  { id: 'stream-implement-3d', title: 'Undertow' },
  { id: 'souvenir-shop', title: 'Souvenir Shop' },
  { id: 'chongqing-book', title: 'Chongqing · Between Levels' },
  { id: 'card-gallery', title: 'Card Gallery' },
  { id: 'image-atlas', title: 'Image Atlas' },
  { id: 'umbrella-canopy', title: 'Umbrella Canopy' },
].map(experience => ({
  ...experience,
  url: `experiences/${experience.id}/`,
  poster: `previews/${experience.id}.jpg`,
}));
