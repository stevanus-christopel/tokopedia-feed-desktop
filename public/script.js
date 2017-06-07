$(document).ready(function(){
	var target = $('.feed-marketing-promo__content');

	if(target != null) {
		$('.feed-marketing-promo__arrow--right').on( "click", function() {
			var now = target.scrollLeft( );
			var step = 488;
			var next = now + step;
			
			target.animate({
				scrollLeft: next
			}, 250);

			$('.feed-marketing-promo__arrow--left').css("display","block");
			$('.feed-marketing-promo__arrow--right').css("display","none");
			$('.feed-marketing-promo__arrow--left').removeClass("hidden");
		})

		$('.feed-marketing-promo__arrow--left').on( "click", function() {
			var now = target.scrollLeft( );
			var step = 488;
			var next = now - step;
			target.animate({
				scrollLeft: next
			}, 250);


			$('.feed-marketing-promo__arrow--left').addClass("hidden");
			$('.feed-marketing-promo__arrow--right').css("display","block");
		})
	}
});
