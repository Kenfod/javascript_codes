//      Callback Hell   = is a situation in Javascript where calbacks are nested within other callbacks to the degree wher the code is difficult to read.
//                         It is an old pattern to handle asynchronous functions.
//                         Nowadays, there is Promise + async/await to avoid "callback hell".



//          3. TASKS TO BE COMPLETED IN ORDER USING CALLBACK HELL:

function task1(callback){
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 3000);   
}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 completed");
        callback();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All tasks completed"));
        });
    });
});
