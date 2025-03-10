'use strict';

const hours = {
  mon: {
    open: 12,
    close: 22,
  },
  tue: {
    open: 10,
    close: 23,
  },
  sat: {
    open: 9,
    close: 21,
  },
};

const restaurant = {
  cuisine: 'Haveli Family Food',
  location: 'Cross Road Khammam District',
  categories: ['south', 'north', 'vegeterian', 'organic'],
  starterMenu: ['chickerRR', 'lollipop', 'tandoori', 'popcorn'],
  mainMenu: ['chicbiryani', 'fishBiryani', 'muttonBiryani'],
  hours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex }) {
    console.log(
      `order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time})`
    );
  },
  orderPista: function (ing1, ing2, ing3) {
    console.log(
      `here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = ` ${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(34);
  console.log(output);
}
/*
//SETS
const menuSet = new Set([
  'vinnela',
  'strawberry',
  'chocklate',
  'vinnela',
  'strawberry',
]);
console.log(menuSet);
console.log(menuSet.size);
console.log(menuSet.has('vinnela'));
console.log(menuSet.has('cholate'));
menuSet.add('gulab jamn');
menuSet.delete('chocklate');
console.log(menuSet);

for (const order of menuSet) console.log(order);

const staff = ['waiter', 'cheff', 'waiter', 'cheff'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['waiter', 'cheff', 'waiter', 'cheff']).size);

console.log(new Set('vinaykumar').size);

// MAPS

const rest = new Map();
rest.set(1, 'vinay,kumar');
rest.set('name', 'koppera vinay');
rest.set(2, 'uday,krishna');
rest.set(3, 'niresh, kumar');
console.log(rest);

rest
  .set('models', ['mat', 'bucket', 'fans', 'plastic'])
  .set('open', 10)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'We are closed :');

console.log(rest.has('name'));
console.log(rest.has(1));
console.log(rest.get(true));
console.log(rest.get('name'));
//rest.delete(2, 'vamshi krishna');
//console.log(rest);

const time = 11;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

rest.set(document.querySelector('h1'), 'Heading');
const arr = [3, 4];
rest.set(arr, 'vinay');
console.log(rest.get(arr));
console.log(rest);

//MAPS iteration
const question = new Map([
  ['question', 'what is the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try Again!'],
]);
console.log(question);

console.log(question.get(1));
// Convert object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(` Answer ${key} : ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// map to array
console.log([...question]);

console.log([...question.keys()]);
console.log([...question.values()]);
//console.log(rest);
//if (restaurant.hours && restaurant.mon.open);
//console.log(restaurant.hours.mon.open);

//if (restaurant.hours && restaurant.sat.open);
//console.log(restaurant.hours.sat.open);

// example
/*
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(` on ${day} , we open  at ${open}`);
}

// Methods
//console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPovert?.(0, 3) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'vinay', email: 'vinaykumar@gmail.co' }];
//const users = [];
console.log(users[0]?.name ?? 'user array is empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array is empty');

// property names

const properties = Object.keys(hours);
//console.log(properties);

let openStr = ` We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}
//console.log(openStr);

// property values
const values = Object.values(hours);
//console.log(values);

// object entire
const entries = Object.entries(hours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} open at ${open} and close at ${close}`);
}

const hotel1 = {
  name: 'abhilash',
  numGuests: 0,
};

const hotel2 = {
  name: 'ayyappa',
  owner: 'kiran',
};
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menu);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}


// OR operator
//hotel1.name = hotel1.name || 10;
//hotel2.numGuests = hotel2.numGuests || 10;
//console.log(hotel1);
//console.log(hotel2);

hotel1.numGuests ||= 10;
hotel2.numGuests ||= 10;
console.log(hotel1);
console.log(hotel2);

// nullish assignment operator (null or undefined)
hotel1.numGuests ??= 10;
hotel2.numGuests ??= 10;
console.log(hotel1);
console.log(hotel2);

// AND assignment operator

//hotel1.owner = hotel1.owner && '<ANONYMOUS>';
//hotel2.owner = hotel2.owner && '<ANONYMOUS>';
hotel1.owner &&= '<ANONYMOUS>';
hotel2.owner &&= '<ANONYMOUS>';
console.log(hotel1);
console.log(hotel2);

restaurant.guestCorrest = null;
const guests = restaurant.guestCorrest || 10;
console.log(guests);

//NUllish : null and undefined (NOT 0 or '')
const numGuests = restaurant.guestCorrest ?? 10;
console.log(numGuests);


//SPREAD , because on RIGHT side of =

const arr = [2, 3, 4, ...[3, 4]];

// REST , because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [chickenRR, lollipop, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(chickenRR, lollipop, otherFood);

// objects

const { sat, ...weekDays } = restaurant.hours;
console.log(sat, weekDays);

// functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(9, 4, 5);
add(4, 5, 6, 3);

restaurant.orderPizza('mushrrom', 'paneeer', 'chickenPizza', 'tomato');

console.log('___OR___');

console.log(23 || 'vinay');
console.log(null || 32);
console.log(null || undefined);

restaurant.orderMaggie = 43;
const orderMaggie = restaurant.maggie ? restaurant.orderMaggie : 10;
console.log(orderMaggie);
const orderMaggie2 = restaurant.orderMaggie || 10;
console.log(orderMaggie2);

console.log('___AND___');
console.log(3 && 'jonas');
console.log(0 && 23);
console.log(0 && null && 'hello' && undefined && 34);

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'paneer');
}

restaurant.orderPizza && restaurant.orderPizza('tomato', 'chicken');
//con;st x = [32, 4, 5];
//add(...x);

//restaurant.orderDelivery({
// time: '10:30',
//address: 'khanapuram 1-1-225',
//starterIndex: 2,
//mainIndex: 2,
//});

/*
const { cuisine, openingHours, location } = restaurant;
console.log(cuisine, openingHours, location);

const {
  cuisine: restaurantName,
  location: destination,
  categories: tags,
} = restaurant;
console.log(restaurantName, destination, tags);

// defualt values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 32;
let b = 33;

const obj = { a: 43, b: 54 };
({ a, b } = obj);
console.log(a, b);

const { hours: activeHours } = restaurant;
console.log(activeHours);

//nested objects
const { mon } = Hours;
console.log(mon);

const arr = [3, 5, 6];
const badArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newArray = [...restaurant.starterMenu, 'paneerManchurian'];
console.log(newArray);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
const doubleOrder = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(doubleOrder);

// iterables : arrrays, strings, maps, sets not objects

const str = 'jonas';
const letters = [...str, 'j', 'o'];
console.log(letters);
console.log(...str);
console.log('j', 'o');

const ingredients = [
  prompt("let's make pista! Ingrediant 1?"),
  prompt('Ingrediant 2'),
  prompt('ingrediant 3'),
];
console.log(ingredients);
restaurant.orderPista(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPista(...ingredients);
`
`;
// objects

const newRestaurant = { builtIn: 2018, founder: 'ajay kumar', ...restaurant };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.cuisine = 'Rest In Hotel';
console.log(restaurantCopy.cuisine);
console.log(restaurant.cuisine);
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(b);
const [x, y, z] = arr;
console.log(x, y, z);

//switching variables
let [sand, ramp] = restaurant.starterMenu;
console.log(sand, ramp);

/*const temp = sand;
sand = ramp;
ramp = temp;
console.log(sand, ramp);
*/
/*
  (sand, ramp)
] = [ramp, sand]);
console.log(sand, ramp);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(0, 2);
console.log(starter, mainCourse);

//nested destructing
const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [3];
console.log(p, q, r);

const rest = restaurant.name;
console.log(rest);

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = ` ${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')}) `;
  console.log(output);
}

/*
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

/*
///////////////////////////////////////
// Working With Strings - Part 2

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


///////////////////////////////////////
// Working With Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes `
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event Happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [keys, values] of gameEvents) {
  console.log(`[HALF] ${keys} : ${values}`);
}


//STRINGS

const airplane = 'TAP Air India';
const planes = 'A320';

console.log(airplane[0]);
console.log(planes[1]);
console.log('CAR2'[1]);

console.log(airplane.length);
console.log('cars'.length);

console.log(airplane.lastIndexOf('A'));
console.log(airplane.indexOf('n'));
console.log(airplane.indexOf('India'));

console.log(plane.slice(2));
console.log(airplane.slice(0, 3));
console.log(airplane.slice(-5));

const checkMiddleSeat = function (seat) {
  // B AND E IS MIDDLE SEATS
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middele seat 😑');
  else console.log('You got lucky🥳');
};

checkMiddleSeat('343B');
checkMiddleSeat('235C');
checkMiddleSeat('32E');

console.log(typeof new String('vinay'));
console.log(typeof new String('vinay').slice(2));

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitilization in name
const passenger = 'joNas';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails

const email = 'vinay@kumar.com';
const loginEmail = '   Vinay@Kumar.com';
const lowerEmail = loginEmail.toLowerCase();
const trimedEmail = lowerEmail.trim();
console.log(trimedEmail);
console.log(email === trimedEmail);

//const normalizedEmail = loginEmail.toLowerCase().trim();
//console.log(normalizedEmail);
//console.log(email === normalizedEmail);

//replacing

const access = 'SORT342 and SORT342';
console.log(access.replace('SORT342', 'Cart3420'));

const account = 'This is only sbi bank in kmm. No sbi bank like other banks ';

//console.log(account.replace('sbi', 'icici'));
console.log(account.replace(/sbi/g, 'icici'));

// Booleans
const plane = 'Airbus A324rt';
console.log(plane.includes('A3'));
console.log(plane.includes('B43'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('4rt'));

if (plane.startsWith('Air') && plane.endsWith('4rt')) {
  console.log('part of the airbus family');
}

// practice exercises
const checkBaggage = function (items) {
  const beggage = items.toLowerCase();
  if (beggage.includes('knife') || beggage.includes('gun')) {
    console.log('You are not allowed on  board');
  } else {
    console.log('welcome to board');
  }
};

checkBaggage('i have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


//split and join

console.log('a+very+nice+guy'.split('+'));
console.log('vinay kumar'.split(' '));

const [firstName, lastName] = 'Vinay Kumar'.split(' ');
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schemteman');

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padStart(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(49850928403));
console.log(maskCreditCard(55554555));

// Repeat
const message2 = 'i dont know ';
console.log(message2.repeat(5));

const merg = function (n) {
  console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
};
merg(4);
merg(5);
*/
