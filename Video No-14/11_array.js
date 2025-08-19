// array

const myArr = [1, 2, 3, 4, 5];

const myHeroes = ["Batman", "Superman", "Wonder"];

const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr[0]);
console.log(myHeroes[1]);
console.log(myArr2[2]);

// myArr.push(6);
// myArr.push(7, 8, 9);
// myArr.pop();

// myArr.unshift(2); // Adds 0 at the beginning
// myArr.shift(); // Removes the first element

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

//slice and splice

console.log("A", myArr);

const myarr1 = myArr.slice(1, 3); // Returns a new array from index 1 to 2
console.log("B", myarr1);
console.log("C", myArr);
const myarr2 = myArr.splice(1, 3); // Removes elements from index 1 to 3
console.log("D", myarr2);
console.log("F", myArr);
