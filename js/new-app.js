$(document).ready(function() {
	var window_height = $(window).height();
	var window_width = $(window).width(); 

	var nav_height = $("#top-nav").height();


	$("#home-container").css({
		"top" : (nav_height) +"px"
	});

	$("#sidebar").css({
		"top" : (nav_height) +"px"
	});

	$("#sidebar").height(window_height - nav_height)

	//CENTER NAV LOGO
	$("#nav-logo").css({
		"top" : (nav_height*0.5) +"px"
	});

	//SET Y-POSITION OF SEARCH BAR
	$("#search-form").css({
		"top" : (nav_height*0.5) +"px"
	});

	//SET Y-POSITION OF USER THUMBNAIL
	$("#user-thumbnail").css({
		"top" : (nav_height*0.5) +"px"
	});

	//SET Y-POSITION OF USER NAME
	$("#user-name").css({
		"top" : (nav_height*0.5) +"px"
	});

	//SET Y-POSITION OF NAV ICONS
	$(".nav-icon-container > img").css({
		"top" : (nav_height*0.5) +"px"
	});

	//SET Y-POSITION OF SETTINGS ICON
	$("#settings-icon").css({
		"top" : (nav_height*0.203) +"px"
	});

	$("#user-posts").height(window_height);

	$("#helena-location, .gradient, #location-icon").hide();

	$("#second-post").hover(function() {
		$("#helena-location, .gradient, #location-icon").fadeIn(250);
	}, function() {
		$("#helena-location, .gradient, #location-icon").fadeOut(600);
	});

	var $container = $("#post-container");

	// init
	$container.isotope({
  	// options
  	itemSelector: ".postbox",
  	layoutMode: 'masonry'
	});





	
	});






