$(document).ready(function () {
    $('.ba-menu-btn').on('click', function () {
        // $('.ba-menu').toggleClass('open');
        $('.ba-menu').toggle();
    })

    $(window).on('resize', function () {
        if ($(this).width() > 991) {
            $('.ba-menu').show();
        } else {
            $('.ba-menu').hide();
        }
    })

    $('#showSearch').on('click', function () {
        $("#showSearch i").toggleClass("fa-times");
        $('.ba-search-form').toggleClass('open');
    })
})