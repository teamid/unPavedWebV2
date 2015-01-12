$(document).ready(function() {
	var window_height = $(window).height();
	var window_width = $(window).width(); 
	// $("#top-nav").height(window_height*0.0837 +"px");

	var nav_height = $("#top-nav").height();

	$("#nav-logo").css({
		"top" : (nav_height/2.0) +"px"
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