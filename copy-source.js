const sourceButton = document.querySelector('.use');
const useDialog = document.createElement('dialog');
useDialog.className = 'use-dialog';
useDialog.setAttribute('aria-labelledby', 'use-dialog-title');
useDialog.setAttribute('aria-describedby', 'use-dialog-description');
useDialog.innerHTML = `
  <button class="use-dialog-close" type="button" aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
  <h2 id="use-dialog-title">Use this experience</h2>
  <p id="use-dialog-description">Copy the project link and give it to your agent to create your own version.</p>
  <div class="use-dialog-actions">
    <button class="prompt-copy" type="button" autofocus><span>Copy Prompt</span><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="12" rx="2"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/></svg></button>
    <a class="source-link" target="_blank" rel="noopener noreferrer">View Source<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></a>
  </div>
  <div class="copy-manual" hidden><label for="source-url">Select and copy this link into your agent.</label><input id="source-url" type="url" readonly></div>
  <span class="sr-only" role="status"></span>
`;
document.body.append(useDialog);
const promptCopy = useDialog.querySelector('.prompt-copy');
const copyLabel = promptCopy.querySelector('span');
const copyStatus = useDialog.querySelector('[role="status"]');
const manualCopy = useDialog.querySelector('.copy-manual');
let copyFeedbackTimer;
let copyAttempt = 0;

function resetSourceFeedback() {
  clearTimeout(copyFeedbackTimer);
  copyLabel.textContent = 'Copy Prompt';
  copyStatus.textContent = '';
  manualCopy.hidden = true;
}

window.sourceCopy = {
  setExperience(id) {
    if (useDialog.open) useDialog.close();
    copyAttempt++;
    resetSourceFeedback();
    sourceButton.dataset.experience = id;
    const work = experienceCatalog.find(item => item.id === id);
    sourceButton.disabled = !work?.sourceUrl;
    sourceButton.title = work ? `Use ${work.title}` : '';
  },
};

sourceButton.addEventListener('click', () => {
  const work = experienceCatalog.find(item => item.id === sourceButton.dataset.experience);
  if (!work?.sourceUrl) return;
  resetSourceFeedback();
  useDialog.querySelector('.source-link').href = work.sourceUrl;
  useDialog.querySelector('input').value = work.sourceUrl;
  useDialog.showModal();
});

useDialog.querySelector('.use-dialog-close').addEventListener('click', () => useDialog.close());
useDialog.addEventListener('click', event => {
  if (event.target !== useDialog) return;
  const bounds = useDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) useDialog.close();
});
useDialog.addEventListener('close', () => {
  copyAttempt++;
  resetSourceFeedback();
  sourceButton.focus({ preventScroll: true });
});

promptCopy.addEventListener('click', async () => {
  const id = sourceButton.dataset.experience;
  const work = experienceCatalog.find(item => item.id === id);
  if (!work?.sourceUrl) return;
  const attempt = ++copyAttempt;
  resetSourceFeedback();
  try {
    // Call directly from the click to retain mobile browser user activation.
    await navigator.clipboard.writeText(work.sourceUrl);
    if (attempt !== copyAttempt || !useDialog.open) return;
    copyLabel.textContent = 'Copied';
    copyStatus.textContent = `${work.title} source link copied. Paste it into your agent.`;
    copyFeedbackTimer = setTimeout(resetSourceFeedback, 1800);
  } catch {
    if (attempt !== copyAttempt || !useDialog.open) return;
    manualCopy.hidden = false;
    const input = manualCopy.querySelector('input');
    input.focus();
    input.select();
  }
});
