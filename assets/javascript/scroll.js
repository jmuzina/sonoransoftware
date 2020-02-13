var fileName = location.href.split("/").slice(-1); 

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    let scroll_limit = $(window).height() * 0.75;
    var base_class;
    if (fileName == "") {
        base_class = ".change-nav-main";
    }
    else if (fileName == "sonorancad") {
        base_class = ".change-nav";
    }
    if ((last_known_scroll_position > scroll_limit) && (!$(base_class).hasClass("scrolled"))) {
        
        $(base_class).addClass("scrolled");
    } else if ((last_known_scroll_position <= scroll_limit) && ($(base_class).hasClass("scrolled"))) {
        $(base_class).removeClass("scrolled");
    }
  });

$("video").ready(function () {
    if ($(window).width() < 768) { // viewing on a phone
        if (fileName == "") {
            $("video").replaceWith("<img class='main-mobile-image' src='assets/images/main_mobile.png'></img>");
        }
        else if (fileName == "sonorancad") {
            $("video").replaceWith("<img class='bg-mobile-image' src='../assets/images/sonorancad/video-still.png'></img>");
        }
        $(".navbar-brand").replaceWith("<a class='navbar-brand logo' href='./' style='margin-right:7%; margin-left:2%;'></a>");
    }
});