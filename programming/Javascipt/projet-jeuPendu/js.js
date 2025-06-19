

// Partie declaration des variables est constantes //

// Liste des mots a deviner
const listeMots = [
  "astronaute",
  "planete",
  "fusée",
  "galaxie",
  "comete",
  "etoile",
  "satellite",
  "orbite",
  "lune",
  "cosmos",
  "univers",
  "meteorite",
  "exploration",
  "telescope",
  "astronomie",
  "asteroide",
  "nebuleuse",
  "exoplanete",
  "gravité",
  "supernova",
  "constellation",
  "voiedelait",
  "spacecraft",
  "solaire",
  "terraformation",
  "cryogenie",
  "quasar",
  "cosmologie",
  "interstellaire",
  "microgravité",
  "meteor",
  "atmosphere",
  "rover",
  "module",
  "spatiale",
  "ventsolaire",
  "station",
  "spationaute",
  "hubble",
  "astrophysique",
  "lancement",
  "espace",
  "aeronautique",
  "technologie",
  "explorateur",
  "colonie",
  "mission",
  "gravitation",
  "anneau",
  "pluton",
  "uranus",
  "neptune",
  "jupiter",
  "saturne",
  "mars",
  "venus",
  "mercure",
  "eclipse",
  "cratere",
  "arian",
  "asteroid",
  "orbital",
  "cryospace",
  "flux",
  "radiation",
  "magnetosphere",
  "observation",
  "cosmonaut",
  "equipage",
  "graviter",
  "systeme",
  "exosphere",
  "intergalactique",
  "voie",
  "asteroides",
  "atmospherique",
  "celeste",
  "corpsceleste",
  "decollage",
  "debris",
  "destinataire",
  "detection",
  "ejection",
  "evolution",
  "expansion",
  "explosion",
  "flotte",
  "force",
  "fusion",
  "gravimetre",
  "helium",
  "horizon",
  "impact",
  "implosion",
  "ion",
  "laser",
  "lumiere",
  "magnetique",
  "missionnaire",
  "neutron",
  "noyau",
  "observatoire",
  "orbiteur",
  "particule",
  "planetaire"
];

// img pour le changement de background
const backgrounds = [
  'url("images/space.jpg")',
  'url("images/space2.jpg")',
  'url("images/space3.jpg")',
  'url("images/space4.jpg")',
  'url("images/space5.jpg")',
  'url("images/space6.jpg")',
  'url("images/space7.jpg")',
  'url("images/space8.jpg")'
];

// Elément qui constitue l'Astronaute
const pieces = [
  "jetpack",
  "jambe-droit",
  "jambe-gauche",
  "bras-droit",
  "bras-gauche",
  "torse",
  "casque",
];


let motADeviner = choisirMot(); // variable pour stocker le mot a deviner
const lettresDevinees = new Set(); // Stocke les lettres devinées par l'utilisateur 

// valeurs nombre d'erreurs initiales et le nombre max d'erreurs
let erreurs = 0;
const maxErreurs = 7;

document.getElementById("zoneMot").textContent = afficherMotMasque(motADeviner, lettresDevinees);// Affiche le mot masqué au début du jeu 

const inputLettre = document.getElementById('lettre'); // Input pour la saisie de la lettre

inputLettre.disabled = true; // Désactive l'input au début du jeu

//Partie Fonction //

/**
 * la fonction "choisirMot()" permet de choisir un mot au hasard dans une liste prédéfinie.
 */
function choisirMot() {
  const index = Math.floor(Math.random() * listeMots.length); // Génère un index aléatoire
    return listeMots[index]; // retourne le mot a l'index choisi
}

/**
 * la fonction "changerBackground()" permet de choisir une image au hasard dans une liste prédéfinie(background-img).
 */
function changerBackground() {
  const index = Math.floor(Math.random() * backgrounds.length); 
  document.body.style.backgroundImage = backgrounds[index]; 
}

/**
 * la function "showCustomAlert(message)" permet d'afficher une alerte personnalisée 
 * @param {string} message 
 */

// alertes (victoire et defaite)
function showCustomAlert(message) { 
    const alertBox = document.getElementById('customAlert'); // Récupère la boite d'alerte
    const alertMessage = document.getElementById('customAlertMessage'); // Récupère le message d'alerte
    alertMessage.textContent = message; // Met le message d'alerte
    alertBox.classList.remove('hidden'); // Affiche la boite d'alerte
    const closeBtn = document.getElementById('customAlertClose'); // Récupère le bouton de fermeture de l'alerte
    // Ajoute un écouteur d'éVénement pour le bouton de fermeture
    closeBtn.onclick = () => { 
        alertBox.classList.add('hidden');// cache la boite d'alerte
     resetGame(); // Réinitialise le jeu
    };
}

/**
 * la fonction "resetGame()" permet de réinitialiser le jeu 
 */
