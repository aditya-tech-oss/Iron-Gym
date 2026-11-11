console.log("HELLO WORLD !!! ")

// Variables //  

let menu = document.querySelector("#menubton"); 
let linklist = document.querySelector(".linklist");

// Coding //

menu.addEventListener("click", function() {

    let isOpen = linklist.classList.toggle("show-menu");

    if (isOpen) {
        menu.textContent = "✕";
    } 
    else {
        menu.textContent = "☰";
    }

});