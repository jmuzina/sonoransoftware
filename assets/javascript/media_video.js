$('#video video').bind('ended', function(){
    console.log("video ended");
    if ($(window).width() > 768) {
        $("#button-fade").fadeIn();
    }
});