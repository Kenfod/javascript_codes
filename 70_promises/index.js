//      Promise   = is an object in Javascript that manages asynchronous operations
//                   such as querying a database, fetching a file, gathering resources etc.
//                  A promise object is wrapped around {asynchronous code}.
//                  A promise object "promises to return a value".
//                  A Promise object will remain PENDING until they complete, then they will be RESOLVED
//                  if a task is completed or REJECTED if it fails for some reason.

//          syntax = new Promise((resolve, reject) => {asynchronous code})

//          EXAMPLE - Do the below chores in order:
//  1.  Walk the dog
//  2.  Clean the kitchen
//  3.  Take out the trash


//        1. Using PROMISES - method chaining the promises:

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("You walked the dog 🐕");
    }, 1500);
    });    
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("You cleaned the kitchen 🧹");
    }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("You've taken out trash 🚮");
    }, 500);
    }); 
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
          .then(value => {console.log(value); return takeOutTrash()})
          .then(value => {console.log(value); console.log("You have finished all the chores!")});
