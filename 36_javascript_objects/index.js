//  javascript object  = A collection of related properties and/or methods.
//                       Properties are what an object has.
//                       Methods are functions that an object can perform.
//                       Objects can represent a real world items (people, products, places etc).
// syntax      object = {key: value,
//                       function()}


//   EXAMPLE:

const person1 = {
  firstName: "SpoongeBob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,

  // using Function expression:
  sayHello: function(){console.log("Hi I am SpongeBob!")},
  // using Arrow Function:
  sayHello1: () => console.log("Hi I am SpongeBob, the cheesecake!"),

  // using Function expression:
  eat: function(){console.log("I am eating fried chicken!")},
  // using Arrow Function:
  eat1: () => console.log("I eating fried chicken & chips!"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);


const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 50,
  isEmployed: false,

  // using Function expression:
  sayHello: function(){console.log("Hey, I'm Patrick........!")},
  // using Arrow Function:
  sayHello1: () => console.log("Hey, I'm Patrick the giant!"),

  // using Function expression:
  eat: function(){console.log("I am eating roasted beef!")},
  // using Arrow Function:
  eat1: () => console.log("I eating roasted beef & soda!"),
}

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

// To invoke sayHello  and eat functions:
person1.sayHello();
person1.sayHello1();

person1.eat();
person1.eat1();

person2.sayHello();
person2.sayHello1();

person2.eat();
person2.eat1();
