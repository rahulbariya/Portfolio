$(document).ready(function(){
    $(this).scrollTop(0);
    $(".navbar a").on('click', function(e) {
        if (this.hash !== ''){
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-60
            }, 900, function(){
                window.location.hash = hash-60;
            });
        }
        if($('.navbar-collapse').hasClass("in") ) {
            $(".navbar-collapse").removeClass("in").fadeOut(1000);
            $('[data-toggle="collapse"]').find('span').removeClass('la-times').addClass('la-navicon');
        }
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 60) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });

    $('[data-toggle="collapse"]').on('click', function() {
        if($(this).find('span').hasClass('la-navicon')){
            $(this).find('span').removeClass('la-navicon').addClass('la-times');
        }
        else{
            $(this).find('span').removeClass('la-times').addClass('la-navicon');
        }
    });

    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    switch (lastPathSegment) {
        case 'register.html':
            $('body').addClass('bg-aliceblue');
            break;
        case 'login.html':
            $('body').addClass('bg-aliceblue');
            break;
        case 'forgot_password.html':
            $('body').addClass('bg-aliceblue');
            break;
    }
})