$(document).ready(function(){
	$( window ).resize(function() {
		scrollResponsiveFeedHandler()
	});

	$(window).bind('scroll', function(){
		scrollResponsiveFeedHandler()
    });
});

function scrollResponsiveFeedHandler() {
	if($(".feed-product-detail__btn-open-store").visible(true)) {
		$(".feed-hot-list").css({
			"position": "initial",
			"bottom": "initial"
		});
	} else {
		var bottom = "40%", left;
		if(window.innerWidth >= 1200) {
			left = "initial";

			if($(".footer-main").visible(true)) {
				bottom = "600px";
			}
		} else {
			left = ($(".feed-detail__main-content").offset().left - $(window).scrollLeft()) + $(".feed-detail__main-content").width() + 60  + "px";

			if($(".footer-main").visible(true)) {
				bottom = "600px";
			}
		}

		$(".feed-hot-list").css({
			"position": "fixed",
			"left": left,
			"bottom": bottom,
            "width": "319px"
		});
	}
}