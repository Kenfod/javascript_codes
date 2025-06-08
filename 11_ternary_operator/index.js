let age = 12;
let message = age >= 18 ? "You are an adult." : "You are a minor. ";
console.log(message);


let time = 22;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);


let isStudent = false;
let occupation = isStudent ? "You are a student!" : "You are NOT a student!";
console.log(occupation);


let purchaseAmount = 150;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your TOTAL is $${purchaseAmount - purchaseAmount *(discount/100)}`);
