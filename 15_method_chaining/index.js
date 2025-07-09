//  ----- NO METHOD CHAINING -----

let username = window.prompt("Enter your Username: ");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);


//  ----- METHOD CHAINING -----

let username2 = window.prompt("Enter your Username 2: ");

username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLocaleLowerCase();

console.log(username2);

