// ==========================================
// STUDENT GRADE MANAGEMENT SYSTEM
// ==========================================

// ==========================================
// LET VARIABLES - 10
// ==========================================

let studentName = "Shaina";
let studentAge = 21;
let course = "BS Computer Science";
let section = "BSCS3A";
let profElecGrade = 88;
let programmingGrade = 89;
let mobileProgGrade = 90;
let attendance = 95;
let schoolYear = "2026-2027";
let status = "Active";


// ==========================================
// CONST VARIABLES - 10
// ==========================================

const schoolName = "NWSS University";
const passingGrade = 75;
const maxGrade = 100;
const semester = "First Semester";
const subjectCount = 3;
const teacherName = "Mr. Yuri";
const roomNumber = "Lab2";
const studentID = "2024-384-1";
const scholarship = "Unifast";
const program = "Computer Science";


// ==========================================
// TEMPLATE LITERALS - 10
// ==========================================

console.log(`Student Name: ${studentName}`);
console.log(`Age: ${studentAge}`);
console.log(`Course: ${course}`);
console.log(`Section: ${section}`);
console.log(`ProfElec Grade: ${profElecGrade}`);
console.log(`Programming Grade: ${programmingGrade}`);
console.log(`MobileProg Grade: ${mobileProgGrade}`);
console.log(`Attendance: ${attendance}%`);
console.log(`School Year: ${schoolYear}`);
console.log(`Status: ${status}`);


// ==========================================
// ARROW FUNCTIONS - 5
// ==========================================

const calculateAverage = (a, b, c) => {
    return (a + b + c) / 3;
};

const checkGrade = grade => {
    return grade >= passingGrade ? "Passed" : "Failed";
};

const greetStudent = name => {
    return `Hello, ${name}!`;
};

const addBonus = grade => {
    return grade + 5;
};

const getFullInfo = (name, course) => {
    return `${name} is taking ${course}.`;
};


// ==========================================
// DESTRUCTURED ARRAYS - 3
// ==========================================

const grades = [profElecGrade, programmingGrade, mobileProgGrade];
const [profElec, programming, mobileProg] = grades;

const studentInfo = [studentName, studentAge, course];
const [name, age, studentCourse] = studentInfo;

const subjects = ["ProfElec", "Programming", "MobileProg"];
const [subject1, subject2, subject3] = subjects;


// ==========================================
// DESTRUCTURED OBJECT LITERALS - 3
// ==========================================

const student = {
    name: studentName,
    age: studentAge,
    course: course,
    section: section
};

const { name: studentFullName, age: studentYears } = student;

const school = {
    schoolName: schoolName,
    teacher: teacherName,
    room: roomNumber
};

const { schoolName: university, teacher } = school;

const enrollment = {
    id: studentID,
    year: schoolYear,
    semester: semester
};

const { id, year } = enrollment;


// ==========================================
// ARRAYS USING SPREAD OPERATOR - 2
// ==========================================

const firstGrades = [profElecGrade, programmingGrade];
const allGrades = [...firstGrades, mobileProgGrade];

const firstSubjects = ["ProfElec", "Programming"];
const allSubjects = [...firstSubjects, "MobileProg"];


// ==========================================
// OBJECT LITERALS USING SPREAD OPERATOR - 2
// ==========================================

const basicStudent = {
    name: studentName,
    age: studentAge
};

const completeStudent = {
    ...basicStudent,
    course: course,
    section: section
};

const basicSchool = {
    schoolName: schoolName,
    teacher: teacherName
};

const completeSchool = {
    ...basicSchool,
    room: roomNumber,
    semester: semester
};


// ==========================================
// ARRAYS USING .map() - 2
// ==========================================

const originalGrades = [profElecGrade, programmingGrade, mobileProgGrade];

const increasedGrades = originalGrades.map(grade => grade + 2);

console.log("Increased Grades:", increasedGrades);


const subjectNames = ["ProfElec", "Programming", "MobileProg"];

const upperSubjects = subjectNames.map(subject => subject.toUpperCase());

console.log("Subjects:", upperSubjects);


// ==========================================
// ARRAYS USING .filter() - 2
// ==========================================

const passingGrades = originalGrades.filter(grade => grade >= passingGrade);

console.log("Passing Grades:", passingGrades);


const highGrades = originalGrades.filter(grade => grade >= 90);

console.log("High Grades:", highGrades);


// ==========================================
// OBJECT LITERALS USING OPTIONAL CHAINING - 2
// ==========================================

const studentAccount = {
    name: studentName,
    contact: {
        email: "student@example.com"
    }
};

const studentEmail = studentAccount.contact?.email;

console.log(`Student Email: ${studentEmail}`);


const studentAddress = {
    name: studentName,
    address: {
        city: "Calbayog City"
    }
};

const studentCity = studentAddress.address?.city;

console.log(`Student City: ${studentCity}`);


// ==========================================
// PROGRAM RESULTS
// ==========================================

const average = calculateAverage(profElec, programming, mobileProg);

console.log(`\n===== STUDENT REPORT =====`);
console.log(`Name: ${studentFullName}`);
console.log(`Age: ${studentYears}`);
console.log(`Course: ${studentCourse}`);
console.log(`Section: ${section}`);
console.log(`Average Grade: ${average.toFixed(2)}`);
console.log(`Result: ${checkGrade(average)}`);
console.log(greetStudent(studentName));
console.log(getFullInfo(studentName, course));
console.log(`Bonus profElec Grade: ${addBonus(profElec)}`);
console.log(`School: ${university}`);
console.log(`Teacher: ${teacher}`);
console.log(`Student ID: ${id}`);
console.log(`School Year: ${year}`);