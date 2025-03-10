// let country = "india";
// let population = "140m";
/*
let continent = "ASIA";

// console.log(country);
// console.log(population);
// console.log(continent);

const country = "india";
const population = 14;
const isIsland = true;

const language = "English";

console.log(`Type of 'isIsland': ${typeof isIsland}`);
console.log(`Type of 'population': ${typeof population}`);
console.log(`Type of 'country': ${typeof country}`);

console.log(`Type of 'language': ${typeof language}`);

console.log(population / 2);
console.log(population++);
console.log(population > 6);
console.log(population < 33);
const description =
  country +
  "is in" +
  continent +
  ", and its" +
  population +
  "million people speak" +
  language;
console.log(description);
console.log(
  `${country} is in ${continent}, and its ${population} milion people speak ${language}`
);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );

}
*/

//const { setOptions } = require("leaflet");

//const { DomUtil } = require("leaflet");

//const unscopables = require("core-js/fn/symbol/unscopables");

//fundamentals part
// coding challenge 1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);

// const markHigherBMI = markBMI > johnBMI;
// console.log(`mark's BMI: ${markBMI}`);
// console.log(`john's BMI: ${johnBMI}`);
// console.log(` is marks bmi is higher than john's? ${markHigherBMI}`);

// // coding challenge 2

// if (markBMI > johnBMI) {
//   console.log(`mark's BMI ${markBMI} is higher than john's BMI ${johnBMI}`);
// } else {
//   console.log(`john's BMI ${johnBMI} is higher than mark's BMI ${markBMI}`);
// }

// let country = 'india';
// let population = 10;
// let capitalcity = 'delhi';
// function describeCountry(country, population, capitalcity) {
//   return ` ${country} has ${population} million people and its capital city is ${capitalcity}`;
// }

// const descIndia = describeCountry("India", 20, "Delhi");
// const descUsa = describeCountry("Usa", 20, "Delhi");
// const descDubai = describeCountry("Dubai", 20, "Delhi");

// //console.log(descIndia, descUsa, descDubai);

//function percentageOfWorld1(population) {
// return (population / 7900) * 100;
//}

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// // const indiaPop = percentageOfWorld1(10);
// // const usaPop = percentageOfWorld1(23);
// // const dubaiPop = percentageOfWorld1(15);
// // console.log(indiaPop, usaPop, dubaiPop);

// // const percentageOfWorld3 = (population) => (population / 7900) * 100;
// // const indiaPop = percentageOfWorld3(10);
// // const usaPop = percentageOfWorld3(233);
// // const dubaiPop = percentageOfWorld3(1532);
// // console.log(indiaPop, usaPop, dubaiPop);

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people which is about ${percentage}% of the world`;
//   console.log(description);
// };

// describePopulation("India", 235);

/// Arrays

// const populations = [34, 23, 43, 43];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// const neighbours = ["india", "pakistan", "bangladesh", "usa", "dubai"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("PROBABLY NOT A CENTRAL EUROPEAN COUNTRY : D");
// }
// neighbours[neighbours.indexOf("usa")] = "Republic of USA";
// console.log(neighbours);

// const myCountry = {
//   country: "india",
//   capital: "delhi",
//   language: "hindi",
//   population: 140,
//   neighbours: ["pak", "bng", "isIsland"],

// console.log(myCountry);
// myCountry.population += 2;
// console.log(myCountry);

// myCountry.population -= 2;
// console.log(myCountry);

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.country} `
// );
/*
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.country} `
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 2 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// for loop

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/
// const populations = [23, 45, 67, 48];
// percentage2 = [];
// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentage2.push(perc);
// }
// /*
// console.log(percentage2);

// const percenteges3 = [];
// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages3.push(perc);
//   i++;
// }
// */

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Noraway", "Swedan", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//   }
// //console.log(listOfNeighbours);

