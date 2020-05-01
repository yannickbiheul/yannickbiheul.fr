let bouton = document.querySelector('.bouton');
let menu = document.querySelector('.nav-mobile');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');

bouton.addEventListener('click', function() {
    menu.classList.toggle('nav-open');
    span3.classList.toggle('off');
    span2.classList.toggle('rotateLeft');
    span1.classList.toggle('rotateRight');
})