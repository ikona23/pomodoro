$(document).ready(function() {
    var count = parseInt($('#num').html())
    var breakcount = parseInt($('#breaknum').html())

    $('#reset').hide()

    $("#start").click(function() {
        var counter = setInterval(timer, 1000)

        function timer() {
            $('#start, #add5min,#ttl,#time,#min5Break, #min5min,#title2,#breaknum,#add5Break').hide()
            $("#timeType").html("Session time:")
            $("h3").text("Time to do some work")
            count -= 1
            if (count === 0) {
                clearInterval(counter)
                $('#reset').show()
            }
            $("#num").html(count)

            function breakDiv(){
                $('#timeType').html("Party on!:")
                $('#breaknum').show()
                breakCount -=1


            }
            $("#breaknum").html()
        }
    })

    $("#min5min").click(function() {
        if (count > 5)
            count -= 5
        $("#num").html(count)
    })

    $("#add5min").click(function() {
        count += 5
        $("#num").html(count)
    })

    $("#reset").click(function(){
        counter ==100
    })

    $("#min5Break").click(function() {
        if (breakcount > 0)
            breakcount -= 5
        $("#breaknum").html(breakcount)
    })

    $("#add5Break").click(function() {
        breakcount += 5
        $("#breaknum").html(breakcount)
    })
})