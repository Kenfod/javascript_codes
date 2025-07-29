//  Nodelists   = is a static collection of HTML elements by id, class, element.
//                They can be created using querySelectAll() method.
//                Elements can be selected by id class or element types. 
//                They are similar to arrays but do not have map(), filter() and reduce() methods.
//                Nodelists have a forEach() method.
//                Nodelists do not update automatically to reflect changes on the DOM. 
//                However, they can be updated manually to the DOM.


//              1. CREATE A NODELIST
let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// ADD HTML/CSS PROPERTIES - Using forEach ()method:

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button. textContent += "😁";
});


// ADD CLICK event listener - Using forEach ()method:

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "red";
    });
});


// ADD MOUSEOVER & MOUSEOUT event listener - Using forEach ()method:

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});


//              2. ADD A NEW ELEMENT

const newButton = document.createElement("button"); // STEP 2- create an element.
newButton.textContent = "Button 5";     // STEP 2-add necessary attributes or CSS properties.
newButton.classList = "myButtons";      // STEP 3- add the classlist for the new element.
document.body.appendChild(newButton);   //  STEP 4- append the element to the DOM.

console.log(buttons);   //  FYI- Button 5 is not automatically reflected on the DOM.

// To update the nodelist manually on the DOM, reassign the buttons as below:
buttons = document.querySelectorAll(".myButtons");

console.log(buttons); 


//              3. TO REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();

        console.log(buttons);   //  FYI- selected button is not automatically removed from the DOM.

        buttons = document.querySelectorAll(".myButtons");  //  FYI- To manually UPDATE the DOM.

        console.log(buttons);  //  FYI- selected button is NOW removed from the DOM.
    });
});
