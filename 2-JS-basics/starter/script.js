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

// var firstName = 'John';
// var age = 16;

// if(age < 13) {
//    console.log(firstName + ' is a boy')
// } else if(age >= 13 &&  age <= 19){
//    console.log(firstName + ' is a teenager')
// } else if(age >= 20 && age < 30){ 
//    console.log(firstName + ' is a young man')
// } else {
//    console.log(firstName + ' is a man')
// }


// /* Ternary Operators */

// var firstName = 'John';
// var age = 16;

// age >= 18 ? console.log(firstName + ' drinks beer') 
// : console.log(firstName + ' drinks juice')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// /* Switch Statement  */
// var job = 'MC';
// switch (job){
//    case 'teacher':
//    case 'instructor':
//       console.log(firstName + ' teaches kids to code');
//       break;
//    case 'driver':
//       console.log(firstName + ' drives an uber in Lisbon');
//       break;
//    case 'designer':
//       console.log(firstName + ' designs beautiful websites');
//       break;
//    default:
//       console.log(firstName + ' does something else.')
// }

// //New Age with Switch Statements

// age = 26;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws */



var teamJohnAvg = (89 + 120 + 103)/3;
var teamMikeAvg = (116 + 94 + 123)/3;
var teamMaryAvg = (97 + 134 + 105)/3;

console.log('john'+teamJohnAvg);
console.log('Mary'+teamMaryAvg)
console.log(teamMikeAvg)

if( teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg) {
   console.log('Team John is the winner and the average score was ' + teamJohnAvg )
} else if(teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg) {
   console.log('Team Mike is the winner and the average score was ' + teamMikeAvg )
} else if (teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg) {
   console.log('Team Mary is the winner and the average score was ' + teamMaryAvg )
} else if (teamJohnAvg === teamMaryAvg && teamJohnAvg === teamMikeAvg){
   console.log('Tie')
}
