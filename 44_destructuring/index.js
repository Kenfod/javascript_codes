//  destructuring   = allows us to extract values from arrays and objects, 
//                     then assign them to variables in a convenient way. 

//               [] = to perform array destructuring.
//               {} = to perform object destructuring.


// --------- EXAMPLE 1 ----------
//  SWAP THE VALUE OF 2 VARIABLES

let a = 1;
let b = 2;

console.log(a);
console.log(b);

// On the LEFT side of the equal side we are destructuring while on the RIGHT we are CREATING a new array.
[a, b] = [b, a];

// To display the swapped variables:
console.log(a);
console.log(b);


// --------- EXAMPLE 2 ----------
//  SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

console.log(colors);

// On the LEFT side of the equal side we are destructuring while on the RIGHT we are CREATING a new array.
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


// --------- EXAMPLE 3 ----------
//  ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors1 = ["red", "green", "blue", "black", "white"];

console.log(colors1);

//  Destructuring by declaring a bunch of variables:

const [firstColor, secondColor, thirdColor] = colors1;

// To display variables:
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

//  Combine array destructuring with rest parameter:

const [colorOne, colorTwo, colorThree, ...extraColors] = colors1;

// To display variables:
console.log(colorOne);
console.log(colorTwo);
console.log(colorThree);
console.log(extraColors);


// --------- EXAMPLE 4 ----------
//  EXTRACT VALUES FROM OBJECTS

// creation of objects:
const person1 = {
  firstName1: "Spongebob",
  lastName1: "Squarepants",
  age1: 30,
  job1: "Fry Cook",
}

const person2 = {
  firstName2: "Patrick",
  lastName2: "Star",
  age2: 50,
}

// To display variables:
const {firstName1, lastName1, age1, job1} = person1;


console.log(firstName1);
console.log(lastName1);
console.log(age1);
console.log(job1);

// Set default value to "Unenployed for person2":
const {firstName2, lastName2, age2, job2="Unemployed"} = person2;

// To display variables:
console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);


// --------- EXAMPLE 5 ----------
//  DESTRUTURE IN FUNCTION PARAMETERS

// creation of a  function that destructures the objects parametere
function displayPerson({firstName3,lastName3, age3, job3="Unemployed"}){
  console.log(`Name: ${firstName3} ${lastName3}`);
  console.log(`Age: ${age3}`);
  console.log(`Job: ${job3}`);
}

// creation of objects:
const person3 = {
  firstName3: "Spongebob",
  lastName3: "Squarepants",
  age3: 30,
  job3: "Fry Cook",
}

const person4 = {
  firstName3: "Patrick",
  lastName3: "Star",
  age3: 50,
}

// invoke the function and pass in person1 as an argument:
displayPerson(person3);
displayPerson(person4);
