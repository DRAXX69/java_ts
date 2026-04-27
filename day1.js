// variable types
// let, const, var
const name = "john"; //cannot be reassigned or redeclared
let age = 30; // can change
//let age = 25; // cannot redeclare
var city = "kathmandu"; // can be reassigned and redeclared 
var city = "pokhara";
city = " Lalitpur";

console.log(name, age,city);



// variable types and scope{}
if(true){
    //let, const -> blocked scoped
    let firstname = "Ram";
    const lastname = "Bahadur";
    var country = "Nepal"; //function scoped or global scoped
    console.log(firstname, lastname, country);
}
//console.log(firstname, lastname); // error: not defined
console.log(country); // can be accessed outside the block

//common data dypes
const stringVar = "Hello World"; //String '', or ''
const nnumberVar = 42; //number integer or float 42.1
const booleanVar = true; //boolean true or false
const nullVar = null; // intentional empty
const undefinedVar = undefined; //variable declared but not assigned
const symbol1 = Symbol("sabin"); //unique and immutable
const Symbol2 = symbol("sabin");
console.log(symbol1 == Symbol2); // false

console.log(stringVar, typeof stringVar);
console.log(nnumberVar, typeof nnumberVar);
console.log(booleanVar, typeof booleanVar);
console.log(nullVar, typeof nullVar);
console.log(undefinedVar, typeof undefinedVar);
console.log(symbol1, typeof symbol1);

// =,==, ===
const num1 = 5; // = assignment
const num2 = "5";
console.log(num1==num2);
console.log(num1===num2);

//collection/list
const array = [1,2,3,"four",true, null];
array.push(5); // add element at the end
array.unshift(0); // add element at the beginning
console.log(array);
array.pop(); //remove last element
array.shift(); //remove first element
console.log(array);

// iteration
for(let i = 0; i < array.length; i++){
    console.log(array[1]);
}
//for in loop -> iteration over indices
for(let index in array){
    console.log(index, array[index]);
}
//for of loop -> iteration over values
for(let value of array){
    console.log(value);
}

//object
//JSON - Javascript "Object" Notation
const person = {
    firstname: "Ram",
    lastname: "Bahadur",
    'age': 25,
    hobbies: ["reading", "travelling"],
    address: {
        city: "Kathmandu",
        country: "Nepal",
        location: [ 27.7172, 85.3240]
    }
}
// {key: value}
console.log(person);
console.log(person.firstname); // "." dot notation
console.log(person['lastname']);

person.age = 26; //update value
person.hobbies.push("coding"); // add element to array

// exception/object/undefined
console.log(person.detail);

//console.log(person.detail.id);
//nullable/fallback
console.log(person.detail ?? "No details available");
console.log(person.detail || "No details available");

const check = 0;
console.log(check ?? "Value is null or undefined");
console.log(check || "Value is falsy");

//nullable chaining
console.log(person.detail?.id);
console.log(person.detail?.id?.number);
//?. if defined, will automatically return undefined for rest

//fallback to chaining
console.log(person.detail?.id ?? "N/A");

//destructuring an object
const{ hobbies,address:{city,country}} = person;
console.log(hobbies,city,country);

const { firstname: fname, lastname: lname} = person;
console.log(fname,lname);

//create 2 student objects
const student1 = {
    name:"Alice",
    age: 20,
    marks: [85,90,78]
}

const student2 = {
    name:"Bob",
    age: 22,
    marks: [80,88,92]
}

//create array of students, find average marks of each student,
//and print name and average marks
//also print the average marks of all students
let students = [student1, student2];
let totalMarksALL = 0;
for(let student of students){
    let totalMarks = 0;
    for(let mark of student.marks){
        totalMarks += mark;
    }
    let averageMarks = totalMarks / student.marks.length;
    totalMarksALL += averageMarks;
    console.log('${student.name} : average ${averageMarks');
}
let averageMarksALL = totalMarksALL / students.length;
console.log('Average marks of all students: ${averageMarksALL}');


