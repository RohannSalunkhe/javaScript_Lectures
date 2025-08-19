// singleton
//Object.create

// object literals

const mysym = Symbol("key1");

const JsUser = {
  name: "John",
  "full name": "Rohan Salunkhe",
  [mysym]: "my key1",
  age: 30,
  location: "New York",
  email: "centera@tech",
  isLoggedIn: true,
  lastLoginDay: ["Monday", "Tuesday"],
};

// console.log(JsUser.email);
// console.log(JsUser[mysym]);
// console.log(JsUser["full name"]);

JsUser.email = "rohan@chatgpt";
// Object.freeze(JsUser);
JsUser.email = "rohan@google";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
