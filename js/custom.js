// JavaScript Document
jQuery('#testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        577:{
            items:2
        },
        1024:{
            items:3
        }
    }
});
/*inner-testimonial-page-fdev-sg*/
jQuery('#inner-testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        577:{
            items:1
        },
        1024:{
            items:1
        }
    }
});
/*inner-testimonial-page-fdev-sg*/

jQuery( ".gallery-a-btn" ).each(function() {
    jQuery(this).on("click", function(){
        jQuery(this).parent().toggleClass('cus-hide')
        jQuery(this).parent().siblings('.gal-img-btn-yn').toggleClass('cus-hide')
        jQuery(this).parent().parent('.gallery-img-box').css('background-color', "rgb(205, 172, 130)")
        jQuery(this).parent().parent('.gallery-img-box').addClass('yes-no')
    });
});
jQuery('.gal-img-button-n').click(function(){
    jQuery(this).parent().parent().find('.gal-img-btn').removeClass('cus-hide')
    jQuery(this).parent().parent().find('.gal-img-btn-yn').addClass('cus-hide')
    jQuery(this).parent().parent('.gallery-img-box').css('background-color', "var(--c-black-700)")
    jQuery(this).parent().parent('.gallery-img-box').removeClass('yes-no')
});
jQuery('.gal-img-button-y').click(function(){
    jQuery(this).parent().parent().siblings('.gallery-image ').removeClass('cus-hide')
    jQuery(this).parent().parent('.gallery-img-box').addClass('cus-hide')
});