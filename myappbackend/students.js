// students.js
const students = [
  { id: 1, name: "Aman Kumar", age: 22, class: "BCA", fees: "paid", attendance: 88 },
  { id: 2, name: "Riya Sharma", age: 26, class: "BCA", fees: "deus", attendance: 92 },
  { id: 3, name: "Karan Verma", age: 24, class: "BSc", fees: "paid", attendance: 70 },
  { id: 4, name: "Sita Roy", age: 27, class: "BCA", fees: "deus", attendance: 80 },
  { id: 5, name: "Rahul Das", age: 23, class: "BA", fees: "due", attendance: 78 },
  { id: 6, name: "Neha Patel", age: 25, class: "BCA", fees: "paid", attendance: 76 },
  { id: 7, name: "Aditya Singh", age: 28, class: "BCom", fees: "deus", attendance: 82 },
  { id: 8, name: "Priya Ghosh", age: 21, class: "BCA", fees: "paid", attendance: 90 },
  { id: 9, name: "Vikash Roy", age: 29, class: "BCA", fees: "deus", attendance: 74 },
  { id: 10, name: "Tania Bose", age: 26, class: "BBA", fees: "paid", attendance: 96 }
];

// 1) Where class = 'BCA'
const bcaStudents = students.filter(s => s.class === "BCA");

// 2) Where age >= 25
const ageAtLeast25 = students.filter(s => s.age >= 25);

// 3) Where fees = 'deus'  (exact match 'deus' as in your assignment)
const feesDeus = students.filter(s => s.fees === "deus");

// 4) Where attendance > 75
const attendanceMore75 = students.filter(s => s.attendance > 75);

// Print results
console.log("All students:", students);
console.log("\nStudents with class = 'BCA':", bcaStudents);
console.log("\nStudents with age >= 25:", ageAtLeast25);
console.log("\nStudents with fees = 'deus':", feesDeus);
console.log("\nStudents with attendance > 75:", attendanceMore75);

// Export for use in other files
module.exports = { students, bcaStudents, ageAtLeast25, feesDeus, attendanceMore75 };
