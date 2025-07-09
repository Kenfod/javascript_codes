//  variable scope  = Where a variable is recognizednand accessible             (local vs global).


//      LOCAL SCOPE:
function age1(){
    let x = 10;
    console.log(x);
}

function age2(){
    let x = 20;
    console.log(x);
}

age1();
age2();


//      GLOBAL SCOPE:

let x = 3;

num1();

function num1(){
    console.log(x);
}

function num2(){
    console.log(x);
}

num2();


//      GLOBAL SCOPE 2:

let y = 3;

num1();

function num1(){
    let y = 5;
    console.log(y);
}

function num2(){
    let y = 25;
    console.log(y);
}

num2();
