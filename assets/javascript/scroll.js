window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    let scroll_limit = $(window).height() * 0.4;

    if ((last_known_scroll_position > scroll_limit) && (!$(".change-nav").hasClass("scrolled"))) {
        $(".change-nav").addClass("scrolled");
    } else if ((last_known_scroll_position <= scroll_limit) && ($(".change-nav").hasClass("scrolled"))) {
        $(".change-nav").removeClass("scrolled");
    }
  });

$("video").ready(function () {
    if ($(window).width() < 768) { // viewing on a phone
        $("video").replaceWith("<img class='bg-mobile-image' src='../assets/images/sonorancad/video-still.png'></img>");
    }
});