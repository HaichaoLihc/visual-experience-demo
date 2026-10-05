const experience = experienceCatalog.find(item => item.id === new URLSearchParams(location.search).get('experience'));

if (!experience) {
  // Removed or unknown works return to the collection.
  location.replace('./');
} else {
  document.title = experience.title;
  document.querySelector('.use').dataset.experience = experience.id;
  const iframe = document.createElement('iframe');
  iframe.className = 'experience-app';
  iframe.title = experience.title;
  iframe.allowFullscreen = true;
  iframe.src = experience.url;
  document.querySelector('.experience-card').append(iframe);
}
