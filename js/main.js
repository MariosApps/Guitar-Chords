$(document).ready(function () {

    $("#search-btn").click(function () {
        q = $("#play-song").val();
        getJson();
    });

    $("#search-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
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
        $(jsonReturn.objects).each(function() {
            var load = "<ul class=\"song-list\"><li><p class=\"song-title\">Title: \"" + this.title + "\"</p></li><li><p>" + this.body_chords_html + "</p></li></ul>";
            $(load).appendTo($('#main'));
        });
    }


    function onError() {
        $('#title').html('Please type song title');
    }
});
