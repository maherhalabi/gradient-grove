var dropDownColorsMenu = document.querySelector(".dropDownColors");
var colorButton = document.getElementById("colorButton");

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
