// ==========================================
// STUDENT MANAGEMENT SYSTEM
// ==========================================

// 3 VARIABLES / PROPERTIES
let schoolName = "NWSS University Main Campus";
let schoolYear = 2026;
let passingGrade = 75;


// ==========================================
// 3 ARRAYS
// ==========================================

let students = ["Shaina", "Maria", "Renz"];

let subjects = ["Mobile Programming", "Database", "Networking"];

let grades = [85, 90, 79];


// ==========================================
// OBJECT LITERALS (2)
// ==========================================

const school = {
    name: "NWSS University",
    location: "Calbayog City"
};

const course = {
    name: "Computer Science",
    duration: 4
};


// ==========================================
// CLASS 1 - PERSON
// ==========================================

class Person {

    // CONSTRUCTOR 1
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // METHOD 1
    introduce() {
        return `Hello, my name is ${this.name}.`;
    }
}


// ==========================================
// CLASS 2 - STUDENT
// INHERITANCE FROM PERSON
// ==========================================

class Student extends Person {

    // CONSTRUCTOR 2
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;

        // ENCAPSULATION
        this.#grade = 0;
    }

    // PRIVATE PROPERTY FOR ENCAPSULATION
    #grade;

    // METHOD 2
    setGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.#grade = grade;
        }
    }

    // METHOD 3
    getGrade() {
        return this.#grade;
    }

    // METHOD 4
    displayStudent() {
        console.log(
            `Student: ${this.name} | ID: ${this.studentId} | Grade: ${this.#grade}`
        );
    }
}


// ==========================================
// CLASS 3 - TEACHER
// INHERITANCE FROM PERSON
// ==========================================

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    // METHOD 5
    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}


// ==========================================
// CLASS 4 - COURSE
// ==========================================

class Course {

    constructor(courseName, units) {
        this.courseName = courseName;
        this.units = units;
    }

    enroll() {
        console.log(`Youre enrolled in ${this.courseName}.`);
    }

    showCourse() {
        console.log(
            `Course: ${this.courseName} | Units: ${this.units}`
        );
    }
}


// ==========================================
// 4 OBJECTS
// ==========================================

const student1 = new Student("Shaina", 21, "ST001");

const student2 = new Student("Maria", 19, "ST002");

const teacher1 = new Teacher("Mr. Yuri", 25, "CSElec1");

const course1 = new Course("Professional Elective 1", 3);


// ==========================================
// ENCAPSULATION
// ==========================================

student1.setGrade(90);

console.log("Student Grade:", student1.getGrade());


// ==========================================
// ABSTRACTION
// ==========================================

class GradeCalculator {

    calculateResult(grade) {

        if (grade >= 90) {
            return "Excellent";
        } 
        else if (grade >= 75) {
            return "Passed";
        } 
        else {
            return "Failed";
        }
    }
}

const calculator = new GradeCalculator();

console.log("Result:", calculator.calculateResult(88));


// ==========================================
// 3 CONDITIONALS
// ==========================================

if (schoolYear >= 2026) {
    console.log("Current school year.");
}

if (grades[0] >= passingGrade) {
    console.log("The student passed.");
}

if (student1.getGrade() >= 90) {
    console.log("Outstanding grade!");
} else {
    console.log("Keep improving!");
}


// ==========================================
// 3 LOOPS
// ==========================================

console.log("\nStudents:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


console.log("\nSubjects:");

for (let subject of subjects) {
    console.log(subject);
}


console.log("\nGrades:");

let i = 0;

while (i < grades.length) {
    console.log(grades[i]);
    i++;
}


// ==========================================
// DISPLAY OBJECTS
// ==========================================

console.log("\n--- STUDENT INFORMATION ---");

console.log(student1.introduce());
student1.displayStudent();

console.log(student2.introduce());
student2.setGrade(92);
student2.displayStudent();


// ==========================================
// TEACHER OBJECT
// ==========================================

console.log("\n--- TEACHER INFORMATION ---");

console.log(teacher1.introduce());
teacher1.teach();


// ==========================================
// COURSE OBJECT
// ==========================================

console.log("\n--- COURSE INFORMATION ---");

course1.enroll();
course1.showCourse();


// ==========================================
// OBJECT LITERALS
// ==========================================

console.log("\n--- SCHOOL INFORMATION ---");

console.log("School:", school.name);
console.log("Location:", school.location);

console.log("Course:", course.name);
console.log("Duration:", course.duration, "years");