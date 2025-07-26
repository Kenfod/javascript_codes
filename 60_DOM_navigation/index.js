// DOM Navigation = is the process of navigating through the structure of an HTML document using Javascript. 
//                     HTML elements include and are not limited to the below properties:
//  1 .firstElementChild
//  2 .lastElementChild
//  3 .nextElementSibling
//  4 .previousElementSibling
//  5 .parentElement
//  6 .children


//  1 .firstElementChild

const element1 = document.getElementById("fruits");
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = "lightblue";

const element2 = document.getElementById("vegetables");
const oneChild = element2.firstElementChild;
oneChild.style.backgroundColor = "lightblue";

const element3 = document.getElementById("desserts");
const preChild = element3.firstElementChild;
preChild.style.backgroundColor = "lightblue";

// Using querySelectAll() Method:

const ulElements =  document.querySelectorAll("ul");
ulElements[1].style.backgroundColor = "orange";

console.log(ulElements);

ulElements.forEach(ulElement => {
    const bigChild =ulElement.firstElementChild;
      bigChild.style.fontStyle = "italic";
    //   bigChild.style.backgroundColor = "orange";
});


//  2 .lastElementChild

const element4 = document.getElementById("fruits");
const lastChild = element4.lastElementChild;
lastChild.style.backgroundColor = "yellow";

const element5 = document.getElementById("vegetables");
const lastBorn = element5.lastElementChild;
lastBorn.style.backgroundColor = "yellow";

const element6 = document.getElementById("desserts");
const lastKid = element6.lastElementChild;
lastKid.style.backgroundColor = "yellow";

// Using querySelectAll() Method:

const ulElements1 =  document.querySelectorAll("ul");
ulElements1[1].style.backgroundColor = "orange";

console.log(ulElements1);

ulElements1.forEach(ulElement => {
    const kidChild =ulElement.lastElementChild;
      kidChild.style.fontWeight = "bold";
});


//  3 .nextElementSibling

const element7 = document.getElementById("apple");
const nextSibling = element7.nextElementSibling;
nextSibling.style.backgroundColor = "lightgreen";

const element8 = document.getElementById("vegetables");
const follower = element8.nextElementSibling;
follower.style.backgroundColor = "lightgreen";

const element9 = document.getElementById("cake");
const nextSib = element9.nextElementSibling;
nextSib.style.backgroundColor = "lightgreen";

// Using querySelectAll() Method:

const ulElements2 =  document.querySelectorAll("ul");
ulElements2[1].style.backgroundColor = "orange";

console.log(ulElements1);

ulElements2.forEach(ulElement => {
    const kidChild =ulElement.nextElementSibling;
      kidChild.style.fontWeight = "bold";
});


//  4 .previousElementSibling


const element10 = document.getElementById("banana");
const prevSibling = element10.previousElementSibling;
prevSibling.style.backgroundColor = "pink";

const element11 = document.getElementById("myDesserts");
const elderSib = element11.previousElementSibling;
elderSib.style.backgroundColor = "pink";

const element12 = document.getElementById("pie");
const upperSib = element12.previousElementSibling;
upperSib.style.backgroundColor = "pink";

// Using querySelectAll() Method:

const ulElements3 =  document.querySelectorAll("ul");
ulElements3[2].style.backgroundColor = "orange";

console.log(ulElements3);

// ulElements3.forEach(ulElement3 => {
//     const kidChild =ulElement3.nextElementSibling;
//       kidChild.style.fontWeight = "bold";
// });


//  5 .parentElement


const element13 = document.getElementById("apple");
const parent = element13.parentElement;
parent.style.backgroundColor = "cyan";

const element14 = document.getElementById("myDesserts");
const guardian = element14.parentElement;
guardian.style.backgroundColor = "yellow";

const element15 = document.getElementById("pie");
const caregiver = element15.parentElement;
caregiver.style.backgroundColor = "blue";

// Using querySelectAll() Method:

const ulElements4 =  document.querySelectorAll("ul");
ulElements4[2].style.backgroundColor = "blue";

console.log(ulElements4);


//  6 .children


const element16 = document.getElementById("fruits");
const children = element16.children;

console.log(children);

// TO TYPECAST AN HTML COLLECTION AS AN ARRAY:
Array.from(children).forEach(child => {
    child.style.fontStyle = "italic"
})

// using INDEX to access elements:
children[2].style.backgroundColor = "grey";


// children

const element17 = document.getElementById("vegetables");
const offspring = element17.children;

console.log(offspring);

// TO TYPECAST AN HTML COLLECTION AS AN ARRAY:
Array.from(offspring).forEach(child => {
    child.style.color = "red"
})

// using INDEX to access elements:
offspring[2].style.backgroundColor = "grey";


// offspring

const element18 = document.getElementById("desserts");
const youngster = element18.children;

console.log(youngster);

// TO TYPECAST AN HTML COLLECTION AS AN ARRAY:
Array.from(youngster).forEach(child => {
    // child.style.color = "red";
    child.style.fontFamily = "monospace";
})

// using INDEX to access elements:
youngster[2].style.backgroundColor = "grey";


// youngster

// Using querySelectAll() Method:

const ulElements5 =  document.querySelectorAll("ul");
ulElements5[2].style.backgroundColor = "blue";

console.log(ulElements5);
