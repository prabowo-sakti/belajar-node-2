//Note: semakin ke bawah, berarti saya mempelajarinya semakin mendalam

// const data = [1, [2, 3], [4, 5], [6, [7, 8, [7]]]];

// const flatData = data.flat(Infinity);

// console.log(flatData.map((num) => num * 2));

// const people = ["prabowo", "sakti", "ngoding", "jack"];

// console.log(people.join(" + "));

// let arr = [1, 2, 2, 3, 1, 4, 5, 4, 5];

// let set = new Set(arr);

// let uniques = Array.from(set);

// console.log(uniques);

// const person = {
//   firstName: "Prabowo",
//   lastName: "Sakti",

//   id: 1,
//   favoriteColors: ["green", "blue"],
//   adresses: {
//     street: "Main St",
//     number: 1,
//   },
//   fullname: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   sayHi: function () {
//     console.log("Hello!");
//   },
// };

// console.log(person.fullname());

// const person = {
//   id: 12,
//   name: "Prabowo Sakti",
// };

// delete person.name;

// console.log(person.name);

const users = {
  admin: "Jane",
  moderator: "Joe",
  user: "Billy",
};

// Object.keys(users).forEach((role) => {
//   console.log(`${users[role]} adalah seorang ${role}`);
// });

Object.entries(users).forEach(([key, value]) => console.log(key));
