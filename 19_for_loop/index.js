//  For Loop  = is used to repeat some a LIMITED amount of times.


//  FOR LOOP 1

for(let i = 0; i <= 2; i++){
     console.log(i);
}


//  FOR LOOP 2

for(let i = 2; i <= 10; i+=2){
     console.log(i);
}


//  FOR LOOP 3-DECREMENT

for(let i = 10; i > 0; i--){
     console.log(i);
}

console.log("HAPPY NEW YEAR!");


//  FOR LOOP 4-DECREMENT

for(let i = 10; i > 0; i-=3){
     console.log(i);
}

console.log("HAPPY NEW YEAR!");


//  FOR LOOP 5-CONTINUE (for skipping)

for(let i = 1; i <= 20; i++){
     if(i == 13){
          continue;
     }
     else{
          console.log(i);
     }     
}


//  FOR LOOP 5-BREAK (to exit out of the loop)

for(let i = 1; i <= 20; i++){
     if(i == 13){
          break;
     }
     else{
          console.log(i);
     }     
}
