function verifierMajorite(age) {
    if (age >= 18) {
        return ("Majeur");
    } else {
        return ("Mineur");
    }
}

console.log(verifierMajorite(15));

// :::::::::

// function verifAge(age){
//     if (age >= 18){
//         return "majeur";       
//     }
//     else {
//         return "mineur";
//     }
// }


// let verif = verifAge(18);
// console.log(verif);