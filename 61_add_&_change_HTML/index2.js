// ---------- EXAMPLE 1 ----------

// STEP 1 - CREATE ELEMENT
const newH2 = document.createElement("h2");
const newH3 = document.createElement("h3");

// STEP 2 - ADD ATTRIBUTES/PROPERTIES
newH2.textContent = "I love You!";
newH3.textContent = "I hate You!";
newH2.id = "myH2";
newH3.id = "myH3";
newH2.style.color = "black";
newH3.style.color = "black";
newH2.style.textAlign = "right";
newH3.style.textAlign = "left";


// STEP 3 - APPEND ELEMENT TO DOM
document.body.append(newH2);    //Appended element is the last child of the parent-(body)
document.body.prepend(newH2);    //Appended element is the first child of the parent-(body)

document.body.prepend(newH3);    //Appended element is the first child of the parent-(body)

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH2, boxes[1]);    //Appended element between BOX 1 and BOX 2


// STEP 4 - REMOVE HTML ELEMENT
document.body.removeChild(newH3);
