$(function(){
    var onair_data;
    $.ajax({
        url:"./json/new_program.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function(ondata){
            $.fn.onair(ondata);
        },
        error:function(){
            console.log("통신오류");
        }
    });

    $.fn.onair = function(ondata){
        $.each(ondata,function(a1,a2){
            console.log(a2);
            if(a1<8){
                $(".onair_ol").append("<li title='"+a2.new_pg+"' class='onair_f1'></li>")
            }
            else{
                $(".onair_ol").append("<li title='"+a2.new_pg+"' class='onair_f2'></li>")
            }
            $(".onair_ol > li").eq(a1).css({
                "background-image": "url("+a2.new_thumb+")"
            })
        });
    }

    var opp = 0;
    $("#onair_more").click(function(){
        if(opp==0){
            $(".onair_f1").fadeOut(500)
            $(".onair_f2").fadeIn(500)
            opp++;
        }
        else{
            $(".onair_f2").fadeOut(500)
            $(".onair_f1").fadeIn(500)
            opp=0;
        }

    });

    $(".onair_banner").click(function(){

        window.open("https://biz.skbroadband.com/")
    });



});