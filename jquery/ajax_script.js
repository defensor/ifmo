$(document).ready(function(){
    $("#butUpdate").on("click", function(){
        $("#updatebleDiv").load("https://inxaoc.github.io/example/ajax-1.html");
        var data = $.ajax({url:"https://inxaoc.github.io/example/ajax.json", async:false}).responseJSON;
        console.log(data);

        let $ul = $("<ul>");
        recursiveIterator(data, $ul);
        $ul.appendTo($("body"));

    })
})


function recursiveIterator(object, parent){
    for (let property in object) {
        console.log(object[property]);
        if (typeof object[property] == "object"){
            let $li = $("<li>");
            $li.html(property);
            $li.appendTo(parent);

            let $ul = $("<ul>");
            $ul.appendTo($li);
            recursiveIterator(object[property], $ul);
        }else{
            let $li_key = $("<li>");
            $li_key.html(property);
            $li_key.appendTo(parent);

            let $ul = $("<ul>");
            $ul.appendTo($li_key);
            
            let $li_val = $("<li>");
            $li_val.html(object[property]);
            $li_val.appendTo($ul);
        }
    }
}