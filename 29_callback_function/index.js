//  Callback  = A function that is passed as an argument to another function.
//                      Is used to handle asynchronous operations such as:
//                      1. Reading a file.
//                      2. Network requests.
//                      3. Interacting with databases.

//                      Example: "Hey, when you are done, call this next!".



//      EXAMPLE 1:

hello();
goodbye();

function hello(){
    console.log("Hi!");
}

function goodbye(){
    console.log("Bye!");
}

//      EXAMPLE 2:

hello();
goodbye();

function hello(){
    setTimeout(function () {
        console.log("Hi!");
    }, 3000);    
}

function goodbye(){
    console.log("Bye!");
}

//          EXAMPLE 3:- Invoking a callback function.

hello1(goodbye1);

// function hello1(callback){
//     setTimeout(function () {
//         console.log("Hi!");
//     }, 3000);
//     callback();
// }

function hello1(callback){
    console.log("Hi!");
    callback();    
}

function goodbye1(){
    console.log("Bye!");
}

//          EXAMPLE 4:

hello2(leave2);

function hello2(callback){
    console.log("Hi!");
    callback();    
}

function leave2(){
    console.log("Leave!");
}

function goodbye2(){
    console.log("Bye!");
}


//          EXAMPLE 5:

hello3(wait3);

function hello3(callback){
    console.log("Hi!");
    callback();    
}

function wait3(){
    console.log("Wait!");
}

function leave3(){
    console.log("Leave!");
}

function goodbye3(){
    console.log("Bye!");
}


//          EXAMPLE 6:

sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
        console.log(result);
}


//          EXAMPLE 7:

sum(displayPage, 3, 5);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayPage(result){
        document.getElementById("myH1").textContent = result;
}
