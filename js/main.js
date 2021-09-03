$(function(){
    // 헤더
    $(window).scroll(function(){
        var scroll = $(document).scrollTop();
        if(scroll >= 10){
            $('.header').addClass('scroll');
        }
        else if(scroll < 10){
            $('.header').removeClass('scroll');
        }
    });

    // 위로가기버튼
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.go_top').fadeIn();
        }else{
            $('.go_top').fadeOut();
        }
    });
    $('.go_top').click( function() {
        $('html, body').animate({scrollTop:0},300);
        return false;
    });

    // 슬라이드
    $(".sec3_slide").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: false,
        swipe: true,
        centerMode: true,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive:[
        {
            breakpoint: 801,
            settings:{
                slidesToShow: 1,
                arrows:true,
                centerMode:false,
            }
        }
    ]
    });
    $('.animate').scrolla({
        mobile: false,
        once:true,
    });
});