//#1.  RANDOM NUMBER GENERATOR BTW "1" & "0"

let randomNum = Math.random();

console.log(randomNum);


//#2.   RANDOM NUMBER GENERATOR BTW "1" & "6"

let randomNum1 = Math.floor(Math.random() * 6) + 1;

console.log(randomNum1);


//#3.   RANDOM NUMBER GENERATOR BTW "1" & "100"

let randomNum2 = Math.floor(Math.random() * 100) + 1;

console.log(randomNum2);



//#4.   RANDOM NUMBER GENERATOR BTW "50" & "100"
const min =50;
const max =100;

let randomNum3 = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum3);


//#5.  ROLL A DICE:

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
// const min = 1;
// const max = 6;
let randomNum4;

myButton.onclick = function(){
    randomNum4 = Math.floor(Math.random() * 6) + 1;
    myLabel.textContent = randomNum4
}
