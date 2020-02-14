var fileName = location.href.split("/").slice(-1); 

function video_replace() {
    if (fileName == "") {
        $("video.main-video").replaceWith("<img class='main-mobile-image' src='assets/images/main_mobile.png'></img>");
        $("video.spotlight-video").replaceWith("<img class='spotlight-mobile-image' src='assets/images/sonorancad/video-still.png'></img>");
    }
    else if (fileName == "sonorancad") {
        $("video").replaceWith("<img class='bg-mobile-image' src='../assets/images/sonorancad/video-still.png'></img>");
    }
};

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    let scroll_limit = $(window).height() * 0.45;
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
        video_replace();
        $(".navbar-brand").replaceWith("<a class='navbar-brand logo' href='./' style='margin-right:7%; margin-left:2%;'></a>");
    }
});

$(window).resize(function() {
    if ($(window).width() < 768) { // viewing on a phone
        video_replace();
        $(".navbar-brand").replaceWith("<a class='navbar-brand logo' href='./' style='margin-right:7%; margin-left:2%;'></a>");
    }
    else {
        $(".navbar-brand").replaceWith("<a class='navbar-brand logo' href='./' style='margin-right:7%; margin-left:2%;'><img src='./assets/images/logo_blue_white.png' alt=''> </a>");
    }
  });