// Allow only numbers
document.getElementById("btn").addEventListener("keypress", function (event) {
  // Allow only numbers (48-57 are char codes for 0–9)
  if (event.charCode < 48 || event.charCode > 57) {
    event.preventDefault();
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid Height";
  } else {
    const ans = calculateBMI(weight, height);
    result.innerHTML = `<span>${ans}</span>`;
  }
});

function calculateBMI(weight, heightCm) {
  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(2);

  result.innerHTML = "";

  if (bmi <= 18.6) {
    return "Underweight";
  } else if (bmi > 18.6 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi > 24.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
