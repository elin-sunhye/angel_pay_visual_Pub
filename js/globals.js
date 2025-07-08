// header ------------------------------------
// 컨텐츠 사이즈
$(window).resize(function () {
    var headerHeight = $('header').outerHeight();
    document.documentElement.style.setProperty(
        '--header-height',
        headerHeight + 'px'
    );

    var headerTopHeight = $('header .top').outerHeight();
    document.documentElement.style.setProperty(
        '--header-top-height',
        headerTopHeight + 'px'
    );

    var headerBottomHeight = $('header .bottom').outerHeight();
    document.documentElement.style.setProperty(
        '--header-bottom-height',
        headerBottomHeight + 'px'
    );

    var footerHeight = $('footer').outerHeight();
    document.documentElement.style.setProperty(
        '--footer-height',
        footerHeight + 'px'
    );

    var tableTopHeight = $('.table_top').outerHeight();
    document.documentElement.style.setProperty(
        '--table-top-height',
        tableTopHeight + 'px'
    );

    var searchTableHeight = $('.search_table').outerHeight();
    document.documentElement.style.setProperty(
        '--search-table-height',
        searchTableHeight + 'px'
    );
});

$(document).ready(function () {
    var headerHeight = $('header').outerHeight();
    document.documentElement.style.setProperty(
        '--header-height',
        headerHeight + 'px'
    );

    var headerTopHeight = $('header .top').outerHeight();
    document.documentElement.style.setProperty(
        '--header-top-height',
        headerTopHeight + 'px'
    );

    var headerBottomHeight = $('header .bottom').outerHeight();
    document.documentElement.style.setProperty(
        '--header-bottom-height',
        headerBottomHeight + 'px'
    );

    var footerHeight = $('footer').outerHeight();
    document.documentElement.style.setProperty(
        '--footer-height',
        footerHeight + 'px'
    );

    var tableTopHeight = $('.table_top').outerHeight();
    document.documentElement.style.setProperty(
        '--table-top-height',
        tableTopHeight + 'px'
    );

    var searchTableHeight = $('.search_table').outerHeight();
    document.documentElement.style.setProperty(
        '--search-table-height',
        searchTableHeight + 'px'
    );
});

// btn_side_menu
$('.btn_side_menu').on('click', function () {
    $(this).toggleClass('open');
    $('.side_menu').toggleClass('open');
    $('.side_menu_bg').toggleClass('open');
    $('.login_info').toggleClass('open');
});

// side_menu_bg
$('.side_menu_bg').on('click', function () {
    $(this).removeClass('open');
    $('.side_menu').removeClass('open');
    $('.btn_side_menu').removeClass('open');
    $('.login_info').removeClass('open');
});

// date input
$(document).on('click', 'label', function () {
    const forAttr = $(this).attr('for');
    const targetInput = $('#' + forAttr);

    if (targetInput.attr('type') === 'date' && targetInput[0].showPicker) {
        targetInput[0].showPicker();
    }
});
