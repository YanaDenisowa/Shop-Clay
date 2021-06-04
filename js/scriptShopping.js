
// Close the dropdown menu if the user clicks outside of it
function toggleDropdownList() {
    document.getElementById("myDropdownBurger").classList.toggle("show");

    toggleDropdownIcon("dropdown_icon_burger");
}
function toggleDropdownIcon(iconId) {

    if (document.getElementById(iconId).classList.contains("fa-caret-down")) {
        document.getElementById(iconId).classList.remove("fa-caret-down");
        document.getElementById(iconId).classList.add("fa-caret-right");
    } else {
        document.getElementById(iconId).classList.remove("fa-caret-right");
        document.getElementById(iconId).classList.add("fa-caret-down");
    }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop_btn')) {

        var dropdownsBurger = document.getElementsByClassName("dropdown_content_burger");
        var i;
        for (i = 0; i < dropdownsBurger.length; i++) {
            var openDropdown = dropdownsBurger[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                toggleDropdownIcon("dropdown_icon_burger");
            }
        }
        for (i = 0; i < dropdownsBurger.length; i++) {
            var openDropdown = dropdownsBurger[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }

        }
    }
}
function menuShow() {
    let ulMenuShow = document.getElementById("right_menu_burger");
    ulMenuShow.style.transform = "none";
}
function menuHide(){
    let ulMenuHide=document.getElementById("right_menu_burger");
    ulMenuHide.style.transform = "translate(0, -100%)";
}



