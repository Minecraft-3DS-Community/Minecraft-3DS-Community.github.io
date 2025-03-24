document.querySelectorAll('details').forEach(details => {
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
  