//# new keyword

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increament = function () {
  this.score += 1;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("Chai", 10);

chai.increament();
chai.printMe();

/*

here's what happens behind the score when the new keyword
is used:

A new object is created : The new keyword initiates the creation of a new javaScript object.

A prototype is linked: The newly created object gets inked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype

The constructor is called : The constructor function is called with the specified argument and this is bound to the newly created object. If no explicit return value is specified from the constructor , javaScript assumes this , the newly created object , to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object,array,function etc.),the newly created object is returned.

*/

//##Prototype##

let userName = "Rohan  ";
let Rohan = "Rohan  ";

String.prototype.trulength = function () {
  console.log(`True length is:${this.trim().length}`);
};

userName.trulength();
Rohan.trulength();
"iceTea   ".trulength();
