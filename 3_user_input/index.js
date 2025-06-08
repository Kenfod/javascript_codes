// How to accept user input

// 1. EASY WAY = window input
// 2. PROFESSIONAL WAY = HTML textbox


// 1. window input

let username;
username = window.prompt("What's your username?");

let age = window.prompt("What's your age?");

console.log(username);
console.log(age);

// 2. HTML textbox

let user1;

document.getElementById("mySubmit").onclick = function(){
    user1 = document.getElementById("myName").value;
    console.log(user1);
    document.getElementById("myH1").textContent = `Hello ${user1}`
}
