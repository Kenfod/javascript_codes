//  filter() Method  = A method that creates anew array by filtering out elements. 


//   EXAMPLE 1: To filter elements whose values are EVEN.

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);

console.log(numbers);
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}


//   EXAMPLE 2: To filter elements whose values are ODD.

let numbers2 = [1, 2, 3, 4, 5, 6, 7];
let oddNums = numbers.filter(isOdd);

console.log(numbers2);
console.log(oddNums);

function isOdd(element){
    return element % 2 !== 0;
}


//   EXAMPLE 3: To filter elements whose age is 18 an above.

const ages = [16, 17, 18, 19, 20, 35, 60];
const adults = ages.filter(isAdult);

console.log(ages);
console.log(adults);

function isAdult(element){
    return element  >= 18;
}


//   EXAMPLE 4: To filter elements whose age is below 18.

const ages2 = [16, 17, 18, 19, 20, 35, 60];
const minors = ages.filter(isMinor);

console.log(ages);
console.log(minors);

function isMinor(element){
    return element < 18;
}


//      EXAMPLE 5:To filter elements with short length..

const words = ["strawberry", "banana", "coconut", "orange", "watermelon", "mango", "pineapple"];

const shortWords = words.filter(getShortWords);

console.log(words);
console.log(shortWords);

function getShortWords(element){
    return element.length <= 6;
}


//      EXAMPLE 6:To filter elements with long length..

const words2 = ["strawberry", "banana", "coconut", "orange", "watermelon", "mango", "pineapple"];

const longWords = words.filter(getLongWords);

console.log(words2);
console.log(longWords);

function getLongWords(element){
    return element.length > 6;
}
