// // // // // // // // // // // // 
// // // // // // // // // // // var firstName = 'Josh';
// // // // // // // // // // // var civilStatus = 'married';

// // // // // // // // // // // if(civilStatus === 'single') {
// // // // // // // // // // //    console.log(firstName + ' is married')
// // // // // // // // // // // } else {
// // // // // // // // // // //    console.log( firstName + ' will hopefully marry soon')
// // // // // // // // // // // }

// // // // // // // // // // // var isMarried = true;
// // // // // // // // // // // if(isMarried) {
// // // // // // // // // // //    console.log(firstName + ' is married')
// // // // // // // // // // // } else {
// // // // // // // // // // //    console.log( firstName + ' will hopefully marry soon')
// // // // // // // // // // // }

// // // // // // // // // // // var massMark = 78; // kg
// // // // // // // // // // // var heightMark = 1.69; // meters

// // // // // // // // // // // var massJohn = 92;
// // // // // // // // // // // var heightJohn = 1.95;

// // // // // // // // // // // var BMIMark = massMark / (heightMark * heightMark);
// // // // // // // // // // // var BMIJohn = massJohn / (heightJohn * heightJohn);

// // // // // // // // // // // if (BMIMark > BMIJohn) {
// // // // // // // // // // //     console.log('Mark\'s BMI is higher than John\'s.');
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log('John\'s BMI is higher than Marks\'s.');
// // // // // // // // // // // }

// // // // // // // // // // // var firstName = 'John';
// // // // // // // // // // // var age = 16;

// // // // // // // // // // // if(age < 13) {
// // // // // // // // // // //    console.log(firstName + ' is a boy')
// // // // // // // // // // // } else if(age >= 13 &&  age <= 19){
// // // // // // // // // // //    console.log(firstName + ' is a teenager')
// // // // // // // // // // // } else if(age >= 20 && age < 30){ 
// // // // // // // // // // //    console.log(firstName + ' is a young man')
// // // // // // // // // // // } else {
// // // // // // // // // // //    console.log(firstName + ' is a man')
// // // // // // // // // // // }


// // // // // // // // // // // /* Ternary Operators */

// // // // // // // // // // // var firstName = 'John';
// // // // // // // // // // // var age = 16;

// // // // // // // // // // // age >= 18 ? console.log(firstName + ' drinks beer') 
// // // // // // // // // // // : console.log(firstName + ' drinks juice')

// // // // // // // // // // // var drink = age >= 18 ? 'beer' : 'juice';
// // // // // // // // // // // console.log(drink);

// // // // // // // // // // // /* Switch Statement  */
// // // // // // // // // // // var job = 'MC';
// // // // // // // // // // // switch (job){
// // // // // // // // // // //    case 'teacher':
// // // // // // // // // // //    case 'instructor':
// // // // // // // // // // //       console.log(firstName + ' teaches kids to code');
// // // // // // // // // // //       break;
// // // // // // // // // // //    case 'driver':
// // // // // // // // // // //       console.log(firstName + ' drives an uber in Lisbon');
// // // // // // // // // // //       break;
// // // // // // // // // // //    case 'designer':
// // // // // // // // // // //       console.log(firstName + ' designs beautiful websites');
// // // // // // // // // // //       break;
// // // // // // // // // // //    default:
// // // // // // // // // // //       console.log(firstName + ' does something else.')
// // // // // // // // // // // }

// // // // // // // // // // // //New Age with Switch Statements

// // // // // // // // // // // age = 26;
// // // // // // // // // // // switch (true) {
// // // // // // // // // // //     case age < 13:
// // // // // // // // // // //         console.log(firstName + ' is a boy.');
// // // // // // // // // // //         break;
// // // // // // // // // // //     case age >= 13 && age < 20:
// // // // // // // // // // //         console.log(firstName + ' is a teenager.');
// // // // // // // // // // //         break;
// // // // // // // // // // //     case age >= 20 && age < 30:
// // // // // // // // // // //         console.log(firstName + ' is a young man.');
// // // // // // // // // // //         break;
// // // // // // // // // // //     default:
// // // // // // // // // // //         console.log(firstName + ' is a man.');
// // // // // // // // // // // }

// // // // // // // // // // /*****************************
// // // // // // // // // // * CODING CHALLENGE 2
// // // // // // // // // // */

// // // // // // // // // // /*
// // // // // // // // // // John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

// // // // // // // // // // 1. Calculate the average score for each team
// // // // // // // // // // 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// // // // // // // // // // 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

// // // // // // // // // // 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// // // // // // // // // // 5. Like before, change the scores to generate different winners, keeping in mind there might be draws */


// // // // // // // // // // //My solution
// // // // // // // // // // var teamJohnAvg = (89 + 120 + 103)/3;
// // // // // // // // // // var teamMikeAvg = (116 + 94 + 123)/3;
// // // // // // // // // // var teamMaryAvg = (97 + 134 + 105)/3;

