//  Arrays of Objects   = are objects in other objects, 
//                     they allow you to represent complex data structures. 
//                     child object is enclosed by a parent object.

//                    {Person{address{}, ContactInfo{}}
//                    {ShoppingCart{Keyboard{}, Mouse{}. Monitor{}}


// --------- EXAMPLE 1 ----------

// create an array of 5 fruits objects:
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

// To access/display name property within an array:
console.log(fruits[0].name);
console.log(fruits[1].name);
console.log(fruits[2].name);
console.log(fruits[3].name);
console.log(fruits[4].name);

// To access/display color property within an array:
console.log(fruits[0].color);
console.log(fruits[1].color);
console.log(fruits[2].color);
console.log(fruits[3].color);
console.log(fruits[4].color);

// To access/display calories property within an array:
console.log(fruits[0].calories);
console.log(fruits[1].calories);
console.log(fruits[2].calories);
console.log(fruits[3].calories);
console.log(fruits[4].calories);


// To ADD a new element to an array:
fruits.push({name: "grapes", color: "purple", calories: 62});

console.log(fruits);

// To REMOVE an element from an array:
fruits.pop();

console.log(fruits);

// To REMOVE an elements at certain indices:
fruits.splice(1, 2)

console.log(fruits);

// To ADD a new elements to an array:
fruits.push({name: "grapes", color: "purple", calories: 62});
fruits.push({name: "orange", color: "orange", calories: 45});
fruits.push({name: "banana", color: "yellow", calories: 105});

console.log(fruits);


// --------- 2. forEach() METHOD----------
// using forEach() to loop through elements in an array:
// You need a callback, function expression or arrow function:

// To return objects:
fruits.forEach(fruit => console.log(fruit));

// To display name property:
fruits.forEach(fruit => console.log(fruit.name));

// To display color property:
fruits.forEach(fruit => console.log(fruit.color));

// To display calories property:
fruits.forEach(fruit => console.log(fruit.calories));


// --------- 3. map() METHOD----------
// using map() to return a new array:
// You need a callback, function expression or arrow function:

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

// To return each array properties:
console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);


// --------- 4. filter() METHOD----------
// Using filter() to return a new array after checking  a condition:
// You need a callback, function expression or arrow function:

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// To return each array properties:
console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);


// --------- 5. reduce() METHOD----------
// Using reduce() to return a single value, which is an object:
// You need a callback, function expression or arrow function:

// Fruit with the highest calories:
const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ? 
                                fruit : max);

// To return the objrct:
console.log(maxFruit);

// To return the calories property:
console.log(maxFruit.calories);


// Fruit with the lowest calories:
const minFruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ? 
                                fruit : min);

// To return the object:
console.log(minFruit);

// To return thecalories property:
console.log(minFruit.calories);
