var body = document.getElementById("gradient");
var hexColorOne = document.querySelectorAll("h3")[0];
var hexColorTwo = document.querySelectorAll("h3")[1];

var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
    hexColorOne.textContent = firstColor.value;
    hexColorTwo.textContent = secondColor.value;
}

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);

