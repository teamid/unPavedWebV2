$(document).ready(function() {
	var window_height = $(window).height();
	var window_width = $(window).width(); 

	var nav_height = $("#top-nav").height();

	var user_face_width = window_width*0.09765625

	$("#profile-header").css({
		"font-size" : (window_width*0.00625*2) +"px"
	})


	$("#home-container").css({
		"top" : (nav_height) +"px"
	});

	$("#profile-container").css({
		"top" : (nav_height) +"px"
	});

	$("#sidebar").css({
		"top" : (nav_height) +"px"
	});

	$("#sidebar").height(window_height - nav_height)

	$("#stars").css({
		"height" : (window_height*0.0836879) + "px",
		"top" : "-" + nav_height + "px"
	})

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







	// MARK -- PROFILE.HTML SETUP

	//CENTER USER FACE ON PROFILE
	$("#user-face").css({
		"width" : user_face_width +"px",
		"height" : user_face_width +"px",
		"top" : "-" + (window_width*0.10546875*0.5 + 4) +"px",
	
	});

	$("#profile-picture").css({
		"height" : (user_face_width*0.5 - 7) +"px"
	})

	$("#button-container > .friends").hover(function() {
		$("#profile-friends, #profile-friends > div").fadeTo(0.8);
	}, function() {
		$("#profile-friends, #profile-friends > div").fadeTo(1.0);
	});







	$("#stats-divider").css({
		"height" : (window_width*0.00078125) +"px"
	})


	//ISOTOPE
	var $container = $("#post-container");

	// init
	$container.isotope({
  	// options
  	itemSelector: ".postbox",
  	layoutMode: 'masonry'
	});





	
	});






