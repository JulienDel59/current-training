
const menuBurger = document.getElementById('menuBurger');
const menu = document.getElementById('menu');

menuBurger.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    
    menu.classList.add('closing');

    
    setTimeout(() => {
      menu.classList.remove('active', 'closing');
    }, 900); 
  } else {
    
    menu.classList.add('active');
  }

  menuBurger.classList.toggle('active');
});
