let mois = 1 ;

function getNombreDeJours(mois, annee) {
  switch (mois) {
    case 1:
      console.log(31);
      break;

    case 2:
      // Vérifie si l'année est bissextile
      if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
          console.log(29);
      } else {
          console.log(28);
      }
      break;

    case 3:
        console.log(31);
      break;

    case 4:
        console.log(30);
      break;

    case 5:
        console.log(31);;
      break;

    case 6:
        console.log(30);
      break;

    case 7:
        console.log(31);
      break;

    case 8:
        console.log(31);;
      break;

    case 9:
        console.log(30);
      break;

    case 10:
       console.log(31);;
      break;

    case 11:
        console.log(30);
      break;

    case 12:
        console.log(31);
      break;

    default:
      console.log( "Mois invalide");
      break;
  }
}
