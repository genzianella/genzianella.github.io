jQuery(document).ready(function($){
     if (!sessionStorage.alreadyClicked) {
      var lang;
  if (navigator.userLanguage) 
    lang = navigator.userLanguage;
  else if (navigator.language) 
    lang = navigator.language;
  else
    lang = "en";
     
     
    if(lang == "it-IT" || lang == "it"){
    	
   }
   else if(lang == "de-DE" || lang == "de-CH" || lang == "de" || lang == "de-AU"){
     window.location="de/index.html";
     }
   else{
    window.location="eng/index.html";
    
   }
    sessionStorage.alreadyClicked = "true";
}     
	
      
	
});

