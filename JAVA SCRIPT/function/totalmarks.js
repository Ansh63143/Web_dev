// Marks of a student
const marks = [85, 90, 78, 88, 95];

const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const maxMarks = marks.length * 100;
const percentage = (totalMarks / maxMarks) * 100;

console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");