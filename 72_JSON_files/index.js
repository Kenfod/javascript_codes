// JSON   = (Javascript Object Notation) is a data-interchange format.
//          Most of the time it is used for exchanging data between a server and a web application
//          They can have a few different format.
//          Usually you will see a JSON file as ana object made up of {key:value} pairs OR
//          as an array [value1, value2, value3] of values OR some combination of both [{}, {}, {}].

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.


// A. JSON.stringify() 

//  1.  NAME OBJECT
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

console.log(names);

const jsonString = JSON.stringify(names);

console.log(jsonString);

//  2.  PERSON OBJECT
const person = {
  name: "Spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["Jellyfishing", "Karate", "Cooking"],
};

console.log(person);

const jsonString1 = JSON.stringify(person);

console.log(jsonString1);


//  3.  PEOPLE ARRAY
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 50,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 45,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}]

console.log(people);

const jsonString2 = JSON.stringify(people);

console.log(jsonString2);


// B.  JSON.parse()
//  1.  
const jsonNames = `["Spongebob","Patrick","Squidward","Sandy"]`

console.log(jsonNames);

const parsedData1 = JSON.parse(jsonNames);

console.log(parsedData1);


//  2.  
const jsonPerson = `{"name":"Spongebob","age":30,"isEmployed":true,"hobbies":["Jellyfishing","Karate","Cooking"]}`

console.log(jsonPerson);

const parsedData2 = JSON.parse(jsonPerson);

console.log(parsedData2);

//  3.  
const jsonPeople = `[{"name":"Spongebob","age":30,"isEmployed":true},
                     {"name":"Patrick","age":50,"isEmployed":false},
                     {"name":"Squidward","age":45,"isEmployed":true},
                     {"name":"Sandy","age":27,"isEmployed":false}]`

console.log(jsonPeople);

const parsedData3 = JSON.parse(jsonPeople);

console.log(parsedData3);


// C.  fetch():

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))


// To iterate:
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    // .then(values => values.forEach(value => console.log(value.name)))
    // .then(values => values.forEach(value => console.log(value.age)))
    // .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error));
