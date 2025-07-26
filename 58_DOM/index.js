// Document Object Model = is a Javascript object{} that represents the page you see in the web browser 
//                          and provides you with an API to interact with it.
//                          Web browser constructs the DOM when it loads an HTML document, 
//                          and structures all the elments in a tree-like representation.
//                          Javascript can access the DOM to dynamically change the content, structure, and style of the web.

// document.getElementById("");

console.log(document);  //Lists the elements of the document

document.title = "DOM structure"; //Changes the title property of the document

document.body.style.backgroundColor = "hsl(0, 0%, 15%)";  //Changes the background theme color of the document

console.dir(document);  //Lists the all the properties of the document

const username = "Kay";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;
