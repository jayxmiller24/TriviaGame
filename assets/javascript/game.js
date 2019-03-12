$(document).ready(function () {

    var userGuessOne = "";
    var userGuessTwo = "";
    var userGuessThree = "";
    var userGuessFour = "";
    var userGuessFive = "";
    var correct = 0;
    var wrong = 0;







    //-----Gets user guess
    $(".btn").on("click", function () {
        userGuessOne = $(this).attr("value");
        console.log(userGuessOne);


    });
    console.log(userGuessOne)
    $(".btn-2").on("click", function () {
        userGuessTwo = $(this).attr("value");



    });
    $(".btn-3").on("click", function () {
        userGuessThree = $(this).attr("value");



    });
    $(".btn-4").on("click", function () {
        userGuessFour = $(this).attr("value");



    });
    $(".btn-5").on("click", function () {
        userGuessFive = $(this).attr("value")



    });
    $(".btn-6").on("click", function () {
        check();
        stop();
    });

    $(".btn-7").on("click", function () {
        correct = 0;
        wrong = 0;
        number = 30;
        userGuessOne = "";
        userGuessTwo = "";
        userGuessThree = "";
        userGuessFour = "";
        userGuessFive = "";
        console.log(userGuessOne);

    });




    //-------------Timer--------

    var number = 30;

    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#timer").html("<h6>" + "Time Remaining: " + number + "</h6>");

        if (number === 0) {
            check();
            stop();
            alert("Time Up!");


        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    run();



    //-------checks to see if answers are correct



    function check() {


        if ((userGuessOne === "") || (userGuessTwo === "") || (userGuessThree === "") || (userGuessFour === "") || (userGuessFive === "")) {
            reset();
            alert("Please answer all questions!");


        }
        else {
            if (userGuessOne == "false") {
                correct++;
            }
            else {
                wrong++;
                //console.log(userGuessOne)
            }
            if (userGuessTwo !== "false") {
                correct++;

            }
            else {
                wrong++;
            }
            if (userGuessThree !== "false") {
                correct++;
            }
            else {
                wrong++;
            }
            if (userGuessFour !== "false") {
                correct++;
            }
            else {
                wrong++;
            }
            if (userGuessFive !== "true") {
                correct++;
            }
            else {
                wrong++;
            };
        }
        $(".correct").html("Correct: " + correct);
        $(".wrong").html("wrong: " + wrong);
    }
});