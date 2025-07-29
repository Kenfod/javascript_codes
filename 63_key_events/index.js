//  Event Listeners = listen for specific events to create interactive web pages.
//                    The events covered herein are:
//                    1. Key Down - when you press any key down.
//                    2. Key Up   - when you release any key.
//                    3. Arrow Up   - when you press "Arrow Up" key.
//                    4. Arrow Down - when you press "Arrow Down" key.
//                    5. Arrow Left - when you press "Arrow Left" key.
//                    6. Arrow Right - when you press "Arrow Right" key.

// FYI = "Key Press" is not compartible with most browsers.

//        syntax 1:   document.addEventListener(event, callback)  
//        syntax 2:   document.addEventListener(event, arrow function) 
//        syntax 3:   document.addEventListener(event, anonymous function)   


// ---------- EVENT 1 - KEY DOWN ----------

//  To test code:

// document.addEventListener("keydown", event =>{
//     console.log(`Key Down =${event.key}`);
// });

// document.addEventListener("keyup", event =>{
//     console.log(`Key Up =${event.key}`);
// });



const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

//  1. Using a callback funtion:   .addEventListener(event, callback)
function changeColor(event){
    // console.log(event);
    myBox.style.backgroundColor = "red";
    myBox.textContent = "😲!";
}

document.addEventListener("keydown", changeColor);

//  2. Using an anonymous funtion:   .addEventListener(event, anonymousfunction)

document.addEventListener("keydown", function(event){
    myBox.style.backgroundColor = "red";
    myBox.textContent = "😲!!";
});

//  3. Using an arrow funtion:   .addEventListener(event, arrowfunction)

document.addEventListener("keydown", event =>{
    myBox.style.backgroundColor = "red";
    myBox.textContent = "😲!!!";
});


// ---------- EVENT 2 - KEY UP ----------

//  1. Using a callback funtion:   .addEventListener(event, callback)
function changeColor(event){
    // console.log(event);
    myBox.style.backgroundColor = "hsl(170, 75%, 60%)";
    myBox.textContent = "😀!";
}

document.addEventListener("keyup", changeColor);

//  2. Using an anonymous funtion:   .addEventListener(event, anonymousfunction)

document.addEventListener("keyup", function(event){
    myBox.style.backgroundColor = "hsl(170, 75%, 60%)";
    myBox.textContent = "😀!!";
});

//  3. Using an arrow funtion:   .addEventListener(event, arrowfunction)

document.addEventListener("keyup", event =>{
    myBox.style.backgroundColor = "hsl(170, 75%, 60%)";
    myBox.textContent = "😀!!!";
});
