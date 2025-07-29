//  Event Listeners = listen for specific events to create interactive web pages.
//                    The events covered herein are:
//                    1. Click 
//                    2. Mouseover
//                    3. Mouseout

//        syntax 1:   .addEventListener(event, callback)  
//        syntax 2:   .addEventListener(event, arrow function) 
//        syntax 3:   .addEventListener(event, anonymous function)   


// ---------- EVENT 1 - CLICK----------

const myButton = document.getElementById("myButton");

//  1. Using a callback funtion:   .addEventListener(event, callback)
function changeColor(event){
    // console.log(event);
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH! 🤕";
}

myButton.addEventListener("click", changeColor);

//  2. Using an anonymous funtion:   .addEventListener(event, anonymous function)

myButton.addEventListener("click", function(event){
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH!! 🤕";
});

//  3. Using an arrow funtion:   .addEventListener(event, arrow function)

myButton.addEventListener("click", event =>{
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH!!! 🤕";
});


// ---------- EVENT 2 - MOUSEOVER ----------

//  1. Using a callback funtion:   .addEventListener(event, callback)
function changeColor(event){
    // console.log(event);
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont do it! 🤕";
}

myButton.addEventListener("mouseover", changeColor);

//  2. Using an anonymous funtion:   .addEventListener(event, anonymous function)

myButton.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!! 🤕";
});

//  3. Using an arrow funtion:   .addEventListener(event, arrow function)

myButton.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!!! 🤕";
});


// ---------- EVENT 3 - MOUSEOUT ----------

//  1. Using a callback funtion:   .addEventListener(event, callback)
function changeColor(event){
    // console.log(event);
    event.target.style.backgroundColor = "hsl(170, 75%, 60%)";
    event.target.textContent = "Click Me! 😀";
}

myButton.addEventListener("mouseout", changeColor);

//  2. Using an anonymous funtion:   .addEventListener(event, anonymous function)

myButton.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "hsl(170, 75%, 60%)";
    event.target.textContent = "Click Me!! 😀";
});

//  3. Using an arrow funtion:   .addEventListener(event, arrow function)

myButton.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "hsl(170, 75%, 60%)";
    event.target.textContent = "Click Me!!! 😀";
});
