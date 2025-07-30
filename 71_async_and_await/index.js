// Async & Await   = are keywords that allows you write asynchronous code in a synchronous manner.
//           Async = makes a function return a promise,
//           Await = makes an async function wait for a promise.
//                   Async doesn't have resolve or reject parameters.
//                   Everything after Await is placed in an event queue.



//      EXAMPLE - Do the below chores in order:
//  1.  Walk the dog
//  2.  Clean the kitchen
//  3.  Take out the trash


//        1. Using Async / Await:

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve("You walked the dog 🐕");
            }
            else{
                reject("You DID NOT walk the dog")
            }  
    }, 1500);
    });    
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You cleaned the kitchen 🧹");
            }
            else{
                reject("You DID NOT clean the kitchen")
            }
    }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false;

            if(trashTakenOut){
                resolve("You've taken out trash 🚮");
            }
            else{
                reject("You DID NOT take out  the trash")
            }
    }, 500);
    }); 
}


async function doChores() {

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You have finished all the chores!");
    }
    catch(error){
        console.error(error);
    }    
}

doChores()
