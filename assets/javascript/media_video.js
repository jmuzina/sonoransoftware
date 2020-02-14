$('#video video').bind('ended', function(){
    console.log("video ended");
    $("#button-fade").fadeIn();
});