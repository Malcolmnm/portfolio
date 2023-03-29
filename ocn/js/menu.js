function menu_box2(){
    location.href = "http://ocn.cjenm.com/ko/"
}
function menu(data){
    //console.log(data);
    var menu_ul = document.getElementById("menu_ul")
    var f;
    var ff;
    var html_li = "";
    var html_li2 = "";
    var html_ol = "";
    for(f in data){
        //console.log(data[f].main_menu);
        html_li = document.createElement("li");
        html_li.append(data[f].main_menu);
        menu_ul.append(html_li);
        for(ff in data[f].menu_link){
            //console.log(ff);
            html_ol = document.createElement("ol");
            html_li2 = document.createElement("li");
            html_li2.innerHTML = "<a href='"+data[f].menu_link[ff]+"'>"+data[f].menu_list[ff]+"</a>";
            html_ol.append(html_li2);
            html_li.append(html_ol);
        }
    }
    $(function(){
        $("#menu_ul > li").mouseenter(function(){
        var $node = $(this).index();
            $("#menu_ul > li:eq("+$node+") > ol").slideDown(500);
        });
        $("#menu_ul > li").mouseleave(function(){
            var $node = $(this).index();
                $("#menu_ul > li:eq("+$node+") > ol").slideUp(500);
            });
    });
}