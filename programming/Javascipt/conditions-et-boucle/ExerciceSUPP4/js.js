let reponse = "";

while (reponse !== "oui" && reponse !== "non") {
  reponse = prompt("Veuillez entrer 'oui' ou 'non' :");
}
console.log(`Vous avez entré : ${reponse}`);
