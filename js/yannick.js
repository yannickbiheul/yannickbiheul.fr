// HEADER 

window.onscroll = function() {
    if (document.documentElement.scrollTop > 800) {
        document.querySelector("header").style.backgroundColor = "#000";
        document.querySelector("header").style.padding = "25px 75px";
    } else {
        document.querySelector("header").style.backgroundColor = "transparent";
        document.querySelector("header").style.padding = "35px 75px";
    }
}





// LOADER

// const loader = document.querySelector(".loader");
// boutonBurger.style.opacity = "0";

// window.addEventListener("load", function () {
//     loader.classList.add("fondu-out");
//     boutonBurger.style.opacity = "1";
// })


// PANNEAU

const lienPanneau = document.querySelector(".lienPanneau");
const boutonPanneau = document.querySelector("#boutonPanneau");
const panneau = document.querySelector(".panneau");

function ouvrirPanneau(e) {
    e.preventDefault();
    panneau.classList.toggle("panneauOpen");
}

function fermerPanneau(e) {
    e.preventDefault();
    panneau.classList.toggle("panneauOpen");
}

lienPanneau.addEventListener("click", ouvrirPanneau);
boutonPanneau.addEventListener("click", fermerPanneau);