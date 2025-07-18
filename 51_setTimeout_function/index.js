//  setTimeout() =  Is a function in Javascript that allows you to schedule the execution of a function 
//                  after an amount of time (usually in milliseconds). 
//                  Times are approximate - (they vary based on the workload of the Javascript runtime environment). 
//        syntax = setTimeout(callback, delay)

// --------- EXAMPLE 1 -using a callback:-----------

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);


// --------- EXAMPLE 2 -using an anonymous function:-----------

setTimeout(function(){window.alert("Hello")}, 3000);


// --------- EXAMPLE 3 -using an arrow function:-----------

setTimeout(() => window.alert("Hello"), 3000);


// --------- EXAMPLE 4 -To cancel timeout:-----------
//   clearTimeout(timeoutId) = can cancel a timeout before it triggers.

const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutId);


// --------- EXAMPLE 5 -Start Timer and Clear Timer Buttons:-----------

let timeoutId1;

function startTimer(){
    setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId1);
    console.log("CLEARED");
}
