//Color changer

const button = document.querySelectorAll(".btn");
const body = document.querySelector("body");
button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // console.log(e.target); 

    if (e.target.id == "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "Yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "pink") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
