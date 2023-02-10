"use strict";

let object = {
  firstName: "Peter",
  age: 43,
  student: false,
};

console.log(`${object.firstName} is ${object.age}`);
console.log(`${object["firstName"]} is ${object["age"]}`);

///////////////////////////////

let person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

// console.log(person1.lastName);

person1.lastName = "Tolstrup";
console.log(person1.lastName);

person1.lastName = undefined;

console.log("person1.lastName", person1.lastName);

console.log("person1.middleName:", person1.middeleName);

delete person1.lastName;

// forskellen er at undefine fjerner værdien, men stadigvæk beholder objectet - delete fjerner objectet.

////////////////////////////////

const person2 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

console.log(person2);

person2.age++;

console.log(person2);

/////////////////////////////

const person3 = {
  firstName: "Bob",
  age: 43,
  student: true,
};

// udkommenteret fordi den fucker ting op
// person2 = person3;

// du kan ikke person2, person3 værdier i objektet fordi du ikke kan ændre på en const

////////////

const person4 = person1;

person4.firstName = "bob";
console.log(person1);

// Denne const kopier person1 og navngir den person4

///////////////////////////////

const student1 = {
  forstNAme: "Harry",
  lastName: "Potter",
};

const student2 = student1;

if (student1 === student2) {
  console.log("they are the sane!");
} else {
  console.log("They are not ....");
}

////////////////////////
const student3 = {
  forstNAme: "Harry",
  lastName: "Potter",
};

const student4 = {
  forstNAme: "Harry",
  lastName: "Potter",
};

if (student3 === student4) {
  console.log("they are the sane!");
} else {
  console.log("They are not ....");
}

// Det er ikke den samme fordi det, er to forkellige const, hvor imod den forrige const er = den anden

student3.firstName = student4.firstName;
student3.lastName = student4.lastName;

// den vil altid return som false, uanset om dataen er den samme, hvis den ikke peger mod det samme object
