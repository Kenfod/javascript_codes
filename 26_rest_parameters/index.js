//  rest parameters  = is represented by 3 dots => ... that allows a function work with a variable number of arguments by bundling them into an array.
//                      spread operator = expands an array into separate element.
//                      rest = bundles separate elements into an array.


//      EXAMPLE 1:

function menu(...foods){
    console.log(foods);
    console.log(...foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "chips";
const food5 = "sausage";

menu(food1, food2, food3, food4, food5);


//      EXAMPLE 2:

function menu(...foods){
    
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "chips";
// const food5 = "sausage";

// menu(food1, food2, food3, food4, food5);


const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);


//          EXAMPLE 3:

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1);
console.log(`Your total is $${total}`);


const total2 = sum(1, 2);
console.log(`Your total is $${total2}`);


const total3 = sum(1, 2, 3);
console.log(`Your total is $${total3}`);


const total4 = sum(1, 2, 3, 4);
console.log(`Your total is $${total4}`);


const total5 = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total5}`);


//          EXAMPLE 4:

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total6 = getAverage(75, 100, 85, 90, 50);
console.log(total6);


//          EXAMPLE 5: To combine strings together.

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);


//  Additional Examples:

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40, 50)); // Output: 150


const [first, second, ...restOfArray] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(restOfArray); // Output: [3, 4, 5]


const { firstName, age, ...restOfObject } = { firstName: 'Alice', age: 30, city: 'New York', occupation: 'Engineer' };
console.log(firstName); // Output: Alice
console.log(age); // Output: 30
console.log(restOfObject); // Output: { city: 'New York', occupation: 'Engineer' }
