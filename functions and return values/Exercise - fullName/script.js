"use strict";

function functionWithParameters(p1, p2, p3) {
  if (p3 === undefined) {
    return `${p2.toLowerCase()} ${p1}`;
  }
  return `${p1} ${p2} ${p3}`;
}

let variable = functionWithParameters("Peter ", "Heronimous ", "Lind");
console.log("variable:", variable);

function hexToRGB(hexColor) {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  const result = {
    r: r,
    g: g,
    b: b,
  };

  return result;

  //   return `${r} ${g} ${b}`;
  //   return { r, g, b };
}

console.log("Color as RGB:", hexToRGB("#f80ea3"));

let color = hexToRGB("#f80ea3");
console.log("Red component:", hexToRGB("#f80ea3"));

function createPerson(firstName, lastName, age, gender) {
  return { firstName, lastName, age, gender };
}

let newPerson = createPerson("Daniel", "Nygaard", 44, true);
console.log("KEA Person's name", newPerson.firstName);
