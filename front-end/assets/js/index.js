
//NAVIGATION ANIMATION
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navigation").addClass("scroll");
    } else {
        $(".navigation").removeClass("scroll");
    }
});

//OPEN FILTERS ON CLICK
$("#show-filters").on('click', function() {
    $("#show-filters").toggleClass("active");
    if($('.filter-container').hasClass("active")){
        $('.filter-container').fadeOut().removeClass("active");
    }
    else{
        $('.filter-container').css('display', 'flex').hide().fadeIn().addClass("active");
    }
});

//GRAPH SHOW POP-UP CLICK
$(".open-graph").on('click', function(event) {
    $("body").addClass('no-scroll');
    $(".dark-bg").fadeIn();
    $(".graph-popup").addClass("active");

});
$("#close-graph").on('click', function(event) {
    $("body").removeClass('no-scroll');
    $(".dark-bg").fadeOut();
    $(".graph-popup").removeClass("active");

});
$(document).ready(function () {
    //RRODUCT DETAIL SHOW POP-UP CLICK
    $(".open-product-popup").click(OpenPopup);

    function OpenPopup(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var ParentProductEl = $(this).closest(".product-el");
        ParentProductEl.addClass("active");
        $("body").addClass('no-scroll');
        $(".dark-bg").fadeIn();
    }

    $(".close-product").on('click', function(e) {
        $("body").removeClass('no-scroll');
        $(".dark-bg").fadeOut();
        $(".product-el").removeClass("active");
    });
});

