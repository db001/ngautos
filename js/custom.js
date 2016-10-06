$(document).ready(function() {

    $("#mapClick").on('click', function() {
        var mapScroll = $("a[name='map']");
        $('html, body').animate({
            scrollTop: mapScroll.offset().top
        }, 'slow');
    });

    $("#aboutClick").on('click', function() {
        var mapScroll = $("a[name='about']");
        $('html, body').animate({
            scrollTop: mapScroll.offset().top
        }, 'slow');
    });

    $("#serviceClick").on('click', function() {
        var mapScroll = $("a[name='service']");
        $('html, body').animate({
            scrollTop: mapScroll.offset().top
        }, 'slow');
    });

    $("#mapClick2").on('click', function() {
        var mapScroll = $("a[name='map']");
        $('html, body').animate({
            scrollTop: mapScroll.offset().top
        }, 'slow');
    });

    $("#aboutClick2").on('click', function() {
        var mapScroll = $("a[name='about']");
        $('html, body').animate({
            scrollTop: mapScroll.offset().top
        }, 'slow');
    });

    $("#serviceClick2").on('click', function() {
        var mapScroll = $("a[name='service']");
        $('html, body').animate({
            scrollTop: mapScroll.offset().top
        }, 'slow');
    });

    $("#homeLink").on('click', function() {
        var mapScroll = $("a[name='home']");
        $('html, body').animate({
            scrollTop: mapScroll.offset().top
        }, 'slow');
    });


    if (document.documentElement.clientWidth < 768) {
        $('.logo').removeClass('fa-3x').addClass('fa-2x');
    };

    var headlines = [
        "Latest offer: Half price MOT & service for people called Dave",
        "News: Automatic Gearbox specialist now in house"
    ];

    var d = 1000; //delay time
    var i = d * 6;

    function showHead(headliner) {
        var headline = $('#headline');
        headline.text(headliner[0]).fadeIn(d);
        headline.delay(d).fadeOut(d, function() {
            $('#headline').text(headliner[1]);
        }).fadeIn(d);
        headline.delay(d).fadeOut(d);
    };

    showHead(headlines);


    var textLoop = setInterval(function() {
        showHead(headlines);
    }, i);


});
