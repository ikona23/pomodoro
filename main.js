$(document).ready(function(){
    var count = parseInt($('#breaknum').html());
    console.log("this is a count", count)
    console.log(count)
    $('#reset').hide();

    $("#min5min").click(function(){
        console.log("working")
        count -=5
        $("#num").html(count)
        console.log(count)
    })

    $("#add5min").click(function(){
        count +=5
        $("#num").html(count)
    })
})