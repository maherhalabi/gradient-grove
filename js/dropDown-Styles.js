var dropDownGradientMenu = document.querySelector(".dropDownGradient");
var gradientButton = document.getElementById("gradientButton");

gradientButton.addEventListener("click", function() {
    menuListToggle(dropDownGradientMenu);
});

var gradientStyleOne = document.getElementById('gradientOne');
gradientStyleOne.addEventListener("click", function() {
    displayHexColorInfo();
    body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
});

var gradientStyleTwo = document.getElementById('gradientTwo');
gradientStyleTwo.addEventListener("click", function() {
    displayHexColorInfo();
    body.style.background = "radial-gradient(circle, " + firstColor.value +"," + secondColor.value + ")";
});
    
var gradientStyleThree = document.getElementById('gradientThree');
gradientStyleThree.addEventListener("click", function() {
    displayHexColorInfo();
    body.style.background = "linear-gradient(center, " + firstColor.value + ", blue 50%, " + secondColor.value + ")";
});
    
var gradientStyleFour = document.getElementById('gradientFour');

gradientStyleFour.addEventListener("click", function() {
    displayHexColorInfo();
    body.style.background = "linear-gradient(to top, " + firstColor.value + ", " + secondColor.value + ")";
});