// const percentage3 = [];
// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentage3.push(perc);
// }
// console.log(percentage3);
/*
const calcAverage = (a, b, c) => (a + b + c) / 300;

let scoreDolphins = calcAverage(130, 108, 130);
const scoreKoalas = calcAverage(88, 91, 110);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphin wins ${avgDolhins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas wins ${avgKoalas} vs ${avgDolhins}`);
  } else {
    console.log(`No body wins`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(500, 100);

*/
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else avgDolphins === avgKoalas;
  {
    console.log("the game was drawn...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(500, 500);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//const calcTip= bill => bill >=50 && bill <=300 ? bill * 0.15 : 0.2;

const bills = [250, 220, 150];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals, bills, tips);

////////////////////////////////////////

const mark = {
  fullName: "mark miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "john smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI ${mark.bmi} is higher than john's ${john.bmi}`);
} else {
  console.log(`John's bmi ${john.bmi} id higher than mark's bmi ${mark.bmi}`);
}
*/

/*
// VALUES AND VARIABLES
let country = "india";
let continent = "asia";
let population = 14;

console.log(country);
console.log(continent);
console.log(population);

// DATA TYPES
let isIsland = false;
//const language;

console.log(isIsland);

const language = "english";
console.log(language);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// BASIC OPERATIONS

console.log(population / 2);
console.log(population + 1);
console.log(country > 6);
console.log(population < 33);

const description =
  country +
  " " +
  "is in" +
  " " +
  continent +
  "," +
  "and its" +
  " " +
  population +
  " " +
  "million people speak" +
  " " +
  country;
console.log(description);

// STRING AND TEMPLATE LITERALS

const description1 = `${country}'s is in ${continent}, and its ${population} million people speak ${country}`;
console.log(description1);

//Taking Decisions: if/else statements

if (population > 33) {
  console.log("india's population is above average");
} else {
  console.log(`${country}'s population is ${population} million below average`);
}

//Type conversion and coercion

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

//EQUALITY OPERATORS: == VS. ===
// const numNeighbours = prompt(
//   "How many neighbours countries does your country have?"
// );

// const numNeighbours1 = Number(
//   "How many neighbours countries does your country have?"
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No border");
// }

// Logical operators

if (language == "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your critiria`);
}

//switch statements
switch (language) {
  case "chinese":
  case "madarian":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 40");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// The conditional (Ternary) Operator
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

// JAVASCRIPT FUNDAMENTALS PART-2

const describeCountry = function (country, population, capitalcity) {
  return `${country} has ${population} million people and its capital city is ${capitalcity}`;
};

const cal1 = describeCountry("fibland", 6, "Helsinki");
const cal2 = describeCountry("india", 10, "delhi");
const cal3 = describeCountry("USA", 15, "france");

console.log(cal1);
console.log(cal2);
console.log(cal3);

// FUNCTION DECLARATION VS. EXPRESSIONS

//function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const india1 = percentageOfWorld1(10);
const pak = percentageOfWorld1(20);
const USA = percentageOfWorld1(15);
console.log(india1, pak, USA);

// function expresssion
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const ind = percentageOfWorld1(20);
const pak1 = percentageOfWorld1(50);
const US = percentageOfWorld1(150);
console.log(ind, pak1, US);

// ARROW FUNCTIONS
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const pakistan = percentageOfWorld3(10);
const kazikistan = percentageOfWorld3(50);
const france = percentageOfWorld3(60);
console.log(pakistan, kazikistan, france);

// Function calling other functions

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

console.log(describePopulation("india", 430));
console.log(describePopulation("france", 1441));
console.log(describePopulation("dubai", 640));

// introduction to arrays
const populations = [32, 34, 23, 53];
console.log(populations.length == 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

//basic array opearations(methods)
const neighbours = ["india", "usa", "france"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (neighbours.includes("usa")) {
  console.log("Probably not a central European country:D");
}

neighbours[neighbours.indexOf("france")] = "Republic of Swedan";
console.log(neighbours);

// introduction to Objects
const myCountry = {
  country: "india",
  capital: "asia",
  language: "telugu",
  population: 14,
  neighbours: ["india", "pak", "usa"],
};

myCountry;

console.log(myCountry);

//Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} -speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

console.log(myCountry.population + 2);
console.log(myCountry["population"] - 2);

//OBJECT METHODS
const myCountry2 = {
  country: "india",
  capital: "asia",
  language: "telugu",
  population: 14,
  neighbours: ["india", "pak", "usa"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
  //this.isIsland = !Boolean(this.neighbours.length);
};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

//THE FOR LOOP

for (let i = 1; i <= 50; i++) {
  console.log(`Vote number ${i} is currently voting `);
}

// Looping Arrays, Breaking and Continuing
const populations1 = [23, 43, 54, 34];
const percentages2 = [];
for (let i = 0; i < populations1.length; i++) {
  const perc = percentageOfWorld1(populations1[i]);
  percentages2.push(perc);
}
console.log(percentages2);

// Looping Bckwards and loops in loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Swedan", "Russia"],
];

for (let i = 1; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

const populations2 = [334, 43, 453, 433];
const percentages3 = [];
let i = 1;
while (i < populations2.length) {
  const perc = percentageOfWorld1(populations2[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
*/

// JAVASCRIPT FUNDAMENTALS PART-1

//CODING CHALLENGE 1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 🐶
*/

const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//CODING CHALLENGE 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉

*/

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than john's BMI (${johnBMI})!`);
} else {
  console.log(
    `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`
  );
}

