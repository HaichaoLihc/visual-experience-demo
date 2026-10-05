const profileButton = document.querySelector('.profile');
const profileDialog = document.createElement('dialog');
profileDialog.className = 'use-dialog profile-dialog';
profileDialog.setAttribute('aria-labelledby', 'profile-dialog-title');
profileDialog.setAttribute('aria-describedby', 'profile-dialog-description');
profileDialog.innerHTML = `
  <button class="use-dialog-close" type="button" aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
  <h2 id="profile-dialog-title">Profiles are coming soon</h2>
  <p id="profile-dialog-description">Soon you’ll have your own page to keep the works you make and save. For now, explore and use any work in the collection.</p>
  <button class="profile-dialog-done" type="button" autofocus>Got it</button>
`;
document.body.append(profileDialog);

profileButton.addEventListener('click', () => profileDialog.showModal());
for (const button of profileDialog.querySelectorAll('button')) button.addEventListener('click', () => profileDialog.close());
profileDialog.addEventListener('click', event => {
  if (event.target !== profileDialog) return;
  const bounds = profileDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) profileDialog.close();
});
profileDialog.addEventListener('close', () => profileButton.focus({ preventScroll: true }));
