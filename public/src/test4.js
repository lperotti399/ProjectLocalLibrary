/*partitionStudentsByScore()
Complete the function partitionStudentsByScore() in the src/solution.js file. This function takes an array of students and a specific score and returns an array of two arrays. Separate the students so that any student with a score equal to or less than the given score is in the first array and all other students are in the second array.

For example, take a look at the following code.
*/
const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

function partitionStudentsByScore(students, score) {
   let lessThanArray = []
   let greaterThanArray = []

   lessThanArray = students.filter(student => student.score <= score)
   greaterThanArray = students.filter(student => student.score > score)

   return [lessThanArray, greaterThanArray]
   

}
console.log(JSON.stringify(partitionStudentsByScore(students, 8)));