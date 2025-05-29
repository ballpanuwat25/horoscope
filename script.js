$(document).ready(function() {
    $('.zodiac_content').hide();
    $('.result_content').hide();
    $('#myModal').hide();

    $('#cta').click(function() {
        $('.main_content').fadeOut(500, function() {
            $('.zodiac_content').fadeIn(500);
        });
    });

    $('.zodiac_item').click(function() {
        var zodiacId = $(this).data('zodiac');
        if(zodiacId != 'libra') {
            console.log('You clicked on zodiac: ' + zodiacId);
            $("#myModal").fadeIn(500);
        } else {
            $('.zodiac_content').fadeOut(500, function() {
                $('.result_content').fadeIn(500);
            });
        }
    });

    $('#submit').click(function() {
        $("#myModal").fadeOut(500);
    });
});