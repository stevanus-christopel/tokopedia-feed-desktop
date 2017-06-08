$(document).ready(function(){
	var target = $('.feed-marketing-promo__content');
	var cardWidth = document.getElementsByClassName('feed-marketing-promo__content-frame')[0].offsetWidth;

	$( window ).resize(function() {
		cardWidth = document.getElementsByClassName('feed-marketing-promo__content-frame')[0].offsetWidth;
	});

	if(target != null) {
		$('.feed-marketing-promo__arrow--right').on( "click", function(e) {
			var now = target.scrollLeft( );
			var step = cardWidth+1;
			var next = now + step;
			
			target.animate({
				scrollLeft: next
			}, 250);
		})

		$('.feed-marketing-promo__arrow--left').on( "click", function(e) {
			var now = target.scrollLeft( );
			var step = cardWidth;
			var next = now - step;
			target.animate({
				scrollLeft: next
			}, 250);
		})
	}

	var x, down, left;

	target.mousedown(function(e) {
		e.preventDefault();
    down=true;
    x=e.pageX;
    left=$(this).scrollLeft();
	});
	
	target.mousemove(function(e){
    if(down){
        var newX=e.pageX;
        
        target.scrollLeft(left-newX+x);    
    }
	});

	$('body').mouseup(function(e){
		down=false;
	});

	target.scroll(function() {
		var maxScrollLeft = target[0].scrollWidth - target[0].scrollLeft == $('.feed-marketing-promo__content-frame').width();

		if(parseInt(target[0].scrollWidth - target[0].scrollLeft) == Math.ceil(target.width())){
				$('.feed-marketing-promo__arrow--right').addClass("hidden");
		}
		if(parseInt(target[0].scrollWidth - target[0].scrollLeft) != Math.ceil(target.width())){
				$('.feed-marketing-promo__arrow--right').removeClass("hidden");
		}
		if(target.scrollLeft() == 0)
		{
				$('.feed-marketing-promo__arrow--left').addClass("hidden");
		}
		if(target.scrollLeft() != 0)
		{
				$('.feed-marketing-promo__arrow--left').removeClass("hidden");
		}
	});	

});

