const grid = document.querySelector('.gallery-grid');
const includedIds = grid.dataset.experiences?.split(',');
const experiences = includedIds ? experienceCatalog.filter(experience => includedIds.includes(experience.id)) : experienceCatalog;
const collectionCount = document.querySelector('.collection-count');
if (collectionCount) collectionCount.textContent = `${String(experiences.length).padStart(2, '0')} works`;
for (const experience of experiences) {
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
