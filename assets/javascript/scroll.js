$(document).ready(function () {
    var old_width = $(window).width();
    var fileName = location.href.split("/").slice(-1); 

    // Replaces all videos with their static screenshot equivalents
    function video_replace() {
        console.log("video_replace()");
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
        console.log("static_replace()");
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

    // If video is loaded on a mobile browser, replace it with static image
    $("video").ready(function () {
        if (($(window).width() <= 768) && (fileName == "about" || fileName == "")) {
            video_replace();
        }
    });

    // Handle changing of video/static image on window resizing
    $(window).resize(function() {
        var new_width = $(window).width();
        console.log(old_width + ", " + new_width);

        if (new_width <= 768) {
            // Replace video with static image only if resized to mobile size
            if (Math.abs(new_width - old_width) < 2) {
                video_replace();
                $("#button-fade").fadeOut();
            }
            if (fileName == "" || filename == "sonorancad") {
                hide_logo(".navbar-brand");
            }
        }
        else if (fileName == "" || filename == "sonorancad") {
            // Replace static image with video only if resized to tablet+ size
            if (Math.abs(new_width - old_width) < 2) {
                static_replace();
                $("#button-fade").replaceWith("<div class='row fade-button-row mt-3' id='button-fade' style='display:none;'><a href='about'><button class='btn btn-outline-light product-button'><span>About</span></button></a><button type='button' class='btn btn-outline-light product-button fade-align-button' id='b1' onClick='document.getElementById('technologies').scrollIntoView({behavior: 'smooth', block: 'start'}); setTimeout(() => {window.scrollBy(0,-70);}, 500);'>Our Technology</button><a href='products/sonorancad'><button class='btn btn-outline-light product-button fade-align-button'><span>Products</span></button></a></div>")
            }
            add_logo(".navbar-brand");
        }
        old_width = new_width;
    });
});