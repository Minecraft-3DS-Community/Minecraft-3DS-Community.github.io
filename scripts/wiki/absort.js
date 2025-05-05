document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".column-list ul").forEach(ul => {
      const items = Array.from(ul.querySelectorAll("li"));

      items.sort((a, b) => {
        const aText = a.querySelector("strong")?.textContent.trim().toLowerCase() || "";
        const bText = b.querySelector("strong")?.textContent.trim().toLowerCase() || "";
        return aText.localeCompare(bText);
      });

      ul.innerHTML = "";
      items.forEach(li => ul.appendChild(li));
    });
  });