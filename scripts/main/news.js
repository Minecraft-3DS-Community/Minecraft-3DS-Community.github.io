fetch('/plugins/template/news.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('news');
    container.innerHTML = html;

    container.querySelectorAll('details').forEach(details => {
      details.open = true;

      const summary = details.querySelector('summary');
      if (summary) {
        summary.remove();
      }

      const parent = details.parentNode;
      while (details.firstChild) {
        parent.insertBefore(details.firstChild, details);
      }

      parent.removeChild(details);
    });
  })
  .catch(error => {
    console.error('Error loading template:', error);
  });
