"use strict";

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

// Accordion
$(document).ready(function(){
    $(".list-action__name").click(function(){
        $(".list-action").slideToggle("slow");
        return false;
    });
});