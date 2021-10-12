var openMenu = document.querySelector(".fas.fa-bars")
console.log(openMenu)
var hamMenu = document.querySelector(".hamburger-menu")

openMenu.addEventListener("click", function() {

    hamMenu.classList.add("active")
})