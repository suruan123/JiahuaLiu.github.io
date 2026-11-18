const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
const emailAddress = document.querySelector('#email-address');

if (navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    copyStatus.textContent = '';

    try {
      await navigator.clipboard.writeText(emailAddress.textContent);
      copyStatus.textContent = '已复制邮箱';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(emailAddress);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = '已选中邮箱，可手动复制。';
    }
  });
}
