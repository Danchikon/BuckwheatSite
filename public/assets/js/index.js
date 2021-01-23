$("#show-filters").on('click', function(e) {
    $("#show-filters").toggleClass("active");
    if($('.filter-container').hasClass("active")){
        $('.filter-container').fadeOut().removeClass("active");
    }
    else{
        $('.filter-container').css('display', 'flex').hide().fadeIn().addClass("active");
    }
    e.stopPropagation();
});

