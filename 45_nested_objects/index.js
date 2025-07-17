//  Nested Objects   = are objects in other objects, 
//                     they allow you to represent complex data structures. 
//                     child object is enclosed by a parent object.

//                    {Person{address{}, ContactInfo{}}
//                    {ShoppingCart{Keyboard{}, Mouse{}. Monitor{}}


// --------- EXAMPLE 1 ----------

// creation of a parent object:
const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,

  // creation of array properties:
  hobbies: ["karate", "judo", "cooking"],

  // creation of a nested object:
  address: {
    street: "124 Conch St.",
    city: "California",
    country: "USA",
  }
}


// To display variables:
// const {fullName, age, isStudent, address} = person;


console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);

// To display array of hobbies:
console.log(person.hobbies);

// To display individual elements:
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);

// To display nested address object:
console.log(person.address);

// To display properties of nested address object:
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

// To loop the proprties in nested address objrct:
for(const property in person.address){
  console.log(person.address[property]);
}



// --------- EXAMPLE 2 ----------

// creation of a parent object:
class Person{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;

    // creation of a new object with parent object:
    this.address = new Address(...address);
  }
} 

// creation of a child object:
class Address{
  constructor(street, city,country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
} 

// creation of objects:
const person1 =new Person("Spongebob", 30, 
                          "124 Conch St.", 
                          "California", "USA");

const person2 =new Person("Kirkland", 50, 
                          "24 Beach St.", 
                          "London", "UK");

const person3 =new Person("Squidward", 45, 
                          "100 Mines St.", 
                          "Johannesburg", "South Africa");

// PERSON 1:
console.log(person1.name);
console.log(person1.age);

// To display nested address object:
console.log(person1.address);

// To display properties of nested address object:
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);


// PERSON 2:
console.log(person2.name);
console.log(person2.age);

// To display nested address object:
console.log(person2.address);

// To display properties of nested address object:
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);


// PERSON 3:
console.log(person3.name);
console.log(person3.age);

// To display nested address object:
console.log(person3.address);

// To display properties of nested address object:
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);
