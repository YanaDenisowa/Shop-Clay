
function refreshDots(ulObject) {
    let liObjects = ulObject.childNodes;
    let selectedLiObjectIndex = 0;

    for (let i = 0; i < liObjects.length; i++) {
        let liObject = liObjects[i];
        if (liObject.classList.contains("slick-active")) {
            selectedLiObjectIndex = i;
            break;
        }
    }

    for (let i = 0; i < liObjects.length; i++) {
        var opacity = 0.2;
        let difference = Math.abs( i - selectedLiObjectIndex);
        if (difference == 1) {
            opacity = 0.6;
        } else if (difference == 2) {
            opacity = 0.4;
        } else if (difference > 2) {
            opacity = 0.2;
        }
        let liObject = liObjects[i];
        if (liObject.classList.contains("slick-active")) {
            let divElements = liObject.childNodes;
            for (let divElement of divElements) {
                if (divElement.id.includes("_active")) {
                    divElement.style.display = "block";
                } else {
                    divElement.style.display = "none";
                }
            }
        } else {
            let divElements = liObject.childNodes;
            for (let divElement of divElements) {
                if (divElement.id.includes("_active")) {
                    divElement.style.display = "none";
                } else {
                    divElement.style.display = "block";
                    divElement.style.opacity = opacity;
                }
            }
        }
    }
}

$(document).ready(function(){
    $('.slider_block').on('afterChange', function(event, slick, currentSlide, nextSlide){
        let ulObjects = document.getElementsByClassName("slick-dots");
        for (let ulObject of ulObjects) {
            refreshDots(ulObject);
        }
    });
    $('.slider_block').on('init', function(event, slick, currentSlide, nextSlide) {
        let ulObjects = document.getElementsByClassName("slick-dots");
        for (let ulObject of ulObjects) {
            refreshDots(ulObject);
        }
    });
    $('.slider_block').slick({
        arrows: true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:4,
        slidesToScroll:4,
        speed:1000,
        easing:'ease',
        infinite:true,
        autoplay:false,
        autoplaySpeed:2000,
        pauseOnFocus:true,
        pauseOnDotsHover:true,
        pauseOnHover:true,
        customPaging : function(slider, i) {
            let identifier = "slick_dot_" + i;
            return '<div id="'+ identifier + '"><div class="slick_regular_dot"></div></div><div id="'+ identifier + '_active" class="slick_base_active_outer_dot">' +
                '<div class="slick_base_active_inner_dot">' +
                '<div class="slick_base_active_inner_inner_dot"></div></div></div>';
        },
        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            }


        ]
    });
});
$(document).ready(function(){
    $('.product_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        let ulObjects = document.getElementsByClassName("slick-dots");
        for (let ulObject of ulObjects) {
            refreshDots(ulObject);
        }
    });
    $('.product_slider').on('init', function(event, slick, currentSlide, nextSlide) {
        let ulObjects = document.getElementsByClassName("slick-dots");
        for (let ulObject of ulObjects) {
            refreshDots(ulObject);
        }
    });
    $('.product_slider').slick({
        arrows: true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed:1000,
        easing:'ease',
        infinite:true,
        autoplay:false,
        autoplaySpeed:2000,
        pauseOnFocus:true,
        pauseOnDotsHover:true,
        appendArrows: '.product .container .wrapper .slider_nav',
        appendDots:'.product .container .wrapper .slider_nav',
        pauseOnHover:true,
        customPaging : function(slider, i) {
            let identifier = "slick_dot_" + i;
            return '<div id="'+ identifier + '"><div class="slick_regular_dot"></div></div><div id="'+ identifier + '_active" class="slick_base_active_outer_dot">' +
                '<div class="slick_base_active_inner_dot">' +
                '<div class="slick_base_active_inner_inner_dot"></div></div></div>';
        },
        responsive:[
            {
                breakpoint:992,
                settings: {
                    slidesToShow:3,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    dots:false,
                }
            }

        ]
    });
});
function toggleDropdownList() {
    document.getElementById("myDropdownBurger").classList.toggle("show");
    document.getElementById("myDropdown").classList.toggle("show");

    toggleDropdownIcon("dropdown_icon");
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

       let dropdowns = document.getElementsByClassName("dropdown_content");

        let dropdownsBurger = document.getElementsByClassName("dropdown_content_burger");
        let i;
        for (i = 0; i < dropdowns.length; i++) {

            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                toggleDropdownIcon("dropdown_icon");
                toggleDropdownIcon("dropdown_icon_burger");
            }
        }
        for (i = 0; i < dropdownsBurger.length; i++) {

            let openDropdown = dropdownsBurger[i];
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