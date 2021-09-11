// toogle menu
function menu() {
    //Toggle menu
    $('.ham').on('click', function () {
        var $btn = $(this);
        var $target = $($(this).attr('data-toggle'));

        $btn.hasClass('open') ? $btn.removeClass('open') : $btn.addClass('open');

        $target.hasClass('open') ? $target.removeClass('open') : $target.addClass('open');

    })
}

$(document).ready(function () {
    $('.pagetop').hide();

    $(window).on('scroll', function() {
        // ページトップフェードイン
        if ($(this).scrollTop() > 300) {
            $('.pagetop').fadeIn();
        } else {
            $('.pagetop').fadeOut();
        }
    });

    $('#goTop').on('click', function() {
        $('html,body').animate({'scrollTop': 0}, 500);
    });

    menu();
});