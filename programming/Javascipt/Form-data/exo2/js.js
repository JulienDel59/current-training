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


function generatePassword() {
    const length = parseInt(rangeInput.value);
    let characters = "";
    let mandatoryChars = [];

    if (lowercaseCheckbox.checked) {
        characters = `${characters}${lowercaseLetters}`;
        mandatoryChars.push(randomCharFrom(lowercaseLetters));
    }
    if (uppercaseCheckbox.checked) {
        characters = `${characters}${uppercaseLetters}`;
        mandatoryChars.push(randomCharFrom(uppercaseLetters));
    }
    if (numbersCheckbox.checked) {
        characters = `${characters}${numbers}`;
        mandatoryChars.push(randomCharFrom(numbers));
    }
    if (symbolsCheckbox.checked) {
        characters = `${characters}${symbols}`;
        mandatoryChars.push(randomCharFrom(symbols));
    }

    if (characters === "") {
        passwordOutput.value = "Selectionnez au moins une case !";
        return;
    }

    let password = mandatoryChars;

    for (let i = mandatoryChars.length; i < length; i++) {
        password.push(randomCharFrom(characters));
    }

    password = shuffleArray(password);
    passwordOutput.value = password.join('');
}

function randomCharFrom(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
    return array;
}
    
 button.addEventListener("click", generatePassword);