$(function(){
    $(".MapsAndCharts_bottom a").mouseover(function(){
       oldColor_one = $(this).css("background-color");
       $(this).css("background-color","#cfe9ff");
       $(this).children('div:last-child').css("background-color","#002D72");
    }).mouseout(function(){
        $(this).css("background-color",oldColor_one);  
        $(this).children('div:last-child').css("background-color","#0072ce"); 
    })
})

$(function(){
    $(".MapsAndCharts_right a").mouseover(function(){
       oldColor_one = $(this).css("background-color");
       $(this).css("background-color","#cfe9ff");
       $(this).children('div:last-child').css("background-color","#002D72");
    }).mouseout(function(){
        $(this).css("background-color",oldColor_one);  
        $(this).children('div:last-child').css("background-color","#0072ce");  
    })
})