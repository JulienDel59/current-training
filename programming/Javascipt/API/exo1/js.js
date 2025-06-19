fetch("https://trouve-mot.fr/api/random/10")
  .then((response) => response.json())
  .then((words) => {
    console.log(words); 
    const ul = document.createElement('ul');

    words.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word.name; 
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  })
