$(document).ready(function() {
    $(".nav>li").hover(function() {
        $(this).children("ul").stop().slideToggle();
    })
    $(".mobile-inner-header-icon").click(function(){
        $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
        $(".mobile-inner-nav").slideToggle(250);
    });
    $(".mobile-inner-nav a").each(function( index ) {
        $( this ).css({'animation-delay': (index/10)+'s'});
    });
    $(".tab-list").on('click','li',function() {   
        $(this).addClass("current").siblings().removeClass("current");  
        var index = $(this).index();
        $(".tab_con .item").eq(index).show().siblings().hide();
    });
   
})
// window.onload=function(){
//     $(".footer").css({'display':'block'});
//     if(this.document.body.clientHeight<window.innerHeight){
//         $(".footer").css({'position':'fixed','bottom':'0','width':"100%"});
//     }
//     controllFooter();
// }
// function controllFooter(){
//     if($(window).height()<$(document).height()){
//         $(".footer").css('position','static');
//     }else{
//         $(".footer").css({'position':'fixed','static':'0px'});
//     }
// }