// // // // // // // // // // console.log('john'+teamJohnAvg);
// // // // // // // // // // console.log('Mary'+teamMaryAvg)
// // // // // // // // // // console.log(teamMikeAvg)

// // // // // // // // // // if( teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg) {
// // // // // // // // // //    console.log('Team John is the winner and the average score was ' + teamJohnAvg )
// // // // // // // // // // } else if(teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg) {
// // // // // // // // // //    console.log('Team Mike is the winner and the average score was ' + teamMikeAvg )
// // // // // // // // // // } else if (teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg) {
// // // // // // // // // //    console.log('Team Mary is the winner and the average score was ' + teamMaryAvg )
// // // // // // // // // // } else if (teamJohnAvg === teamMaryAvg && teamJohnAvg === teamMikeAvg){
// // // // // // // // // //    console.log('Tie')
// // // // // // // // // // }


// // // // // // // // // //functions

// // // // // // // // // function calculateAge(birthYear) {
// // // // // // // // //    return 2019 - birthYear;
// // // // // // // // // }

// // // // // // // // // var ageJohn = calculateAge(1990);
// // // // // // // // // console.log(ageJohn);

// // // // // // // // // function yearsUntilRet(year, firstName){
// // // // // // // // //    var age = calculateAge(year);
// // // // // // // // //    var retirement = 65 - age; 
// // // // // // // // //    console.log(firstName + ' retires in ' + retirement + ' years. ')
// // // // // // // // // }

// // // // // // // // // yearsUntilRet(1990, 'Josh');


// // // // // // // // //Function statements & expressions
// // // // // // // // //expression
// // // // // // // // var whatDoYouDo = function(job, firstName) {
// // // // // // // //    switch(job){
// // // // // // // //       case 'teacher':
// // // // // // // //          return firstName + ' teaches kids how to code';
// // // // // // // //       case 'driver':
// // // // // // // //          return firstName + ' drives kids to school'
// // // // // // // //       case 'designer':
// // // // // // // //          return firstName + ' designs beautiful mockups';
// // // // // // // //       default:
// // // // // // // //          return firstName + ' does something else';
// // // // // // // //    }
// // // // // // // // }
// // // // // // // // console.log(whatDoYouDo('teacher', 'Josh'))

// // // // // // // var names = ['Josh', 'Mark', 'James'];
// // // // // // // var years = new Array(1990, 1969, 1948);

// // // // // // // console.log(names.length)
// // // // // // // console.log(names[2])

// // // // // // // //Mutate array data
// // // // // // // names[2] = 'Ben';
// // // // // // // names[names.length] = 'Mary';
// // // // // // // console.log(names);

// // // // // // // //Different data types
// // // // // // // var josh = ['Josh', 'Nezianya', 1990, 'teacher', true];
// // // // // // // josh.push('green');
// // // // // // // josh.unshift('Mr.')
// // // // // // // josh.pop();
// // // // // // // console.log(josh)

// // // // // // // console.log(josh.indexOf(1990))

// // // // // // // var teachef = josh.indexOf('teacher') === -1 ? 'Josh is a teacher' : 'Josh is not a teacher'
// // // // // // // console.log(teachef)

// // // // // // /*****************************
// // // // // // * CODING CHALLENGE 3
// // // // // // */

// // // // // // /*
// // // // // // John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

// // // // // // To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// // // // // // In the end, John would like to have 2 arrays:
// // // // // // 1) Containing all three tips (one for each bill)
// // // // // // 2) Containing all three final paid amounts (bill + tip).

// // // // // // (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

// // // // // // GOOD LUCK 😀
// // // // // // */
// // // // // // //my solution
// // // // // // function tipCalc(){
// // // // // //  var bills = [124, 48, 268]
// // // // // //  var tips = [];

// // // // // //  var tip1 = (bills[0]) * .20;
// // // // // //  var tip2 = (bills[1]) * .15;
// // // // // //  var tip3 = (bills[2]) * .20;
// // // // // //  tips.push(tip1, tip2, tip3)
// // // // // //  console.log(tips)
// // // // // // }

// // // // // // function finalCalc(){
// // // // // //  var bill1 = bills[0] + tip1;
// // // // // //  var bill2 = bills[1] + tip2;
// // // // // //  var bill3 = bills[2] + tip3;

// // // // // //  bills = [];
// // // // // //  bills.push(bill1, bill2, bill3);
// // // // // //  console.log( `Final bills ${bills}`)

// // // // // // }

// // // // // // //course solution
// // // // // // function tipCalculator(bill) {
// // // // // //    var percentage;
// // // // // //    if (bill < 50) {
// // // // // //        percentage = .2;
// // // // // //    } else if (bill >= 50 && bill < 200) {
// // // // // //        percentage = .15;
// // // // // //    } else {
// // // // // //        percentage = .1;
// // // // // //    }
// // // // // //    return percentage * bill;
// // // // // // }

// // // // // // var bills = [124, 48, 268];
// // // // // // var tips = [tipCalculator(bills[0]),
// // // // // //            tipCalculator(bills[1]),
// // // // // //            tipCalculator(bills[2])];

