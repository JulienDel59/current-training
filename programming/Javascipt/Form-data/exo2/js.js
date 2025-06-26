const passwordOutput = document.getElementById('password-output')
const rangeLenght = document.getElementById('password-length')
const displayLenght = document.getElementById('display-password-length')

const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols"); 

const Buntton = document.getElementById('generateButton')

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

rangeLenght.addEventListener("input" , () => {
    displayLenght.value = rangeLenght.value;
});


