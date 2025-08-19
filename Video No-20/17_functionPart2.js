function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(3, 4, 5));

const user = {
  username: "Rohan",
  price: 199,
};

function handelObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handelObject(user);
handelObject({
  username: "Rohan",
  price: 199,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[0];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([500, 200, 300, 400]));
