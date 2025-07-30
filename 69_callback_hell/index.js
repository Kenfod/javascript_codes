//      Callback Hell   = is a situation in Javascript where calbacks are nested within other callbacks to the degree wher the code is difficult to read.
//                         It is an old pattern to handle asynchronous functions.
//                         Nowadays, there is Promise + async/await to avoid "callback hell".



//          1. SYNCHRONOUS FUNCTION:

function task1(){
    console.log("Task 1 completed");
}

function task2(){
    console.log("Task 2 completed");
}

function task3(){
    console.log("Task 3 completed");
}

function task4(){
    console.log("Task 4 completed");
}

task1();
task2();
task3();
task4();
console.log("All tasks completed");


//          2. ASYNCHRONOUS FUNCTION:

function task1(){
    setTimeout(() => {
        console.log("Task 1 completed");
    }, 2000);
}

function task2(){
    setTimeout(() => {
        console.log("Task 2 completed");
    }, 1000);
}

function task3(){
    setTimeout(() => {
        console.log("Task 3 completed");
    }, 3000);   
}

function task4(){
    setTimeout(() => {
        console.log("Task 4 completed");
    }, 1500);
}

task1();
task2();
task3();
task4();
console.log("All tasks completed");
