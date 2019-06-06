var dragDropGradient = document.querySelector("#rotateGradient");
var dropDownRotation = document.querySelector(".dropDownRotation");
var rotationIcon = document.querySelector(".fa-undo");

dragDropGradient.addEventListener("click", function() {
    menuListToggle(dropDownRotation);
    menuListToggle(rotationIcon);
});