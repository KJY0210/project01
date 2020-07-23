$(function () {
    
    var btn = 0;
    $('#m_btn').click(function () {
        if (btn == 0) {
            $('.btn_sub').css({display:'block'});
            $('#submenu_all li ul ').hide();
            $('#submenu_all').stop().slideDown();
            $('#m_btn').addClass('on');
            btn = 1;
        } else {
            $('#submenu_all').stop().slideUp();
            $('#m_btn').removeClass('on');
            btn = 0;
        }
    }); //submenu_btn_m fin

    $('#submenu_all li').each(function () {
        var submenu = $(this).find('.sub');
        $(this).click(function () {
            $('.sub').stop().slideUp();
            $(submenu).stop().slideToggle();
        })
    });


    $(window).resize(function () {
        //5단계
        if ($(window).width() < 740) {


        } else {
            $('.btn_sub').hide();
            $('#m_btn').removeClass('on');
        }
    });

});
