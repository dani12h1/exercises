"use strict";
let iterator = 0;
let maxNumberOfIterations;
let delay;
initLoop();

function initLoop() {
  console.log("initLoop");
  maxNumberOfIterations = 44;
  delay = 200;
  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;
  delay += 100;
  if (iterator < maxNumberOfIterations) {
    setTimeout(loop, delay);
    // setTimeout(loop, Math.random() * 1000);
  }
}
