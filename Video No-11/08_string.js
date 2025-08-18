const name = "John";
const age = 30;

console.log(`${name} ${age} year old`);

const gameName = new String("Call of Duty");
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf("D"));

console.log(gameName.__proto__); // true

const newString = gameName.slice(-9, -1);
console.log(newString);
const anotherString = gameName.substring(0, 4);
console.log(anotherString);

const newStringOne = "   Rohan     ";
console.log(newStringOne.trim()); // "Rohan"

const url = "https://www.example%20.com";

console.log(url.replace("%20", "-"));

console.log(url.includes("example"));

console.log(gameName.split(" ")); // ["Call", "of", "Duty"]');
