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


//              1. add() a classList:
const myButton = document.getElementById("myButton");

// console.log(myButton);

myButton.classList.add("enabled");      //To add()
// myButton.classList.remove("enabled");   //To remove()

//              2. toggle() using an event listener:
myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});


//              3. add() & remove() using an event listener:
myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});


//              4. replace(oldClass, newClass) using an event listener:
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    event.target.classList.replace("enabled", "disabled");
});


//              5. contains() using an event listener:
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }   
});


//              6. Reuse of classList on a new "myH1" element:
const myH1 =document.getElementById("myH1");
myH1.classList.add("enabled");

myH1.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }   
});
