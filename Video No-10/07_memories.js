// Stack(Primitive), Heap (Non-Primitive)

let myYoutubeName = "CodeWithHarry";

let anotherName = myYoutubeName;
anotherName = "chai aur code";

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
  name: "Harry",
  email: "Harry@google.com",
};

let userTwo = userOne;
userTwo.name = "Rohan";

console.log(userTwo.name);
console.log(userOne.name);
