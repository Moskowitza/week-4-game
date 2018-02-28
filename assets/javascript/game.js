$(document).ready(function () {  //wait till document loads before running
    var win = 0;    //win and loss are global values that continually update
    var loss = 0;
    var counter = 0;    //initialize counter
    values();           //call functions
    game();
    //setValues for targetNumber and colorGems

    function values() {
        targetNumber = Math.floor((Math.random() * 120) + 19);

        console.log(targetNumber)
        $("#number-to-guess").html("Your Target Number is " + targetNumber);

        function randomNum() {
            return (Math.floor((Math.random() * 12) + 1));
        }
        //give the gems data attributes
        $("#redGem").attr("data-num", randomNum());
        $("#blueGem").attr("data-num", randomNum());
        $("#greenGem").attr("data-num", randomNum());
        $("#yellowGem").attr("data-num", randomNum());
    }
    // console.log($("#redGem").attr("data-num"));//this WORKS! ! ! !
    function game() {
        counter = 0;
        // while (counter<targetNumber){
        //each time a gem is clicked
        $(".crystal-image").on("click", function () {
            counter = counter + parseInt($(this).data('num'));
            $('#sumOfGems').text(counter);
            winLoss();
            function winLoss() {
                if (counter === targetNumber) {
                    win++;
                    $("#wins").html("wins: " + win);
                    $('#sumOfGems').text("");
                    counter = 0;
                    alert("You Win!")
                    values();
                    game();
                } else if (counter > targetNumber) {
                    loss++;
                    $('#sumOfGems').text("");
                    $("#losses").html("losses" + loss);
                    alert("You Lose!")
                    counter = 0;
                    values();
                    game();
                }
            }

        }); //end on click, game function
        console.log(counter);
    }   //close game function

    });//end document ready