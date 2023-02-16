"use strict";
// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const sayHi = greeting;

// console.log(sayHi("Class"));

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };
// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasley",
//   hired: false,
// };

// function hire(person) {
//   person.hired = true;
// }

// function fire(person) {
//   person.hired = false;
// }

// function fireOrHire(action, person) {
//   action(person);
// }

// console.log(person4);
// fireOrHire(hire, person4);

// fireOrHire(fire, person3);

// console.log(person4);

function init() {
  console.log("init");
  loadJSON("animals.json", prepareData);
  console.log(init);
}

function prepareData(data) {
  console.log("prepare data");
  console.table(data);
}

async function loadJSON(url, callback) {
  const reponse = await fetch(url);
  const jsonData = await reponse.json();
  callback(jsonData);
}
