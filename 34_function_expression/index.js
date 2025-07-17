//   EXAMPLE 1:

//  Function Declaration  = How to define a reusable block of code that performs a specific task.

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

const hello = function () {
  console.log("Hello!");
};

hello();

//   EXAMPLE 2:

//  Function Declaration:

function hello2() {
  console.log("Hey!");
}

hello2();
setTimeout(hello2, 3000);

//  Function Expression:

setTimeout(function () {
  console.log("Hey!");
}, 3000);

//   EXAMPLE 3:

//  Function Declaration:

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

console.log(numbers);
console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}

//  Function Expression:

const numbers2 = [1, 2, 3, 4, 5, 6];
const squares2 = numbers2.map(function (element) {
  return Math.pow(element, 2);
});

console.log(numbers2);
console.log(squares2);

//   EXAMPLE 4:

//  Function Declaration:

const numbers3 = [1, 2, 3, 4, 5, 6];
const cubes = numbers3.map(cube);

console.log(numbers3);
console.log(cubes);

function cube(element) {
  return Math.pow(element, 3);
}

//  Function Expression:

const numbers4 = [1, 2, 3, 4, 5, 6];
const cubes3 = numbers4.map(function cube3(element) {
  return Math.pow(element, 3);
});

console.log(numbers3);
console.log(cubes3);

//   EXAMPLE 5:

//  Function Declaration:

let numbers5 = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers5.filter(isEven);

console.log(numbers5);
console.log(evenNums);

function isEven(element) {
  return element % 2 === 0;
}

//  Function Expression:

let numbers6 = [1, 2, 3, 4, 5, 6, 7];
let evenNums6 = numbers6.filter(function (element) {
  return element % 2 === 0;
});

console.log(numbers6);
console.log(evenNums6);

//   EXAMPLE 6:

//  Function Declaration:

let numbers7 = [1, 2, 3, 4, 5, 6, 7];
let oddNums = numbers7.filter(isOdd);

console.log(numbers7);
console.log(oddNums);

function isOdd(element) {
  return element % 2 !== 0;
}

//  Function Expression:

let numbers8 = [1, 2, 3, 4, 5, 6, 7];
let oddNums8 = numbers8.filter(function (element) {
  return element % 2 !== 0;
});

console.log(numbers8);
console.log(oddNums8);

//   EXAMPLE 7:

//  Function Declaration:

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(prices);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
  return accumulator + element;
}

//  Function Expression:

const prices2 = [5, 30, 10, 25, 15, 20];
const total2 = prices2.reduce(function (accumulator, element) {
  return accumulator + element;
});

console.log(prices2);
console.log(`$${total.toFixed(2)}`);
