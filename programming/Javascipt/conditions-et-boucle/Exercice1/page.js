function verifierMajorite(age) {
    if (age >= 18) {
        return ("Majeur");
    } else {
        return ("Mineur");
    }
}

console.log(verifierMajorite(15));

// :::::::::

function verifAge(age){
    if (age >= 18){
        return "Majeur";       
    }
    else {
        return "Mineur";
    }
}


let verif = verifAge(15);
console.log(verif);