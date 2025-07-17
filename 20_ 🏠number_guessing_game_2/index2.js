// Initialize game variables
let attempts = 0;
let targetNumber = 0;
let minRange = 0;
let maxRange = 100;

// DOM elements
const attemptDisplay = document.getElementById('attempt');
const resultDisplay = document.getElementById('result');
const minNumInput = document.getElementById('minNum');
const maxNumInput = document.getElementById('maxNum');
const guessInput = document.getElementById('guess');
const lowerBtn = document.getElementById('lowerBtn');
const higherBtn = document.getElementById('higherBtn');
const successBtn = document.getElementById('attemptBtn');

// Generate random number within range
function generateNumber() {
    minRange = parseInt(minNumInput.value);
    maxRange = parseInt(maxNumInput.value);
    
    if (minRange >= maxRange) {
        resultDisplay.textContent = "Minimum must be less than maximum!";
        return;
    }

    targetNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    attempts = 0;
    updateAttempts();
    resultDisplay.textContent = `I'm thinking of a number between ${minRange} and ${maxRange}. Start guessing!`;
}

// Update attempts counter
function updateAttempts() {
    attempts++;
    attemptDisplay.textContent = attempts;
}

// Button event handlers
lowerBtn.addEventListener('click', () => {
    maxRange = parseInt(guessInput.value) - 1;
    resultDisplay.textContent = `Okay, the number is lower than ${guessInput.value}. Try again!`;
    updateAttempts();
});

higherBtn.addEventListener('click', () => {
    minRange = parseInt(guessInput.value) + 1;
    resultDisplay.textContent = `Okay, the number is higher than ${guessInput.value}. Try again!`;
    updateAttempts();
});

successBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (userGuess === targetNumber) {
        resultDisplay.textContent = `Correct! You guessed it in ${attempts} attempts!`;
    } else {
        resultDisplay.textContent = `That's not the number I'm thinking of. Keep trying!`;
    }
    updateAttempts();
});

// Initialize game
generateNumber();
