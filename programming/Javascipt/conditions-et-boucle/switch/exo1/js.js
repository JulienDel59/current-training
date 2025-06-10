// let choixMois = 2 ;
// let choixAnnee = 2025;


// function getNombreDeJours(mois, annee) {
//   switch (mois) {
//     case 1:
//       console.log(31);
//       break;

//     case 2:
//       if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
//           console.log(29);
//       } else {
//           console.log(28);
//       }
//       break;

//     case 3:
//         console.log(31);
//       break;

//     case 4:
//         console.log(30);
//       break;

//     case 5:
//         console.log(31);
//       break;

//     case 6:
//         console.log(30);
//       break;

//     case 7:
//         console.log(31);
//       break;

//     case 8:
//         console.log(31);
//       break;

//     case 9:
//         console.log(30);
//       break;

//     case 10:
//        console.log(31);
//       break;

//     case 11:
//         console.log(30);
//       break;

//     case 12:
//         console.log(31);
//       break;

//     default:
//       console.log( "Mois invalide");
//       break;
//   }
// }

// getNombreDeJours(choixMois, choixAnnee);



///////////////////////


let year = 2021

function cbDeJourDansLeMois (month){

switch (month) {
    case 1:
     return 31;

    case 2:
      if ((year % 4 === 0 && year % 100 > 0) || (year % 400 ===0)){
         console.log("année bissextile");
     return 28 ;
     }else {
          console.log("année non bissextile");
     return 29;
    }
 

    case 3:
     return 31;
  
    case 4:
    return 30;
  
    case 5:
     return 31;

    case 6:
     return 30;

    case 7:
     return 31;
   
     case 8:
     return 31;
  
    case 9:
     return 30;
    
    case 10:
     return 31;

    case 11:
     return 30;

    case 12:
     return 31;
 

  default:
     console.log("mois non valide");
     break;
   
}

}

let nombreDeJour =  cbDeJourDansLeMois (2)
console.log( nombreDeJour)


 