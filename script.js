console.log("HELLO WORLD !!! ")

// Variables //  

let menu = document.querySelector("#menubton"); 
let linklist = document.querySelector(".linklist");
let navLinks = document.querySelectorAll("a");
let joinBton = document.querySelector("#joinbton");

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


joinBton.addEventListener("click", function () {
    window.open("https://wa.me/917717555942", "_blank");
})