$(document).ready(function() {
    $(window).load(function() {
        $('#slider').nivoSlider();
    }); 
});

$(document).ready(function() {
    $('#content-slider').lightSlider({
        item:3,
        loop:false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1000,
        auto:true,
        loop:true,
        adaptiveHeight:true,
        pager:false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    }); 

  });

$(document).ready(function() {
    $('#featureSlider').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});
$(document).ready(function() {
    $('.block').click(function(){
        $('.info-product').modal('show');
    });
});
