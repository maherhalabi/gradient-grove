var body = document.querySelector(".gradient");
var hexColorOne = document.getElementById("DisplayHexCodeOne");
var hexColorTwo = document.getElementById("DisplayHexCodeTwo");

var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
    hexColorOne.textContent = firstColor.value;
    hexColorTwo.textContent = secondColor.value;
}

firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);

