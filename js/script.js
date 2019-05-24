//Add value that displays a certain hex code when website first launches

var hexColorOne = document.getElementById("DisplayHexCodeOne");
var hexColorTwo = document.getElementById("DisplayHexCodeTwo");

var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");

function displayHexColorInfo () {
    
    hexColorOne.textContent = firstColor.value;
    hexColorTwo.textContent = secondColor.value;

    hexColorOne.style.background = firstColor.value;
    hexColorTwo.style.background = secondColor.value;
}

var body = document.querySelector(".gradient");

function setGradient() {
    displayHexColorInfo();
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
}

var firstColorList = document.querySelector("#firstColorButton");
var SecondColorList = document.querySelector("#secondColorButton");

firstColor.addEventListener("input", function() {
    setGradient();
});

secondColor.addEventListener("input", function() {
    setGradient();
});

var getCSSValues = document.getElementById("copyCSSValueButton");

//function for saving CSS values NOT READY - Only testing
getCSSValues.addEventListener("click", function() {
    if(confirm("press a button")){
        txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
});

