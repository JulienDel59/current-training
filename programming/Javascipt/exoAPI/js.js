fetch("https://trouve-mot.fr/api/random")
    .then((response) => response.json())
    .then((words) => console.log(words))

fetch("https://trouve-mot.fr/api/random/2")
    .then((response) => response.json())
    .then((words) => console.log(words))

    fetch("https://trouve-mot.fr/api/random/10")
    .then((response) => response.json())
    .then((words) => console.log(words))