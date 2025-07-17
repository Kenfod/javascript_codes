//  "static" = is a keyword that defines properties or methods that belong to a class itself 
//             rather than the object created from that class.
//             In a summary, class anything static, not the object.

//  EXAMPLE 1:

class MathUtilties{
  static PI =3.14159;

  // static methods:

  static getDiameter(radius){
    return radius * 2;
  }

  static getCircumference(radius){
    return 2 * this.PI * radius;
  }

  static getArea(radius){
    return this.PI * radius * radius;
  }


}

console.log(MathUtilties.PI);
console.log(MathUtilties.getDiameter(10));
console.log(MathUtilties.getCircumference(10));
console.log(MathUtilties.getArea(10));


//  EXAMPLE 2: Mix of regular properties & methods, and static properties & methods.

class User{                       // creation of class                   
  static userCount = 0;           // creation of static property  (variable) & set it to 0.
  constructor(username){          // include a constructor with 1 object that will be automatically called, once a new object is instantiated.
    this.username = username;     // assign the username property.
    User.userCount++;             // increment the userCount  & for tracking.
  }
  
  // creation of regular method:
  sayHello(){
    console.log(`Hello, my username is ${this.username}`)
  }

  // creation of static method:
  static getUserCount(){
    console.log(`There are  ${User.userCount} users online`)
  }
}

//  creating new user objects:
const user1 = new User("SpongeBob");
const user2 = new User("Patrick");
const user3 = new User("Sally");

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(user1.userCount);     // undefined  index.js:53 => because "user1" does not have "userCount" as it's property.

console.log(User.userCount);
