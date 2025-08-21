const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach((item)=>{
//        console.log(item);

// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.filter((num) => {
//   return num > 4;
// });

// const newNum2 = myNums.filter((num) => num > 4);

// console.log(newNum);

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// newNums.forEach((items) => {
//   console.log(items);
// });

// #Filter

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    pages: 208,
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    genre: "Programming",
    pages: 464,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    genre: "Self-Help",
    pages: 320,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: 1997,
    genre: "Programming",
    pages: 336,
  },
];

// let userBook = books.filter((bk) => {
//   return bk.genre === "Programming";
// });

// userBook = books.filter((bk) => {
//   return bk.year >= 1995 && bk.genre === "Programming";
// });

// console.log(userBook);

// Maps

// const newNums = myNums.map((num) => {
//   return num + 10;
// });

// # chaining

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

//Reduce

const array1 = [1, 2, 3, 4, 5];

const myTotal = array1.reduce((acc, currval) => {
//   console.log(acc);

  return acc + currval;
}, 0);

// console.log(myTotal);



