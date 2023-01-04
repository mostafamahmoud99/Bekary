

let offset=$("#about").offset().top;
console.log(offset);
$(window).scroll(function(){
    let currentScroll=$(window).scrollTop();
    if(currentScroll>=offset){
        $(".navbar").css("backgroundColor","rgba(0,0,0,0.7)")
    }else{
        $(".navbar").css("backgroundColor","transparent")
    }
})
/* ********************* */

$(".nav-link").click(function(){
   let test= $(this).attr("href");
   let offset=$(test).offset().top;
$("html,body").animate({scrollTop:offset},1000)
})

