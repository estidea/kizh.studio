$("#down-btn").click(function (){
	var shift = $("#header-case").height();
	$('html, body').animate({
		scrollTop: shift
	});
});