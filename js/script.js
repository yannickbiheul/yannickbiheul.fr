let boutonBurger = document.querySelector('.boutonBurger');
let menuBurger = document.querySelector('.menuBurger');

boutonBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('menuBurgerOpen');
})

let titre = document.querySelector('.titre');
let menuTitre = document.querySelector('.menuTitre');

titre.addEventListener('click', function() {
    menuTitre.classList.toggle('menuTitreOpen');
    titre.classList.toggle('titreOpen');
})