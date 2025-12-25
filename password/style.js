const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?";

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword() {
    let length = lengthEl.value;
    let chars = "";
    let password = "";

    if (uppercaseEl.checked) chars += upperChars;
    if (lowercaseEl.checked) chars += lowerChars;
    if (numbersEl.checked) chars += numberChars;
    if (symbolsEl.checked) chars += symbolChars;

    if (chars === "") {
        alert("Please select at least one option!");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    passwordEl.value = password;
}

function copyPassword() {
    passwordEl.select();
    document.execCommand("copy");
    alert("Password copied!");
}
