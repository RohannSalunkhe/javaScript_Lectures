// # Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false, because symbols are unique
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// # Reference (Non primitive)

// Array, Object, Function

const heros = ["Thor", "Ironman", "Hulk"];

let myObj = {
  name: "Thor",
  age: 1000,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof outsideTemp);
