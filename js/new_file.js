(function(){ 
function resizeBaseFontSize(){ 
      var rootHtml = document.documentElement,
          deviceWidth = rootHtml.clientWidth; 
     /* if(deviceWidth < 980){ 
         
		 rootHtml.style.fontSize = deviceWidth / 10+ "px";  
      }  */
      rootHtml.style.fontSize = deviceWidth / 10+ "px";  
   }  
   resizeBaseFontSize();  
   window.addEventListener("resize", resizeBaseFontSize, false);  
   window.addEventListener("orientationchange", resizeBaseFontSize, false);  
})(); 

				
/* function showIt(){
	document.getElementById('demo').style.display="block";
}
function closeIt(){
	document.getElementById('demo').style.display="none";
} */

/* function serviceshow(){

	var x = document.getElementsByClassName('service_show')[i].style.display;
	if(x=="block"){
		document.getElementsByClassName('service_show')[i].style.display="none";
	}else
	{
		document.getElementsByClassName('service_show')[i].style.display="block";
	}
	
} */
Array.of(...document.getElementsByClassName("tubiao")).forEach(e => 
	e.onclick = function(){
	let text = this.nextElementSibling.style.display;
		if(text == "none"){
			this.nextElementSibling.style.display = "block";
		}else{
			this.nextElementSibling.style.display = "none";
		}
	}
);


// .forEach(e =>console.log(e));
// .onclick = function(){
// 	let text = this.nextElementSibling.style.display;
// 	if(text == "none"){
// 		this.nextElementSibling.style.display = "block";
// 	}else{
// 		this.nextElementSibling.style.display = "none";
// 	}
// }
// function serviceshow(){
// 	for(i = 0;i < document.getElementsByClassName("tubiao").length;i++)
// 	{		
// 		var x = document.getElementsByClassName('tubiao')[i].nextElementSibling.style.display;
// 
// 		if(x=="block"){
// 				document.getElementsByClassName('tubiao')[i].nextElementSibling.style.display="none";
// 		}else
// 		{
// 				document.getElementsByClassName('tubiao')[i].nextElementSibling.style.display="block";
// 		}
// 	}
// }
/* for(i = 0;i < 13; i++)
	{	
		function service_show(){
		var x = document.getElementsByClassName('tubiao')[i].nextElementSibling.style.display;
		console.log(0);
		if(x=="block"){
				document.getElementsByClassName('tubiao')[i].nextElementSibling.style.display="none";
		}else
		{
				document.getElementsByClassName('tubiao')[i].nextElementSibling.style.display="block";
		}
	}
}
 */
