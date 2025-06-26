const passwordOutput = document.getElementById('password-output')
const rangeInput = document.getElementById('password-length')
const displayLenght = document.getElementById('display-password-length')

const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols"); 

const button = document.getElementById('generateButton')

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

rangeInput.addEventListener("input" , () => {
    displayLenght.value = rangeInput.value;
});

function  generatePassword () {
    const length = parseInt(rangeInput.value);
    let characters = "" ;

    if (lowercaseCheckbox.checked) characters = `${characters}${lowercaseLetters}`;
    if (uppercaseCheckbox.checked) characters = `${characters}${uppercaseLetters}`;
    if (numbersCheckbox.checked) characters += `${characters}${numbers}`;
    if (symbolsCheckbox.checked) characters += `${characters}${symbols}`;

    let password = "";
    for (let i = 0; i < length; i++) {
     const randomChar = characters[Math.floor(Math.random() * characters.length)];
     password += randomChar;
  }

  passwordOutput.value = password;
}
    
button.addEventListener("click", generatePassword);

