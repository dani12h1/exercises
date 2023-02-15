"use strict";

//capitalize();

function capitalize(str) {
  let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return result;
}

const name = "pETer";
const cap = capitalize(name);
console.log(cap);
