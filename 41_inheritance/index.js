//  Inheritance = allows a new class to inherit properties and methods from an existing class.
//             These classes have a parent -> child relationship.
//             A child inherits properties and methods from its parent.
//             Inheritance helps with code reuseabiliity.


// creation of parent class  
class Animal{
  alive = true;

  // creation of parent methods:
  eat(){
    console.log(`This ${this.name} is eating`);
  }

  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}

// creation of children classes that will inherit the above parent methods:
class Rabbit extends Animal{
  name = "rabbit";

  // creation of NEW method for rabbit:
   run(){
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal{
  name = "fish";

  // creation of NEW method for rabbit:
   swim(){
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal{
  name = "hawk";

  // creation of NEW method for rabbit:
   fly(){
    console.log(`This ${this.name} is flying`);
  }
}

// creation of NEW children objects:
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
