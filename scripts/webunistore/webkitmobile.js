document.addEventListener("DOMContentLoaded", function () {
    const isSafari = /AppleWebKit/.test(navigator.userAgent) &&
                     !/Chrome|CriOS|Chromium/.test(navigator.userAgent);
    
    if (isSafari) {
        document.querySelectorAll('.modFooter').forEach(icon => {
            icon.classList.add('webkit-fix');
        });
        document.querySelectorAll('.modDescription').forEach(icon => {
            icon.classList.add('webkit-desc-fix');
        });
    }
        
});
