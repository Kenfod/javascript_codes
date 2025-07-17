//  Super  = is a keyword that is used in classes to call the constructor 
//           or access the properties and methods of a parent 
//           (The parent is also known as the superclass) 
//           this = this.object
//           super = the parent


// // EXAMPLE 1:
// // creation of parent class  
// class Animal{
  
//   // creation of parent constructor:
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
// }

// // creation of children classes that will inherit the above parent methods:
// class Rabbit extends Animal{

//   // creation of a child constructor:
//     constructor(name, age, runSpeed){
//     super();
//     this.name = name;
//     this.age = age;
//     this.runSpeed = runSpeed;
//   }
// }

// class Fish extends Animal{

//   // creation of a child constructor:
//     constructor(name, age, swimSpeed){
//     super();
//     this.name = name;
//     this.age = age;
//     this.swimSpeed = swimSpeed;
//   }
// }

// class Hawk extends Animal{

//   // creation of a child constructor:
//   constructor(name, age, flySpeed){
//     super();
//     this.name = name;
//     this.age = age;
//     this.flySpeed = flySpeed;
//   }
// }

// EXAMPLE 2:
// creation of parent class  
class Animal{
  
  // creation of parent constructor:
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  // creation of a parent method:
  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}

// creation of children classes that will inherit the above parent methods:
class Rabbit extends Animal{

  // creation of a child constructor:
  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }
  // creation of a child method:
  run(){
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal{

  // creation of a child constructor:
  constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  // creation of a child method:
  swim(){
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

class Hawk extends Animal{

  // creation of a child constructor:
  constructor(name, age, flySpeed){
    super(name, age);
    this.flySpeed = flySpeed;
  }
   // creation of a child method:
  fly(){
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}


// creation of NEW children objects:
const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();
