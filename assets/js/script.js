//information content function
$(function () {
    "use strict";

    $(".clasic-list li").click(function () {
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(".info-content div").hide();
        $("." + $(this).data("class")).fadeIn();
    })
})


//navbar
$(".nav-menu-button").click(function () {
    $(".sidebar").toggle();
})

