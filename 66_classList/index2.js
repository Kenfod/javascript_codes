//  classList   = is an ement property inJavascript that is used to interact 
//                with an element's list of classes (meaning CSS classes).
//                By accessing the classList element of a property you can 
//                make reusable classes for many elements across the webpage.

//                With any CSS class, you can dynamically perform the below methods:
//                1.  add() 
//                2.  remove()
//                3.  toggle (Remove if present, Add if missing)
//                4.  replace(oldClass, newClass) 
//                5.  contains()


let buttons = document.querySelectorAll(".myButtons");

//  Add a classlist:
buttons.forEach(button => {
    button.classList.add("enabled");
});

//  Remove a classlist:
// buttons.forEach(button => {
//     button.classList.remove("enabled");
// });

// Add MOUSEOVER & MOUSEOUT event listener - Using forEach ()method:

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});


buttons.forEach(button => {
    button.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }   
});
});


// Add CLICK event listenerto replace - Using forEach ()method:

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.classList.replace("enabled", "disabled");
    });
});