// CODING CHALLENGE 3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const scoreDolphins = (97 + 112 + 140) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins >= scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolhphins wins!!");
} else if (scoreKoalas >= scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas wins!!!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both teams wins !!");
} else {
  console.log("No one won the trophy!!");
}

// if (avgDolhins > avgKoalas) {
//   console.log("Dolphin wins The Trophy");
// } else if (avgDolhins === avgKoalas) {
//   console.log("The match was Drawn!!");
// } else if (avgKoalas > avgDolhins) {
//   console.log("Koalas wins The trophy!!");
// } else {
//   console.log("No tean Wins the Trophy!!");
// }

// if (avgDolhins >= 100 && avgKoalas <= 100) {
// }

// Coding challenge 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//JavaScript Fundamentals – Part 2

//Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 

*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolhins);
console.log(avgKoalas);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphin wins ${avgDolhins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas wins ${avgKoalas} vs. ${avgDolhins}`);
  } else {
    console.log("No team wins!!!");
  }
};

checkWinner(1600, 800);

//Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

const marks = {
  fullName: "markMiller",
  mass: 78,
  height: 1.69,

  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johns = {
  fullName: "johnSmith",
  mass: 92,
  height: 1.95,

  calcBMI() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
console.log(marks.calcBMI());
console.log(johns.calcBMI());

if (marks.bmi > johns.bmi) {
  console.log(
    `${marks.fullName}'s BMI (${marks.bmi})  is higher than ${johns.fullName}'s BMI (${johns.bmi})`
  );
}

//Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
*/

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipss = [];
const totalss = [];

for (let i = 0; i < billss.length; i++) {
  const Tip = calcTip(billss[i]);
  tipss.push(Tip);
  totalss.push(Tip + billss[i]);
}

console.log(billss, tipss, totalss);

/*
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

const calcAverage1 = function (arr) {
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
};

console.log(calcAverage1([3, 7, 2]));

// 3) Developer Skills & Editor Setup

//Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

const Data1 = [17, 21, 23];
const Data2 = [12, 5, -5, 0, 4];
console.log(`... ${Data1[0]}ºC ... ${Data1[1]}ºC ... ${Data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log(str);
};

printForecast(Data1);
printForecast(Data2);

//JavaScript in the Browser: DOM and Events
//Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
/*
document.querySelector("again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing!!";

  document.querySelector(".score").textContent = "score";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").textContent = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
*/
// Data Structures, Modern Operators and Strings

//Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Create an array for each team

const [players1, players2] = game.players;
console.log(players1, players2);

// The first player is the goalkeeper
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Concatenate the players arrays of both teams
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Create a copy of players1 and add substitute players
const players1Final = [...players1, "thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Destructure the game.odds object
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = (...players) => {
  console.log(`Goals were scored: ${players.length}`);
};

// Determine which team is more likely to win
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// Test the function
//printGoals(...game.scored);
printGoals("Davies", "Muller", "Lewandowski");

// Coding Challenge #2

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
*/

// 1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

//4

let scores = {};
let arr = Object.values(game.scored);
for (const player of arr) {
  scores[player] = (scores[player] || 0) + 1;
}
console.log(scores);

//Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽ GOAL
*/
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`${half} Half ${min}: ${event}`);
}

//Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;

  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

// Closer look At Functions

//Coding Challenge #1

/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?



const poll = {
  question: "What is your favourite programming language ?",
  options: ["0:javascript", "1:Python", "2:Rust", "3:C++"],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get The Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    //Register the A
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(this.answers);
  },
};

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    return length--;
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(0);
myLinkedList.push(11);
myLinkedList.push(23);
myLinkedList.push(7);
