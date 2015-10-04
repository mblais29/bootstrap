$(document).ready(function() {
	// to hide all but the first image when page loads
	    $('img:gt(0)').hide(); 
	
	    setInterval(function()
	    {
	        $('.site-wrapper :first-child').fadeOut(1000)
	            .next().fadeIn(1000).end().appendTo('.site-wrapper');
	    },5000); 
	      
});


	
     