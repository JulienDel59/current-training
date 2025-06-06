//     function ajouterElement() {
//     // Crée un nouvel élément <li>
//     const nouveauLi = document.createElement("li");
//     // Ajoute le texte "Nouvel élément" à cet élément
//     nouveauLi.textContent = "Nouvel élément";
//     // Trouve la liste <ul> par son ID et ajoute le nouvel <li>
//     document.getElementById("maListe").appendChild(nouveauLi);
    
// }

 const bouton = document.getElementById("ajouterBtn");

        // Ajoute un gestionnaire d'événement au clic
        bouton.addEventListener("click", function() {
            const nouveauLi = document.createElement("li");
            nouveauLi.textContent = "Nouvel élément";
            document.getElementById("maListe").appendChild(nouveauLi);
        
});
    


    