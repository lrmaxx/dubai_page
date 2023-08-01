/* =================================
------------------------------------
	Cryptocurrency - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
    /*------------------
    	Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

});


(function($) {

    /*------------------
    	Navigation
    --------------------*/
    $('.responsive-bar').on('click', function(event) {
        $('.main-menu').slideToggle(400);
        event.preventDefault();
    });

   
   

    /*------------------
    	Background set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    /*------------------
    	Review
    --------------------*/
    var review_meta = $(".review-meta-slider");
    var review_text = $(".review-text-slider");


    review_text.on('changed.owl.carousel', function(event) {
        review_meta.trigger('next.owl.carousel');
    });

    review_meta.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 3,
        center: true,
        margin: 20,
        autoplay: true,
        mouseDrag: false,
    });

    // Project and Testimonial carousel
    $(".project-carousel, .testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
             '<i class="fa fa-arrow-left text-dark"></i>',
            '<i class="fa fa-arrow-right text-dark"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    


    review_text.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        margin: 20,
        autoplay: true,
        navText: ['<i class="fa fa-arrow-left text-dark"><i>', '<i class="fa fa-arrow-right text-dark"><i>'],
        animateOut: 'fadeOutDown',
        animateIn: 'fadeInDown',
    });



    /*------------------
		Contact Form
	--------------------*/
    $(".check-form").focus(function() {
        $(this).next("span").addClass("active");
    });
    $(".check-form").blur(function() {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });


})(jQuery);