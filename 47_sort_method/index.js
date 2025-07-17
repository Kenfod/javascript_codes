//  Sort()   = is a methodused to sort elements of an array in place. 
//             It sorts elements as strings in lexicographic order, not alphabetical. 
//             Lexicographic = (alphabet + numbers + symbols) as strings.


// --------- EXAMPLE 1 -ARRAY OF STRINGS----------

// create an array of fruits:
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);


// --------- EXAMPLE 2 -ARRAY OF NUMBERS----------

// create an array of numbers:
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// Lexicographic sorting:
numbers.sort();

console.log(numbers);


// --------- EXAMPLE 3 -ARRAY OF NUMBERS----------

// create an array of numbers:
let numbers1 = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// Numeric sorting - Using arrow function:
numbers1.sort((a, b) => a - b);

console.log(numbers1);


// --------- EXAMPLE 4 -ARRAY OF NUMBERS----------

// create an array of numbers:
let numbers2 = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// Numeric reverse order sorting - Using arrow function:
numbers2.sort((a, b) => b - a);

console.log(numbers2);


// --------- EXAMPLE 5 -ARRAY OF OBJECTS----------

// 1. Sort by age - Using arrow function:
const people1 = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

people1.sort((a, b) => a.age - b.age);

console.log(people1);

// 2. Reverse order sorting by age - Using arrow function:
const people2 = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

 people2.sort((a, b) => b.age - a.age);

 console.log(people2);

// 3. Sort by gpa - Using arrow function:
 const people3 = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

 people3.sort((a, b) => a.gpa - b.gpa);

 console.log(people3);

 // 4. Reverse order sorting by gpa - Using arrow function:
 const people4 = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

 people4.sort((a, b) => b.gpa - a.gpa);

 console.log(people4);

// 5. Sort by name - Using arrow function:
 const people5 = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

 people5.sort((a, b) => a.name - b.name);

 console.log(people5);


// 6. Sort an object with a name string lexicographically - Using arrow function:
 const people6 = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

 people6.sort((a, b) => a.name.localeCompare(b.name));

 console.log(people6);


 // 7. Reverse sorting an object with a name string lexicographically - Using arrow function:
 const people7 = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

 people7.sort((a, b) => b.name.localeCompare(a.name));

 console.log(people7);
