const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls cryptograhy, network
  setTimeout(function () {
    resolve("By Rohan");
    console.log("Async task is complete!");
  }, 1000);
});

promiseOne.then(function (name) {
  console.log(`Promise consumed ${name}`);
});

//promisetwo
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asyn Task 2 !!");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 Resolve");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "chai", email: "Chai@example.com" });
  }, 1000);
});

promiseThree.then((obj) => {
  console.log(obj);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Rohan", password: "123" });
    } else {
      reject("ERROR Something went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The Promise is either resolved or rejected"));

//Promises Resolved Using Async Await
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

// new Promise((resolve, reject) => {
//   const response = fetch("https://jsonplaceholder.typicode.com/users");
//   resolve(response);
// })
//   .then((data) => {
//     console.log(data.json());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//direc promise syntax
fetch("https://api.github.com/users/Rohannsalunkhe")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.public_repos);
  })
  .catch((error) => {
    console.log(error);
  });
