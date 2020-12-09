// JavaScript Document
var hamburgerMenu = document.querySelector("nav button");

function toggleMenu(event) {
  deHamburger = event.target.parentNode;
  deHamburger.classList.toggle("toonMenu");
}

hamburgerMenu.addEventListener("click", toggleMenu);
