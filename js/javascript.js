//smooth scrolling from navigation to ID

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 125
        }, 1000);
    }

});



$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('.navigation').slideToggle();
    }
    );
});