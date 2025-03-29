function moveSearchInput() {
    const input = document.getElementById('searchInput');
    const desktopContainer = document.getElementById('desktopSearchContainer');
    const mobileContainer = document.getElementById('mobileSearchContainer');

    if (window.innerWidth <= 768) {
        if (mobileContainer && !mobileContainer.contains(input)) {
            mobileContainer.appendChild(input);
        }
    } else {
        if (desktopContainer && !desktopContainer.contains(input)) {
            desktopContainer.appendChild(input);
        }
    }
}

window.addEventListener('DOMContentLoaded', moveSearchInput);
window.addEventListener('resize', moveSearchInput);
