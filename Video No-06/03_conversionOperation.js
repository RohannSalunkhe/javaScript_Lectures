let score = "33abc";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN
// "" => 0

let isLogggedIn = 1;

let booleanIsLoggedIn = Boolean(isLogggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true
// 0 => false
// "abc" => true
// "" => false
// null => false
// undefined => false

let someNumber = 1234;
console.log(typeof someNumber);
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
