const grid = document.querySelector('.gallery-grid');
const collectionCount = document.querySelector('.collection-count');
if (collectionCount) collectionCount.textContent = `${String(experienceCatalog.length).padStart(2, '0')} works`;
for (const experience of experienceCatalog) {
  const card = document.createElement('a');
  card.className = 'gallery-card';
  card.href = `flow.html?experience=${encodeURIComponent(experience.id)}`;
  card.setAttribute('aria-label', `Open ${experience.title}`);
  const image = document.createElement('img');
  image.src = experience.poster;
  image.alt = experience.title;
  image.loading = 'lazy';
  image.decoding = 'async';
  card.append(image);
  grid.append(card);
}
