$(document).ready(function() {
	
	var played = false;
	var cambio1 = false;
	var cambio2 = false;
	var cambio3 = false;
	var click = false;
//	var scrollcambio1;
//	  var scrollcambio2;
	$("#boton").on("click",function(){
		$("#intro").css("display", "none");
		$("#contenido").css("display", "block");
		click = true;
	});
	
	
	$(window).scroll(function() {
		
	  var elemTop = $('#columnatituloscausas').offset().top;
	  var elemTop3 = $('#recargo').offset().top;
	  var elemTop2 = $('#columnapruebafondos1').offset().top;
	  
	  var elemHeight = $('#columnatituloscausas').outerHeight();
	  var elemHeight2 = $('#columnapruebafondos1').outerHeight();
	  var elemHeight3 = $('#recargo').outerHeight();
		  
	  
	  var windowHeight = $(window).height();
	  var windowScroll = $(this).scrollTop();
	  
	  
	  
	 
	 
	  
	

	  if( windowScroll > (elemTop + elemHeight - windowHeight) && (played == false) && (click == true)) {
		  document.getElementById('playAudio').muted = false;
		  document.getElementById('playAudio').play();
		  played = true;
	  }
	 
	  
	  
	  	if( windowScroll > (elemTop2 + elemHeight2 - windowHeight)&& (cambio1 == false) && (click == true)) {
	  		//scrollcambio1 = windowScroll;
	  		cambio1 = true;
	  		document.body.style.background ="yellow";
	  	}	
	  	
	  	if(cambio1 && (!cambio2) && (!cambio3) && (windowScroll>elemTop2 + elemHeight2 - windowHeight+140)){
	  		//scrollcambio2 = windowScroll;
	  		cambio2=true
  			document.body.style.background ="turquoise";
  		}
  	  
  		if(cambio1 && cambio2 && (!cambio3)&&(windowScroll>elemTop2 + elemHeight2 - windowHeight+280)){
  			cambio3=true;
  		  	document.body.style.background ="red";
  		}
	  		
	  
	  
	  
	  if( windowScroll > (elemTop3 + elemHeight3 - windowHeight) && (cambio3 == true) && (click == true)) {
		  window.alert("Paciencia...");
		  window.location.assign("paginatres.html");
	  }
	  
	});
	
	
	  function rojo(){
		  document.body.style.background ="red";
		  window.alert("entre");
	  }
	  function azul(){
		  document.body.style.background ="turquoise";
	  }
	  function amarillo(){
		  document.body.style.background ="yellow";
	  }
})