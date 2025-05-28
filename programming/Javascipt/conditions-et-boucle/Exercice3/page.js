// Génère un nombre aléatoire entre 1 et 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let guess = 0; // initialisation
let attempts = 0; // nombre de tentatives

while (guess !== secretNumber) {
  // Demander à l'utilisateur de deviner
  guess = parseInt(prompt("Devinez un nombre entre 1 et 100 :"));


  if (isNaN(guess)) {
  alert("Ce n'est pas un nombre valide !");
  continue; // Recommence la boucle sans compter cette tentative
  }
  attempts++;

  if (guess < secretNumber) {
    alert("Trop petit !");
  } else if (guess > secretNumber) {
    alert("Trop grand !");
  } else {
    alert("Bravo ! Vous avez trouvé le nombre en " + attempts + " tentative(s).");
  }
}

