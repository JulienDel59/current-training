
const menuBurger = document.getElementById('menuBurger');
const menu = document.getElementById('menu');

menuBurger.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    // Démarre fermeture avec disparition des items
    menu.classList.add('closing');

    // Après 0.5s + délai max 0.3s + un petit buffer, enlève classes
    setTimeout(() => {
      menu.classList.remove('active', 'closing');
    }, 900); // 900ms laisse le temps aux items de disparaître puis menu ferme
  } else {
    // Ouverture directe
    menu.classList.add('active');
  }

  menuBurger.classList.toggle('active');
});