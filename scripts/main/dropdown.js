document.getElementById("dropDownToggle").addEventListener("click", function () {
    const container = document.querySelector(".dropDownContainer");
    const arrow = document.getElementById("dropDownArrow");

    container.classList.toggle("closed");
    arrow.classList.toggle("flipped");
});

document.addEventListener('click', function(event) {
    const dropDownContainer = document.querySelector('.dropDownContainer');
    const dropDownButton = document.querySelector('.dropDownButton');
    const dropDownArrow = document.querySelector('#dropDownArrow');
    
    if (!dropDownContainer.contains(event.target) && !dropDownButton.contains(event.target)) {
        dropDownContainer.classList.add('closed'); 
        dropDownArrow.classList.remove('flipped'); 
    }
});

dropDownButton.addEventListener('click', function(event) {
    event.stopPropagation();
    
    dropDownContainer.classList.toggle('closed');
    
    dropDownArrow.classList.toggle('flipped');
});
