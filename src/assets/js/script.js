$(document).ready(function(){

        /* Owl Carousel */
        $('.owl-carousel').owlCarousel({
           
            margin:30,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            },
            autoplay:true
        });

     
});