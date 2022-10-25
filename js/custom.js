// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


jQuery( ".gallery-a-btn" ).each(function() {
    jQuery(this).on("click", function(){
        jQuery(this).parent().toggleClass('cus-hide')
        jQuery(this).parent().siblings('.gal-img-btn-yn').toggleClass('cus-hide')
        jQuery(this).parent().parent('.gallery-img-box').css('background-color', "rgb(205, 172, 130)")
    });
});
jQuery('.gal-img-button-n').click(function(){
    jQuery(this).parent().parent().find('.gal-img-btn').removeClass('cus-hide')
    jQuery(this).parent().parent().find('.gal-img-btn-yn').addClass('cus-hide')
    jQuery(this).parent().parent('.gallery-img-box').css('background-color', "#fff")
});
jQuery('.gal-img-button-y').click(function(){
    jQuery(this).parent().parent().siblings('.gallery-image ').removeClass('cus-hide')
    jQuery(this).parent().parent('.gallery-img-box').addClass('cus-hide')
});