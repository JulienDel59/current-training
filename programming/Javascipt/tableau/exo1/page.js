const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 function sumOfEvenNumbers(tableau) {
  let somme = 0;

  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] % 2 === 0) {
      somme += tableau[i];
    }
  }

  return somme;
 }


console.log(sumOfEvenNumbers(numbers));