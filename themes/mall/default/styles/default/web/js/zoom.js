$(function(){
    
    /* 鼠标移动小图，小图对应大图显示在大图上，并替换放大镜中的图*/
    $("#specList ul li img").livequery("mouseover",function(){ 
        var imgSrc = $(this).attr("src");
        var i = imgSrc.lastIndexOf(".");
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0,i);
        var imgSrc_small = $(this).attr("src_D");
        var imgSrc_big = $(this).attr("src_H");
        $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
        $('#specList li').removeClass('current');
        $(this).closest('li').addClass('current');
    });
    
    
    //使用jqzoom
    $(".jqzoom").jqueryzoom({
        xzoom: 460, //放大图的宽度(默认是 200)
        yzoom: 460, //放大图的高度(默认是 200)
        offset: 22, //离原图的距离(默认是 10)
        position: "right", //放大图的定位(默认是 "right")
        preload:1   
    });
    
    /*如果小图过多，则出现滚动条在一行展示*/
    var btnNext = $('#specRight');
    var btnPrev = $('#specLeft')
    var ul = btnPrev.next().find('ul');

    var len = ul.find('li').length;
    var i = 0 ;
    if (len > 5) {
        $("#specRight").addClass("specRightF").removeClass("specRightT");
        ul.css("width", 54 * len)
        btnNext.click(function(e) {
            if(i>=len-5){
                
                return;
            }
            i++;
            if(i == len-5){
                $("#specRight").addClass("specRightT").removeClass("specRightF");
            }
            $("#specLeft").addClass("specLeftF").removeClass("specLeftT");
            moveS(i);
        })
        btnPrev.click(function(e) {
            if(i<=0){
                return;
            }
            i--;
            if(i==0){
                $("#specLeft").addClass("specLeftT").removeClass("specLeftF");
            }
            $("#specRight").addClass("specRightF").removeClass("specRightT");
            moveS(i);
        })
    }
    function moveS(i) {
        ul.animate({left:-54 * i}, 500)
    }
    function picAuto(){
      if ($(".listimg li").size()<=5) {
        $("#specLeft,#specRight").hide();
      }
    }
    picAuto();
});