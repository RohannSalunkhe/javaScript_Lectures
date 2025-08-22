let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessesSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validate input
  if (guess === "" || guess < 1 || isNaN(guess) || guess > 100) {
    alert(`Please enter a valid Number`);
  } else {
    prevGuess.push(guess);

    if (numGuess === 5) {
      console.log(numGuess);
      cleanUpGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      console.log(numGuess);
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage(`You gussed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function cleanUpGuess(guess) {
  //
  userInput.value = "";
  guessesSlot.innerHTML = `${prevGuess[numGuess - 1]}`;
  remaining.innerHTML = `${5 - numGuess}`;
  numGuess += 1;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<button type="button" id="newGame">Start New Game</button>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessesSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}
