class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`${this.username}`);
  }
}

class Owner extends User {
  constructor(username, password, product) {
    super(username);
    this.password = password;
    this.product = product;
  }

  printMe() {
    console.log(`${this.username} ${this.password} ${this.product}`);
  }
}

const tea = new Owner("Rohan", "123", "Tea");

tea.printMe();
tea.logMe();
