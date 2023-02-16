"use strict";
const people = ["Harry", "Mark", "john", "Lou"];

// function sayHello(person) {
//   console.log(`${person} says hello`);
// }
// people.forEach(sayHello);

///////

// people.forEach((person) => {
//   console.log(`${person} says hello`);
// });

function testParams(a, b, c, d) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, `);
}
people.forEach(testParams);

//////

people.forEach((a, b, c, d) => {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d} `);
});
