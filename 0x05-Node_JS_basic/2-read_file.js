const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split('\n').filter(line => line.trim() !== '');
        
        const students = lines.map(line => line.split(',')[0].trim());
        const fields = lines.map(line => line.split(',')[1].trim());
        
        const uniqueFields = [...new Set(fields)];
        
        const studentCount = students.length;
        
        console.log(`Number of students: ${studentCount}`);
        
        uniqueFields.forEach(field => {
            const studentsInField = students.filter((student, index) => fields[index] === field);
            console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
        });
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}