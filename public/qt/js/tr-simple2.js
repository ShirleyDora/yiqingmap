//方法2：jquery.getJSON()是jquery.ajax()函数的简写形式
$.getJSON("../../qt/data/trends.json","post",function(data){
    // console.log(data);
    $.each(data.first,function(i,item){
        // console.log(item.date)
        // console.log(item.news)
        var str=$("<ul>"+"<li>"+item.date+"</li>"+"<li>"+item.news+"</li>"+"</ul>");
        $("#biaodan").append(str);
    })
}
)