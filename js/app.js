$(document).ready(function() {
	var window_height = $(window).height();
	var window_width = $(window).width();
	$("#top-nav").height(window_height*0.0837);

	$("body").css({
		// "background-image" : "url(something)",
		"background-size" : window_width+"px " +window_height+"px" 
	});

		

	$("#user-posts").height(window_height);

	$("#helena-location, .gradient, #location-icon").hide();

	$("#second-post").hover(function() {
		$("#helena-location, .gradient, #location-icon").fadeIn(250);
	}, function() {
		$("#helena-location, .gradient, #location-icon").fadeOut(600);
	});











	$("#nav-content").width(window_width)




})