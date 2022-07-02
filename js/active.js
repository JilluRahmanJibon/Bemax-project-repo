$(document).ready(function(){

    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu',

    });


   /*  home slider */
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        items:1,
        autoplay:1000,
        smartSpeed:1500,
        autoplayHoverPause:true,
    });


/* project slider */
$('.project-active').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    responsive:{
        0:{
            items:1
        },
        550:{
            items:2
        },
        
        768:{
            items:3
        },
        950:{
            items:4
        },
        1200:{
            items:5
        }
    }
});


/* magnific popup */
$('.popup').magnificPopup({
    type: 'image'
    // other options
  });
/* blog slider */
$('.blog-slider').owlCarousel({
    loop:true,
    items:1,
    nav:true,
});
/* blog active */
$('.blog-active').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    dots:false,
});

/* brand active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:1,
    responsive:{
        0:{
            items:2
        },
        550:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
});




})