let students = 30;

// #1. ADDITION
students = students + 1;
console.log(students);

// #2. SUBTRACTION
students = students - 1;
console.log(students);

// #3. MULTIPLICATION
students = students * 2;
console.log(students);

// #4. DIVISION
students = students / 2;
console.log(students);

// #5. EXPONENTIAL
students = students ** 2;
console.log(students);

// #6. MODULUS
let extrastudents = students % 7;
console.log(extrastudents);

//  AUGMENTED ASSIGNMENT OPERATORS

let staff = 30;

// #1. ADDITION
staff += 1;
console.log(staff);

// #2. SUBTRACTION
staff -= 1;
console.log(staff);

// #3. MULTIPLICATION
staff *= 2;
console.log(staff);

// #4. DIVISION
staff /= 2;
console.log(staff);

// #5. EXPONENTIAL
staff **= 2;
console.log(staff);

// #6. MODULUS
let extrastaff = staff % 7;
console.log(extrastaff);


// #7. INCREMENT OPERATOR
let temp = 50;
temp++;
console.log(temp);

// #8. DECREMENT OPERATOR
let marks = 50;
marks--;
console.log(marks);

// OPERATOR PRECEDENCE

/*
1. Parenthesis (),
2. Exponents,
3. Multiplication, Division and Modulo,
4. Addition & Subtraction.
*/

let result1 = 1 + 2 * 3 + 4 ** 2;
console.log(result1);

let result2 = 12 % 5 + 8 / 2;
console.log(result2);

let result3 = 6 / 2 ** (2 + 5);
console.log(result3);
