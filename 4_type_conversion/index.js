//  Type conversion = change the datatype of a value to another.
//                  (string <=> number <=> boolean) 

// BY DEFAULT ALL INPUTS ARE STRING UNLESS OTHERWISE SPECIFIED:
let age = window.prompt("How old are you?");

age+=1;

console.log(age, typeof age);


// CONVERT A STRING TO A NUMBER:
let year = window.prompt("How old are you?");
year = Number(year);
year+=1;

console.log(year, typeof year);


// STRING CONVERSION
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// NUMBER CONVERSION
let a = "0";
let b = "0";
let c = "0";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);



// SPACE CONVERSION
let k = "";
let l = "";
let m = "";

k = Number(k);
l = String(l);
m = Boolean(m);

console.log(k, typeof k);
console.log(l, typeof l);
console.log(m, typeof m);



// UNDEFINED VARIABLE CONVERSION
let q;
let r;
let s;

q = Number(q);
r = String(r);
s = Boolean(s);

console.log(q, typeof q);
console.log(r, typeof r);
console.log(s, typeof s);

