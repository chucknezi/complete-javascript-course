
// var firstName = "John"
// var lastName = "Smith"
// var age = 29;

// var fullAge = true;

// var job;


// console.log(firstName);
// console.log(fullAge);
// console.log(job)

// job = 'Teacher';
// console.log(job)


// /*************
//  * Variable mutation and type coercion
//  */

//  //Type coercion
//  console.log(firstName + ' ' + age);
//  var job, isMarried;
//  job = 'teacher';
//  isMarried = false;

//  console.log(firstName + ' is a ' + age + ' year old ' + job + '.'+ ' Is he married? ' + isMarried)

// //Variable mutation

// age = 'twenty eight'

//Operator Precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true 
//equals sign is also an operator
console.log(isFullAge)


var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; //division has higher precedence
console.log(average)

//Multiple assignments

var x, y;
//associativity

x = y = (3+5) * 4 - 6;

console.log(x, y);

//More operators

x *= 2;
console.log(x)

x += 10;
x++;
