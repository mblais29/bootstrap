$(document).ready(function() {
	// to hide all but the first image when page loads
	    $('img:gt(0)').hide();
	//Checks to see which image is displayed first and changes the button text to current image 
		checkImage();
	//Creates an image interval of six cities
	    setInterval(function()
	    {
	        $('.site-wrapper :first-child').fadeOut(1000)
	            .next().fadeIn(1000).end().appendTo('.site-wrapper');
	    		checkImage();
	    },7000);        
});

//Function to check the image title and adjust the button text accordingly
function checkImage(){
	var imgName = $('img').attr('title');
        switch(imgName){
	      case 'Los Angeles':
	     	$("#singlebutton").html(imgName);
	      break;
	      case 'London':
	     	$("#singlebutton").html(imgName);
	      break;
	      case 'Paris':
	     	$("#singlebutton").html(imgName);
	      break;
	      case 'Calgary':
	     	$("#singlebutton").html(imgName);
	      break;
	      case 'Vancouver':
	     	$("#singlebutton").html(imgName);
	      break;
	      case 'New York City':
	     	$("#singlebutton").html(imgName);
	      break;
	   } 	
}
	
     