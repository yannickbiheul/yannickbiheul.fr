

// MENU BURGER
let boutonBurger = document.querySelector(".boutonBurger");
let menuBurger = document.querySelector(".menuBurger");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let elts = document.querySelectorAll(".elt");

function ouvrirMenu() {
    menuBurger.classList.toggle("menuBurgerOpen");
    span1.classList.toggle("span1Open");
    span2.classList.toggle("span2Open");
    span3.classList.toggle("span3Open");
}
boutonBurger.addEventListener("click", ouvrirMenu);

for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener("click", ouvrirMenu);
}

// LOADER
const loader = document.querySelector(".loader");
boutonBurger.style.opacity = "0";

window.addEventListener("load", function () {
    loader.classList.add("fondu-out");
    boutonBurger.style.opacity = "1";
})