//  forEach() Method  = A method used to iterate (loop through) over elements of an array and 
//                      apply a specific function(as a callback) to each element.


//                      array.forEach(callback)
//                      element, index, array are provided



//      EXAMPLE 1: To display the elements in an array.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element){
    console.log(element);
}

//      EXAMPLE 2:To double the value of each element in an array.

let numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(double);
numbers1.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}

//      EXAMPLE 3:To triple the value of each element in an array.

let numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(triple);
numbers2.forEach(display);

function triple(element, index, array){
    array[index] = element * 3;
}

function display(element){
    console.log(element);
}


//      EXAMPLE 4:To square the value of each element in an array.

let numbers3 = [1, 2, 3, 4, 5];

numbers3.forEach(square);
numbers3.forEach(display);

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function display(element){
    console.log(element);
}


//      EXAMPLE 5:To cube the value of each element in an array.

let numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach(square);
numbers4.forEach(display);

function square(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}


//      EXAMPLE 6:To display each element in an array.

let fruits = ["apple", "orange", "banana", "mango", "pineapple"];

fruits.forEach(display);

function display(element){
    console.log(element);
}


//      EXAMPLE 7:To change the elements in an array to UPPERCASE.

let fruits1 = ["apple", "orange", "banana", "mango", "pineapple"];

fruits1.forEach(upperCase);
fruits1.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}


//      EXAMPLE 8:To change the elements in an array to LOWERCASE.

let fruits2 = ["APPLE", "ORANGE", "BANANA", "MANGO", "PINEAPPLE"];

fruits2.forEach(lowerCase);
fruits2.forEach(display);

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function display(element){
    console.log(element);
}


//      EXAMPLE 8:To CAPITALIZE the first character  of each element in an array.

let fruits3 = ["apple", "orange", "banana", "mango", "pineapple"];

fruits3.forEach(capitalize);
fruits3.forEach(display);

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}
