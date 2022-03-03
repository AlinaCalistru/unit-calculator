let userNumEl = document.getElementById("user-num");

let resultLength = document.getElementById("length");
let resultVolume = document.getElementById("volume");
let resultMass = document.getElementById("mass");

function lengthCalculation() {
  let result1 = parseFloat((userNumEl.value * 0.3048).toFixed(3));
  let result2 = parseFloat((userNumEl.value * 3.28).toFixed(3));
  resultLength.textContent =
    userNumEl.value +
    " meters = " +
    result2 +
    " feet" +
    " | " +
    userNumEl.value +
    " feet = " +
    result1 +
    " meters";
}

function volumeCalculation() {
  let result3 = parseFloat((userNumEl.value * 0.264172).toFixed(3));
  let result4 = parseFloat((userNumEl.value * 3.785412).toFixed(3));
  resultVolume.textContent =
    userNumEl.value +
    " liters = " +
    result3 +
    " gallons" +
    " | " +
    userNumEl.value +
    " gallons = " +
    result4 +
    " liters";
}

function massCalculation() {
  let result5 = parseFloat((userNumEl.value * 2.20462262185).toFixed(3));
  let result6 = parseFloat((userNumEl.value * 0.45359237).toFixed(3));
  resultMass.textContent =
    userNumEl.value +
    " killos  = " +
    result5 +
    " pounds" +
    " |  " +
    userNumEl.value +
    " pounds = " +
    result6 +
    " Killos";
}

function calculate() {
  lengthCalculation();
  volumeCalculation();
  massCalculation();
}
userNumEl.addEventListener("change", calculate);

calculate();
