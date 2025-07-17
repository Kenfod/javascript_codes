//  reduce() Method  = A method that reduces the elemnts of an array to a single value. 

//                      Examples => To get:
//                      1. Sum of all elements.
//                      2. Element with the MAXIMUM value.
//                      3. Element with the MINIMUM value.


//   EXAMPLE 1: To find the TOTAL value of ALL elements in an array.

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(prices);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}


//   EXAMPLE 2: To find the MAXIMUM value of ALL elements in an array.

const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);

console.log(grades);
console.log(maximum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}


//   EXAMPLE 3: To find the MINIMUM value of ALL elements in an array.

const grades2 = [75, 50, 90, 80, 65, 95];
const minimum = grades.reduce(getMin);

console.log(grades);
console.log(minimum);

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
