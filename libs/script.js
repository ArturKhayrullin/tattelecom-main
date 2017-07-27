var mainSlider='';

$(document).ready(function() {

	mainSlider=$('.bxslider').bxSlider({
		onSlideAfter: function($slideElement, oldIndex, newIndex){
	    // do mind-blowing JS stuff here
	    $('.current-slide-number').html(mainSlider.getCurrentSlide()+1);
	  }
	});

	var mainSliderCount = mainSlider.getSlideCount();
	$(".overall-slides-number").html(mainSliderCount);

	$('#main-slider-next').click(function(){
	  mainSlider.goToNextSlide();
	  return false;
	});

	$('#main-slider-prev').click(function(){
	  mainSlider.goToPrevSlide();
	  return false;
	});


	/*SERVICES FOR HOME SLIDER*/

	var servicesForHomeSlider=$('.services-for-home-slider ul').bxSlider({
		onSlideAfter: function($slideElement, oldIndex, newIndex){
	    // do mind-blowing JS stuff here
	    $('.services-for-home-current-slide-number').html(servicesForHomeSlider.getCurrentSlide()+1);
	  }
	});
	var servicesForHomeSliderCount = servicesForHomeSlider.getSlideCount();
	$(".services-for-home-overall-slides-number").html(servicesForHomeSliderCount);

	$('#services-for-home-slider-prev').click(function(){
	  servicesForHomeSlider.goToNextSlide();
	  return false;
	});

	$('#services-for-home-slider-next').click(function(){
	  servicesForHomeSlider.goToPrevSlide();
	  return false;
	});


	/*SPECIAL OFFERS SLIDER*/
	var specialOffersSlider=$('#special-offers ul').bxSlider({
		onSlideAfter: function($slideElement, oldIndex, newIndex){
	    // do mind-blowing JS stuff here
	    $('.special-offers-current-slide-number').html(specialOffersSlider.getCurrentSlide()+1);
	  }
	});

	var specialOffersSliderCount = specialOffersSlider.getSlideCount();
	$(".special-offers-overall-slides-number").html(specialOffersSliderCount);

	$('.special-offers-slider-next').click(function(){
	  specialOffersSlider.goToNextSlide();
	  return false;
	});

	$('.special-offers-slider-prev').click(function(){
	  specialOffersSlider.goToPrevSlide();
	  return false;
	});


});