var fileName = location.href.split("/").slice(-1); 

history.scrollRestoration = "manual"; // Send user to top of page on refresh

// Replaces all videos with their static screenshot equivalents
function video_replace() {
    if (fileName == "") {
        $("video.main-video").replaceWith("<img class='main-mobile-image' src='assets/images/logos/main_mobile.png'></img>");
        $("video.spotlight-video").replaceWith("<img class='spotlight-mobile-image' src='assets/images/sonorancad/video-still.png'></img>");
    }
    else if (fileName == "sonorancad") {
        $("video").replaceWith("<img class='bg-mobile-image' id='sonoran_video' src='../assets/images/sonorancad/video-still.png'></img>");
    }
};

// Replaces static screenshots with videos
function static_replace() {
    if (fileName == "") {
        $("#video").replaceWith("<section id = 'video'><video id = 'main' autoplay muted class='main-video' style='margin-top:-49px;'><source src='assets/videos/logo_intro_cut.mp4' type='video/mp4'></video></section>");
        $("spotlight-mobile-image").replaceWith("<video id='spotlight' autoplay muted loop class='spotlight-video'><source src='assets/videos/sonorancad/background.mp4' type='video/mp4'></video>");
    }
    else if (fileName == "sonorancad") {
        $("bg-mobile-image").replaceWith("<video autoplay muted loop class='bg-video' id='sonoran_video' style='margin-top:-49px;'><source src='../assets/videos/sonorancad/background.mp4' type='video/mp4'></video>");
    }
}

function hide_logo(tag) {
    $("#nav-logo").fadeOut();
}

function add_logo(tag) {
    $("#nav-logo").fadeIn();
}

// Handle navbar transparency and logo hiding
function scroll_nav(width) {
    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (fileName == "") {
            scroll_limit = $("#vid-container").height() - 120;
        }
        else if (fileName == "sonorancad") {
            scroll_limit = $("#sonoran_video").height();
        }
        else {
            scroll_limit = $(window).height()*.5;
        }
        
        var base_class;
        if (fileName == "") {
            base_class = ".change-nav-main";
        }
        else if (fileName == "sonorancad") {
            base_class = ".change-nav";
        }

        if ((last_known_scroll_position > scroll_limit) && (!$(base_class).hasClass("scrolled"))) {
            $(base_class).addClass("scrolled");
            if ($(window).width() <= 768) {
                add_logo(".navbar-brand");
            }
        } else if ((last_known_scroll_position <= scroll_limit) && ($(base_class).hasClass("scrolled"))) {
            $(base_class).removeClass("scrolled");
            if ($(window).width() <= 768) {
                hide_logo(".navbar-brand");
            }
        }
    });
}

// Hide the nav logo on initial page load for mobile
$("nav-brand").ready(function() {
    if ($(window).width() > 768) {
        add_logo(".nav-brand");
    }
})

$(document).ready(function () {
    var old_width = $(window).width();

    scroll_nav(old_width);

    // If video is loaded on a mobile browser, replace it with static image
    $("video").ready(function () {
        if (($(window).width() <= 768) && (fileName == "about" || fileName == "")) {
            video_replace();
        }
    });

    // Handle page resizing
    $(window).resize(function() {
        var new_width = $(window).width();
        // Resizing to mobile
        if (new_width <= 768 && old_width > 768) {
            video_replace();
            $("#button-fade").fadeOut();
            if ($(window).scrollTop() < $("#vid-container").height() - 120) {
                hide_logo(".navbar-brand");
            }
        }
        // Resizing to tablet+
        else if ((new_width > 768 && old_width <= 768)) {
            static_replace();
            setTimeout(function() {$("#button-fade").fadeIn()}, 7300);
            if ($(window).scrollTop() < $("#vid-container").height() - 120) {
                add_logo(".navbar-brand");
            }
        }
        old_width = new_width;
    });
});