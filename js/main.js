$(function () {
    /*메인슬라이드*/
    $('.bxslider').bxSlider({
        captions: true,
        //slideWidth:600,  //수정
        auto: false,
        autoControls: true,
        stopAutoOnclick: true,

    });


    $('.rec_slider').each(function () {
        var topDiv = $(this);
        var anchors = topDiv.find('ul.rec_list a');
        var panelDivs = topDiv.find('div.data_box');
        var lastAnchor;
        var lastPanel;

        anchors.show();
        lastAnchor = anchors.filter('.on');
        lastPanel = $(lastAnchor.attr('ban_href'));
        panelDivs.hide();
        lastPanel.show();
        var lastImg = $(this).find('ul.rec_list .on img'); //이미지 롤오버 
        var lastImg_src = lastImg.attr('src'); //이미지 롤오버 


        anchors.click(function () {
            //클릭한 것을 현재로 기억함 			
            var currentAnchor = $(this);
            var currentPanel = $(currentAnchor.attr('ban_href'));
            var currentImg = $(this).find('img'); //이미지 롤오버
            var currentImg_src = currentImg.attr('src'); //이미지 롤오버 
            var currentImg_src_on = currentImg_src.replace('off', 'on'); //이미지 롤오버

            //최후의 것을 처리함. on클래스제거, 이미지off로 변환
            lastAnchor.removeClass('on');
            lastPanel.hide();
            lastImg_src_off = lastImg_src.replace('on', 'off'); //이미지 롤오버
            lastImg.attr('src', lastImg_src_off); //이미지 롤오버

            //현재를 처리함. on클래스추가, 이미지on으로 변환
            currentAnchor.addClass('on');
            currentPanel.show();
            currentImg.attr('src', currentImg_src_on); //이미지 롤오버 

            //현재를 최후로 기억시킴
            lastAnchor = currentAnchor;
            lastPanel = currentPanel;
            lastImg = currentImg; //이미지 롤오버
            lastImg_src = lastImg.attr('src'); //이미지 롤오버
        });
    });

    /***/


    if ($(window).width() > 740) {
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

    } else {
        var mySlider = $("#slide_banner").bxSlider({
            mode: "horizontal", // 가로 수평으로 슬라이드 됩니다.
            speed: 300, // 이동 속도를 설정합니다.
            pager: false, // 현재 위치 페이징 표시 여부 설정.
            moveSlides: 1, // 슬라이드 이동시 갯수 설정.
            slideWidth: 250, // 슬라이드 마다 너비 설정.
            minSlides: 1, // 최소 노출 개수를 설정합니다.
            maxSlides: 1, // 최대 노출 개수를 설정합니다.
            slideMargin: 50, // 슬라이드간의 간격을 설정합니다.
            auto: true, // 자동으로 흐를지 설정합니다.
            autoHover: true, // 마우스 오버시 정시킬지 설정합니다.
            controls: false // 이전 다음 버튼 노출 여부 설정합니다.
        });

    }



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


    $('.bxslider > div').each(function () { //1단계           
        //5단계
        if ($(window).width() < 740) {
            //alert();
            var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
            var img_pc = img.attr('src'); //3단계  
            var img_mo = img_pc.replace('mainimg_pc', 'mainimg_mo') //4단계   relapce(a,b) ==> a를 b로 대체
            img.attr('src', img_mo);
            $('.bx-viewport').css({
                height: 'auto'
            });

        } else {
            var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
            var img_mo = img.attr('src'); //3단계  
            var img_pc = img_mo.replace('mainimg_mo', 'mainimg_pc') //4단계   relapce(a,b) ==> a를 b로 대체
            img.attr('src', img_pc);
            $('.bx-viewport').css({
                height: 'auto'
            });
        }
    });

    /*
    if($(window).width() < 740){
           //740미만의 실행문} 
    else if ($(window).width() < 1040) {
           //740이상~1040미만의 실행문  } 
     else{//그외 = 1040이상 }
    
    */
    $(window).resize(function () {
        $('.bxslider > div').each(function () { //1단계           
            //5단계
            if ($(window).width() < 740) {
                //alert();
                var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
                var img_pc = img.attr('src'); //3단계  
                var img_mo = img_pc.replace('mainimg_pc', 'mainimg_mo') //4단계   relapce(a,b) ==> a를 b로 대체
                img.attr('src', img_mo);
                $('.bx-viewport').css({
                    height: 'auto'
                });

            } else {
                var img = $(this).find('img'); //2단계  find ==> 선택자를 찾는 명령
                var img_mo = img.attr('src'); //3단계  
                var img_pc = img_mo.replace('mainimg_mo', 'mainimg_pc') //4단계   relapce(a,b) ==> a를 b로 대체
                img.attr('src', img_pc);
                $('.bx-viewport').css({
                    height: 'auto'
                });
            }
        });
    });

});
