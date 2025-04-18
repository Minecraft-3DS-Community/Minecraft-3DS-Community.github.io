fetch('/plugins/template/dropDown.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('dropDownContent').innerHTML = html;
    });