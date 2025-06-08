// string methods   = allow you to manipulate and work with text (strings).

let userName = "Qellvynne Kay";

console.log(userName.charAt(0));

console.log(userName.indexOf("K"));

console.log(userName.lastIndexOf("n"));

console.log(userName.length);

console.log(userName.trim());

console.log(userName.toUpperCase());

console.log(userName.toLowerCase());

console.log(userName.repeat(3));

console.log(userName.startsWith("q"));

console.log(userName.endsWith("y"));

console.log(userName.includes(""));

let phoneNumber = "+254-733-787680";

console.log(phoneNumber.padStart(20, "0"));

console.log(phoneNumber.replaceAll("+", "00"));

console.log(phoneNumber.padEnd(20, "0"));

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber.replaceAll("+", "x"));



