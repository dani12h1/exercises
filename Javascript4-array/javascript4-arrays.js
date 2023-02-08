"use strict";

// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(letters[4]);

// let newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);
// console.log(letters);

// const people = ["Harry", "Ron", "Hemione"];

// let result;
// // tilføjer værdi til array
// result = people.push("Draco");
// // fjerner den most recent push
// result = people.pop();
// result = people.push("Neville");
// result = people.push("Luna");
// result = people.slice(0, 3);
// result = people.splice(1, 2, "Cho");
// people[1] = "Ginny";

// result = people.push("Fred", "George");

// // Finder Fred i Array
// result = people.indexOf("Fred");

// // Tager result(Fred) og smider ind i positon 1
// result = people.splice(result, 1);

// console.log(result);
// console.log(people);

const letters = Array.from("abcdefghijklmn");
console.log(letters);

// definerer str
const str = "abcdefghijklmn";

//  Udskriver hele strengen i en position
const arr1 = str.split();
// console.log(arr1);

// deler bogstaverne op i et array
const arr2 = Array.from(str);
// console.log(arr2);

// array to string, fungerer på samme måde, men join fjerner kommaerne som blev tilføjet i arrayet.
console.log(arr2.join(""));
console.log(arr2.toString());
