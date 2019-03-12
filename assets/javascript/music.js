$(document).ready(function(){
    var audioElement = document.createElement("audio");
    
    audioElement.setAttribute("src", "assets/audio/opening.mp3");

      // Theme Button
      $(".theme-button").on("click", function() {
        audioElement.play();
      });

      // Pause Button
      $(".pause-button").on("click", function() {
        audioElement.pause();
      });
    

});