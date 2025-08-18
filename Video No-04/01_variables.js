const accountId = 12343;
let accountEmail = "salunkherohan2005@gmail.com";
var accountPassword = "Rohan@123";
accountCity = "Pune";
let accountState;

// accountId = 2;

accountEmail = "salunkherohan2235@gmail.com";
accountPassword = "Rohan@1234";
accountCity = "Mumbai";

/*prefer not to use var because of issue in block scope and functional scope
 */
console.log("Account ID:", accountId);

console.table([accountEmail, accountPassword, accountCity, accountState]);

function displayAccountDetails() {
  console.log("Account ID:", accountId);
  console.log(accountPassword);
  var name = "Rohan Salunkhe";
  let age = 18;
  console.log("Age", age);
  console.log(Name);
}

if (true) {
  let age = 20;
  console.log("Age in if block:", age);
  var Name = "Rohan";
  console.log("Name in if block:", Name);
}

displayAccountDetails();
