// A shared catalog for Explore and Flow.
const experienceCatalog = [
  { id: 'umbrella-canopy', title: 'Umbrella Canopy' },
  { id: 'slide-curtain', title: 'Slide Curtain' },
  { id: 'stream-implement-3d', title: 'Undertow' },
  { id: 'souvenir-shop', title: 'Souvenir Shop', poster: 'previews/souvenir-shop.jpg?v=clean-cover' },
  { id: 'chongqing-book', title: 'Chongqing · Between Levels' },
  { id: 'card-gallery', title: 'Card Gallery' },
  { id: 'image-atlas', title: 'Image Atlas' },
  { id: 'paper-cloud', title: 'Paper Cloud' },
  { id: 'hanging-lenses', title: 'Hanging Lenses' },
  { id: 'after-blue', title: 'After Blue' },
  { id: 'chongqing-collage', title: 'Chongqing · A City in Layers' },
  { id: 'after-weather', title: 'After Weather' },
].map(experience => ({
  ...experience,
  url: `experiences/${experience.id}/`,
  poster: experience.poster || `previews/${experience.id}.jpg`,
  sourceUrl: `https://github.com/HaichaoLihc/visual-experience-demo/tree/main/experiences/${experience.id}`,
}));
