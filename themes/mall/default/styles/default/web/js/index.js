$(function(){
		$(".aside-product-hd").mouseover(function(){
			$(".aside-product-bd").attr("style","display:none");
			$(this).siblings().attr("style","display:block");
		});
		
		$(".aside-quick-nav ul > li").hover(
		  	function(){
				$(this).addClass("hover");
				$(this).find("> .quick-sub-nav").show();			
			},
			function(){
				$(this).removeClass("hover");
				$(this).find("> .quick-sub-nav").hide();
			}
		 )
})
/* table display toggle*/
$(function(){
		$(".expander > dt").toggle(
		  	function(){
				$(this).addClass("open");
				$(this).siblings().show();			
			},
			function(){
				$(this).removeClass("open");
				$(this).siblings().hide();			
			}
		 )
})
/* slideshow */
$(function(){
		var len = $("#slide-img > li").length;
		var index = 0;
		$("#slide-triggers a").mouseover(function(){
			index = $("#slide-triggers a").index(this);
			showImg(index);
		});
		$('#slideshow').hover(function(){
			if(MyTime){
			clearInterval(MyTime);
			}
		},function(){
			 MyTime = setInterval(function(){
			   showImg(index)
			 index++;
			 if(index==len){index=0;}
			 } , 4000);
		});
		var MyTime = setInterval(function(){
		   showImg(index)
		   index++;
		   if(index==len){index=0;}
		} , 4000);
		function showImg(i){
			$("#slide-img li").hide();
	   		$("#slide-img li").eq(i).show();
			$("#slide-text li").hide();
			$("#slide-text li").eq(i).show();
	  		$("#slide-triggers a").eq(i).addClass("on").siblings().removeClass("on");
		}
	})
/* homepage tab */
$(function(){
	$(".tab li").hover(function(){	
	    $(this).addClass("current");
	    $(this).siblings().removeClass("current");
	    var num = $(".tab li").index(this);
	    $(".tab-control ul").eq(num).show().siblings().hide();
	});		  
})