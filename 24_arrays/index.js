//  array  = A variable-like structure that can hold more than 1 value.


//      1- To display the elements of an array:

let fruits = ["apple", "orange", "banana"];

console.log(fruits);


//      2- To access an individual element of an array:

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // will return undefined.


//      3- To change an individual element of an array:

fruits[0] = "coconut";

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


fruits[3] = "apple";

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


//      4- To ADD an element at the END of an array:

fruits.push("mango");

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);


//      5- To REMOVE the last element of an array:

fruits.pop();

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);     // will return undefined.


//      6- To ADD an element at the beginning of an array:

fruits.unshift("pineapple");

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);


//      7- To REMOVE an element at the beginning of an array:

fruits.shift();

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);     // will return undefined.


//      8- To get the LENGTH of an array:

let numOfFruits = fruits.length;
console.log(numOfFruits);


//      9- To find the INDEX of an element in an array:

// let index = fruits.indexOf("apple");
// console.log(index);


//      10- To find the INDEX of a non-existent element in an array:

let index = fruits.indexOf("pawpaw");
console.log(index);


//      11- To LOOP through the elements in an array:

let vegetables = ["onions", "tomato", "cucumber", "spinach"];

for(let i = 0; i < vegetables.length; i++){
    console.log(vegetables[i]);
}


//      12- To LOOP through the elements in an array (2):

let vegetables2 = ["onions", "tomato", "cucumber", "spinach"];

for(let i = 0; i < vegetables2.length; i+=2){
    console.log(vegetables2[i]);
}


//      13- To LOOP through the elements in an array (3):

let vegetables3 = ["onions", "tomato", "cucumber", "spinach"];

for(let i = 1; i < vegetables3.length; i+=2){
    console.log(vegetables3[i]);
}


//      14- To LOOP through the elements  and display the ORDER of an array  IN REVERSE:

let vegetables4 = ["onions", "tomato", "cucumber", "spinach"];

for(let i = vegetables4.length - 1; i >= 0; i--){
    console.log(vegetables4[i]);
}


//      15- An ENHANCED FOR - LOOP (shortcut for-loop):

let vegetables5 = ["onions", "tomato", "cucumber", "spinach"];

for(let vegetable of vegetables5){
    console.log(vegetable);
}


//      16- To SORT an array:

let vegetables6 = ["onions", "tomato", "cucumber", "spinach"];

vegetables6.sort();

for(let vegetable of vegetables6){
    console.log(vegetable);
}


//      16- To SORT an array in REVERSE order:

let vegetables7 = ["onions", "tomato", "cucumber", "spinach"];

vegetables7.sort().reverse();

for(let vegetable of vegetables7){
    console.log(vegetable);
}
