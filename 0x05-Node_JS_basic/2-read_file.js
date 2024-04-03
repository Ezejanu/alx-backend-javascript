const fs = require('fs');

function countStudents(path) {
  try {
	// Read the database file synchronously
	const data = fs.readFileSync(path, 'utf8').trim();

	// Split data into lines
	const lines = data.split('\n');

	// Initialize counts for each field
	const counts = {};

	// Loop through each line to count students
	lines.forEach(line => {
	  const [firstname, lastname, age, field] = line.split(',');

	  // Ignore empty lines
	  if (firstname && lastname && age && field) {
	    counts[field] = (counts[field] || 0) + 1;
	    }
	});

	// Log the total number of students
        const totalStudents = Object.values(counts).reduce((total, count) => total + count, 0);
        console.log(`Number of students: ${totalStudents}`);
        
        // Log the number of students in each field and their first names
        for (const field in counts) {
            const studentsInField = counts[field];
            const studentsList = lines
                .filter(line => line.split(',')[3] === field)
                .map(line => line.split(',')[0])
                .join(', ');
            console.log(`Number of students in ${field}: ${studentsInField}. List: ${studentsList}`);
        }
    } catch (error) {
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
