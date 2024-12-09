// JavaScript Document
console.log("hi");

const menuButton = document.querySelector('#menu-button');

menuButton.onclick = openMenu;

function openMenu() {
    const nav = document.querySelector('.menu-content');
    nav.classList.toggle('toonMenu');

// prompt: Hoe wijzig ik de tekst menu naar close ipv een kruisje
// bron: ChatGPT

if (nav.classList.contains('toonMenu')) {
    menuButton.innerText = 'Close';
  } else {
    menuButton.innerText = 'Menu';
  }
}

