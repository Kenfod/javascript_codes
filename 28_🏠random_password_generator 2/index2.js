// RANDOM PASSWORD GENERATOR

function generatePassword() {
    // Get the current value of passwordLength INSIDE the function
    const passwordLength = parseInt(document.getElementById("passwordLength").value);
    const includeLowerCase = document.getElementById("includeLowerCase").checked;
    const includeUpperCase = document.getElementById("includeUpperCase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const result = document.getElementById("result");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}:|<>?-=[];',./";

    let allowedChars = "";
    let password = "";

    // Build the allowed characters string based on selections
    if (includeLowerCase) allowedChars += lowercaseChars;
    if (includeUpperCase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    // Validate at least one character set is selected
    if (allowedChars.length === 0) {
        result.textContent = "At least 1 set of characters needs to be selected.";
        return;
    }

    // Generate the password
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    result.textContent = password;
    return password;
}

// Remove this automatic call - let the button click handle it
// const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
// console.log(`Generated Password: ${password}`);
// result.textContent = password;