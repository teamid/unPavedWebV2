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
	$("#place-face").css({
		"width" : user_face_width +"px",
		"height" : user_face_width +"px",
		"top" : "-" + (window_width*0.10546875*0.5 + 4) +"px",
	
	});

	$("#place-picture").css({
		"height" : (user_face_width*0.5 - 7) +"px"
	})


	$("#stats-divider").css({
		"height" : (window_width*0.00078125) +"px"
	})



		//CENTER THUMBNAIL ON PLACE PROFILE
	$("#user-face").css({
		"width" : user_face_width +"px",
		"height" : user_face_width +"px",
		"top" : "-" + (window_width*0.10546875*0.5 + 4) +"px",
	
	});

	$("#profile-picture").css({
		"height" : (user_face_width*0.5 - 7) +"px"
	})


	$("#stats-divider").css({
		"height" : (window_width*0.00078125) +"px"
	})






	// PROFILE STATS MENU FUNCTIONS


	//HIDE MENU OPTIONS ON DOCUMENT LOAD
	$("#user-cities-list").hide();
	$("#user-footprints-list").hide();
	$("#user-friends-list").hide();
	$("#user-stamps-list").hide();

	// STATS MENU FUNCTIONS


	$("#stats-list > li").click(function() {
		var $this = $(this),
			string = $this.attr("id"),
			elementString = "#"+string,
			listString = "#user-"+string+"-list";

			$("#user-content-container > ul").hide("slow");

			$("#stats-list > li > h4, #stats-list > li > h5 ").css({
  			"color" : "#333333"
  			})


			$("#stats-list > li"+elementString+" > h4, #stats-list > li"+elementString+" > h5").css({
  			"color" : "#3583b3"
  			})
			
			$("#user-content-container > ul").hide("slow");
			$(listString).show("slow");
			

			
	
		});




	// PLACE STATS MENU FUNCTIONS


	//HIDE MENU OPTIONS ON DOCUMENT LOAD
	$("#place-have-been-list").hide();
	$("#place-footprints-list").hide();
	$("#place-venues-list").hide();
	$("#place-questions-list").hide();

	// STATS MENU FUNCTIONS


	$("#place-stats-list > li").click(function() {
		var $this = $(this),
			string = $this.attr("id"),
			elementString = "#"+string,
			listString = "#place-"+string+"-list";

			$("#user-content-container > ul").hide("slow");

			$("#place-stats-list > li > h4, #place-stats-list > li > h5 ").css({
  			"color" : "#333333"
  			})


			$("#place-stats-list > li"+elementString+" > h4, #place-stats-list > li"+elementString+" > h5").css({
  			"color" : "#3583b3"
  			})
			
			$("#place-content-container > ul").hide("slow");
			$(listString).show("slow");
			

			
	
		});





	//ISOTOPE
	var $container = $("#post-container");

	// init
	$container.isotope({
  	// options
  	itemSelector: ".postbox",
  	layoutMode: 'masonry'
	});




	
	});








