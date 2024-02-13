export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter is used to get the students for the city specified
  const studentsInCity = students.filter((students) => students.location === city);

  // Map is used to update grades for the students in the specified city
  const studentsGrades = studentsInCity.map((students) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === students.id);

    // Use grade provided in newGrades for the student, otherwise set grade to N/A
    const newGrade = gradeObject ? gradeObject.grade : 'N/A';

    return {
      ...students,
      grade: newGrade,
    };
  });

  return studentsGrades;
}
