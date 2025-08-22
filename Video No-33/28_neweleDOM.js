const parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children);
// console.log((parent.children[0].style.color = "red"));

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes);

// # create element

const div = document.createElement("div");
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";
// div.innerText = "Chai aur code"

const addText = document.createTextNode("Chai aur code");
div.appendChild(addText);

// add on screen

document.body.appendChild(div);
