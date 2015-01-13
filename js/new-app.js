$(document).ready(function() {
	var window_height = $(window).height();
	var window_width = $(window).width(); 

	var nav_height = $("#top-nav").height();


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



	//CENTER USER CONTAINER

	$("#user-container").css({
		"width" : (window_width*0.93906) +"px",
		"left" : (window_width*0.5) +"px",
		"top" : (window_width*0.01875 + nav_height) +"px"
	});


/*
	$("#user-photos-list > li > img").css({
		"width" : (window_width*0.93906*0.1859375) +"px",
		"height" : (window_width*0.93906*0.1859375) +"px"
	});
*/

	/*
	$("#user-photos-list").css({
		"height" : (window_width*0.93906*0.20) +"px"
	});

	$("#first-photo, #second-photo").css({
		"width" : (window_width*0.93906*0.20) +"px"
	});
*/ 
	var user_face_width = window_width*0.09765625



	$("#user-face").css({
		"width" : user_face_width +"px",
		"height" : user_face_width +"px",
		"top" : "-" + (window_width*0.10546875*0.5 + 4) +"px",
	
	});







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






