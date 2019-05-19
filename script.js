//Add value that displays a certain hex code when website first launches

var hexColorOne = document.getElementById("DisplayHexCodeOne");
var hexColorTwo = document.getElementById("DisplayHexCodeTwo");

var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");


function displayHexColorInfo () {
    hexColorOne.textContent = firstColor.value;
    hexColorTwo.textContent = secondColor.value;
}

var body = document.querySelector(".gradient");

function setGradient() {
    displayHexColorInfo();
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
}

var colorBoxOne = document.getElementById("displayColorBoxOne")
var colorBoxTwo = document.getElementById("displayColorBoxTwo")

var firstColorList = document.querySelector("#firstColorButton");
var SecondColorList = document.querySelector("#SecondColorButton");

firstColor.addEventListener("input", function(event) {
    setGradient();
    colorBoxOne.style.background = firstColor.value;
});

secondColor.addEventListener("input", function() {
    setGradient();
    colorBoxTwo.style.background = secondColor.value;
});

var dropDownGradientMenu = document.querySelector(".dropDownGradient");
var dropDownColorsMenu = document.querySelector(".dropDownColors");
var colorButton = document.getElementById("colorButton");
var gradientButton = document.getElementById("gradientButton");

function menuListToggle(menuName) {
    menuName.classList.toggle("show");
    }

colorButton.addEventListener("click", function() {
    menuListToggle(dropDownColorsMenu);
});
gradientButton.addEventListener("click", function() {
    menuListToggle(dropDownGradientMenu);
});
