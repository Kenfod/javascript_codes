// NUMBER GUESSING GAME
let attempt = 0;
let answer = 0;
let minNum = 0;
let maxNum = 0;

function generateNumber() {
    // Initialize game
    minNum = parseInt(document.getElementById("minNum").value);
    maxNum = parseInt(document.getElementById("maxNum").value);
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempts = 0;
    
    document.getElementById("attempt").textContent = attempt;
    document.getElementById("result1").textContent = `I have selected a number between ${minNum} and ${maxNum}`;
    
    console.log("Correct answer:", answer);
}

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const guess = parseInt(guessInput.value);
    const result = document.getElementById("result");
    const attemptDisplay = document.getElementById("attempt");
    

    // Validate input
    if (isNaN(guess)) {
        result.textContent = "Invalid entry!! Please enter a number";
        return;
    }
    
    if (maxNum < minNum || minNum > maxNum) {
        result.textContent = `${minNum} should be less than ${maxNum} and vice-versa. Please re-enter correct numbers`;
        return;
    }

    if (guess < minNum || guess > maxNum) {
        result.textContent = `Number entered is out of range. Please enter a number between ${minNum} and ${maxNum}`;
        return;
    }


    // Increment attempts
    attempt++;
    attemptDisplay.textContent = attempt;

    // Check guess against answer
    if (guess < answer) {
        result.textContent = "YOUR NUMBER IS LOW! TRY AGAIN!!";
    } 
    else if (guess > answer) {
        result.textContent = "YOUR NUMBER IS HIGH! TRY AGAIN!!";
    } 
    else {
        result.textContent = `CONGRATULATIONS!!! The answer is ${answer}. It took you ${attempt} attempts!`;
    }

    // Clear the input for next guess
    guessInput.value = "";
}
