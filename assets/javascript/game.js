$(document).ready(function () {  //wait till document loads before running
    var win = 0;
    var loss = 0;

        var targetNumber = Math.floor((Math.random() * 120) + 19);
        $("#number-to-guess").text(targetNumber);
        console.log(targetNumber);
    

        function randomNum() {
            return (Math.floor((Math.random() * 12) + 1));
        }
        //give the gems data attributes
        $("#redGem").attr("data-num", randomNum());
        $("#blueGem").attr("data-num", randomNum());
        $("#greenGem").attr("data-num", randomNum());
        $("#yellowGem").attr("data-num", randomNum());

    // console.log($("#redGem").attr("data-num"));//this WORKS! ! ! !

    function game() {
        counter = 0;
        // while (counter<targetNumber){
        //each time a gem is clicked
        $(".crystal-image").on("click", function () {
            counter = counter + parseInt($(this).data('num'));
            $('#sumOfGems').text(counter);
            winLoss();
        }); //end game function
        console.log(counter);

    }
    function winLoss() {
        if (counter === targetNumber) {
            win++;
            $("#winLosses").html("wins" + win);
            reset();
        } else if (counter > targetNumber) {
            loss++;
            $("#winLosses").html("losses" + loss);
            reset();
        }
    }
    function reset() {
        counter = 0;
        targetNumber = 0;
        setTarget();
        setGems();
    }
    game();

});//end document ready