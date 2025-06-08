//  string slicing  = is the process of creating a substring from a portion of another string.
// syntax: string.slice(start, end)

const fullName = "Qellvynne Kay";

let firstName = fullName.slice(0, 9);
console.log(firstName);

let lastName = fullName.slice(10, 13);
console.log(lastName);

let firstChar = fullName.slice(0, 1)
console.log(firstChar);

let lastChar = fullName.slice(-1)
console.log(lastChar);


const fullName2 = "Qellvynne Kay";

let firstName2 = fullName2.slice(0, fullName2.indexOf(" "));
console.log(firstName2);

let lastName2 = fullName2.slice(fullName2.indexOf(" ") + 1);
console.log(lastName2);



const email = "Qellvynne@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(username);

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);
