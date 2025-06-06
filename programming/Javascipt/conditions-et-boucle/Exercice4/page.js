function getNombreDeJours(mois, annee) {
  // Les mois en JavaScript sont numérotés de 1 à 12 ici
  // Utilisation de la date pour obtenir le dernier jour du mois
  if (mois < 1 || mois > 12) {
    return "Mois invalide. Entrez une valeur entre 1 et 12.";
  }

  // Crée une date au jour 0 du mois suivant
  // Exemple : 0 mars = dernier jour de février
  return new Date(annee, mois, 0).getDate();
}

// Exemples d'utilisation :
console.log(getNombreDeJours(2, 2024));
console.log(getNombreDeJours(2, 2023)); 
console.log(getNombreDeJours(2, 2021)); 
console.log(getNombreDeJours(2, 2022)); 
