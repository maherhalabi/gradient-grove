var firstColor = document.getElementById("firstColor");
var secondColor = document.getElementById("secondColor");
var hexColor = document.getElementById("gradient");

firstColor.addEventListener("input", function() {
    hexColor.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";
});

secondColor.addEventListener("input", function() {
    console.log(secondColor.value);
});
