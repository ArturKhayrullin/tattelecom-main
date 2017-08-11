var mainSlider = '';

$(document).ready(function() {

    /*MAIN MENU*/

    $("#menu-sandwich").click(function() {
        $("#main-menu").show().addClass("visible");
    });

    $("#menu-close-button").click(function() {
        $("#main-menu").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
            $(this).hide();
            $(this).off();
        });

        $("#main-menu").removeClass("visible");
    });

    /*SUBMENUS*/

    // $(".main-page-menu .right a").not('.phone').mouseenter(function() {
    // 	$(".main-page-menu-submenu").hide();
    // 	$("#"+$(this).attr("id")+"-submenu").show();
    // })
    $("img.logo").click(function() {
        window.location.href = "./index.html";
    })

    if ($('.bxslider').length > 0) {

        mainSlider = $('.bxslider').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                // do mind-blowing JS stuff here
                $('.current-slide-number').html(mainSlider.getCurrentSlide() + 1);
            }
        });

        var mainSliderCount = mainSlider.getSlideCount();
        $(".overall-slides-number").html(mainSliderCount);

        $('#main-slider-next').click(function() {
            mainSlider.goToNextSlide();
            return false;
        });

        $('#main-slider-prev').click(function() {
            mainSlider.goToPrevSlide();
            return false;
        });

        mobileSlider = $('#main-slider-mobile ul').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                // do mind-blowing JS stuff here
                $('.mobile-current-slide-number').html(mobileSlider.getCurrentSlide() + 1);
            }
        });

        var mobileSliderCount = mobileSlider.getSlideCount();
        $(".mobile-overall-slides-number").html(mainSliderCount);

        $('#mobile-main-slider-next').click(function() {
            mobileSlider.goToNextSlide();
            return false;
        });

        $('#mobile-main-slider-prev').click(function() {
            mobileSlider.goToPrevSlide();
            return false;
        });

    }


    /*SERVICES FOR HOME SLIDER*/
    if ($('.services-for-home-slider ul').length > 0) {

        var servicesForHomeSlider = $('.services-for-home-slider ul').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                // do mind-blowing JS stuff here
                $('.services-for-home-current-slide-number').html(servicesForHomeSlider.getCurrentSlide() + 1);
            }
        });
        var servicesForHomeSliderCount = servicesForHomeSlider.getSlideCount();
        $(".services-for-home-overall-slides-number").html(servicesForHomeSliderCount);

        $('#services-for-home-slider-prev').click(function() {
            servicesForHomeSlider.goToNextSlide();
            return false;
        });

        $('#services-for-home-slider-next').click(function() {
            servicesForHomeSlider.goToPrevSlide();
            return false;
        });
    }

    /*SPECIAL OFFERS SLIDER*/
    if ($('#special-offers ul').length > 0) {
        var specialOffersSlider = $('#special-offers ul').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                // do mind-blowing JS stuff here
                $('.special-offers-current-slide-number').html(specialOffersSlider.getCurrentSlide() + 1);
            }
        });

        var specialOffersSliderCount = specialOffersSlider.getSlideCount();
        $(".special-offers-overall-slides-number").html(specialOffersSliderCount);

        $('.special-offers-slider-next').click(function() {
            specialOffersSlider.goToNextSlide();
            return false;
        });

        $('.special-offers-slider-prev').click(function() {
            specialOffersSlider.goToPrevSlide();
            return false;
        });
    }

    /*SELECTS*/
    $('#district-selector, #town-selector').select2({
        minimumResultsForSearch: Infinity
    }).on("select2:open", function() {
        $('.select2-results__options').niceScroll({
            cursorcolor: "#666666",
            autohidemode: false,
            background: "rgba(0,0,0,0.2)",
            cursorwidth: "4px",
            cursorborder: "0",
            cursorborderradius: "1px",
            railoffset: 10
        });
    });

    $('.city-chooser').click(function(e) {
        e.preventDefault();
        $('#city-select-menu').show();
    });

    $('#city-select-menu .header .right').click(function() {
        $('#city-select-menu').hide();
    });

    


    $('#menu-sandwich-mobile').click(function() {
    	$('#top-menu-mobile-content').show();
    	$('#top-menu-mobile-content .content').accordion();
    	$('#main-wrapper').height($('#header-mobile').height()+$('#top-menu-mobile').height()+$('#top-menu-mobile-content').height());
    	$('#main-wrapper').css('overflow', 'hidden');
    });

    $('#top-menu-mobile-close').click(function() {
    	$('#top-menu-mobile-content').hide();
    	$('#main-wrapper').css('height', 'auto');
    	$('#main-wrapper').css('overflow', 'initial');
    });
});