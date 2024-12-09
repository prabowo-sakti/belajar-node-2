// function isEven(number) {
//   return number % 2 === 0;
// }

// const result = isEven(6);
// const otherResult = isEven(3);

// console.log(result);
// console.log(otherResult);

// function sum(...numbers) {
//   console.log("Angka pertama", numbers[0]);
//   console.log("Angka terakhir", numbers[numbers.length - 1]);
//   let total = 1;
//   for (let number of numbers) {
//     total += number;
//   }
//   console.log("Total (jumlah):", total);
// }

// sum(1, 2, 3, 4, 5);

// const number = ["a", "b", "c", "d", "e", "z"];

// console.log(number[number.length - 1]);

// const outerFunction = function () {
//   console.log("this is the outer function");

//   const innerFunction = function () {
//     console.log("this is the inner function");
//   };
//   const innersFunction = function () {
//     console.log("this is the dinner function");
//   };

//   return innerFunction && innersFunction;
// };

// const manyFunction = outerFunction();

// manyFunction();

// const createCounter = (initialValue = 0) => {
//   let counter = initialValue;
//   return (incrementValue) => {
//     counter += incrementValue;
//     console.log(counter);
//   };
// };

// const increment = createCounter(5);
// increment(3);

// class Human {
//   constructor(name, age) {
//     this.nama = name;
//     this.umur = age;
//   }
// }

// const properti = new Human("Prabowo Sakti", 22);

// Object.keys(properti).forEach((key) => {
//   console.log(`Halo ${key} ${properti[key]}`);
// });

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, nama saya adalah ${this.name}`);
//   }
// }

// class Colleague extends Human {
//   constructor(name, age, stack) {
//     super(name, age);
//     this.stack = stack;
//     this.canCode = true;
//   }
//   code() {
//     console.log(`Saya menulis code dengan teknologi ${this.stack}`);
//   }
// }

// const person = new Colleague("Prabowo Sakti", 22, [
//   "ReactJS",
//   "NextJS",
//   "MongoDB",
//   "NodeJS",
//   "ExpressJS",
// ]);

// console.log(person.name);
// console.log(person.canCode);

// person.sayHello();
// person.code();

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  set width(width) {
    this._width = width;
  }

  get width() {
    return this._width;
  }
  set height(height) {
    this._height = height;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._width * this._height;
  }
}

const shape = new Rectangle(5, 2);

console.log(shape.area);
console.log(shape.height);
console.log(shape.width);

shape.height = 10;
shape.width = 10;

console.log(shape.area);
console.log(shape.height);
console.log(shape.width);
