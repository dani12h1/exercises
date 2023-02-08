"use strict";

// let numbers = Array.from("123456789");
// let maxNumberOfIterations;
// let iterator = 0;
// const numbers = [];

// // let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// // let maxNumberOfIterations;
// // let iterator = 0;

// console.log(numbers);

// initLoop();

// function initLoop() {
//   maxNumberOfIterations = numbers.length - 1;
//   console.log(maxNumberOfIterations);
//   loop();
// }

// function loop() {
//   console.log(numbers[iterator]);
//   Array.textContent += numbers[iterator];
//   iterator++;
//   if (iterator <= maxNumberOfIterations) {
//     setTimeout(loop, 200).length;
//   }
// }

// const arr = [];
// let iterator = 0;
// let maxNumberOfIterations;
// initLoop();

// function initLoop() {
//   console.log("initLoop");
//   maxNumberOfIterations = 30;
//   loop();
// }

// function loop() {
//   iterator++;
//   if (iterator <= maxNumberOfIterations) {
//     arr.push(iterator);
//     setTimeout(loop, 200);
//     console.log(arr);
//   } else {
//     arr.pop();
//   }
// }

"use strict";

const arr = [];
let iterator = -1;

initLoop();

function initLoop() {
  iterator++;
  arr.splice(8);
  arr.unshift(iterator);
  setTimeout(initLoop, 1000);
  console.log(arr);
}
