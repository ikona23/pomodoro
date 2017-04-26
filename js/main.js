$(document).ready(function() {
    var count = parseInt($('#num').html())
    var breakCount = parseInt($('#breaknum').html())

    $('#reset').hide()

    $("#start").click(function() {
        var counter = setInterval(timer, 1000)
        count*=60
        breakCount*=60

        function timer() {
            $('#start, #add5min,#ttl,#time,#min5Break, #min5min,#title2,#breaknum,#add5Break').hide()
            $("#timeType").html("Session time:")
            $("#timeType").show()
            $("h3").text("Time to do some work")
            $('#num').css( "font-size", "100px" )
            count -= 1
            if (count === 0) {
                clearInterval(counter)
                var startBreak=setInterval(breakTimer,1000)
                $('#num').hide()
            }
            if(count%60>=10){
                $("#num").html(Math.floor(count/60)+":"+count%60)
            }else{
                $("#num").html(Math.floor(count/60)+":"+ "0" + count%60)
            }

            function breakTimer(){
                $('#timeType').html("Party on!: ")
                $('#breaknum').show()
                $('#timeType').show()
                $('#breaknum').css( "font-size", "100px" );
                breakCount -=1
                if(breakCount===0){
                    clearInterval(startBreak)
                    $('#reset').show()
                    $('#breaknum,#timeType').hide()
                }
                if(breakCount%60>=10) {
                    $("#breaknum").html(Math.floor(breakCount/60) + ":" + breakCount%60)
                }
                else{
                    $("#breaknum").html(Math.floor(breakCount/60)+":"+"0"+breakCount%60)
                }
            }
        }
    })

    $('#reset').click(function(){
        count=25
        breakCount=25
        $('#breaknum').html(breakCount)
        $('#num').html(count)
        $('#start, #num, #add5min,#ttl,#time,#min5Break,#add5Break,#min5min,#title2,#breaknum').show()
        $('#reset').hide()
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

    $("#min5Break").click(function() {
        if (breakCount > 0)
            breakCount -= 5
        $("#breaknum").html(breakCount)
    })

    $("#add5Break").click(function() {
        breakCount += 5
        $("#breaknum").html(breakCount)
    })
})


