if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
    document.querySelectorAll('.tab-btn').forEach(el => {
      el.style.transition = 'none';
    });
  }
  