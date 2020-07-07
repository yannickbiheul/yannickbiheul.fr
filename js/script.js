/* BOUTON BURGER */
let titre = document.querySelector('.titre');
let menuTitre = document.querySelector('.menuTitre');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');

titre.addEventListener('click', function() {
    menuTitre.classList.toggle('menuTitreOpen');
    titre.classList.toggle('titreOpen');
    span1.classList.toggle('span1Open');
    span2.classList.toggle('span2Open');
    span3.classList.toggle('span3Open');
})