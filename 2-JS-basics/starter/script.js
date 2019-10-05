// // 
// var firstName = 'Josh';
// var civilStatus = 'married';

// if(civilStatus === 'single') {
//    console.log(firstName + ' is married')
// } else {
//    console.log( firstName + ' will hopefully marry soon')
// }

// var isMarried = true;
// if(isMarried) {
//    console.log(firstName + ' is married')
// } else {
//    console.log( firstName + ' will hopefully marry soon')
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Marks\'s.');
// }

var firstName = 'John';
var age = 16;

if(age < 13) {
   console.log(firstName + ' is a boy')
} else if(age >= 13 &&  age <= 19){
   console.log(firstName + ' is a teenager')
} else if(age >= 20 && age < 30){ 
   console.log(firstName + ' is a young man')
} else {
   console.log(firstName + ' is a man')
}