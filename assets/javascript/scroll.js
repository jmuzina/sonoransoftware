$(window).on("scroll", function () {
    if ($(window).scrollTop() > 800) {
        $(".change-nav").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".change-nav").removeClass("active");
    }
});