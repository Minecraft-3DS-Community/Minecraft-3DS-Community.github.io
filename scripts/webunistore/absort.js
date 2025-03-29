window.addEventListener('DOMContentLoaded', () => {
    const modItems = document.querySelectorAll('.modItem');
    
    const modItemsArray = Array.from(modItems);

    modItemsArray.sort((a, b) => {
        const headerA = a.querySelector('.modHeader').textContent.replace(/^The\s+/i, '');
        const headerB = b.querySelector('.modHeader').textContent.replace(/^The\s+/i, '');
        
        return headerA.localeCompare(headerB);
    });

    const container = modItems[0].parentElement;
    modItemsArray.forEach(modItem => container.appendChild(modItem));
});
