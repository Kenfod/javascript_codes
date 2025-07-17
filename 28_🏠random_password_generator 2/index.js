// RANDOM PASSWORD GENERATOR

const passwordLength = document.getElementById("passwordLength").value;
const includeLowerCase = document.getElementById("includeLowerCase");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const result = document.getElementById("result");

console.log(passwordLength);

function generatePassword(){

    const lowercaseChars ="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars ="0123456789";
    const symbolChars ="!@#$%^&*()_+{}:|<>?-=[];\./,";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // console.log(allowedChars);

    if(includeLowerCase.checked){
        result.textContent = "You selected Lower-case characters to be added.";

    }
    if(includeUpperCase.checked){
        result.textContent = "You selected Upper-case characters to be added.";

    }
    if(includeNumbers.checked){
        result.textContent = "You selected Numbers to be added.";

    }
    if(includeSymbols.checked){
        result.textContent = "You selected Special characters to be added.";

    }
    else{
        result.textContent = `Atleast 1 set of character needs to be selected.`;
    }



    // if(length < 7){
    //     // return `Password length must be atleast 8 characters`;
    //     result.textContent = `Password length must be atleast 8 characters`;
    // }
    // if(allowedChars.length === 0){
    //     // return `Atleast 1 set of character needs to be selected`;
    //     result.textContent = `Atleast 1 set of character needs to be selected`;
    // }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
        // console.log(passwordLength);
        result.textContent = password;
    }

    return password;
}


const password = generatePassword(passwordLength, 
                                  includeLowerCase, 
                                  includeUpperCase, 
                                  includeNumbers, 
                                  includeSymbols);

                                  console.log(`Generated Password: ${password}`);
                                  result.textContent = password;
