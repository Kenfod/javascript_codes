//  map() Method  = A method that accepts a callback and applies 
//                  that function to each element of an array, then return a new array. 


//   EXAMPLE 1: To square the value of  elements in an array.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

console.log(numbers);
console.log(squares);

function square(element){
    return Math.pow(element, 2);
}


//  EXAMPLE 2:To cube the value of each element in an array.

const numbers2 = [1, 2, 3, 4, 5];
const cubes = numbers2.map(cube);

console.log(numbers2);
console.log(cubes);

function cube(element){
    return Math.pow(element, 3);
}


//   EXAMPLE 3:To change the elements in an array to UPPERCASE.

const students = ["adam", "bob", "charles", "david", "edward"];
const studentsUpper = students.map(upperCase);

console.log(students);
console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}


//   EXAMPLE 4:To change the elements in an array to LOWERCASE.

const students2 = ["ADAM", "BOB", "CHARLES", "DAVID", "EDWARD"];
const studentsLower = students.map(lowerCase);

console.log(students2);
console.log(studentsLower);

function lowerCase(element){
    return element.toLowerCase();
}


//   EXAMPLE 4:To change the elements in an array to LOWERCASE.

const dates = ["2025-1-10", "2025-2-15", "2025-3-20", "2025-4-25", "2025-5-30"];
const formattedDates = dates.map(formatDates);

console.log(dates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


//  EXAMPLE 5:To double the value of each element in an array.

const numbers3 = [1, 2, 3, 4, 5];
const doubles = numbers3.map(double);

console.log(numbers3);
console.log(doubles);

function double(element){
    return (element * 2);
}


//  EXAMPLE 6:To triple the value of each element in an array.

const numbers4 = [1, 2, 3, 4, 5];
const triples = numbers3.map(triple);

console.log(numbers4);
console.log(triples);

function triple(element){
    return (element * 3);
}


//  EXAMPLE 8:To CAPITALIZE the first character of each element in an array.

const students3 = ["adam", "bob", "charles", "david", "edward"];
const studentsCaps = students.map(studentsCap);

console.log(students3);
console.log(studentsCaps);

function studentsCap(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}
