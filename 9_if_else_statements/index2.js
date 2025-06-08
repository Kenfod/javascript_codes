//  ELSE-IF STATEMENT USING A VARIABLE.
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
// const myText = document.getElementById("myText");
let age4;

mySubmit.onclick = function(){
    age4 = myText.value;
    age4 = Number(age4);

    if(age4 >= 100){
        result.textContent = ("You are TOO OLD to visit this site!");
    }

    else if(age4 == 0){
        result.textContent = ("NO ACCESS! You  are just an INFANT!");
    }

    else if(age4 >= 18){
        result.textContent = ("You are ELIGIBLE to visit this site!");
    }

    else if(age4 < 0){
        result.textContent = ("Are you an ALIEN? Your age cannot be below ZERO!");
    }

    else{
        result.textContent = ("You are MUST BE 18+ years to visit this site!");

    }

}






