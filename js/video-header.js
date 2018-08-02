if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 	$(".header").css({"background":"url('../img/bg-mobile-fallback.jpg') center center no-repeat", "background-size": "cover"});
} else {
	!function(p){"use strict";p(".header").vide({mp4:"mp4/bg.mp4",poster:"img/bg-mobile-fallback.jpg"},{posterType:"jpg"})}(jQuery);
}