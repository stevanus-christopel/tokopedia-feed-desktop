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

	var ellipsisText = function (e, etc) {
		var wordArray = e.innerHTML.split(" ");
		/* If string doesn't have whitespace */
		if(wordArray.length == 1) {
			if(e.getAttribute('data-js-ellipsis-limit') && wordArray[0].length > e.getAttribute('data-js-ellipsis-limit')){
				e.innerHTML = wordArray[wordArray.length - 1].substring(0, e.getAttribute('data-js-ellipsis-limit')) + '...';
			}
			return;
		}
		while (e.scrollHeight > e.offsetHeight) {
			if(wordArray.length > 1){
				wordArray.pop();
			}
			else {
				return;
			}
			e.innerHTML = wordArray.join(" ") + (etc || "...");
		}
	};

	/* Call function ellipsisMultipleLineText for all element with class js-line-clamp */
	function format_ellipsis() {
		[].forEach.call(document.querySelectorAll(".js-ellipsis"), function(elem) {
			ellipsisText(elem);
		});
	}
});
