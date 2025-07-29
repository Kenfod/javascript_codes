// ---------- EXAMPLE 1 ----------

// STEP 1 - CREATE ELEMENT
const newH2 = document.createElement("h2");

// STEP 2 - ADD ATTRIBUTES/PROPERTIES
newH2.textContent = "I love You!";
newH2.id = "myH2";
newH2.style.color = "black";
newH2.style.textAlign = "right";


// STEP 3 - APPEND ELEMENT TO DOM
document.body.append(newH2);    //Appended element is the last child of the parent-(body)
document.body.prepend(newH2);    //Appended element is the first child of the parent-(body)
document.getElementById("box1").append(newH2);    //Appended element is the last child within BOX 1
document.getElementById("box1").prepend(newH2);    //Appended element is the first child within BOX 1

const box3 = document.getElementById("box3");
document.body.insertBefore(newH2, box3);    //Appended element between BOX 2 and BOX 3

// STEP 4 - REMOVE HTML ELEMENT (within the BOX)

document.getElementById("box1").removeChild(newH2);
