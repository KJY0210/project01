$(function () {
    /*메인슬라이드*/
    $('.bxslider').bxSlider({
        captions: true,
        //slideWidth:600,  //수정
        auto: false,
        autoControls: true,
        stopAutoOnclick: true,

    });

    /*서브슬라이드*/
    var mySlider = $("#slide_banner").bxSlider({
        mode: "horizontal", // 가로 수평으로 슬라이드 됩니다.
        speed: 300, // 이동 속도를 설정합니다.
        pager: false, // 현재 위치 페이징 표시 여부 설정.
        moveSlides: 1, // 슬라이드 이동시 갯수 설정.
        slideWidth: 250, // 슬라이드 마다 너비 설정.
        minSlides: 3, // 최소 노출 개수를 설정합니다.
        maxSlides: 3, // 최대 노출 개수를 설정합니다.
        slideMargin: 50, // 슬라이드간의 간격을 설정합니다.
        auto: true, // 자동으로 흐를지 설정합니다.
        autoHover: true, // 마우스 오버시 정시킬지 설정합니다.
        controls: false // 이전 다음 버튼 노출 여부 설정합니다.
    });
    //이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
    $("#prevBtn").on("click", function () {
        mySlider.goToPrevSlide(); //이전 슬라이드 배너로 이동됩니다.
        return false; //<a>에 링크를 차단합니다.
    });
    //다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
    $("#nextBtn").on("click", function () {
        mySlider.goToNextSlide(); //다음 슬라이드 배너로 이동됩니다.
        return false;
    });

    ///*상단 메뉴*/
    /*$('.b_menu').click(function () {
        $('.submenu').stop().animate({
            height: '15em',
            'background-color': 'rgba(57,60,61,1)'
        }, 500);
    });*/  //#m_nav hover

    ///*상단 메뉴*/
    /*$('.b_menu').hover(function () {
            $('.submenu').stop().animate({
                height: '15em',
                'background-color': 'rgba(57,60,61,1)'
            }, 500);
        },
        function () {
            $('.submenu').stop().animate({
                height: '0',
                'background-color': 'rgba(57,60,61,0)'
            }, 500);

        });*/ //#m_nav hover

});
