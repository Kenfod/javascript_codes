//  Date objects   =  are objects that contain values that represent dates and times. 
//                  these date objects can be changed and formatted to suit our needs. 


// --------- EXAMPLE 1 -----------

const date = new Date();

console.log(date);


// --------- EXAMPLE 2----------
// To create custom date:
// Date(year, month, day, hour, minute, second, millisecond)
const date2 = new Date(2024, 0, 1, 2, 3, 4, 5);

console.log(date2);


// --------- EXAMPLE 3----------
// By passing a string representation of date and time:

const date3 = new Date("2024-01-02T12:00Z");

console.log(date3);


// --------- EXAMPLE 4 ----------
// By pass in  milliseconds of time since epic:

const date4 = new Date(1700000000000);

console.log(date4);


// --------- EXAMPLE 5 ----------
// By pass in  milliseconds of time since epic:

const date5 = new Date();

const year = date5.getFullYear();
const month = date5.getMonth();
const day = date5.getDate();
const hour = date5.getHours();
const minutes = date5.getMinutes();
const seconds = date5.getSeconds();
const dayOfWeek = date5.getDay();


console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);


// --------- EXAMPLE 6 ----------
// To set the date:

const date6 = new Date();

date6.setFullYear(2024);
date6.setMonth(0);
date6.setDate(1);
date6.setHours(2);
date6.setMinutes(3);
date6.setSeconds(4);

console.log(date6);


// --------- EXAMPLE 7 ----------
// To compare dates:

const date7 = new Date("2023-12-31");
const date8 = new Date("2024-01-01");

if(date8 > date7){
    console.log("HAPPY NEW YEAR");
}else{
    console.log("NOT YET NEW YEAR");
}


// --------- EXAMPLE 8 ----------
// To compare dates:

const date9 = new Date("2023-12-31");
const date10 = new Date("2023-12-30");

if(date10 > date9){
    console.log("HAPPY NEW YEAR");
}else{
    console.log("NOT YET NEW YEAR");
}
