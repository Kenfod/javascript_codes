//  synchronous code  = Executes line by line consecutively in a sequential manner.
//                      Its a code that waits for an operation to complete.

// EXAMPLE:
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

//  asynchronous code = Allows multiple operations to be performed concurrently without waiting.
//                      It doesnt block the execution flow and allows the program to continue.
//                      (It is found with: I/O operations, network requests, fetching data)
//                      It can be handled with: Callbacks, Promises, Async/Await

// EXAMPLE:

setTimeout(() => console.log("Task A"), 3000);
console.log("Task B");
console.log("Task C");
console.log("Task D");

// USING CALLBACK:
function func1(callback){
    setTimeout(() => {console.log("Task A");
                    callback()}, 3000);
}

function func2(){
    console.log("Task B");
    console.log("Task C");
    console.log("Task D");
}

func1(func2);
