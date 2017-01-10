$(function(){

	/*
	*	pause设定,当点击回到顶部时,pause为false,不执行scroll事件
	*的clearInterval(timer);当滚动鼠标时,$(window).scroll事件
	*触发,定时器还在执行,之后的第一次不执行clearInterval(timer),
	*将pause设置为true;第二次执行clearInterval(timer).
	*/
	var timer=null;
	var pause=false;
	// alert($(window).height());	
	$(window).scroll(function(){
		if(pause){
			clearInterval(timer);
		}
		pause=true;	
		// '按钮'display
		if($(document).scrollTop() > $(window).height()){
			$("#btn").css("display","block");
		}else{
			$("#btn").css("display","none");
		}	
	});

	$("#btn").click(function(){
		//alert(speed);
		timer=setInterval(function(){
			var sTop=$(document).scrollTop();
			//alert(sTop);
			var speed=sTop/8;
			$(document).scrollTop(sTop-speed);
			pause=false;
			if(sTop<=0){
				clearInterval(timer);
			}
		},30);
		
	});
});