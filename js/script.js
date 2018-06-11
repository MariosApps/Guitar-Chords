$(document).ready(function () {

    var cChords = {
        "C": "img/C.png",
        "c": "img/Cm.png",
        "C7": "img/C7.png",
        "c7": "img/Cm7.png"
    };

    var dChords = {
        "D": "img/D.png",
        "d": "img/dm.png",
        "D7": "img/D7.png",
        "d7": "img/dm7.png"
    };

    var eChords = {
        "E": "img/E.png",
        "e": "img/em.png",
        "E7": "img/E7.png",
        "e7": "img/em7.png"
    };

    var fChords = {
        "F": "img/F.png",
        "f": "img/fm.png",
        "F7": "img/F7.png",
        "f7": "img/fm7.png"
    };

    var gChords = {
        "G": "img/G.png",
        "g": "img/gm.png",
        "G7": "img/G7.png",
        "g7": "img/gm7.png"
    };

    var aChords = {
        "A": "img/A.png",
        "a": "img/am.png",
        "A7": "img/A7.png",
        "a7": "img/am7.png"
    };

    var bChords = {
        "B": "img/B.png",
        "b": "img/bm.png",
        "B7": "img/B7.png",
        "b7": "img/bm7.png"
    };



    var $root = $(".root");

    for (var i = 0; i < $root.length; i++) {
        $root.on("click", function () {
            var $el = $("#select");
            $el.empty();
            $(".root:first").removeClass("selected");
            if (this.textContent === "C") {
                $.each(cChords, function (key, value) {
                    $el.append($("<option></option>")
                        .attr("value", value).text(key));
                    $(".chord-img").attr("src", "img/C.png");
                });
            } else if (this.textContent === "D") {
                $.each(dChords, function (key, value) {
                    $el.append($("<option></option>")
                        .attr("value", value).text(key));
                    $(".chord-img").attr("src", "img/D.png");
                });
            } else if (this.textContent === "E") {
                $.each(eChords, function (key, value) {
                    $el.append($("<option></option>")
                        .attr("value", value).text(key));
                    $(".chord-img").attr("src", "img/E.png");
                });
            } else if (this.textContent === "F") {
                $.each(fChords, function (key, value) {
                    $el.append($("<option></option>")
                        .attr("value", value).text(key));
                    $(".chord-img").attr("src", "img/F.png");
                });
            } else if (this.textContent === "G") {
                $.each(gChords, function (key, value) {
                    $el.append($("<option></option>")
                        .attr("value", value).text(key));
                    $(".chord-img").attr("src", "img/G.png");
                });
            } else if (this.textContent === "A") {
                $.each(aChords, function (key, value) {
                    $el.append($("<option></option>")
                        .attr("value", value).text(key));
                    $(".chord-img").attr("src", "img/A.png");
                });
            } else if (this.textContent === "B") {
                $.each(bChords, function (key, value) {
                    $el.append($("<option></option>")
                        .attr("value", value).text(key));
                    $(".chord-img").attr("src", "img/B.png");
                });
            }
        });
    }


    $("#select").change(function () {
        $("img[name=image-swap]").attr("src", $(this).val());

    });


    $("#info").on("click", function () {
        $("#myModal").css("display", "block");
    });

    $(".close").on("click", function () {
        $("#myModal").css("display", "none");
    });


});
