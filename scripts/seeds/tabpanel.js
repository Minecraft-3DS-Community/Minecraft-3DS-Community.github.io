function stretchTabPanel() {
    const tabPanel = document.querySelector('.tab-panel.active');
    if (!tabPanel) return;

    const top = tabPanel.getBoundingClientRect().top + window.scrollY;
    const height = window.innerHeight - top;
    tabPanel.style.height = `${height}px`;
    tabPanel.style.overflowY = 'auto';
  }

  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;

      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
        panel.style.height = '';
      });

      button.classList.add('active');
      const activePanel = document.getElementById(tabId);
      activePanel.classList.add('active');

      stretchTabPanel(); 
    });
  });

  window.addEventListener('load', stretchTabPanel);
  window.addEventListener('resize', stretchTabPanel);