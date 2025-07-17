//  "this" Keyword  = is a reference to the object where "this" is used.
//                    The object depends on the immediate context.

//For example person.name = this.name


//   EXAMPLE:

const person1 = {
  name: "SpongeBob",
  favFood: "hamburgers",

  // using Function expression:
  sayHello: function(){console.log(`Hi! I am ${name}`)},
  sayHello2: function(){console.log(`Hi! I am ${this.name}`)},

  // using Function expression:
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
  // using Arrow Function:
  // eat1: () => console.log("I eating fried chicken & chips!"),
}


person1.sayHello();  // Hi! I am           index.js:14
person1.sayHello2();
person1.eat();

console.log(person1.name);
console.log(person1.favFood);

const person2 = {
  name: "Patrick",
  favFood: "pizza",

  // using Function expression:
  sayHello3: function(){console.log(`Hi! I am ${name}`)},
  sayHello4: function(){console.log(`Hi! I am ${this.name}`)},

// using Function expression:
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
  // using Arrow Function:
  // eat1: () => console.log("I eating fried chicken & chips!"),

}


person2.sayHello3();  // Hi! I am           index.js:36
person2.sayHello4();
person2.eat();

console.log(person2.name);
console.log(person2.favFood);


// USE OF "this" KEYWORD OUT OF CONTEXT:
console.log(this);
//  RETURNS  => Window object {window: Window, self: Window, document: document, name: '', location: Location, …} 


// "this" KEYWORD is not applicable with ARROW FUNCTION because it makes reference to the "WINDOW" object:


const person3 = {
  name: "Brian",
  favFood: "mushroom soup",

  // using Function expression:
  sayHello3: function(){console.log(`Hi! I am ${name}`)},
  sayHello4: function(){console.log(`Hi! I am ${this.name}`)},


  // using Arrow Function:
  eat1: () => console.log(`${this.name} is eating ${this.favFood}`),

}

console.log(person3.name);
console.log(person3.favFood);

person3.sayHello3();  // Hi! I am           index.js:67
person3.sayHello4();
person3.eat1();   //    is eating undefined           index.js:72

//  "window" object does have a name, hence it is "blank" or "empty". 
// favFood propery is "undefined" above because the Window object does not have a property called "favFood"
