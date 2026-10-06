//==================================
//STUDENT GRADING SYSTEM
//==================================

//-------VARIABLES-------
let schoolName = "NWSS University";
let studentName = "Shaina D. Moriles";
let studentAge = 21;

//-------ARRAYS-------
let subjects = ["JavaScript", "Professional Elective1", "Mobile Programming"];
let grades = [85, 79, 90];
let students = ["Shaina", "Maria", "Camell", "Renz"];

//-------CONDITIONALS-------
if (grades[0] >= 75) {
    console.log(subjects[0] + ": PASSED");
} else {
    console.log(subjects[0] + ": FAILED");
}

if (studentAge >= 21) {
    console.log(studentName + " is an adult student.");
} else {
    console.log(studentName + " is a minor student.");
}

if (grades[2] >= 90) {
    console.log(subjects[2] + " is Excellent!");
} else if (grades[2] >= 80) {
    console.log(subjects[2] + " is Very Good!");
} else {
    console.log(subjects[2] + " needs improvement.");
}

//-------LOOPS-------
console.log("\nSUBJECTS:");

for (let i = 0; i < subjects.length; i++) {
    console.log((i + 1) + " . " + subjects[i]);
}

console.log("\nGRADES:");

for (let i = 0; i < grades.length; i++) {
    console.log(subjects[i] + " . " + grades[i]);
}

console.log("\nSTUDENT LIST:");

for (let i = 0; i < students.length; i++) {
    console.log((i + 1) + " . " + students[i]);
}

//----------STUDENT INFORMATION----------

console.log("\n==========================");
console.log("   STUDENT INFORMATION   ");
console.log("============================");

console.log("School: " + schoolName);
console.log("Name: " + studentName);
console.log("Age: " + studentAge);

console.log("=============================");

