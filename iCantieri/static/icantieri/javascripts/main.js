jQuery(document).ready(function() {
	
/*-----------------------------------------------------------------------------------*/
/*	Masonry
/*-----------------------------------------------------------------------------------*/ 				
 
  window.onload = function() {
    var wall = new Masonry( document.getElementById('container') );
  };
		
	


/*-----------------------------------------------------------------------------------*/
/*	Superfish Settings - http://users.tpg.com.au/j_birch/plugins/superfish/
/*-----------------------------------------------------------------------------------*/
	
	$('nav ul').superfish({
				autoArrows	: false,
				dropShadows : false,
				animation	: {opacity:'show'},
				speed		: 'medium',
				easing:      'easeInOutCirc'
			});

/*-----------------------------------------------------------------------------------*/
/*	Convert a Menu to a Dropdown for Small Screens - http://css-tricks.com/convert-menu-to-dropdown/
/*-----------------------------------------------------------------------------------*/

// DOM ready
           
      // Create the dropdown base
      $("<select />").appendTo("nav");
      
      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Go to..."
      }).appendTo("nav select");
      
      // Populate dropdown with menu items
      $("nav a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("nav select");
      });
      
           // To make dropdown actually work
           // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
      $("nav select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
         

/*-----------------------------------------------------------------------------------*/
/*	UItoTop jQuery Plugin 1.1 http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
/*-----------------------------------------------------------------------------------*/		

			
			$().UItoTop({ easingType: 'easeOutQuart' });
			

/*-----------------------------------------------------------------------------------*/
/*	Page Loading Effects
/*-----------------------------------------------------------------------------------*/		

 
	$('#page_effect').fadeIn(2000);
 
 
/*-----------------------------------------------------------------------------------*/
/*	Tipsy & Normal Tooltips - http://onehackoranother.com/projects/jquery/tipsy/
/*-----------------------------------------------------------------------------------*/

		
		
		$('a.live-tipsy').tipsy({gravity: 's', live: true,  fade: true, delayIn: 2000, delayOut: 200}); 
		$('a.readmore-bg').tipsy({gravity: 'n', live: true,  fade: true, delayIn: 2000, delayOut: 200}); 
		
						 	


/*-----------------------------------------------------------------------------------*/
/*	FlexSlider - http://flex.madebymufffin.com/
/*-----------------------------------------------------------------------------------*/

		$('.flexslider').flexslider({
			animation: "slide",              //Select your animation type (fade/slide)
			slideshow: true,                //Should the slider animate automatically by default? (true/false)
			slideshowSpeed: 7000,           //Set the speed of the slideshow cycling, in milliseconds
			animationDuration: 500,         //Set the speed of animations, in milliseconds
			directionNav: true,             //Create navigation for previous/next navigation? (true/false)
			controlNav: false,               //Create navigation for paging control of each clide? (true/false)
			keyboardNav: true,              //Allow for keyboard navigation using left/right keys (true/false)
			touchSwipe: true,               //Touch swipe gestures for left/right slide navigation (true/false)
			prevText: "Previous",           //Set the text for the "previous" directionNav item
			nextText: "Next",               //Set the text for the "next" directionNav item
			randomize: false,                //Randomize slide order on page load? (true/false)
			slideToStart: 0,                //The slide that the slider should start on. Array notation (0 = first slide)
			pauseOnAction: true,            //Pause the slideshow when interacting with control elements, highly recommended. (true/false)
			pauseOnHover: false,            //Pause the slideshow when hovering over slider, then resume when no longer hovering (true/false)
			
		});
		
		
		

/*-----------------------------------------------------------------------------------*/
/*	Countdown
/*-----------------------------------------------------------------------------------*/ 


				launchTime = new Date(); // Set launch: [year], [month], [day], [hour]...
					launchTime.setDate(launchTime.getDate() + 15); // Add 15 days
				$("#countdown").countdown({until: launchTime, format: "odHMS"});
				
				
				
				


/*-----------------------------------------------------------------------------------*/
/*	Fancy Box http://fancybox.net/
/*-----------------------------------------------------------------------------------*/ 	


$("a.zoom").fancybox({
				'opacity'		: true,
				'overlayShow'	: true,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});
			
			
/*-----------------------------------------------------------------------------------*/
/*	FitVids
/*-----------------------------------------------------------------------------------*/
        $(".container").fitVids();
       
			




/*-----------------------------------------------------------------------------------*/
/*	jPages - http://luis-almeida.github.com/jPages/
/*-----------------------------------------------------------------------------------*/ 
		
				
				
	 /* initiciate jPages */
	$("div.holder").jPages({
		containerID : "itemContainer",
		perPage : 3,
            links       : "blank",
			 first       : false,
        previous    : "span.arrowPrev",
        next        : "span.arrowNext",
        last        : false,
		animation   : "fadeInUp"
	});
    
    /* on select change */
	$("select").change(function(){ 
        /* get new css animation */
		var newAnimation = $(this).val();
        
        /* destroy jPages and initiate plugin again */
		$("div.holder").jPages("destroy").jPages({
			containerID   : "itemContainer",
			animation     : newAnimation
		});
	});		
	
	
/*-----------------------------------------------------------------------------------*/
/*	TOGGLE PANELS
/*-----------------------------------------------------------------------------------*/
		
			$(".toggle div").hide(); // hide div on default
			$(".toggle h2").click(function(){ // set the trigger
				$(this).toggleClass("active").next().slideToggle(300); // add class active and toggle speed
				return false;
			});

/*-----------------------------------------------------------------------------------*/
/*	ACCORDION PANELS
/*-----------------------------------------------------------------------------------*/


$('.acc_container').hide();
$('.acc_trigger:first')
    .addClass('active')
    .next()
    .show();
 
$('.acc_trigger').click(function(){
    if( $(this).next().is(':hidden') ) {
        $('.acc_trigger')
            .removeClass('active')
            .next()
            .slideUp();
        $(this).toggleClass('active')
            .next()
            .slideDown();
    }
    return false;
});


/*-----------------------------------------------------------------------------------*/
/*	Sortable Portfolio 
/*-----------------------------------------------------------------------------------*/

	(function($) {
	$.fn.filterable = function(settings) {
		settings = $.extend({
			useHash: true,
			animationSpeed: 1000,
			show: { width: 'show', opacity: 'show' },
			hide: { width: 'hide', opacity: 'hide' },
			useTags: true,
			tagSelector: '#portfolio-filter a',
			selectedTagClass: 'current',
			allTag: 'all'
		}, settings);
		
		return $(this).each(function(){
		
			$(this).bind("filter", function( e, tagToShow ){
				if(settings.useTags){
					$(settings.tagSelector).removeClass(settings.selectedTagClass);
					$(settings.tagSelector + '[href=' + tagToShow + ']').addClass(settings.selectedTagClass);
				}
				$(this).trigger("filterportfolio", [ tagToShow.substr(1) ]);
			});
		
			$(this).bind("filterportfolio", function( e, classToShow ){
				if(classToShow == settings.allTag){
					$(this).trigger("show");
				}else{
					$(this).trigger("show", [ '.' + classToShow ] );
					$(this).trigger("hide", [ ':not(.' + classToShow + ')' ] );
				}
				if(settings.useHash){
					location.hash = '#' + classToShow;
				}
			});
			
			$(this).bind("show", function( e, selectorToShow ){
				$(this).children(selectorToShow).animate(settings.show, settings.animationSpeed);
			});
			
			$(this).bind("hide", function( e, selectorToHide ){
				$(this).children(selectorToHide).animate(settings.hide, settings.animationSpeed);	
			});
			
			if(settings.useHash){
				if(location.hash != '')
					$(this).trigger("filter", [ location.hash ]);
				else
					$(this).trigger("filter", [ '#' + settings.allTag ]);
			}
			
			if(settings.useTags){
				$(settings.tagSelector).click(function(){
					$('#portfolio-list').trigger("filter", [ $(this).attr('href') ]);
					
					$(settings.tagSelector).removeClass('current');
					$(this).addClass('current');
				});
			}
		});
	}
})(jQuery);


	
	$('#portfolio-list').filterable();


/*-----------------------------------------------------------------------------------*/
/*	popup Video
/*-----------------------------------------------------------------------------------*/ 

 $('.videopop a').click(function(e) {

    $('#video_popup').slideToggle();

  });
			
			
			
			

	
 
/*-----------------------------------------------------------------------------------*/
/*	Hover Speakers
/*-----------------------------------------------------------------------------------*/ 				
			 
  $('#da-thumbs > li').hoverdir();
  
  
  
  /*-----------------------------------------------------------------------------------*/
/*	Audio 
/*-----------------------------------------------------------------------------------*/


$('#audio-player').mediaelementplayer({
				alwaysShowControls: true,
				features: ['playpause','volume','progress'],
				audioVolume: 'horizontal',
				audioWidth: 940,
				audioHeight: 44
			});
			
	
/*-----------------------------------------------------------------------------------*/
/*	Video
/*-----------------------------------------------------------------------------------*/			
	
$('video').mediaelementplayer({
			alwaysShowControls: false,
			videoVolume: 'horizontal',
			features: ['playpause','progress','volume','fullscreen']
		});
	
	
/*-----------------------------------------------------------------------------------*/
/*	Contact 
/*-----------------------------------------------------------------------------------*/
   
	//if submit button is clicked
	$('#submit').click(function () {		
		
		//Get the data from all the fields
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var website = $('input[name=website]');
		var comment = $('textarea[name=comment]');

		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.addClass('hightlight');
			return false;
		} else name.removeClass('hightlight');
		
		if (email.val()=='') {
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');
		
		if (comment.val()=='') {
			comment.addClass('hightlight');
			return false;
		} else comment.removeClass('hightlight');
		
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&website=' + 
		website.val() + '&comment='  + encodeURIComponent(comment.val());
		
		//disabled all the text fields
		$('.text').attr('disabled','true');
		
		//show the loading sign
		$('.loading').show();
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "process.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {					
					//hide the form
					$('.form').fadeOut('slow');					
					
					//show the success message
					$('.done').fadeIn('slow');
					
				//if process.php returned 0/false (send mail failed)
				} else alert('Sorry, unexpected error. Please try again later.');				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});	
	
	

 
 
});