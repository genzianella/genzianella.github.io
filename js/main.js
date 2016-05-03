jQuery(document).ready(function($){
  	
  //	$(".footer-distributed").load("footer.html"); 
  	
  	
        
//  	$('.footer-distributed').load('footer-it.html',function(){
  	
//  	});
//  	$('head').load('head-it.html',function(){
  	
//  	});
    
     
	$('.cd-primary-nav').on('click', function(event){
		if($(event.target).is('.cd-primary-nav')) 
		   $(this).children('ul').toggleClass('is-visible');
		   $(".logo").toggleClass('no-visible');
		   $(".phone").toggleClass('no-visible');
		   $(".lang-switch").toggleClass('no-visible');
		   
	});
	$('.arrow').on('click', function(event){
		   $('.book-now').toggleClass('opened');
		   $('.arrow').toggleClass('arrows-down');
		   		   
	});
	$('.main-content-item').hover(function(){
			$(this).children('.cd-section').css("background-size","120% 120%");
			}, function(){
				$(this).children('.cd-section').css("background-size","100% 100%");
	       });
      
//	 $('#newsletter').on('submit', function(event){
//       var data= $('newsletter').serialize();
//       $.post('../php/newsletter.php',data,function(e) {
//         	alert(e);
         	
//       });
      
       return false;
       
              
    
});

