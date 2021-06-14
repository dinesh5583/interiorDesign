jQuery(function() { 
     /* Owl Carousel */
     $('.owl-carousel').owlCarousel({
       
        margin:30,
        responsiveClass:true,
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
                nav:true,
                loop:true,
                dots:false,
                autoplay:false
            }
        },
        
    });
  
       
    
    
})
