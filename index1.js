const students = [
  { name: 'Leo Messi', dob: '31-12-1995', biology: 95, chemistry: 91 },
  { name: 'Cristiano Ronaldo', dob: '31-05-1992', biology: 90, chemistry: 81 },
  { name: 'Virat Kohli', dob: '31-12-1995', biology: 95, chemistry: 96 },
  { name: 'Rohit Sharma', dob: '31-12-1995', biology: 85, chemistry: 86 },
  { name: 'Viswanathan Anand', dob: '12-12-1994', biology: 99, chemistry: 10 },
];

// Function to calculate total marks
const totalMarks = (student) => student.chemistry + student.biology;

// Function to parse date of birth
const parseDate = (dob) => {
  const [day, month, year] = dob.split('-');
  return new Date(`${year}-${month}-${day}`);
};

// Sorting function
students.sort((a, b) => {
  const totalA = totalMarks(a);
  const totalB = totalMarks(b);

  if (totalA !== totalB) {
    return totalB - totalA;
  }

  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }

  return parseDate(a.dob) - parseDate(b.dob);
});

console.log(students);
