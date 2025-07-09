//  spread Operator  = is represented by 3 dots => ... that allows iterable such as an array on string to be expanded into separate elements.
//                      (unpack the elements).


//      1- To an array of numbers:

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers);

console.log(maximum);   // will return NaN


//      2- To unpack the elements in the above an array:

let numbers1 = [1, 2, 3, 4, 5];
let maximum1 = Math.max(...numbers1);

console.log(maximum1);


//      3- To unpack the elements in the above an array:

let numbers2 = [1, 2, 3, 4, 5];
let minimum = Math.min(...numbers2);

console.log(minimum);


//      4- To unpack the elements in an array with STRINGS:

let username = "Bro Code";
let letters = [...username];

console.log(letters);


//      5- To JOIN the elements in an array with STRINGS(1):

let username2 = "Bro Code";
let letters2 = [...username2].join("+");

console.log(letters2);


//      6- To JOIN the elements in an array with STRINGS(2):

let username3 = "Bro Code";
let letters3 = [...username3].join("-");

console.log(letters3);


//      7- To create an identical(shallow) copy of an array:

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];

console.log(newFruits);


//      8- To COMBINE 2  or more arrays:

let fruits1 = ["apple", "orange", "banana"];
let vegetables = ["onions", "tomato", "potato"];
let foods = [...fruits, ...vegetables];

console.log(foods);




let fruits2 = ["apple", "orange", "banana"];
let vegetables2 = ["onions", "tomato", "potato"];
let foods2 = [...fruits2, ...vegetables2, "eggs", "milk"];

console.log(foods2);


//      10- Additional Examples:
const numbers3 = [1, 2, 3];
console.log(Math.max(...numbers3));


const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);


const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject);


const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);


function sum(a, b, c) {
    return a + b + c;
}
const values = [10, 20, 30];
console.log(sum(...values));


const originalArray1 = [1, 2];
const newArray = [...originalArray1, 3, 4];
console.log(newArray);
