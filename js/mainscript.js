$(document).ready(function() {
    var totcreds = 0;
    $("#alert-box").hide();

    $("#quickb").click(function() {
        $("#quick").toggleClass("vis");
    });
    $("#toggTslots").click(function() {
        $(".majT").toggleClass("vis");
    });
    $(".maj .btn").click(function() {
        if ($(this).hasClass("A1-tile")) {
            $(".TimetableContent.A1").toggleClass("selected");
        }
        if ($(this).hasClass("B1-tile")) {
            $(".TimetableContent.B1").toggleClass("selected");
        }
        if ($(this).hasClass("C1-tile")) {
            $(".TimetableContent.C1").toggleClass("selected");
        }
        if ($(this).hasClass("D1-tile")) {
            $(".TimetableContent.D1").toggleClass("selected");
        }
        if ($(this).hasClass("E1-tile")) {
            $(".TimetableContent.E1").toggleClass("selected");
        }
        if ($(this).hasClass("F1-tile")) {
            $(".TimetableContent.F1").toggleClass("selected");
        }
        if ($(this).hasClass("G1-tile")) {
            $(".TimetableContent.G1").toggleClass("selected");
        }
        if ($(this).hasClass("A2-tile")) {
            $(".TimetableContent.A2").toggleClass("selected");
        }
        if ($(this).hasClass("B2-tile")) {
            $(".TimetableContent.B2").toggleClass("selected");
        }
        if ($(this).hasClass("C2-tile")) {
            $(".TimetableContent.C2").toggleClass("selected");
        }
        if ($(this).hasClass("D2-tile")) {
            $(".TimetableContent.D2").toggleClass("selected");
        }
        if ($(this).hasClass("E2-tile")) {
            $(".TimetableContent.E2").toggleClass("selected");
        }
        if ($(this).hasClass("F2-tile")) {
            $(".TimetableContent.F2").toggleClass("selected");
        }
        if ($(this).hasClass("G2-tile")) {
            $(".TimetableContent.G2").toggleClass("selected");
        }
    });
    $(".majT .btn").click(function() {
        if ($(this).hasClass("TA1-tile")) {
            $(".TimetableContent.TA1").toggleClass("selected");
        }
        if ($(this).hasClass("TB1-tile")) {
            $(".TimetableContent.TB1").toggleClass("selected");
        }
        if ($(this).hasClass("TC1-tile")) {
            $(".TimetableContent.TC1").toggleClass("selected");
        }
        if ($(this).hasClass("TD1-tile")) {
            $(".TimetableContent.TD1").toggleClass("selected");
        }
        if ($(this).hasClass("TE1-tile")) {
            $(".TimetableContent.TE1").toggleClass("selected");
        }
        if ($(this).hasClass("TF1-tile")) {
            $(".TimetableContent.TF1").toggleClass("selected");
        }
        if ($(this).hasClass("TG1-tile")) {
            $(".TimetableContent.TG1").toggleClass("selected");
        }
        if ($(this).hasClass("TA2-tile")) {
            $(".TimetableContent.TA2").toggleClass("selected");
        }
        if ($(this).hasClass("TB2-tile")) {
            $(".TimetableContent.TB2").toggleClass("selected");
        }
        if ($(this).hasClass("TC2-tile")) {
            $(".TimetableContent.TC2").toggleClass("selected");
        }
        if ($(this).hasClass("TD2-tile")) {
            $(".TimetableContent.TD2").toggleClass("selected");
        }
        if ($(this).hasClass("TE2-tile")) {
            $(".TimetableContent.TE2").toggleClass("selected");
        }
        if ($(this).hasClass("TF2-tile")) {
            $(".TimetableContent.TF2").toggleClass("selected");
        }
        if ($(this).hasClass("TG2-tile")) {
            $(".TimetableContent.TG2").toggleClass("selected");
        }
        if ($(this).hasClass("TAA1-tile")) {
            $(".TimetableContent.TAA1").toggleClass("selected");
        }
        if ($(this).hasClass("TAA2-tile")) {
            $(".TimetableContent.TAA2").toggleClass("selected");
        }
        if ($(this).hasClass("TBB2-tile")) {
            $(".TimetableContent.TBB2").toggleClass("selected");
        }
        if ($(this).hasClass("TCC1-tile")) {
            $(".TimetableContent.TCC1").toggleClass("selected");
        }
        if ($(this).hasClass("TCC2-tile")) {
            $(".TimetableContent.TCC2").toggleClass("selected");
        }
        if ($(this).hasClass("TDD2-tile")) {
            $(".TimetableContent.TDD2").toggleClass("selected");
        }
    });
    $("#quickreset").click(function() {
        $(".TimetableContent").removeClass("selected");
        $(".TimetableContent .ccode").empty();
        $(".sel-list").empty();
    });
    $("#course-search").keyup(function() {
        $("#results").html('');
        var sf = $("#course-search").val();
        var expr = new RegExp(sf, "i");
        $.getJSON('data/final_data_fall19.json', function(data) {
            $.each(data, function(key, value) {
                if (value.CODE.search(expr) != -1 || value.TITLE.search(expr) !=
                    -1) {
                    var strslot = (value.SLOT).split("+");
                    $('#results').append('<li class="clist ' + strslot[0] +
                        ' ' + strslot[1] + ' list-group-item" id="' + value
                        .SLOT + ' sp ' + value
                        .CODE + ' sp ' + value
                        .TITLE + ' sp ' + value
                        .FACULTY + ' sp ' + value
                        .VENUE + ' sp ' + value
                        .CREDITS + '" >' +
                        value.CODE + '|<span class="text-muted">' + value
                        .TITLE + '</span><br><b>' + value.SLOT +
                        '</b>|<span class="text-muted">' + value.VENUE +
                        '</span><br><b>By</b>:' + value.FACULTY +
                        '<br><button class="btn btn-outline-success" id="lbut">ADD</button></li>'
                    );
                }
            });
            $(".clist").click(function() {
                var classNames = $(this).attr("class").toString().split(' ');
                var coursecode = $(this).attr("id").toString().split(' sp ');
                $.each(classNames, function(i, className) {
                    if (className == "A1") {
                        $(".TimetableContent.A1").addClass("selected");
                        if (($(".TimetableContent.A1 .ccode").is(
                                ':empty'))) {
                            $(".TimetableContent.A1 .ccode").html(
                                "<br>" + coursecode[4] + "<br>" +
                                coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);

                        } else {
                            $("#alert-box").html("UNABLE TO ADD " + coursecode[1] + ".<br> IT'S A CLASH FOR " + className +
                                " SLOT !" + '<br><small class="text-muted">CLICK TO DISMISS</small>');

                            $("#alert-box").show(200);
                            $("#alert-box").click(function() {
                                $("#alert-box").fadeOut(1000);
                            });


                        }
                    }
                    if (className == "B1") {
                        $(".TimetableContent.B1").addClass("selected");
                        if (($(".TimetableContent.B1 .ccode").is(
                                ':empty'))) {
                            $(".TimetableContent.B1 .ccode").html("<br>" + coursecode[4] + "<br>" +
                                coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);
                        } else {
                            $("#alert-box").html("UNABLE TO ADD " + coursecode[1] + ".<br> IT'S A CLASH FOR " + className +
                                " SLOT !" + '<br><small class="text-muted">CLICK TO DISMISS</small>');

                            $("#alert-box").show(200);
                            $("#alert-box").click(function() {
                                $("#alert-box").fadeOut(1000);
                            });


                        }
                    }
                    if (className == "C1") {
                        $(".TimetableContent.C1").addClass("selected");
                        if (($(".TimetableContent.C1 .ccode").is(
                                ':empty'))) {
                            $(".TimetableContent.C1 .ccode").html("<br>" + coursecode[4] + "<br>" +
                                coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);
                        } else {
                            $("#alert-box").html("UNABLE TO ADD " + coursecode[1] + ".<br> IT'S A CLASH FOR " + className +
                                " SLOT !" + '<br><small class="text-muted">CLICK TO DISMISS</small>');

                            $("#alert-box").show(200);
                            $("#alert-box").click(function() {
                                $("#alert-box").fadeOut(1000);
                            });


                        }
                    }
                    if (className == "D1") {
                        $(".TimetableContent.D1").addClass("selected");
                        if (($(".TimetableContent.D1 .ccode").is(
                                ':empty'))) {
                            $(".TimetableContent.D1 .ccode").html("<br>" + coursecode[4] + "<br>" +
                                coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);
                        } else {
                            $("#alert-box").html("UNABLE TO ADD " + coursecode[1] + ".<br> IT'S A CLASH FOR " + className +
                                " SLOT !" + '<br><small class="text-muted">CLICK TO DISMISS</small>');

                            $("#alert-box").show(200);
                            $("#alert-box").click(function() {
                                $("#alert-box").fadeOut(1000);
                            });


                        }
                    }
                    if (className == "E1") {
                        $(".TimetableContent.E1").addClass("selected");
                        if (($(".TimetableContent.E1 .ccode").is(
                                ':empty'))) {
                            $(".TimetableContent.E1 .ccode").html("<br>" + coursecode[4] + "<br>" +
                                coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);
                        } else {
                            $("#alert-box").html("UNABLE TO ADD " + coursecode[1] + ".<br> IT'S A CLASH FOR " + className +
                                " SLOT !" + '<br><small class="text-muted">CLICK TO DISMISS</small>');

                            $("#alert-box").show(200);
                            $("#alert-box").click(function() {
                                $("#alert-box").fadeOut(1000);
                            });


                        }
                    }
                    if (className == "F1") {
                        $(".TimetableContent.F1").addClass("selected");
                        if (($(".TimetableContent.F1 .ccode").is(
                                ':empty'))) {
                            $(".TimetableContent.F1 .ccode").html("<br>" + coursecode[4] + "<br>" +
                                coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);
                        } else {
                            $("#alert-box").html("UNABLE TO ADD " + coursecode[1] + ".<br> IT'S A CLASH FOR " + className +
                                " SLOT !" + '<br><small class="text-muted">CLICK TO DISMISS</small>');

                            $("#alert-box").show(200);
                            $("#alert-box").click(function() {
                                $("#alert-box").fadeOut(1000);
                            });


                        }
                    }
                    if (className == "G1") {
                        $(".TimetableContent.G1").addClass("selected");
                        if (($(".TimetableContent.G1 .ccode").is(
                                ':empty'))) {
                            $(".TimetableContent.G1 .ccode").html("<br>" + coursecode[4] + "<br>" +
                                coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);
                        } else {
                            $("#alert-box").html("UNABLE TO ADD " + coursecode[1] + ".<br> IT'S A CLASH FOR " + className +
                                " SLOT !" + '<br><small class="text-muted">CLICK TO DISMISS</small>');

                            $("#alert-box").show(200);
                            $("#alert-box").click(function() {
                                $("#alert-box").fadeOut(1000);
                            });


                        }
                    }
                    if (className == "TA1") {
                        $(".TimetableContent.TA1").addClass("selected");
                        if (($(".TimetableContent.TA1 .ccode").is(
                                ':empty'))) {
                            $(".TimetableContent.TA1 .ccode").html(
                                "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);
                        } else {
                            $("#alert-box").html("UNABLE TO ADD " + coursecode[1] + ".<br> IT'S A CLASH FOR " + className +
                                " SLOT !" + '<br><small class="text-muted">CLICK TO DISMISS</small>');

                            $("#alert-box").show(200);
                            $("#alert-box").click(function() {
                                $("#alert-box").fadeOut(1000);
                            });


                        }
                    }
                    if (className == "TB1") {
                        $(".TimetableContent.TB1").addClass("selected");
                        $(".TimetableContent.TB1 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TC1") {
                        $(".TimetableContent.TC1").addClass("selected");
                        $(".TimetableContent.TC1 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TD1") {
                        $(".TimetableContent.TD1").addClass("selected");
                        $(".TimetableContent.TD1 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TE1") {
                        $(".TimetableContent.TE1").addClass("selected");
                        $(".TimetableContent.TE1 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TF1") {
                        $(".TimetableContent.TF1").addClass("selected");
                        $(".TimetableContent.TF1 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TG1") {
                        $(".TimetableContent.TG1").addClass("selected");
                        $(".TimetableContent.TG1 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "A2") {
                        $(".TimetableContent.A2").addClass("selected");
                        $(".TimetableContent.A2 .ccode").html("<br>" + coursecode[4] + "<br>" +
                            coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "B2") {
                        $(".TimetableContent.B2").addClass("selected");
                        $(".TimetableContent.B2 .ccode").html("<br>" + coursecode[4] + "<br>" +
                            coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "C2") {
                        $(".TimetableContent.C2").addClass("selected");
                        $(".TimetableContent.C2 .ccode").html("<br>" + coursecode[4] + "<br>" +
                            coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "D2") {
                        $(".TimetableContent.D2").addClass("selected");
                        $(".TimetableContent.D2 .ccode").html("<br>" + coursecode[4] + "<br>" +
                            coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "E2") {
                        $(".TimetableContent.E2").addClass("selected");
                        $(".TimetableContent.E2 .ccode").html("<br>" + coursecode[4] + "<br>" +
                            coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "F2") {
                        $(".TimetableContent.F2").addClass("selected");
                        $(".TimetableContent.F2 .ccode").html("<br>" + coursecode[4] + "<br>" +
                            coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "G2") {
                        $(".TimetableContent.G2").addClass("selected");
                        $(".TimetableContent.G2 .ccode").html("<br>" + coursecode[4] + "<br>" +
                            coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TA2") {
                        $(".TimetableContent.TA2").addClass("selected");
                        $(".TimetableContent.TA2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TB2") {
                        $(".TimetableContent.TB2").addClass("selected");
                        $(".TimetableContent.TB2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TC2") {
                        $(".TimetableContent.TC2").addClass("selected");
                        $(".TimetableContent.TC2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TD2") {
                        $(".TimetableContent.TD2").addClass("selected");
                        $(".TimetableContent.TD2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TE2") {
                        $(".TimetableContent.TE2").addClass("selected");
                        $(".TimetableContent.TE2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TF2") {
                        $(".TimetableContent.TF2").addClass("selected");
                        $(".TimetableContent.TF2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TG2") {
                        $(".TimetableContent.TG2").addClass("selected");
                        $(".TimetableContent.TG2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TAA1") {
                        $(".TimetableContent.TAA1").addClass(
                            "selected");
                        $(".TimetableContent.TAA1 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TAA2") {
                        $(".TimetableContent.TBB2").addClass(
                            "selected");
                        $(".TimetableContent.TBB2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TBB2") {
                        $(".TimetableContent.TBB2").addClass(
                            "selected");
                        $(".TimetableContent.TBB2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TCC1") {
                        $(".TimetableContent.TCC1").addClass(
                            "selected");
                        $(".TimetableContent.TCC1 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TCC2") {
                        $(".TimetableContent.TCC2").addClass(
                            "selected");
                        $(".TimetableContent.TCC2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);
                    }
                    if (className == "TDD2") {
                        $(".TimetableContent.TDD2").addClass(
                            "selected");
                        $(".TimetableContent.TDD2 .ccode").html(
                            "<br>" + coursecode[4] + "<br>" + coursecode[1]);
                        $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                            "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                        totcreds = totcreds + parseInt(coursecode[5]);
                        $("#totcred").html(totcreds);

                    }
                    var i;
                    for (i = 1; i <= 60; i++) {
                        if (className == ("L" + i)) {
                            $((".TimetableContent.L" + i)).addClass(
                                "selected");
                            $(".TimetableContent.L" + i + " .ccode")
                                .html("<br>" + coursecode[4] + "<br>" + coursecode[1]);
                            $(".sel-list").append("<tr><th scope='col'>" + coursecode[0] +
                                "</th><th scope='col'>" + coursecode[1] + "</th><th scope='col'>" + coursecode[2] + "</th><th scope='col'>" + coursecode[3] + "</th><th scope='col'>" + coursecode[4] + "</th><th scope='col'>" + coursecode[5] + "</th></tr>");
                            totcreds = totcreds + parseInt(coursecode[5]);
                            $("#totcred").html(totcreds);
                        }
                    }
                });
            });
        });
    });
});