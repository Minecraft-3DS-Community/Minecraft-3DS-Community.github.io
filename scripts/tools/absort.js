document.querySelectorAll('.toolsBody ul').forEach(ul => {
    const lis = Array.from(ul.querySelectorAll('li'));
    lis.sort((a, b) => a.textContent.localeCompare(b.textContent));
    lis.forEach(li => ul.appendChild(li));
  });
  