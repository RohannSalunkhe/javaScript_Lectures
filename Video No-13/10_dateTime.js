//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-23");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log("Timestamp:", myTimeStamp);
// console.log("Timestamp:", myCreatedDate.getTime());

// console.log(Date.now() / 1000);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