function resetGame() {
  changerBackground(); // Change le background a chaque reset
  lettresDevinees.clear(); // Vide l'ensemble des lettres devinées
  motADeviner = choisirMot(); // Choisit un nouveau mot a deviner
  console.log( motADeviner);
  erreurs = 0; // Reset le nombre d'erreurs
  document.getElementById("zoneMot").textContent = afficherMotMasque(motADeviner, lettresDevinees);// Affiche le  nouveau mot masqué
  document.getElementById("nbErreur").textContent = 'Erreur 0/7'; // Reset le compteur d'erreurs
  inputLettre.disabled = false; // Réactive l'input pour la saisie de la lettre
  inputLettre.value = ""; // Vide l'input
  inputLettre.focus(); // Met le focus sur l'input
  // Reset les piéces de l'astronaute 
  pieces.forEach(pieces => {
    const piece = document.querySelector('.' + pieces); // Sélectionne la piéce de l'astronaute
    if (piece) { 
      piece.style.visibility = 'visible'; // Rend les pièces visibles
    }
  });
}
/**
 * la fonction "traiterLettre(lettre)" permet de traiter la tettre saisie par l'utilisateur: si deja utilisé ou non et si ellse est dans le mot ou non.(gerer aussi les erreurs)
 * @param {string} lettre 
 * @returns 
 */
function traiterLettre(lettre) { 
  if (lettresDevinees.has(lettre)) { // Vérifie si la lettre a deja été devinée
    secouerInput(); 
    return;
  }

  lettresDevinees.add(lettre); // Ajoute la lettre a l'ensemble des lettres devinées

  // Affiche le mot masqué avec la lettre devinée
  if (motADeviner.includes(lettre)) { // Vérifie si la lettre est dans le mot a deviner
    zoneMot.textContent = afficherMotMasque(motADeviner, lettresDevinees); // Met a jour le mot masqué
    if (!zoneMot.textContent.includes('_')) { // Vérifie si toutes les lettres ont été devinées
      showCustomAlert("Félicitations ! Tu as gagné 🚀"); 
      inputLettre.disabled = true; // Désactive l'input
    }
  } else { // Si la lettre n'est pas dans le mot
    erreurs++; // Incrémente le nombre d'erreurs
    document.getElementById("nbErreur").textContent = `${erreurs}/${maxErreurs}`;// Met a jour le compteur d'erreurs
    if (erreurs <= maxErreurs) { // Si le nombre d'erreurs est inférieur ou égal au maximum
      const nomPiece = pieces[erreurs - 1]; // Récupére le nom de la pièce a cacher 
      const piece = document.querySelector(`.${nomPiece}`) // Sélectionne la piéce de l'astronaute 
      if (piece) piece.style.visibility = 'hidden'; // Cache la pièce correspondante
    }

    if (erreurs >= maxErreurs) { // Si le nombre d'erreurs est supérieur ou égal au maximum
      showCustomAlert(`Perdu ! Le mot était "${motADeviner}" 💀`); 
      inputLettre.disabled = true; 
    }
  }
}
/**
 * La fonction "secouerInput()" permet d'animer l'input dans les cas shoutaités
 */
function secouerInput() {
  inputLettre.classList.add('shake'); // Ajoute la classe shake pour l'animation
  inputLettre.addEventListener('animationend', () => {  // Ecoute l'événement de fin d'animation
    inputLettre.classList.remove('shake'); // Retire la classe shake pour réninitialier l'animation
  });
}
/**
 * La fonction "afficherMotMasque(mot, lettresDevinees)" affiche le mot masqué avec les lettres devinées
 * @param {string} mot 
 * @param {string} lettresDevinees 
 * @returns 
 */
function afficherMotMasque(mot, lettresDevinees) { 
   return mot.split('').map(lettre =>  // Sépare le mot en lettres individuelles et recrée un tableau avec chaque lettre
    lettresDevinees.has(lettre) ? lettre : '_' // Si la lettre a été devinée, l'affiche , sinon affiche un tiret bas
  ).join(' '); // Joint les lettres avec un espace
}

// Relie le bouton "commencer" a la fonction de reset
btnPlay.addEventListener('click', () => { 
  resetGame();

}) 

// Gere input de l'utilisateur pour la lettre (caratère valide ou non et fonction traiterLettre)")
inputLettre.addEventListener('input', (event) => { 
  const lettre = event.target.value.toLowerCase(); // Récupère la valeur de l'input et la met en minuscule

  // Vérifie si la lettre est valide (une seule lettre entre a-z)
   if (!/^[a-z]$/.test(lettre)) {
    secouerInput();
    event.target.value = ""; // Vide l'input si la lettre n'est pas valide
    return;
  }

  inputLettre.disabled = true; // Désactive l'input pour éviter les saisies multiples

  setTimeout(() => { // Utilise setTimeout pour simuler un délai avant de traiter la lettre
    traiterLettre(lettre); // Traite la lettre saisie
 
    inputLettre.disabled = false; // Réactive l'input apres le traitement de la lettre
    inputLettre.value = ""; // Vide l'input apres le traitment de la lettre
    inputLettre.focus();
  }, 300); 
});





