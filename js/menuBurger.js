// MENU BURGER

const boutonBurger = document.querySelector(".boutonBurger");
let menuBurger = document.querySelector(".menuBurger");
let elts = document.querySelectorAll(".elt");

function ouvrirMenu() {
    menuBurger.classList.toggle("menuBurgerOpen");
    boutonBurger.classList.toggle("active");
}
boutonBurger.addEventListener("click", ouvrirMenu);

for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener("click", ouvrirMenu);
}
