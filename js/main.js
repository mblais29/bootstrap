$(document).ready(function() {
	// to hide all but the first image when page loads
	    $('img:gt(0)').hide();
	    $('#priceDiv').hide();
	    $('#currency').hide();
	//Checks to see which image is displayed first and changes the button and the price div text to current image 
		checkImage();
		showPrice();
		checkScreen();
	//Creates an image interval of six cities
	    setInterval(function()
	    {
	        $('.site-wrapper :first-child').fadeOut(1000)
	            .next().fadeIn(1000).end().appendTo('.site-wrapper');
	    		checkImage();
	    		showPrice();
	    },7000);
	//When the main button is clicked show the average price for the area    
	  	$("#singlebutton").on('click', function() {   
	  		 $("#singlebutton").css("top", "80%");     
             $('#priceDiv').fadeIn('fast');
             $("#currency").fadeIn(2000);
              
        });
    //When the 'X' is selected fadeout the price   
        $('#boxclose').click(function(){
	            $('#priceDiv').fadeOut('fast');
	            $("#singlebutton").css("top", "50%");
	            $('#currency').hide();
	    });  
	//If the window is smaller than 419px shrink the main button
		$(window).on('resize', function(){
		     checkScreen();
		});
		
		
});

//Function to check if screen is smaller than 420px, if true make button smaller
function checkScreen(){
	if ($(window).width() < 420) {
    	$("#singlebutton").attr('class', 'btn-sm btn-info');
    }else{
    	$("#singlebutton").attr('class', 'btn-lg btn-info');
    }
}
	
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

//Function to check the image title and adjust the button text accordingly
function showPrice(){
	var imgName = $('img').attr('title');
        switch(imgName){
	      case 'Los Angeles':
	     	$("#price").html('$650,000.00');
	      break;
	      case 'London':
	     	$("#price").html('$853,013.66');
	      break;
	      case 'Paris':
	     	$("#price").html('$1,106,424.99');
	      break;
	      case 'Calgary':
	     	$("#price").html('$343,998.80');
	      break;
	      case 'Vancouver':
	     	$("#price").html('$688,052.60');
	      break;
	      case 'New York City':
	     	$("#price").html('$1,310,000.00');
	      break;
	   } 	
}
	
     