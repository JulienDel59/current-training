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
console.log("Mot à deviner :", motADeviner);

function afficherMotMasque(mot, lettresDevinees) {
  return mot.split('').map(lettre => 
    lettresDevinees.has(lettre) ? lettre : '_'
  ).join(' ');
}

const lettresDevinees = new Set(); 


console.log(afficherMotMasque(motADeviner, lettresDevinees)); 

const inputLettre = document.getElementById('lettre');

inputLettre.addEventListener('input', (e) => {
  const lettre = e.target.value.toLowerCase();

  if (/^[a-z]$/.test(lettre)) {
    console.log("Lettre valide :", lettre);

    if (motADeviner.includes(lettre)) {
      console.log("La lettre est dans le mot !");
      // Tu peux ici ajouter la lettre dans ta liste de lettres devinées
    } else {
      console.log("La lettre n'est PAS dans le mot.");
      // Ici, tu peux gérer l'erreur (perte de vie, afficher une partie du pendu...)
    }

  } else {
    console.log("Lettre invalide ou multiple caractères");
  }

  e.target.value = "";
});