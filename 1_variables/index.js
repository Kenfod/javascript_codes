// VARIABLE     =    A container that stores a value.
//                    Behaves as if it were the value it contains.


// 1. Declaration      let x;
// 2. Assignment       x=100;
// 3. Declarion and Assignment     let x = 100;


// #1. NUMBER
let age =25;
let price ="15.50";

console.log(typeof age);
console.log(`Your age is ${age} years old.`);
console.log(`The price is $${price} .`);


// #2. STRING
let firstName ="Kay";
let favouriteFood ="Fish";
let email = "kay@gmail.com";

console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is : ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is : ${email}`);


// #2. BOOLEAN
let online = true;

console.log(typeof online);
console.log(`Kay is online: ${online}`);


document.getElementById("p1").textContent = firstName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = online;


document.getElementById("p1").textContent = `My name is ${firstName}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Is online?: ${online}`;
