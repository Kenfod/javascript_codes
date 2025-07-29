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


// ---------- ARROW KEYS EVENT ----------

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    myBox.style.backgroundColor = "red";
    myBox.textContent = "😲";
});

document.addEventListener("keyup", event =>{
    myBox.style.backgroundColor = "hsl(170, 75%, 60%)";
    myBox.textContent = "😀";
});


//  1. Using a callback funtion:   .addEventListener(event, callback)
function changeColor(event){
    // console.log(event);

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
}

document.addEventListener("keydown", changeColor);

//  2. Using an anonymous funtion:   .addEventListener(event, anonymous function)

document.addEventListener("keydown", function(event){

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

//  3. Using an arrow funtion:   .addEventListener(event, arrow function)

document.addEventListener("keydown", event =>{

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }

});
