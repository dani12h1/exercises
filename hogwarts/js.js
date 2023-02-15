"use strict";

window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("students.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const Student = {
      firstName: "",
      lastName: "",
      middleName: "Null",
      nickName: "Null",
      photo: "",
      house: "",
    };

    const student = Object.create(Student);

    let fullnameString = jsonObject.fullname;
    let result = "";

    let trimmedString1 = fullnameString.trimStart();
    result = trimmedString1.substring(0, trimmedString1.indexOf(" "));
    if (fullnameString === "Leanne") {
      result = fullnameString;
    }

    student.firstName = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

    console.log(student.firstName);

    //Student lastname
    let surname = "";
    let trimmedString2 = "";

    trimmedString2 = fullnameString.trimEnd();
    surname = trimmedString2;

    let result2 = surname.substring(trimmedString2.lastIndexOf(" ") + 1);
    student.lastName = result2.charAt(0).toUpperCase() + result2.slice(1).toLowerCase();
    console.log(student.lastName);

    //Student middlename
    let middlename = "Null";
    let trimmedString3 = "";
    
    trimmedString3 = fullnameString.substring(trimmedString3.indexOf(" "), trimmedString3.lastIndexOf(" ")).trim();
    middlename = trimmedString3;

    student.middleName = middlename;
    console.log(student.middleName);
  });
}

// jsonObject.fullname.trim();

//     const text = jsonObject.fullname.split(" ");

//     if (text[0] === "") {
//       text.shift();
//     }

//     student.firstName = text[0];

//     console.log(text);
//     console.log(student.firstName);

//     // allStudents.push(student);
//   });
//
