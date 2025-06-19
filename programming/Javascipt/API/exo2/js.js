const container = document.getElementById("div");

function afficherPersonnages(personnages) {
  personnages.forEach(personnage => {
    const createDiv = document.createElement('div');

    const creatPara = document.createElement('p');
    creatPara.textContent = personnage.name;
    createDiv.appendChild(creatPara);

    const createImg = document.createElement('img');
    createImg.src = personnage.image;
    createDiv.appendChild(createImg);

    container.appendChild(createDiv);
  });
}

function chargerTousLesPersonnages() {
  fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
      // Afficher les personnages de la première page
      afficherPersonnages(data.results);

      const totalPages = data.info.pages;

      // Boucle pour charger les pages suivantes (de 2 à totalPages)
      for (let i = 2; i <= totalPages; i++) {
        fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
          .then(response => response.json())
          .then(data => {
            afficherPersonnages(data.results);
          });
      }
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des personnages :", error);
    });
}

// Lancer le chargement
chargerTousLesPersonnages();

        
        