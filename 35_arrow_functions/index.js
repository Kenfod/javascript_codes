//   EXAMPLE 1:
//  ARROW FUNCTION  = Is a concise way to write function expressions.
//                    It's good for simple functions that you use only once.
// syntax           = (parameters) => some code

//  a) arrow function without a parameter:
const hello3 = () => console.log("Hey You!");
hello3();

//  b) arrow function with a parameter:
const hello4 = (name) => console.log(`Hi ${name}`);
hello4();       //Hi undefined

//  c) arrow function with a parameter and name passed as an argument:
const hello5 = (name) => console.log(`Hi ${name}!`);
hello5("Kay");       //Hi Kay

//  d) arrow function where code is moe than one statement:
const hello6 = (name, age) => {console.log(`Hi ${name}!`)
                          console.log(`You are ${age} years old`)};
hello6("Kay", 50);


//  FUNCTION DECLARATION  = How to define a reusable block of code that performs a specific task.

function hello1() {
  console.log("Hey!");
}

hello1();
//  Function Expression  = Is a way to define functions as valuesor variable.

// Benefit of function expression= you need not thinking/remember function names.

//  Function expressions are used in:
//  1.Callbacks in asynchronous operations.
//  2. Higher-Order Functions.
//  3. Closures.
//  4. Event Listeners.

const hello = function(){
  console.log("Hello!");
};

hello();

//   EXAMPLE 2:

//  FUNCTION DECLARATION:

function hello2() {
  console.log("Hey!");
}

hello2();
setTimeout(hello2, 3000);

//  Function Expression:

setTimeout(function () {
  console.log("Hey!");
}, 3000);

//  ARROW FUNCTION:

setTimeout( () => console.log("Hey K!"), 3000);

//   EXAMPLE 3:

//  FUNCTION DECLARATION:

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(numbers);
console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}

//  FUNCTION EXPRESSION:

const numbers2 = [1, 2, 3, 4, 5, 6];
const squares2 = numbers2.map(function (element) {
  return Math.pow(element, 2);
});

console.log(numbers2);
console.log(squares2);

//  ARROW FUNCTION:

const numbers9 = [1, 2, 3, 4, 5, 6];
const squares9 = numbers9.map((element) => Math.pow(element, 2));

console.log(numbers9);
console.log(squares9);

//   EXAMPLE 4:

//  FUNCTION DECLARATION:

const numbers3 = [1, 2, 3, 4, 5, 6];
const cubes = numbers3.map(cube);

console.log(numbers3);
console.log(cubes);

function cube(element) {
  return Math.pow(element, 3);
}

//  FUNCTION EXPRESSION:

const numbers4 = [1, 2, 3, 4, 5, 6];
const cubes3 = numbers4.map(function cube3(element) {
  return Math.pow(element, 3);
});

console.log(numbers3);
console.log(cubes3);

//  ARROW FUNCTION:

const numbers10 = [1, 2, 3, 4, 5, 6];
const cubes10 = numbers9.map((element) => Math.pow(element, 3));

console.log(numbers10);
console.log(cubes10);

//   EXAMPLE 5:

//  FUNCTION DECLARATION:

let numbers5 = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers5.filter(isEven);

console.log(numbers5);
console.log(evenNums);

function isEven(element) {
  return element % 2 === 0;
}

//  FUNCTION EXPRESSION:

let numbers6 = [1, 2, 3, 4, 5, 6, 7];
let evenNums6 = numbers6.filter(function (element) {
  return element % 2 === 0;
});

console.log(numbers6);
console.log(evenNums6);

//  ARROW FUNCTION:

const numbers11 = [1, 2, 3, 4, 5, 6];
const evenNums11 = numbers9.filter((element) => element % 2 === 0);

console.log(numbers11);
console.log(evenNums11);

//   EXAMPLE 6:

//  FUNCTION DECLARATION:

let numbers7 = [1, 2, 3, 4, 5, 6, 7];
let oddNums = numbers7.filter(isOdd);

console.log(numbers7);
console.log(oddNums);

function isOdd(element) {
  return element % 2 !== 0;
}

//  FUNCTION EXPRESSION:

let numbers8 = [1, 2, 3, 4, 5, 6, 7];
let oddNums8 = numbers8.filter(function (element) {
  return element % 2 !== 0;
});

console.log(numbers8);
console.log(oddNums8);

//  ARROW FUNCTION:

const numbers12 = [1, 2, 3, 4, 5, 6, 7];
const oddNums12 = numbers12.filter((element) => element % 2 !== 0);

console.log(numbers12);
console.log(oddNums12);


//   EXAMPLE 7:

//  FUNCTION DECLARATION:

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(prices);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
  return accumulator + element;
}

//  FUNCTION EXPRESSION:

const prices2 = [5, 30, 10, 25, 15, 20];
const total2 = prices2.reduce(function (accumulator, element) {
  return accumulator + element;
});

console.log(prices2);
console.log(`$${total.toFixed(2)}`);

//  ARROW FUNCTION:

const prices3 = [5, 30, 10, 25, 15, 20];
const total3 = prices3.reduce((accumulator, element) =>  accumulator + element);

console.log(prices3);
console.log(`$${total3.toFixed(2)}`);
