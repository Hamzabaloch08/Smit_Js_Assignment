// assignment no: 1

// const firstName = 'Hamza';
// const last_name = 'Baloch';
// let address = 'Main Street';
// address = 'First Street';
// console.log(`Name: ${firstName} ${last_name}`)
// console.log(`Address: ${address}`)






// assignment no: 2

// let score1 = 20;
// let score2 = 40;
// let score3 = 60;
// let sum = score1 + score2 + score3;
// let totalScore = sum;
// let averageScore = 40;
// console.log(`Total Score: ${totalScore}`);
// console.log(`Average Score: ${averageScore}`);






// assignment no: 3

// let plates = 20; 
// let people = 7
// let platesPerPerson = plates % people;
// let remainingPlates = platesPerPerson
// let result = `${remainingPlates} plates available`
// console.log(result);





// assignment no: 4

let students = [
    { id: '1589', name: 'alex', score: '88', favoriteSubject: 'math' },
    { id: '1590', name: 'rio', score: '62', favoriteSubject: 'bio' },
    { id: '1591', name: 'paul', score: '84', favoriteSubject: 'chemistry' },
    { id: '1592', name: 'kalix', score: '91', favoriteSubject: 'english' },
    { id: '1593', name: 'jason', score: '56', favoriteSubject: 'physics' },
]
let updatedObject = students.map((studentInfo) => {
    return { ...studentInfo, role: 'student' };
}).filter((studentScore) => {
    if (studentScore >= 80) {
        return studentScore;
    }
})
let findingId = students.find((findingId) => {
    return findingId.id == 1591
})
console.log(findingId);