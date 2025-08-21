// for of

let arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  //   console.log(element);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  if (greet == " ") {
    continue;
  }
  //   console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United State Of America");
map.set("FR", "FRANCE");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, " ", value);
}

const myObject = {
  game1: "NFS",
  game2: "spiderman",
};

//for in

for (const key in myObject) {
  //   console.log(myObject[key]);
}

const programming = ["c", "c++"];

for (const key in programming) {
  // console.log(programming[key]);
}

for (const key in arr) {
  // console.log(key);
}

// ForEach

arr.forEach(function (item) {
  // console.log(item);
});

arr.forEach((element) => {
  // console.log(element);
});

function printMe(item) {
  console.log(item);
}

// arr.forEach(printMe);

arr.forEach((item, index, arr) => {
  // console.log(`${item} - ${index} - ${arr}`);
});

const myCoding = [
  {
    languageName: "javaScript",
    languageFileName: ".js",
  },
  {
    languageName: "Java",
    languageFileName: ".java",
  },
  {
    languageName: "python",
    languageFileName: ".py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
