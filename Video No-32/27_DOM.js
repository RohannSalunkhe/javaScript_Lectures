const title = document.getElementById("title");

title.style.backgroundColor = "green";
title.style.padding = "25px";
title.style.borderRadius = "25px";

console.log((title.textContent = "King"));
console.log((title.innerHTML = "Rohan"));
console.log((title.innerText = "Rohans"));

// const div = document.getElementsByClassName("bg-black");

const myul = document.querySelector("ul");

const turnGreen = myul.querySelector("li");

turnGreen.style.backgroundColor = "pink";

turnGreen.style.padding = "25px";

const allH2 = document.querySelectorAll("h2");

const myH2Array = Array.from(allH2);

myH2Array.forEach((item) => {
  item.innerText = "Laptop";
  item.style.backgroundColor = "yellow";
  item.style.color = "red";
});
