$(document).ready(function () {  //wait till document loads before running
    var win = 0;    //win and loss are global values that continually update
    var loss = 0;
    var counter = 0;
    var targetNumber = 0; //initialize counter, the sum of our clicked gems
    var redVal = 0;
    var blueVal = 0;
    var greenVal = 0;
    var yellowVal = 0;
    //call functions: 

    //
    //setValues for targetNumber and colorGems

    function values() { //this one sets targetNumber and gemValue
        counter = 0;
        redVal = 0;
        blueVal = 0;
        greenVal = 0;
        yellowVal = 0;
        targetNumber = 0;
        targetNumber = Math.floor((Math.random() * 120) + 19);

        redVal = (Math.floor((Math.random() * 12) + 1));
        blueVal = (Math.floor((Math.random() * 12) + 1));
        greenVal = (Math.floor((Math.random() * 12) + 1));
        yellowVal = (Math.floor((Math.random() * 12) + 1));

        // function randomNum() {
        //     return (Math.floor((Math.random() * 12) + 1));
        // }
        //give the gems data attributes
        $("#redGem").attr("data-num", redVal);
        $("#blueGem").attr("data-num", blueVal);
        $("#greenGem").attr("data-num", greenVal);
        $("#yellowGem").attr("data-num", yellowVal);
        console.log($("#redGem").attr("data-num"));//this WORKS! ! ! !

    }
    function winOrLose() {
        if (counter === targetNumber) {
            win++;
            $("#wins").html("Wins : " + win);
            // counter = 0;
            // targetNumber = 0;
            alert("You Win!")
            // game();
            values();
        } else if (counter > targetNumber) {
            loss++;
            $("#losses").html("Losses : " + loss);
            alert("You Lose!")
            counter = 0;
            targetNumber = 0;
            // game();
            values();
        }
    }
    // console.log($("#redGem").attr("data-num"));//this WORKS! ! ! !
    // ERROR: on subsequent games values of DOUBLED per click
    values();
    function game() {
        console.log(targetNumber)
        $("#number-to-guess").html("Your Target Number is " + targetNumber);
        $(".crystal-image").on("click", function () {
            counter = counter + parseInt($(this).data('num'));
            $('#sumOfGems').text(counter);
            winOrLose();
        }); //end on click, game function

    }   //close game function
    game();
});//end document ready