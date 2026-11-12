console.log("HELLO WORLD !!! ")

// Variables //  

let menu = document.querySelector("#menubton"); 
let linklist = document.querySelector(".linklist");
let navLinks = document.querySelectorAll("a");

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

navLinks.forEach( function (val) {
    
    val.addEventListener("click" ,function() {
        linklist.classList.remove("show-menu")
        menu.textContent = "☰";
    })
})