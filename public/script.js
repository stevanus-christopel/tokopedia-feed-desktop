$(document).ready(function(){
	var feed_marketing_promo = $('.feed-marketing-promo__content');
	var feed_marketing_promo_card_width = document.getElementsByClassName('feed-marketing-promo__content-frame')[0].offsetWidth;

	$( window ).resize(function() {
		feed_marketing_promo_card_width = document.getElementsByClassName('feed-marketing-promo__content-frame')[0].offsetWidth;
		scrollResponsiveFeedHandler()
	});

	$(window).bind('scroll', function(){
		scrollResponsiveFeedHandler()
    });

	if(feed_marketing_promo != null) {
		$('.feed-marketing-promo__arrow--right').on( "click", function(e) {
			var now = feed_marketing_promo.scrollLeft( );
			var step = feed_marketing_promo_card_width+1;
			var next = now + step;
			
			feed_marketing_promo.animate({
				scrollLeft: next
			}, 250);
		})

		$('.feed-marketing-promo__arrow--left').on( "click", function(e) {
			var now = feed_marketing_promo.scrollLeft( );
			var step = feed_marketing_promo_card_width;
			var next = now - step;
			feed_marketing_promo.animate({
				scrollLeft: next
			}, 250);
		})

		var x, down, left;
		feed_marketing_promo.mousedown(function(e) {
			e.preventDefault();
		down=true;
		x=e.pageX;
		left=$(this).scrollLeft();
		});
		
		feed_marketing_promo.mousemove(function(e){
		if(down){
			var newX=e.pageX;
			
			feed_marketing_promo.scrollLeft(left-newX+x);    
		}
		});

		$('body').mouseup(function(e){
			down=false;
		});

		feed_marketing_promo.scroll(function() {
			var maxScrollLeft = feed_marketing_promo[0].scrollWidth - feed_marketing_promo[0].scrollLeft == $('.feed-marketing-promo__content-frame').width();

			if(parseInt(feed_marketing_promo[0].scrollWidth - feed_marketing_promo[0].scrollLeft) == Math.ceil(feed_marketing_promo.width())){
					$('.feed-marketing-promo__arrow--right').addClass("hidden");
			}
			if(parseInt(feed_marketing_promo[0].scrollWidth - feed_marketing_promo[0].scrollLeft) != Math.ceil(feed_marketing_promo.width())){
					$('.feed-marketing-promo__arrow--right').removeClass("hidden");
			}
			if(feed_marketing_promo.scrollLeft() == 0)
			{
					$('.feed-marketing-promo__arrow--left').addClass("hidden");
			}
			if(feed_marketing_promo.scrollLeft() != 0)
			{
					$('.feed-marketing-promo__arrow--left').removeClass("hidden");
			}
		});	
	}
});

function scrollResponsiveFeedHandler() {
	if($("#tab-navigation").visible(true)) {
		$(".feed-hot-list").css({
			"position": "initial",
			"bottom": "initial",
			"width": "initial"
		});
	} else {
		var bottom = "40%", width, left;
		if(window.innerWidth >= 1200) {
			width = "319px";
			left = "initial";

			if($(".footer-main").visible(true)) {
				bottom = "600px";
			}
		} else {
			width = "215px";
			left = ($(".feed__main-content").offset().left - $(window).scrollLeft()) + $(".feed__main-content").width() + 60  + "px";

			if($(".footer-main").visible(true)) {
				bottom = "600px";
			}
		}

		$(".feed-hot-list").css({
			"position": "fixed",
			"left": left,
			"bottom": bottom,
			"width": width
		});
	}
}
	
function settingTime() {
	return "HELLO";
}