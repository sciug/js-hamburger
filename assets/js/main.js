var openMenu = document.querySelector(".fas.fa-bars")
var closeMenu = document.querySelector(".close")
var hamMenu = document.querySelector(".hamburger-menu")



openMenu.addEventListener("click", function() {

    hamMenu.classList.add("active")
})

closeMenu.addEventListener("click", function() {
    hamMenu.classList.remove("active")
    
} )