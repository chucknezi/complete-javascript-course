/* ################Code Challenge *******************:/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀 */

//My solution
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;


function bmi (mass, height){

   return mass / (height * height);
}

var markBMI = bmi(markMass, markHeight);
console.log(markBMI)
var johnBMI = bmi(johnMass, johnHeight);
console.log(johnBMI)
let markVJohn = markBMI > johnBMI;
console.log(markVJohn)
let heightContest = `Is Mark's BMI higher that John's true? ${markVJohn}` 
console.log(heightContest);

















// // var firstName = "John"
// // var lastName = "Smith"
// // var age = 29;

// // var fullAge = true;

// // var job;


// // console.log(firstName);
// // console.log(fullAge);
// // console.log(job)

// // job = 'Teacher';
// // console.log(job)


// // /*************
// //  * Variable mutation and type coercion
// //  */

// //  //Type coercion
// //  console.log(firstName + ' ' + age);
// //  var job, isMarried;
// //  job = 'teacher';
// //  isMarried = false;

// //  console.log(firstName + ' is a ' + age + ' year old ' + job + '.'+ ' Is he married? ' + isMarried)

// // //Variable mutation

// // age = 'twenty eight'

// //Operator Precedence
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge; //true 
// //equals sign is also an operator
// console.log(isFullAge)


// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2; //division has higher precedence
// console.log(average)

// //Multiple assignments

// var x, y;
// //associativity

// x = y = (3+5) * 4 - 6;

// console.log(x, y);

// //More operators

// x *= 2;
// console.log(x)

// x += 10;
// x++;
