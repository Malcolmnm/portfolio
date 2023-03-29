$(function(){
    var data;
    $.ajax({
        url:"./json/banner.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function(data){
            $.fn.array(data);
        },
        error:function(){
            console.log("통신오류");
        }
    });
    $.fn.array = function(a1){
        //배너 생성파트
        var timer = "";
        $.each(a1.banners,function(a,b){
            if(b[3]=="yes"){
            $("#banner_ul").append("<li class='cc"+a+"' data='"+b[1]+"'></li>")
            $("#banner_ul > li").eq(a).css({
                "background-image": "url("+b[0]+")"
            });
            $("#banner_u2").append("<li></li>")
            }
        });
        var ea = $("#banner_ul>li").length;
        var banner_width = $("#banner_ul>li").width();
        banner_width * ea;
        $("#banner_ul").css({
            "width" : banner_width * ea+"px"
        });

        //배너 url 이동파트
        $(document).on("click","#banner_ul > li",function(){
            var node = $(this).index();
            var url = $("#banner_ul > li").eq(node).attr("data");
            location.href = url;
        });
        //배너 닷 파트
        $("#banner_u2 > li").click(function(){
            clearTimeout(timer);
            node = $(this).index();
            
            $("#banner_u2>li").css({
                "background-color":"rgba(255, 255, 255, 0.5)"
            });
            
            $("#banner_u2 > li").eq(node).css({
                "background-color":"white"
            });

            var nos = Math.ceil($(".cc"+node).offset().left);
            var pnos = Math.ceil($("#banner_ul").offset().left);
            var total_left = nos - pnos;
            var now_node = String(total_left).substr(0,1);
            $("#banner_ul").stop().animate({
                "left":-total_left+"px"
            },800,function(){
                var z = 0;
                while(z < now_node){
                    var ac = $("#banner_ul>li").eq(0).clone();
                    $("#banner_ul>li").eq(0).remove();
                    $("#banner_ul").append(ac);
                    z++;
                }
                $("#banner_ul").css({
                    "left":"0px"
                });
            });
        timer = setTimeout($.fn.banner,3000);
        });
        /////////////////////////////////////////////////
        //왼쪽이동파트
        var node = 0;
        var banner_width = $("#banner_ul>li").width();
        var ea = $("#banner_ul>li").length;
        $("#banner_left").click(function(){
            clearTimeout(timer);
            node--;
            if(node<0){
                node=3;
            }
            var last = ea - 1;
            var z = $("#banner_ul > li").eq(last).clone();
            $("#banner_ul > li").eq(last).remove();
            $("#banner_ul").prepend(z);
            $("#banner_ul").css({
                "left" : -banner_width + "px"
            });
            $("#banner_ul").stop().animate({
                "left":"0px"
            });
        
            $("#banner_u2 > li").css({
                "background-color":"rgba(255, 255, 255, 0.5)"
            });
            $("#banner_u2 > li").eq(node).css({
                "background-color":"white"
            });
            timer = setTimeout($.fn.banner,3000);
        });

        //오른쪽 이동파트
        $("#banner_right").click(function(){
            clearTimeout(timer);
            node++;
            if(node>=ea){
                node=0;
            }
            $("#banner_ul").stop().animate({
                "left":-banner_width + "px"
            },500,function(){
                var z = $("#banner_ul > li").eq(0).clone();
                $("#banner_ul > li").eq(0).remove();
                $("#banner_ul").append(z);
                $("#banner_ul").css({
                    "left":"0px"
                });
            });
            $("#banner_u2 > li").css({
                "background-color":"rgba(255, 255, 255, 0.5)"
            });
            $("#banner_u2 > li").eq(node).css({
                "background-color":"white"
            });
            timer = setTimeout($.fn.banner,3000);
        });
        timer = setTimeout($.fn.banner,3000);
    }
    
    //배너, 닷 애니메이션 파트
    var c = 0;
    var node = 0; 
    var timer = "";
    var m = 0;
    $.fn.banner = function(){
        var banner_width = $("#banner_ul>li").width();
        var ea = $("#banner_ul>li").length;
    clearTimeout(timer);
    if(m==0){
        $("#banner_ul").stop().animate({
            "left":-banner_width+"px"
        },2000,function(){
            var copy = $("#banner_ul>li").eq(0).clone();
            $("#banner_ul>li").eq(0).remove();
            $("#banner_ul").append(copy);
            $("#banner_ul").css({
                "left":0
            });
        });
        $("#banner_u2 > li").css({
            "background-color":"rgba(255, 255, 255, 0.5)"
        })
        c++
        if(c >= ea){
            c = 0;  
        }
        $("#banner_u2 > li").eq(c).css({
            "background-color":"white"
        });
    }
    else if(m==1){
        m=0;
    }
    timer = setTimeout($.fn.banner,3000);
}
//배너 마우스 핸들링파트
$("#banner_ul").bind({
    "mouseenter":function(){
        clearTimeout(timer);
        timer ="";
    },        
    "mouseleave":function(){
        m = 1;
        $.fn.banner();
    }
});

//닷 애니메이션 핸들링파트


});