// SWITCH   =    can be be an efficient replacement to many else-if statements.

let day =1;

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day!`);
}


// IMPORTANCE OF USING "BREAK" CLAUSE- see output on the console!
// it helps to break out of the switch.
let day1 =1;

switch(day1){
    case 1:
        console.log("It is Monday");
    case 2:
        console.log("It is Tuesday");
    case 3:
        console.log("It is Wednesday");
    case 4:
        console.log("It is Thursday");
    case 5:
        console.log("It is Friday");
    case 6:
        console.log("It is Saturday");
    case 7:
        console.log("It is Sunday");
    default:
        console.log(`${day} is not a day!`);
}


let score = 25;
let grade;

switch(true){
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    case score >= 50:
        grade = "E";
        break;
    default:
        grade = "F";
}

console.log(grade);
