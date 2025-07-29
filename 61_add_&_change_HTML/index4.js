// ---------- EXAMPLE 3 <li>----------

// STEP 1 - CREATE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 - ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "grey";


// STEP 3 - APPEND ELEMENT TO DOM
document.body.append(newListItem);    //Appended element is the last child of the parent-(body)
document.body.prepend(newListItem);    //Appended element is the first child of the parent-(body)
document.getElementById("fruits").append(newListItem);    //Appended element is the last child within BOX 1
document.getElementById("fruits").prepend(newListItem);    //Appended element is the first child within BOX 1

const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, banana);    //Appended element between Orange and Banana

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[0]);    //Appended element using index

// STEP 4 - REMOVE HTML ELEMENT (within the BOX)

// document.getElementById("fruits").removeChild(newListItem);
