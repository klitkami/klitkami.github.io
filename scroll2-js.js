$(document).ready(function() {
    $(".first").on('click', function(e){
        $('html, body').animate({scrollTop: $('#scriptum').offset().top}, 500);
		return false;
    });

    $(".second").on('click', function(e){
        $('html, body').animate({scrollTop: $('#about').offset().top}, 500);
		return false;
    });

    $(".third").on('click', function(e){
        $('html, body').animate({scrollTop: $('#work').offset().top}, 500);
		return false;
    });
	    $(".fourth").on('click', function(e){
        $('html, body').animate({scrollTop: $('#skills').offset().top}, 500);
		return false;
    });
		    $(".fifth").on('click', function(e){
        $('html, body').animate({scrollTop: $('#news').offset().top}, 500);
		return false;
    });
            $(".six").on('click', function(e){
        $('html, body').animate({scrollTop: $('#contact').offset().top}, 500);
        return false;
    });
});