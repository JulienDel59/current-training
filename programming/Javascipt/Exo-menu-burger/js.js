
const menuBurger = document.getElementById('menuBurger');
const menu = document.getElementById('menu');

menuBurger.addEventListener('click', () => {
  menu.classList.toggle('active');
});