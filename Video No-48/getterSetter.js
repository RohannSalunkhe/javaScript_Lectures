class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const info = new user("rohan@centera.tech", "123abc");

console.log(info.email);
console.log(info.password);

//# with function

function users(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },

    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },

    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new users("chai@123", "abc");

console.log(chai.email);
console.log(chai.password);
