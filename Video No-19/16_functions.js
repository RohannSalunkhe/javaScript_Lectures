function sayName() {
  console.log("Rohan");
}

// sayName();


function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

// addTwoNumbers(3, 5);


function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

// const result = addTwoNumbers(3, 5);
// console.log(result);


function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please Enter a user name");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Rohan"));
console.log(loginUserMessage());
