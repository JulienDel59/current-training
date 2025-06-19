fetch("https://trouve-mot.fr/api/random/10")
  .then((response) => response.json())
  .then((words) => {
    console.log(words);
    const ul = document.createElement('ul'); // Crée une liste
    words.forEach(word => {
      const li = document.createElement('li'); // Crée un élément de liste
      li.textContent = item.word; // Met le mot dans l'élément
      ul.appendChild(li); // Ajoute l'élément à la liste
    });
    document.body.appendChild(ul); // Ajoute la liste dans le body
  });