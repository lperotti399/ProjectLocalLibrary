/*findStudentByName()
Complete the function findStudentByName() in the src/solution.js file so that, when given a list of students with a name attribute and a string, 
it returns the entire object associated with that student. If the student cannot be found, it should return null.
*/

const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  /*
  findStudentByName(students, "Natalee Vargas"); //> { name: "Natalee Vargas", score: 9.2 }
  findStudentByName(students, "Terry Peters"); //> null
  */

/*function findStudentByName(students, nameInput) {
    let output = students.filter(student=> student.name === nameInput)[0]
    return output;
  }

  console.log(findStudentByName(students, "Morgan Sutton"))*/


  function findLowestScoringStudent(students) {
    let minScore = students[0].score
    for(let i =0; i<students.length; i++) {
        if(students[i].score < minScore) {
            minScore = students[i].score
        }
    }
    return students.filter(student => student.score === minScore )[0]

  }

  console.log(findLowestScoringStudent(students))