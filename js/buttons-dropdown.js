var dropDownGradientMenu = document.querySelector(".dropDownGradient");
var dropDownColorsMenu = document.querySelector(".dropDownColors");
var colorButton = document.getElementById("colorButton");
var gradientButton = document.getElementById("gradientButton");

function menuListToggle(menuName) {
    menuName.classList.toggle("show");

    window.onclick = function(e) {
        if (!e.target.matches('.dropDownTitle')) {
          if (menuName.classList.contains('show')) {
            menuName.classList.remove('show');
          }
        }
    }
} 

colorButton.addEventListener("click", function() {
    menuListToggle(dropDownColorsMenu);
});

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
    body.style.background = "linear-gradient(to left, " + firstColor.value + ", " + secondColor.value + ")";
});
    
var gradientStyleThree = document.getElementById('gradientThree');

gradientStyleThree.addEventListener("click", function() {
    displayHexColorInfo();
    body.style.background = "linear-gradient(to bottom, " + firstColor.value + ", " + secondColor.value + ")";
});
    
var gradientStyleFour = document.getElementById('gradientFour');

gradientStyleFour.addEventListener("click", function() {
    displayHexColorInfo();
    body.style.background = "linear-gradient(to top, " + firstColor.value + ", " + secondColor.value + ")";
});
    