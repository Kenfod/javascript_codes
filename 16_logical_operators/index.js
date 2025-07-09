//  Logical Operators  = is used to combine or manipulate boolean values (true or false).

//                      AND =   &&
//                      OR  =   ||
//                      NOT =   !

//      ----- WITHOUT LOGICAL OPERATOR -----

const temp = 100;

if(temp > 0) {
    console.log("The weather is GOOD");
}
else if(temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}


//      ----- && (AND) LOGICAL OPERATOR -----

const temp1 = -20;

if(temp1 > 0 && temp1 <= 30) {
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}


//      ----- || (OR) LOGICAL OPERATOR -----

const temp2 = 25;

if(temp2 <= 0 || temp2 > 30) {
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}


//      ----- ! (NOT) LOGICAL OPERATOR -----

const isSunny = true;

if(!isSunny){
    console.log("It is SUNNY");
}
else{
    console.log("It is CLOUDY");
}
