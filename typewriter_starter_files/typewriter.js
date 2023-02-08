"use strict";

let typeWrite = document.getElementById("typewriter").textContent;
start.addEventListener("click", initLoop);
document.getElementById("typewriter").textContent = "";
let stringType;
let stringToType;
let iterator = 0;
let playing = true;
let maxNumberOfIterations;

// sound

const typkey1 = document.getElementById("typekey1");
// const typkey2 = document.getElementById("typekey2");

function initLoop() {
  maxNumberOfIterations = typeWrite.length - 1;
  console.log(maxNumberOfIterations);
  loop();
}

function loop() {
  console.log("loop", typeWrite[iterator]);
  document.getElementById("typewriter").textContent += typeWrite[iterator];
  iterator++;
  if (iterator <= maxNumberOfIterations) {
    typekey1.play();
    // typekey2.play();
    setTimeout(loop, 200).length;
  }
}
