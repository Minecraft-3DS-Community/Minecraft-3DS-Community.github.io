const containers = document.querySelectorAll('.grid-container');

containers.forEach(container => {
  const items = Array.from(container.querySelectorAll('.grid-item'));

  items.sort((a, b) => {
    const descA = a.querySelector('.seedDesc').textContent.toLowerCase();
    const descB = b.querySelector('.seedDesc').textContent.toLowerCase();
    return descA.localeCompare(descB);
  });

  items.forEach(item => container.appendChild(item));
});