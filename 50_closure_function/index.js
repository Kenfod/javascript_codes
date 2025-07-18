//  closure   =  Is a function defined inside another function. 
//               The innerfunction has access to the variables and scope of the outer function. 
//                By using closures, they allow for private variables and               state maintenance.
//                JS frameworks like React, Vue and Angular use closures  frequently.
//                 You will see closures in function-based components.
// --------- EXAMPLE 1 -----------

function outer(){

    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}
// Any attempt to update the message is not allowe because it is outside the scope of outer function:
message = "Goodbye!";

outer();


// --------- EXAMPLE 2----------
// To create a counter:

function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count);     //undefined
console.log(`The current count is ${counter.getCount()}`);


// --------- EXAMPLE 3----------

// To create a counter:

function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(3);
game.increaseScore(6);

console.log(`The final score is ${game.getScore()}`);
