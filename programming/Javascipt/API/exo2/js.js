fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((carataire) => {
 

    for (let p = 1; p <= carataire.info.pages; p++) {
        fetch (`https://rickandmortyapi.com/api/character?page=${p}`)
          .then((response) => response.json())
          .then((carataire) => {
        
        const name = document.createElement('characters')
        const image = document.createElement('img')
        name.textContent = carataire.results[0].name;
        image.src = carataire.results[0].image;
        document.body.appendChild(name);
        document.body.appendChild(image);
      });  
    }
  });



     

        
        