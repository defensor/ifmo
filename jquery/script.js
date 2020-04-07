$(document).ready(function(){
    // First task
    $(".pieceOfShit").css("color", "red");
    $("img.pieceOfShit").css("height", 200);
    $("img.pieceOfShit").css("width", 350);
    disableForms();

    // Second task
    $("a").prepend("↗");
    $("a").attr("target", "_blank");
    $("a[href^='http:']").attr("href", function(index, src){
        return src.replace('http', 'https')
    });
    $("<input>", {"type": "button", "value": "undo action", "id": "butUndoActions", "onclick": "undoActions()"}).appendTo("body");
    $("#butUndoActions").css("position", "absolute");
    $("#butUndoActions").css("top", "0px");
    $("#butUndoActions").css("right", "0px");

    // Third task
    $("<table></table>", {"id": "actionTable", "border": 1}).appendTo("body");
    $("<th>текст</th>").appendTo("#actionTable");
    $("<th>эффект/анимация</th>").appendTo("#actionTable");

    $("<tr></tr>", {"id": "actionRow1"}).appendTo("#actionTable");
    $("<td></td>", {"class": "actionDataText"}).appendTo("#actionRow1");
    $("<td></td>", {"class": "actionDataAction"}).appendTo("#actionRow1");
    $("#actionRow1").children(".actionDataText").html("<p>I hate RKN<p>");
    $("<input>", {"type": "button", "value": "Fade out", "id": "actionButton1"}).appendTo($("#actionRow1").children(".actionDataAction"));
    $("#actionButton1").on("click", function(){
        $("#actionRow1").children(".actionDataText").children().fadeOut();
    });

    $("<tr></tr>", {"id": "actionRow2"}).appendTo("#actionTable");
    $("<td></td>", {"class": "actionDataText"}).appendTo("#actionRow2");
    $("<td></td>", {"class": "actionDataAction"}).appendTo("#actionRow2");
    $("#actionRow2").children(".actionDataText").html("<p style='display: none'>You hate RKN<p>");
    $("<input>", {"type": "button", "value": "Fade in", "id": "actionButton2"}).appendTo($("#actionRow2").children(".actionDataAction"));
    $("#actionButton2").on("click", function(){
        $("#actionRow2").children(".actionDataText").children().fadeIn();
    });

    $("<tr></tr>", {"id": "actionRow3"}).appendTo("#actionTable");
    $("<td></td>", {"class": "actionDataText"}).appendTo("#actionRow3");
    $("<td></td>", {"class": "actionDataAction"}).appendTo("#actionRow3");
    $("#actionRow3").children(".actionDataText").html("<p>She hate RKN<p>");
    $("<input>", {"type": "button", "value": "Slide up", "id": "actionButton3"}).appendTo($("#actionRow3").children(".actionDataAction"));
    $("#actionButton3").on("click", function(){
        $("#actionRow3").children(".actionDataText").children().slideUp();
    });
    
    $("<tr></tr>", {"id": "actionRow4"}).appendTo("#actionTable");
    $("<td></td>", {"class": "actionDataText"}).appendTo("#actionRow4");
    $("<td></td>", {"class": "actionDataAction"}).appendTo("#actionRow4");
    $("#actionRow4").children(".actionDataText").html("<p>He hate RKN<p>");
    $("#actionRow4").children(".actionDataText").children().slideUp(0);
    $("<input>", {"type": "button", "value": "Slide down", "id": "actionButton4"}).appendTo($("#actionRow4").children(".actionDataAction"));
    $("#actionButton4").on("click", function(){
        $("#actionRow4").children(".actionDataText").children().slideDown();
    });

    $("<tr></tr>", {"id": "actionRow5"}).appendTo("#actionTable");
    $("<td></td>", {"class": "actionDataText"}).appendTo("#actionRow5");
    $("<td></td>", {"class": "actionDataAction"}).appendTo("#actionRow5");
    $("#actionRow5").children(".actionDataText").html("<p>Everyone hate RKN<p>");
    $("<input>", {"type": "button", "value": "Slide toggle", "id": "actionButton5"}).appendTo($("#actionRow5").children(".actionDataAction"));
    $("#actionButton5").on("click", function(){
        $("#actionRow5").children(".actionDataText").children().slideToggle();
    });
})

function disableForms(){
    $("input").css("pointer-events", "none")
}

function undoActions(){
    $("a").html(function(index, src){
        return src.replace('↗', '')
    });
    $("a").removeAttr("target");
}