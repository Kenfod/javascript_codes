//  While Loop  = is used to repeat some code WHILE some condition is true.


//  WHILE LOOP 1 - Press "CANCEL"
let username = "";

while(username === ""){
    username = window.prompt(`Enter your name: `);
}

console.log(`Hello ${username}`);


//  WHILE LOOP 2- "NULL" deactivated 
let username2 = "";

while(username2 === "" || username2 === null){
    username2 = window.prompt(`Enter your name: `);
}

console.log(`Hello ${username2}`);


//  UNDEFINED WHILE LOOP  
let username3;

while(username3 === "" || username3 === null){
    username3 = window.prompt(`Enter your name: `);
}

console.log(`Hello ${username3}`);


//  DO WHILE LOOP  
let username4;

do{
    username4 = window.prompt(`Enter your name: `);
}while(username4 === "" || username4 === null)

console.log(`Hello ${username4}`);


//  DO WHILE LOOP- 2
let  loggedIn = false; 
let username5;
let password;

while(!loggedIn){
    username5 = window.prompt(`Enter your name: `);
    password = window.prompt(`Enter your password: `);

    if(username5 === "Kelly" && password === "myPassword"){
        loggedIn = true;
        console.log(`Hello ${username5},You are logged in!`);
    }
    else{
        console.log(`Hello ${username5},the username and password entered are invalid. Please try again!!`);

    }
}


//  DO WHILE LOOP- 3
let  loggedIn2 = false; 
let username6;
let password2;

while(!loggedIn2){
    username6 = window.prompt(`Enter your name: `);
    password2 = window.prompt(`Enter your password: `);

    if(username6 === "Kelly" && password2 === "myPassword"){
        loggedIn2 = true;
        console.log(`Hello ${username6},You are logged in!`);
    }
    else{
        console.log(`Hello ${username6},the username and password entered are invalid. Please try again!!`);

    }
}
