$(document).ready(function () {

    $("#search-btn").click(function () {
        q = $("#play-song").val();
        getJson();
    });

    $("#search-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#title").offset().top
        }, 2000);
    });

    var q = '';

    function getJson(ajaxurl) {
        $.ajax({
            method: 'GET',
            url: "http://api.guitarparty.com/v2/songs/?api_key=a2020df3ac621fec325a599b30dfbdb15b5b0ef0&query=" + q,
            dataType: 'json',
            success: onSuccess,
            error: onError
        })
    }

    function onSuccess(jsonReturn) {
        $('#main').empty();
        $('#title').empty();

        var song = jsonReturn.objects[0].body_chords_html;
        var title = jsonReturn.objects[0].title;

        var load = "<p>Title: \"" + title + "\"</p>";

        $(song).appendTo($('#main'));
        $(load).appendTo($('#title'));
    }


    function onError() {
        $('#title').html('Please type song title');
    }
});
