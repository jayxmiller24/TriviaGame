$(document).ready(function () {
    var userGuessOne; 
    
    var userGuessTwo;
    var userGuessThree;
    var userGuessFour;
    var userGuessFive;
    


//-----Gets user guess
$(".btn").on("click",function(){
      userGuessOne = $(this).attr("value");
    console.log(userGuessOne);
    

});
$(".btn-2").on("click",function(){
    userGuessTwo = $(this).attr("value");
    console.log(userGuessTwo);
    

});
$(".btn-3").on("click",function(){
     userGuessThree = $(this).attr("value");
    console.log(userGuessThree);
    

});
$(".btn-4").on("click",function(){
      userGuessFour = $(this).attr("value");
    console.log(userGuessFour);
    

});
$(".btn-5").on("click",function(){
    userGuessFive = $(this).attr("value")
    console.log(userGuessFive);
    

});
$(".btn-6").on("click", function(){
 check();
});





//-------------Timer--------

var number = 10;

var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#timer").html("<h6>" + "Time Remaining: " + number + "</h6>");
    
    if (number === 0) {
        
        stop();
        alert("Time Up!");
        
        
    }
}

function stop() {
    clearInterval(intervalId);
}

run();


});
//-------checks to see if answers are correct
function check(){
    
    var correct = 0;
    var wrong = 0;
if (this.userGuessOne === false){
    correct++;
    
} 
else {
    wrong++;
}
if (this.userGuessTwo === true){
    correct++;

} 
else {
    wrong++;
}
if (this.userGuessThree === true){
    correct++;
} 
else {
    wrong++;
}
if (this.userGuessFour === true){
    correct++;
} 
else {
    wrong++;
}
if (this.userGuessFive === false){
    correct++;
} 
else {
   wrong++;
};
$(".correct").html("Correct: " + correct);
$(".wrong").html("wrong: " + wrong);
}