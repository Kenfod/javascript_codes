//  error  = is an object that is created to represent a problem that occurs.
//                      It occurs often with user input or when establishing connection.
//                      Errors when uncaught interrupts the normal flow of programs.
//                      Errors can be generated because of :.
//                      1. Network issues
//                      2. Promise rejection
//                      3. Security errors

//  To handle errors - use try{}, catch{} and finally{} objects:
//  try{}   =   Encloses code that might potrntialy cause an error.
//  catch{} =Catches and handle any thrown errors from try{}
//  finally{} =(optional) Always executes. Used mostly for clean up.
//             e.g. close files, close connections, release resources etc


// EXAMPLE 1 - without an error:
console.log("Hello");
console.log("You have reached the end!");


// EXAMPLE 2 - typo error:
// console.lag("Hello");
console.log("You have reached the end!");
// index.js:10 Uncaught TypeError: console.lag is not a function                at index.js:10:9


// EXAMPLE 3 - reference error:
// console.log(x);
console.log("You have reached the end!");
// index.js:17 Uncaught ReferenceError: x is not defined                        at index.js:17:13


// EXAMPLE 4 - To handle errors -using try{} & catch{}:
try{
    console.log(x);
    // 1. Network issues
    // 2. Promise rejection
    // 3. Security errors
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");


// EXAMPLE 5 - To handle errors -using try{}, catch{} & finally{} :
try{
    console.log(y);
    // 1. Network issues
    // 2. Promise rejection
    // 3. Security errors
}
catch(error){
    console.error(error);
}
finally{
    // 1. Close files
    // 2. Close connections
    // 3. Release resources
    console.log("This is ALWAYS executed!!!")
}
console.log("You have reached the end!");


// EXAMPLE 6 - Resolving intentional(typo) error -using try{} & catch{}:
try{
    const dividend = window.prompt("Enter a dividend:");
    const divisor = window.prompt("Enter a divisor:");

    const result = dividend / divisor;
    console.lag(result)
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");


// EXAMPLE 7 - Resolving number divided by "zero" error -using try{} & catch{}:
try{
    const dividend = window.prompt("Enter a dividend:");
    const divisor = window.prompt("Enter a divisor:");

    if(divisor == 0){
        throw new Error("You can't divide by zero!")
    }

    const result = dividend / divisor;
    console.lag(result)
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");


// EXAMPLE 8 - Resolving "NaN" error -using try{} & catch{}:
try{
    const dividend = Number(window.prompt("Enter a dividend:"));
    const divisor = Number(window.prompt("Enter a divisor:"));

    if(divisor == 0){
        throw new Error("You can't divide by zero!")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values entered MUST be a NUMBER!")
    }

    const result = dividend / divisor;
    console.lag(result)
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");