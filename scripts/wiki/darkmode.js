const settingsBtn = document.querySelector('.settingsButton');
      const modal = document.getElementById('settingsModal');
      const closeBtn = document.querySelector('.closeButton');
      const darkToggle = document.getElementById('darkModeToggle');
    
      // Open and close modal
      settingsBtn.onclick = () => modal.style.display = 'flex';
      closeBtn.onclick = () => modal.style.display = 'none';
    
      // Toggle dark mode and save state
      darkToggle.onchange = () => {
        const isDark = darkToggle.checked;
        document.body.classList.toggle('dark-mode', isDark);
        localStorage.setItem('darkModeEnabled', isDark);
      };
    
      // Load saved state on page load
      window.onload = () => {
        const saved = localStorage.getItem('darkModeEnabled') === 'true';
        darkToggle.checked = saved;
        document.body.classList.toggle('dark-mode', saved);
      };