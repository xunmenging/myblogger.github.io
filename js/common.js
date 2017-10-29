/**
 * Created by admin-xcli on 3/19/2017.
 */

function initPage() {
    // 大尺寸导航的显示控制
    $(".nav dl").hide();
    $(".nav p").mouseenter(function () {
        if ($(this).closest('li').hasClass('tel')){
            return;
        }
        $(this).next("dl").show();
        $(this).closest('li').addClass('nav_big_backgroud_color');
    });
    $(".nav li").mouseleave(function () {
        $(this).find('dl').hide();
        $(this).closest('li').removeClass('nav_big_backgroud_color');
    });


    // 小尺寸导航栏的显示控制
    var $smallMenu = $('.menu_list');
    var $smallMenuBtn = $('.nav_small_btn');
    $smallMenu.hide();
    $smallMenuBtn.click(function () {
        if ($smallMenu.is(':hidden')) {
            $smallMenu.show();
        } else {
            $smallMenu.hide();
        }
    });

    var $allSubMenus = $smallMenu.find('dl');
    var $subMenu = 0;
    var isHidden = true;
    $allSubMenus.hide();
    $(".menu_list p").click(function () {
        $subMenu = $(this).siblings('dl');
        if ($subMenu.is(':hidden')) {
            isHidden = true;
        }
        else {
            isHidden = false;
        }
        $allSubMenus.hide();
        if (isHidden) {
            $subMenu.show();
        } else {
            $subMenu.hide();
        }
    });

    $('.btn_about').click(function () {
        $(this).addClass('btn_click');
    });

    var links = {
        'nav_btn_home': 'index.html',
        'nav_btn_brand': 'brand.html',
        'nav_btn_aes': 'comestic.html',
        'nav_btn_face': 'face.html',
        'nav_btn_instrument': 'instrum.html',
        'nav_btn_health': 'health.html',
        'nav_btn_contract': 'aboutus.html',
         'nav_btn_journal': 'journal.html'
    };
    $('.nav, .menu_list').find('p').click(function (e) {
        if (links[e.currentTarget.id]) {
            window.location.href = links[e.currentTarget.id];
        }
    });
    //
}