// // // // // // var finalValues = [bills[0] + tips[0],
// // // // // //                   bills[1] + tips[1],
// // // // // //                   bills[2] + tips[2]];

// // // // // // console.log(tips, finalValues);


// // // // // //Objects 

// // // // // //Object literal
// // // // // var john = {
// // // // //    firstName: 'Josh',
// // // // //    lastName: 'Nezianya',
// // // // //    birthYear: 1990,
// // // // //    family:['Jane', 'Mark', 'Bobs', 'Emily'],
// // // // //    job: 'teacher',
// // // // //    isMarried: false
// // // // // }
// // // // // console.log(john.firstName);
// // // // // console.log(john['lastName']);
// // // // // var x = 'birthYear';
// // // // // console.log(john[x])

// // // // // john.job = 'designer';
// // // // // john['isMarried'] = true;
// // // // // console.log(john);

// // // // // //new object syntax
// // // // // var jane = new Object();
// // // // // jane.name = 'Jane';
// // // // // jane.birthYear = 1958;
// // // // // jane['lastName'] = 'Smith';
// // // // // console.log(jane)

// // // // //Object Methods

// // // // var john = {
// // // //    firstName: 'Josh',
// // // //    lastName: 'Nezianya',
// // // //    birthYear: 1992,
// // // //    family:['Jane', 'Mark', 'Bobs', 'Emily'],
// // // //    job: 'teacher',
// // // //    isMarried: false,
// // // //    calcAge: function(birthYear) {
// // // //       this.age = 2019 - this.birthYear;
// // // //    }
// // // // };

// // // // john.age = john.calcAge();

// // // /*****************************
// // // * CODING CHALLENGE 4
// // // */

// // // /*
// // // Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
// // // 1. For each of them, create an object with properties for their full name, mass, and height
// // // 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// // // 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

// // // Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

// // // GOOD LUCK 😀
// // // */

// // // //My failed solution
// // // var marc = {
// // //    firstName: 'Marc',
// // //    lastName: 'Bowers',
// // //    mass: 300,
// // //    height: 1.90,
// // //    bmi: function(){
// // //    this.mass / (this.height * this.height)
// // //    }
// // // }
// // // console.log(marc)

// // // var josh = new Object();
// // // josh.firstName = 'Josh',
// // // josh.lastName = 'Nezianya',
// // // josh.mass = 400,
// // // josh.height = 2.00
// // // josh.bmi = 

// // // console.log(josh)

// // // var john = {
// // //    fullName: 'John Smith',
// // //    mass: 110,
// // //    height: 1.95,
// // //    calcBMI: function() {
// // //        this.bmi = this.mass / (this.height * this.height);
// // //        return this.bmi;
// // //    }
// // // }

// // // var mark = {
// // //    fullName: 'Mark Miller',
// // //    mass: 78,
// // //    height: 1.69,
// // //    calcBMI: function() {
// // //        this.bmi = this.mass / (this.height * this.height);
// // //        return this.bmi;
// // //    }
// // // }

// // // if (john.calcBMI() > mark.calcBMI()) {
// // //    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// // // } else if (mark.bmi > john.bmi) {
// // //    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// // // } else {
// // //    console.log('They have the same BMI');
// // // }


// // //Loops & iteration

// // for (var i = 0; i < 10; i++){
// //    console.log(i);
// // }

// // // i = 0, 0 < 10 true, log i to the console, i++

// // var john = ['John', 'Smith', 1990, 'designer', false];

// // for(var i = 0; i < john.length; i++){
// //    console.log(john[i])
// // }

// // var i = 0;
// // while(i < john.length){
// //    console.log(john[i])
// // }

// // //continue and break statements

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for(var i = 0; i < john.length; i++){
//    if(typeof john[i] !== 'string') continue;
//    console.log(john[i])
// }

// for(var i = 0; i < john.length; i++){
//    if(typeof john[i] !== 'string') break;
//    console.log(john[i])
// }

// //Looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//    console.log(john[i]);
// }


// /*****************************
// * CODING CHALLENGE 5
// */

// /*
// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

// This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
// John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


// EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

// 5. Implement the same functionality as before, this time using Mark's tipping rules
// 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
// 7. Calculate the average tip for each family
// 8. Log to the console which family paid the highest tips on average

// GOOD LUCK 😀
// */
var johnT = {
   bills: [124, 48, 268, 180, 42]
}

function calculate(bill){
for(var i = 0; i < bill.length; i++){
   console.log(bill[i])
}
   if(bill > 50 && bill < 200){
      var total = (bill * .15) + bill
      console.log(total)
      return total;
   } else if(bill < 50){
      var total = (bill * .20) + bill
      console.log(total)
      return total;

   } else if(bill > 200){
      var total = (bill * .20) + bill
      console.log(total)
      return total;

   } else {
      // console.log(error)
   }

}

var johnT = {
   bills: [124, 48, 268, 180, 42]
}

johnT.calculate