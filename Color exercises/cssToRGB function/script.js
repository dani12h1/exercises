"use strict";
cssTOrgb("rgb(12 , 56,233)");
function cssTOrgb(cssCol) {
  console.log(cssCol.indexOf("("));
  const numberStr = cssCol.substring(cssCol.indexOf("(") + 1, cssCol.indexOf(")"));
  const splitArr = numberStr.split(",");
  console.log("numberStr", numberStr);
  console.log("splitArr", splitArr);
  //   parseInt laver det til number
  let r = parseInt(splitArr[0].trim());
  let g = parseInt(splitArr[1].trim());
  let b = parseInt(splitArr[2].trim());
  //   r = r.trim();
  //   r = parseInt(r);
  console.log("r", r);
  console.log("g", b);
  console.log("b", g);
  //   typeof fortæller hvilken værdi det er (number/string)
  console.log("r", typeof r);
}
