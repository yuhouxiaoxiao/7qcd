var mouseover_tid = [];
var mouseout_tid = [];
$(document).ready(function(){
	$('.menul').each(function(index){
		$(this).hover( 
			function(){
				var _self = this;
				clearTimeout(mouseout_tid[index]);
				mouseover_tid[index] = setTimeout(function() {
					$(_self).find('.menu-bd').show();
					$(_self).addClass('hover');
				}, 300);
			},
 			function(){
				var _self = this;
				clearTimeout(mouseover_tid[index]);
				mouseout_tid[index] = setTimeout(function() {
					$(_self).find(".menu-bd").hide();
					$(_self).removeClass('hover');
				}, 0);
			}
		);
	});
});

var mouseover_tid = [];
var mouseout_tid = [];
$(document).ready(function(){
	$('.subNavLi').each(function(index){
		$(this).hover( 
			function(){
				var _self = this;
				clearTimeout(mouseout_tid[index]);
				mouseover_tid[index] = setTimeout(function() {
					//$(_self).find('.popup').show();
					$(_self).addClass('hover');
				}, 0);
			},
 			function(){
				var _self = this;
				clearTimeout(mouseover_tid[index]);
				mouseout_tid[index] = setTimeout(function() {
					//$(_self).find(".popup").hide();
					$(_self).removeClass('hover');
				}, 0);
			}
		);
	});
});