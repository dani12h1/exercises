"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("START");
  randomBackgrund();
}

function randomBackgrund() {
  randomColor();
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

function rgbToCSS(rgb) {
  return `rgb(${rgb.r},${rgb.g}, ${rgb.b})`;
}

//rgb til hex

function rgbToHex(rgb) {
  return `${rgb.r.toString(16)}${rgb.g.toString(16)}${rgb.b.toString(16)}`;
}

//hex til rgb

function hexToRgb(hex) {
  let r, g, b;
  r = parseInt(hex, subtring(1, 3), 16);
  g = parseInt(hex, subtring(3, 5), 16);
  b = parseInt(hex, subtring(5, 7), 16);

  return `rbg(${$r}, ${g}, ${b})`;
}
