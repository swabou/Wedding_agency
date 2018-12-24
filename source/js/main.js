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

window.onload = function() {
	var btn = document.querySelectorAll('.drop-down');
	for(i=0; i < btn.length; i++) {
		btn[i].addEventListener('click', function() {
			
			
			if(this.nextElementSibling == 'block') {
				this.nextElementSibling = 'none';
				drop-down.innerHTML = '.list-action__name';
			
			}

			else {
				this.nextElementSibling == 'block';
				drop-down.innerHTML = '.list-action__name';
			}
		}
		});
	}
};
