// # if

// const isUserLoggedIn = true;
// const temprature = 55;

// if (temprature < 50) {
//   console.log("If Satatement");
// } else {
//   console.log("Else ...");
// }

// < , > , <= , >= , == , != , ===, !==

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power : ${power}`);
// }

const balance = 1000;

// if (balance > 500) console.log(`Yes`);

// if (balance < 500) {
//   console.log(`less than 500`);
// } else if (balance < 750) {
//   console.log(`less than 500`);
// } else {
//   console.log(`less than 1200`);
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard) {
  console.log(`Allow to buy course`);
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log(`User logged In `);
}

// # switch

const month = 3;
// switch (month) {
//   case 1:
//     console.log("January");
//     break;

//   case 2:
//     console.log("Feb");
//     break;

//   case 3:
//     console.log("March");
//     break;

//   default:
//     console.log("Error");
//     break;
// }

// #Truthy

// const userEmail = "Centera@Tech";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Dont have user email");
// }

// falsy values

// false , 0, -0, BIgInt 0n,"", null, undefined, NaN

// truthy values

//  "0", 'false', " ", [], {}, function(){},

const customerEmail = [];

// if (customerEmail.length === 0) {
//   console.log("Array is Empty");
// }

const emtyObj = {};

// if (Object.keys(emtyObj).length === 0) {
//   console.log("Object is Empty");
// }

// Nullish Coalesing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// turnary operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
