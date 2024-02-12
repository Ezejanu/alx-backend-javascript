export default function getListStudentIds(students) {
  if (!Array.isArray(students)) { // Check if the input is an array
    return [];
  }
  return students.map((students) => students.id);
}
