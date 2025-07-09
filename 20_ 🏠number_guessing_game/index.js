//  NUMBER GUESSING GAME.

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(answer);

let attempts = 0;
let guess;
let running = true;

// while(running = true); is shortened as :

while(running){

     guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);

     // console.log(typeof guess, guess);
     
     guess = Number(guess);
     
     // console.log(typeof guess, guess);
     
     if(isNaN(guess)){
          window.alert("Invalid entry!! Please enter a number");
     }
     else if(guess < minNum || guess > maxNum){
          window.alert(`Number entered is out of range. Please enter a number between ${minNum} and ${maxNum}`);
     }
     else{
          attempts++;
          if(guess < answer){
               window.alert("YOUR NUMBER IS LOW! TRY AGAIN!!");
          }
          else if(guess > answer){
               window.alert("YOUR NUMBER IS HIGH! TRY AGAIN!!");
          }
          else{
               window.alert(`CONGRATULATIONS!!!. The answer is ${answer}. It took you ${attempts} attempts!`);
               running = false;
          }
     }     
}
