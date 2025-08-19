const user = {
  username: "Rohan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Mayur";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Rohan";
//   console.log(this);
//   console.log(this.username);
// }

// chai();

const chai = () => {
  let username = "Rohan";
  console.log(this);
  console.log(this.username);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "Rohan" });

// console.log(addTwo(1, 2));

const myArray = [2, 4, 3, 5];

myArray.forEach((ans) => {
  console.log(ans);
});
