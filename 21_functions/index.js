//  function  = A section of reusable code.
//              Declare code once, use it whenever you want.
//              Call the function to execute that code.

//      EXAMPLE 1:
function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log("How Old are you now?");
    console.log(`You are ${age} years old now!`);
}

happyBirthday("Kay", 50);
happyBirthday("SpongeBob", 30);


//      EXAMPLE 1:
function add(x, y){
    let result = x + y;
    return result;
    // console.log(result);
}

let answer = add(2, 3);
console.log(answer);


//      EXAMPLE 2:
function add(x, y){
    let result = x + y;
    return result;
}

console.log(add(2, 3));


//      EXAMPLE 2 -shortcut:
function add(x, y){
    return result = x + y;
}

console.log(add(2, 3));


//      EXAMPLE 3 -subtract function:
function subtract(x, y){
    return x - y;
}

console.log(subtract(2, 3));


//      EXAMPLE 4 -multiply function:
function multiply(x, y){
    return x * y;
}

console.log(multiply(2, 3));


//      EXAMPLE 5 -divide function:
function divide(x, y){
    return x / y;
}

console.log(divide(2, 3));


//      EXAMPLE 6 -Even or Odd Number:
function isEven(number){
    
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(3));


//      EXAMPLE 7 -Even or Odd Number(using tannery operator):
function isEven(number){
    
    return number % 2 === 0 ? true : false;

}

console.log(isEven(4));


//      EXAMPLE 8 -To check if an email is valid:
function isValidEmail(email){
    
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("kay@gmail.com"));
console.log(isValidEmail("kay.com"));


//      EXAMPLE 9 -To check if an email is valid (using tannery operator):
function isValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("kay.com"));
console.log(isValidEmail("kay@gmail.com"));
