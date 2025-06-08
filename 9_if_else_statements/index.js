//  IF-ELSE STATEMENT USING A VARIABLE.

let age = 13;

if(age >= 18){
    console.log("You are ELIGIBLE to apply for a driving license!");
}
else{
    console.log("You are  NOT ELIGIBLE to apply for a driving license!");

}


//  IF-ELSE STATEMENT USING A BOOLEAN.

let isStudent = false;

if(isStudent){
    console.log("You are a STUDENT");
}
else{
    console.log("You are  NOT A STUDENT!");

}



//  NESTED IF- ELSE STATEMENT USING A VARIABLE.

let age2 = 20;
let hasLicense = false;

if(age2 >= 18){
    console.log("You are ELIGIBLE to apply for an ID!");
        
    if(hasLicense){
        console.log("You have a license!");
    }
    else{
        console.log("You DO NOT have a license!");
    }
}
else{
    console.log("You are  NOT ELIGIBLE to apply for an Id!");

}


//  ELSE-IF STATEMENT USING A VARIABLE.

let age3 = 20;

if(age3 >= 100){
    console.log("You are TOO OLD to visit this site!");
}

else if(age3 == 0){
    console.log("NO ACCESS! You  are just an INFANT!");
}

else if(age3 >= 18){
    console.log("You are ELIGIBLE to visit this site!");
}

else if(age3 < 0){
    console.log("Are you an ALIEN? Your age cannot be below ZERO!");
}

else{
    console.log("You are MUST BE 18+ years to visit this site!");

}



