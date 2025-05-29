$(document).ready(function() {
    $('.zodiac_content').hide();
    $('#res1').hide();
    $('#res2').hide();
    $('#myModal').hide();

    $('#cta').click(function() {
        $('.main_content').fadeOut(500, function() {
            $('.zodiac_content').fadeIn(500);
        });
    });

    let count = 0;
    $('.zodiac_item').click(function() {
        var zodiacId = $(this).data('zodiac');
        if(zodiacId == 'libra') {
            $('.zodiac_content').fadeOut(500, function() {
                $('#res2').fadeIn(500);
            });
        } else if (zodiacId == 'gemini' && count >= 3) {
            $('.zodiac_content').fadeOut(500, function() {
                $('#res1').fadeIn(500);
            });
        } else {
            $("#myModal").fadeIn(500);
        }

        count++;
    });

    $('#submit').click(function() {
        $("#myModal").fadeOut(500);
    });
});