// 2. Array destructuring 
// 3. Spread syntax with arrays

// 1. Lexical scope *(Important from Interview POV)
// 2. The scope chain
// 3. Closures explained with examples *(Important from Interview POV)
// 4. Practical uses of closures (counters, memoization)

// 1.The 'this' keyword in different contexts *(Important from Interview POV)
// 2.call, apply, and bind
// --------------------------------------------------------------------------------------------------

const students = [
  {
    name: "Aarav Sharma",
    course: "BCA",
  },
  {
    name: "Riya Patel",
    course: "B.Tech",
  },
  {
    name: "Rahul Mehta",
    course: "BCA",
  },
  {
    name: "Neha Shah",
    course: "MBA",
  },
];

function getStudentsByCourse(courseName) {
  return students.filter(student => student.course === courseName);
}

// Example
console.log(getStudentsByCourse("BCA"));