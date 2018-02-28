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
    function reset() { //counter, Target, gemvalues set to zero
        counter = 0;
        targetNumber = 0;
        redVal = 0;
        blueVal = 0;
        greenVal = 0;
        yellowVal = 0;
        $('#sumOfGems').text(counter);
    }
    //
    //setValues for targetNumber and colorGems

    function values() { //this one sets targetNumber and gemValue

        targetNumber = Math.floor((Math.random() * 120) + 19);
        redVal = (Math.floor((Math.random() * 12) + 1));
        blueVal = (Math.floor((Math.random() * 12) + 1));
        greenVal = (Math.floor((Math.random() * 12) + 1));
        yellowVal = (Math.floor((Math.random() * 12) + 1));
        console.log(targetNumber); //this one gets displayed in Div
        console.log(redVal); //these get written in
        $("#number-to-guess").html("Your Target Number is " + targetNumber);

    }
    function winOrLose() { //if counter = target win++, alert, reset
        if (counter === targetNumber) {
            win++;
            $("#wins").html("Wins : " + win);
            alert("You Win! The number is " + targetNumber)
            reset();
            values();
        } else if (counter > targetNumber) {
            loss++;
            $("#losses").html("Losses : " + loss);
            alert("You Lose!")
            reset();
            values();
        }
    }
    console.log(targetNumber) //still zero
    function game() {
        values();
        //fill target number
        $("#number-to-guess").html("Your Target Number is " + targetNumber);
        //
        $("#redGem").on("click", function () {
            counter = counter + redVal;
            $('#sumOfGems').text(counter);
            winOrLose();
        });
        $("#blueGem").on("click", function () {
            counter = counter + blueVal;
            $('#sumOfGems').text(counter);
            winOrLose();
        });
        $("#greenGem").on("click", function () {
            counter = counter + greenVal;
            $('#sumOfGems').text(counter);
            winOrLose();
        });
        $("#yellowGem").on("click", function () {
            counter = counter + yellowVal;
            $('#sumOfGems').text(counter);
            winOrLose();
        }); //end on click, game function

    }   //close game function
    game();
    console.log(targetNumber)
});//end document ready