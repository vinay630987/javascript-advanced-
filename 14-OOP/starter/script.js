'use strict';

// // Constructor Functions and the new Operator

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const vijay = new Person('vinay', 2000);
// const kumar = new Person('uday', 2000);

// console.log(vijay);
// console.log(kumar);

// // static method

// Person.hey = function () {
//   console.log('hey hello 🐶');
// };

//   // set a property that already existws
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert`${name} is not a full name!`;
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   //static method
//   static hey() {
//     console.log('hey hello');
//     console.log(this);
//   }
// }

// const vinay = new PersonCl('vinay kumar', 2001);
// console.log(vinay);

// vinay.calcAge();

// vinay.display();
// console.log(vinay.age);

// // 1. classes are not hoisted
// // 2. classes are first-class citizes
// // 3. classes are excuted in strict mode

// const uday = new PersonCl('krishna kumar', 2000);
// PersonCl.hey();

// // setters and getters

// const amount = {
//   owner: 'vinay',
//   movements: [200, 300, 400, 354, 600],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(amount.latest);

// amount.latest = 50;
// console.log(amount.movements);

// ////////////////////////
// // OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2030 - this.birthYear);
//   },
//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// const virat = Object.create(PersonProto);
// console.log(virat);
// virat.name = 'virat';
// virat.birthYear = 2000;
// virat.calcAge();

// const vikram = Object.create(PersonProto);
// vikram.init('vikram', 1999);
// vikram.calcAge();
// console.log(vikram);

// coding challenge 1
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/
//////////////////////
// CODING CHALLENGE 2
/*
class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new carCl('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

// inheritance between classes: constructor functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
};

//linked prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(` My name  is ${this.firstName} I study from ${this.course}`);
};

const vinay = new Student('vinay', 2001, 'Electonics');

console.log(vinay);
vinay.introduce();

vinay.calcAge();

console.log(vinay.__proto__.__proto__);

console.log(vinay instanceof Student);
console.log(vinay instanceof Person);
console.log(vinay instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
//////////////////////////
// CODING CHALLENGE 3
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
// Linked prototypes
Ev.prototype = Object.create(Car.prototype);

const tesla = new Ev('Tesla', 120, 23);

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

Ev.prototype.chargeBettery = function (chargeTo) {
  this.charge = chargeTo;
};

console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.accelerate();
*/
////////////////////

// inheritance between classes and es6 classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2030 - this.birthYear);
  }

  get age() {
    return 2040 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a fullname!`);
  }
  static hey() {
    console.log('hey there 👨‍🔧');
  }
}

class SchollCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //   // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`my name is ${this.fullName} i study from ${this.course}`);
  }

  calcAge() {
    console.log(
      `i'm ${
        2025 - this.birthYear
      } years old, but as a student I feel more like ${
        2030 - this.birthYear + 10
      }`
    );
  }
}

const vinay = new SchollCl('vinay kumar', 2001, 'computer science');

console.log(vinay);
vinay.introduce();
vinay.calcAge();
SchollCl.hey();
console.log(vinay.age);
*/

/*
// inheritance between classes and objects.create

const PersonProto = {
  calcAge() {
    console.log(2030 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('steven', 2040, 'electronics');

const StudentProto = Object.create(PersonProto);

const vinay = Object.create(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`my name is ${this.firstName} i study from ${this.course}`);
};

PersonProto.introduce = function () {
  console.log(`my name is ${this.firstName} i study from ${this.course}`);
};
vinay.init('vinay', 2001, 'computer science');

console.log(vinay);
vinay.introduce();
vinay.calcAge();
steven.calcAge();
steven.introduce();


// another class example

// 1. public fields
// 2. private fields
// 3. public methods
// 4. private methods
// ( there is also the static version)

class Account {
  // 1. public fields(instances)
  locale = navigator.language;

  // 2. private fields(instances)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(` thakns for creating account, ${this.owner}`);
  }

  // 3. public methods
  // public interfaces
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdrawl(val) {
    this.deposit(-val);
  }

  approvedLoan() {
    return true;
  }
  requestLoan(val) {
    if (this._approvedLoan(val)) {
      this.deposit(val);
      console.log(`loan is approved`);
    }
  }

  static helper() {
    console.log('Helper');
  }

  // private methods
  _approvedLoan(val) {
    return true;
  }
}

const acc1 = new Account('vinay', 'DOLLAR', 1234);

// acc1._movements.push(300);
// acc1._movements.push(-300);

acc1.deposit(500);
acc1.withdrawl(300);

acc1.requestLoan(1000);
acc1.approvedLoan(1000);

console.log(acc1);
console.log(acc1.getMovements());
//console.log(acc1.#movements);
//console.log(acc1.#pin);

Account.helper();
*/

//parent class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

//child class
class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const Rivian = new EVCL('Rivian', 120, 23);

Rivian.accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .accelerate()
  .chargeBattery(50)
  .accelerate();

//Object Oriented Programming (OOP)

/*
  Coding Challenge #1
  Your tasks:
  1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
  'speed' property. The 'speed' property is the current speed of the car in
  km/h
  2. Implement an 'accelerate' method that will increase the car's speed by 10,
  and log the new speed to the console
  3. Implement a 'brake' method that will decrease the car's speed by 5, and log
  the new speed to the console
  4. Create 2 'Car' objects and experiment with calling 'accelerate' and
  'brake' multiple times on each of them
  Test data:
  § Data car 1: 'BMW' going at 120 km/h
  § Data car 2: 'Mercedes' going at 95 km/h

  */

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this;
  }
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedas', 95);

bmw.accelerate();
mercedes.brake();

//Coding Challenge #2

/*
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h

*/

class CarCl1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    return this;
  }
}

const ford = new CarCl1('Ford', 120);

ford.accelerate();
ford.brake();
console.log(ford.speedUS);

//Coding Challenge #3

/*
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

*/

const Car1 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car1.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car1.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car1.call(this, make, speed);
  this.charge = charge;
};

//Link the prototypes

EV.prototype = Object.create(Car1.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Ford', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.brake();

/////////////////////////////
//Coding Challenge #4

/*
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

*/

class CarCl2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    return this;
  }
}

class EVCL1 extends CarCl2 {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );

    return this;
  }
}

const rivian = new EVCL1('Rivian', 120, 23);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .accelerate()
  .chargeBattery(40)
  .accelerate();

//console.log(rivian.#charge);
