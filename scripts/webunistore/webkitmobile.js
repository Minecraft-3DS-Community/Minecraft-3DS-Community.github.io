document.addEventListener("DOMContentLoaded", function () {
    const isWebkitMobile = /AppleWebKit/.test(navigator.userAgent) && /Mobile|iPhone|iPad|Android/.test(navigator.userAgent);
    
    if (isWebkitMobile) {
    document.querySelectorAll('.modFooter').forEach(icon => {
        icon.classList.add('webkit-mobile-fix');
    });
    }
    });
    