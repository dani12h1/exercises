"use strict";

const animals = [
  { name: "Hugo", type: "cat" },
  { name: "Petra", type: "cat" },
  { name: "Freddie", type: "dog" },
  { name: "ScoobyDoo", type: "dog" },
];

// function isCat(animal) {
//   console.log(animal.name);
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(animals[2]);

function all() {
  return true;
}

function none() {
  return false;
}

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

console.log("ALL", animals.filter(all));
console.log("NONE", animals.filter(none));
