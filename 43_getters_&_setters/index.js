//  Getters   = are special method that make a property readable. 
//  Setters   = are special method that make a property writeable. 

//           We can use getters and setters to validate and modify a value when reading/writing a property.
//           It helps with validation when creating an object or when updating one of its properties. 


// EXAMPLE 1:

// creation of parent class  
class Rectangle{
  
  // creation of a parent constructor:
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  // creation of a setter outside the constructor:
  set width(newWidth){
    if(newWidth > 0){
      this._width = newWidth;
    }
    else{
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight){
    if(newHeight > 0){
      this._height = newHeight;
    }
    else{
      console.error("Height must be a positive number");
    }
  }

  // creation of a getter outside the constructor:
  // additional logic "toFixed(1)" included:
  get width(){
      return `${this._width.toFixed(1)}cm`;
  }

  get height(){
      return `${this._height.toFixed(1)}cm`;
  }

  // creation of method with undefined property:
  get area(){
      return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

// creation of NEW children objects:
const rectangle = new Rectangle(3, 4);

// updation of values:
rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);



// EXAMPLE 2:

// creation of parent class  
class Person{
  
  // creation of a parent constructor:
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // creation of a setter outside the constructor:
  set firstName(newFirstName){
    if(typeof newFirstName === "string" && newFirstName.length > 0){
      this._firstName = newFirstName;
    }
    else{
      console.error("First name must be a non-empty string!");
    }
  }

  set lastName(newLastName){
    if(typeof newLastName === "string" && newLastName.length > 0){
      this._lastName = newLastName;
    }
    else{
      console.error("Last name must be a non-empty string!");
    }
  }

  set age(newAge){
    if(typeof newAge === "number" && newAge >= 0){
      this._age = newAge;
    }
    else{
      console.error("Age must be a non-negative number!");
    }
  }


  // creation of a getter outside the constructor:
  get firstName(){
      return this._firstName;
  }

  get lastName(){
      return this._lastName;
  }

  // creation of method with undefined property:
  get fullName(){
      return this._firstName +" "+ this._lastName;
  }

  get age(){
      return this._age;
  }
}

// creation of NEW children objects:
const person = new Person("Spongebob", "Squarepants", 30);

// updation of values:
rectangle.width = 5;
rectangle.height = 6;

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
