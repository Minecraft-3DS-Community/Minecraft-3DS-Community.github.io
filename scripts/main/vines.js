function generateVines() {
  const vinesContainer = document.getElementById('vines');
  vinesContainer.innerHTML = "";

  const vineWidth = 32;
  const gap = 64;
  const spacing = vineWidth + gap;
  const maxHeight = 2;
  const minLeft = 360;

  const header = document.querySelector('.header');
  const headerWidth = header.offsetWidth;
  vinesContainer.style.width = headerWidth + 'px';

  const availableWidth = headerWidth - minLeft;
  const totalColumns = Math.floor(availableWidth / spacing);

  for (let i = 0; i < totalColumns; i++) {
    if (i % 4 === 0) continue;
    const vineHeight = Math.floor(Math.random() * maxHeight) + 1;
    const left = minLeft + i * spacing;

    for (let j = 0; j < vineHeight; j++) {
      const vine = document.createElement('img');
      vine.src = 'img/bg/vine.png';
      vine.style.width = vineWidth + 'px';
      vine.style.position = 'absolute';
      vine.style.left = `${left}px`;
      vine.style.top = `${j * vineWidth}px`;
      vine.style.display = 'block';
      vinesContainer.appendChild(vine);
    }
  }
}

window.addEventListener('DOMContentLoaded', generateVines);

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    generateVines();
  }, 250);
});
