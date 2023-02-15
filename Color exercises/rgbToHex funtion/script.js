"use strict";
cssTOrgb("rgb(186 , 218,85)");
function cssTOrgb(cssCol) {
  //   console.log(cssCol.indexOf("("));
  const numberStr = cssCol.substring(cssCol.indexOf("(") + 1, cssCol.indexOf(")"));
  const splitArr = numberStr.split(",");
  //   console.log("numberStr", numberStr);
  //   console.log("splitArr", splitArr);

  let r = parseInt(splitArr[0].trim());
  let g = parseInt(splitArr[1].trim());
  let b = parseInt(splitArr[2].trim());

  //   console.log("r", r);
  //   console.log("g", b);
  //   console.log("b", g);

  rbgToHex(r, g, b);
}

function rbgToHex(red, green, blue) {
  console.log(red, green, blue);
  let redToHex = red.toString(16);
  let greenToHex = green.toString(16);
  let blueToHex = blue.toString(16);
  console.log(redToHex, greenToHex, blueToHex);

  hexToRbg(redToHex, greenToHex, blueToHex);
}

function hexToRbg(red2, green2, blue2) {
  let redToRbg = parseInt(red2, 16);
  let greenToRbg = parseInt(green2, 16);
  let blueToRbg = parseInt(blue2, 16);
  console.log(redToRbg, greenToRbg, blueToRbg);
}
