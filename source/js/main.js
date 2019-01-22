"use strict";

// Validation Form
$(document).ready(function() {
	$("#phone").mask("+7 (999) 999-99-99");
});

// Slider
$('.slider-artists').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
});

$('.about-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});
