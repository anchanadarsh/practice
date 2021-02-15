$(document).ready(function () {
    //========toggle sidebar============
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
        $('.sidebar_wrap').toggleClass('open');
    });

    // force click on nav-menu when any link is clicked
    $('.sidebar_wrap .links a').on('click', function () {
        $('#nav-icon3').trigger('click');
    })
})
