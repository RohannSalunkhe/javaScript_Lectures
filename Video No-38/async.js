// setTimeout(() => {
//   console.log("Rohan");
// }, 2000);

// const changeText = function () {
//   document.querySelector("h1").innerHTML = "Rohan The Boss";
// };

// const changeMe = setTimeout(changeText, 2000);

// document.querySelector("#stop").addEventListener("click", (e) => {
//   clearTimeout(changeMe);
//   console.log("Stopped");
// });

// setInterval(()=>{
//     console.log("Rohan",Date.now());

// },2000)

let intervalId;

// document.querySelector("#start").addEventListener("click", function (e) {
//   e.preventDefault();

//   intervalId = setInterval(sayName, 2000);
// });

// const sayName = function () {
//   console.log("Rohan The Boss");
//   document.querySelector("h1").innerHTML = `Rohan The Boss${Date.now()}`;
// };

// document.querySelector("#stop").addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelector("h1").innerHTML = `Stopped`;
//   clearInterval(intervalId);
// });

//# Color Changing Code

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startChangingColor = function () {
  document.body.style.backgroundColor = randomColor();
};

const stopChangingColor = function () {
  document.querySelector("h1").innerHTML = `Color Changing Stopped`;
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", () => {
  document.querySelector("h1").innerHTML = `Color Changing`;
  if (!intervalId) {
    intervalId = setInterval(startChangingColor, 50);
  }
});

document.querySelector("#stop").addEventListener("click", stopChangingColor);

// display key on screen

const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
            <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  <tr>
    
</table>
            `;
});
