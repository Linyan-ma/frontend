window.onload=function(){
	var btn=document.getElementById('btn');	
	var timer=null;
	//alert(top);
	window.onscroll=function(){
		//window.clearInterval(timer);
		alert(1121213);
	};
	btn.onclick=function(){
		timer=window.setInterval(function(){
			var top=document.documentElement.scrollTop||document.body.scrollTop;
			var speed=top/6;
			document.documentElement.scrollTop=document.body.scrollTop-=speed;
		//alert(top);
		console.log(top);
		if(top<=0){
			window.clearInterval(timer);
		};
	},30);


	}
	

}