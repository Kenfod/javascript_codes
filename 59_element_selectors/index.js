// element selectors = are methods used to target and manipulate elements. 
//                     using this methods allow you to select one or multiple 
//                     HTML elements from the DOM (Document Object Model).
//  1. document.getElementById()        //  returns ELEMENT OR NULL
//  2. document.getElementsClassName()  //  returns HTML COLLECTION
//  3. document.getElementsByTagName()  //  returns HTML COLLECTION
//  4. document.querySelector()         //  returns FIRST MATCHING ELEMENT OR NULL
//  5. document.querySelectorAll()      //  returns NODELIST


//  1. document.getElementById()        //  returns ELEMENT OR NULL

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "cyan";   // In Javascript, to access stlye properties are named using camel case convention in the DOM.

myHeading.style.textAlign = "center";

console.log(myHeading);


//  2. document.getElementsClassName()  //  returns HTML COLLECTION
// It is similar to an array but, technically, not the same.

const fruits = document.getElementsByClassName("fruits");

console.log(fruits);

fruits[1].style.backgroundColor = "yellow";


// HTML collection are iterable.
// To iterate these elements using  an enhanced "for loop":

for(let fruit of fruits){
    fruit.style.fontFamily = "monospace";
}

// HTML collection do allow for live updates unfortunately have a limited amount of utility methods.
// HTML collection dont have a built-in  "for each() method

// SOLUTION IS TO TYPECAST AN HTML COLLECTION AS AN ARRAY:

Array.from(fruits).forEach(fruit => {
    fruit.style.fontStyle = "italic"
})

// fruits.forEach();
// RETURNS index.js:41 Uncaught TypeError: fruits.forEach is not a function     at index.js:41:8


// fruits.array.forEach(element => {
  
// });

// RETURNS Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')  at index.js:44:14


// fruits.for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// RETURNS Uncaught SyntaxError: Unexpected token 'const' (at index.js:51:13)


// fruits.for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// RETURNS Uncaught SyntaxError: missing ) after argument list (at index.js:62:13)


//  3. document.getElementsByTagName()  //  returns HTML COLLECTION

const h4Elements = document.getElementsByTagName("h4");

console.log(h4Elements);

h4Elements[1].style.backgroundColor = "green";

// To apply the CSS properties to all the h4 elements using "for loop()" method:

for(let h4Element of h4Elements){
    h4Element.style.fontFamily = "monospace";
}


const liElements = document.getElementsByTagName("li");

console.log(liElements);

liElements[0].style.backgroundColor = "lightgreen";

// To apply the CSS properties to all the li elements using "for loop()" method:

for(let liElement of liElements){
    liElement.style.fontFamily = "monospace";
}

// SOLUTION IS TO TYPECAST AN HTML COLLECTION AS AN ARRAY:

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.fontStyle = "italic";
})

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
})


//  4. document.querySelector()         //  returns FIRST MATCHING ELEMENT OR NULL

const element =  document.querySelector(".fruits");
element.style.backgroundColor = "lightblue";

const heading =  document.querySelector("h4");
heading.style.backgroundColor = "lightblue";

const listing =  document.querySelector("li");
listing.style.backgroundColor = "lightblue";

const unordered =  document.querySelector("ul");
unordered.style.backgroundColor = "lightblue";


//  5. document.querySelectorAll()      //  returns NODELIST
// A nodelist is like  HTML COLLECTION except that it has built in methods similar to an array.
// However, nodelist are static, they do not update automatically in the DOM.

const fruits1 =  document.querySelectorAll(".fruits");
fruits1[2].style.backgroundColor = "orange";

const fruits2 =  document.querySelectorAll("li");
fruits2[1].style.backgroundColor = "orange";

console.log(fruits2);

fruits2.forEach(fruit => {
    fruit.style.backgroundColor = "pink"
});
