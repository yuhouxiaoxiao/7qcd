 // 下拉菜单

var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 
// -->



 // 弹出层
$(function(){
	
	$(".showbox").click(function(){
		$("#TB_overlayBG").css({
			display:"block",height:$(document).height()
		});
		$(".t-box").css({
			left:($("body").width()-$(".t-box").width())/2-20+"px",
			top:($(window).height()-$(".t-box").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	
	$(".close").click(function(){
		$("#TB_overlayBG").css("display","none");
		$(".t-box ").css("display","none");
	});
	
})

 // 弹出层2
var bakObj; 	//定义一个空的全局变量；

function chooseCustomer(obj) {


    bakObj = obj; //把此方法传进来的参数即当前所点对象使bakObj初始化；
    var lanrenzhijia = document.getElementById('inventory-dialog'); 	//获取弹出框对象
    var hidivmt = obj.offsetTop; //获取当前对象居body顶部的高度
    var hidivml = obj.offsetLeft; //获取当前对象居body左部的宽度
    var objWidth = obj.offsetWidth; 	//获取当前对象的实际宽度
    var objHeight = obj.offsetHeight; //获取当前对象的实际高度
    lanrenzhijia.style.display = "block";

    var aBox = obj; //需要获得位置的对象
    do {
        aBox = aBox.offsetParent;
        hidivml += aBox.offsetLeft;
        hidivmt += aBox.offsetTop;
    }
    while (aBox.tagName != "BODY");


    var cusHeight = lanrenzhijia.offsetHeight; 	//获取弹出框的实际高度
    var cusWidth = lanrenzhijia.offsetWidth; 	//获取弹出框的实宽度
    var bodyHeight = document.body.clientHeight;
    var bodyWidth = document.body.clientWidth;

    lanrenzhijia.style.left = hidivml - 1;
    lanrenzhijia.style.top = hidivmt + objHeight;
    if (hidivml + cusWidth >= bodyWidth) {
        lanrenzhijia.style.left = hidivml + objWidth - cusWidth + 1;
    }
    if (hidivmt + cusHeight >= bodyHeight - objHeight) {
        lanrenzhijia.style.top = hidivmt - cusHeight;
    }
}

function setValue(obj) {
    bakObj.innerHTML = obj;
    document.getElementById('inventory-dialog').style.display = 'none';
}