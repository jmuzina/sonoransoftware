

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    let scroll_limit = 640;

    if ((last_known_scroll_position > scroll_limit) && (!$(".change-nav").hasClass("scrolled"))) {
        $(".change-nav").addClass("scrolled");
    } else if ((last_known_scroll_position <= scroll_limit) && ($(".change-nav").hasClass("scrolled"))) {
        $(".change-nav").removeClass("scrolled");
    }
  });