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
  "sol",
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
  "banlieue",
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

const motADeviner = choisirMot();
const lettresDevinees = new Set(); 

let erreurs = 0;
const maxErreurs = 7;

const pieces = [
  "casque",
  "torse",
  "bras-gauche",
  "bras-droit",
  "jambe-gauche",
  "jambe-droit",
  "jetpack"
];

document.getElementById("zoneMot").textContent = afficherMotMasque(motADeviner, lettresDevinees);

console.log("Mot à deviner :", motADeviner);

function afficherMotMasque(mot, lettresDevinees) {
  return mot.split('').map(lettre => 
    lettresDevinees.has(lettre) ? lettre : '_'
  ).join(' ');
}

console.log(afficherMotMasque(motADeviner, lettresDevinees)); 

const inputLettre = document.getElementById('lettre');

inputLettre.addEventListener('input', (event) => {
  const lettre = event.target.value.toLowerCase();

  if (/^[a-z]$/.test(lettre)) {

    if (lettresDevinees.has(lettre)) {
      console.log("Lettre déjà proposée :", lettre);
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
  }

  event.target.value = "";
});

function showCustomAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('customAlertMessage');
    alertMessage.textContent = message;
    alertBox.classList.remove('hidden');

    const closeBtn = document.getElementById('customAlertClose');
    closeBtn.onclick = () => {
        alertBox.classList.add('hidden');
    };
}
