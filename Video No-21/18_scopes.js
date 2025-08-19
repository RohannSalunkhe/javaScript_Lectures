//var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner", a);
}

// console.log(a);
// console.log(b);

// ### VIDEO Node. :- 22 ###

function one() {
  const username = "Rohan";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website);
  two();
}

// one();

if (true) {
  const username = "Rohan";
  if (username == "Rohan") {
    const website = "YT";
    console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

//+++++++++++++++++++ Intresting ++++++++++++++++++++++

console.log(addone(3));

function addone(num) {
  return num + 1;
}

addTwo(5);

const addTwo = function (num) {
  return num + 2;
};
