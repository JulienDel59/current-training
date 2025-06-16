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

function choisirMot() {
  const index = Math.floor(Math.random() * listeMots.length);
  return listeMots[index];
}

function showCustomAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('customAlertMessage');
    alertMessage.textContent = message;
    alertBox.classList.remove('hidden');

    const closeBtn = document.getElementById('customAlertClose');
    closeBtn.onclick = () => {
        alertBox.classList.add('hidden');
     resetGame();   
    };
}

function resetGame() {
  lettresDevinees.clear();
  motADeviner = choisirMot();
  erreurs = 0;
  document.getElementById("zoneMot").textContent = afficherMotMasque(motADeviner, lettresDevinees);
  document.getElementById("nbErreur").textContent = 'Erreur 0/7';
  inputLettre.disabled = false;
  inputLettre.value = "";
  inputLettre.focus();
  pieces.forEach(pieces => {
    const piece = document.querySelector('.' + pieces);
    if (piece) {
      piece.style.visibility = 'visible'; 
    }
  });
}

function secouerInput() {
  inputLettre.classList.add('shake');
  inputLettre.addEventListener('animationend', () => {
    inputLettre.classList.remove('shake');
  });
}


btnPlay.addEventListener('click', () => {
  resetGame();

})  

let motADeviner = choisirMot();
const lettresDevinees = new Set(); 

let erreurs = 0;
const maxErreurs = 7;

const pieces = [
  "jetpack",
  "jambe-droit",
  "jambe-gauche",
  "bras-droit",
  "bras-gauche",
  "torse",
  "casque",
];

document.getElementById("zoneMot").textContent = afficherMotMasque(motADeviner, lettresDevinees);

function afficherMotMasque(mot, lettresDevinees) {
  return mot.split('').map(lettre => 
    lettresDevinees.has(lettre) ? lettre : '_'
  ).join(' ');
}

const inputLettre = document.getElementById('lettre');

inputLettre.disabled = true;



inputLettre.addEventListener('input', (event) => {
  const lettre = event.target.value.toLowerCase();

  if (/^[a-z]$/.test(lettre)) {

    if (lettresDevinees.has(lettre)) {
      console.log("Lettre déjà proposée :", lettre);
      secouerInput();
    } else {
      lettresDevinees.add(lettre);

      if (motADeviner.includes(lettre)) {
        zoneMot.textContent = afficherMotMasque(motADeviner, lettresDevinees);
        if (!zoneMot.textContent.includes('_')) {
          showCustomAlert("Félicitations ! Tu as gagné 🚀");
          inputLettre.disabled = true;
        }
      } else {
        erreurs++;
        document.getElementById("nbErreur").textContent =`Erreur ${erreurs}/${maxErreurs}`;

        if (erreurs <= maxErreurs) {
            const nomPiece = pieces[erreurs - 1];
            const piece = document.querySelector(`.${nomPiece}`);
          if (piece) {
           piece.style.visibility = 'hidden'; 
       }
      }

        if (erreurs >= maxErreurs) {
           showCustomAlert(`Perdu ! Le mot était "${motADeviner}" 💀`);
           inputLettre.disabled = true;
        }
      }
    }

  } else {
    console.log("Lettre invalide ou multiple caractères");
     secouerInput();
  }

  event.target.value = "";
});

