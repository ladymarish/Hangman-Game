document.onkeyup = function(event) {
   // Determines which key was pressed.
      var userGuess = event.key;
      return userGuess;
 }

var guesses = document.getElementById("lettersGuessed");
guesses.innerHTML = 'Letters already guessed' + userGuess;

//document.getElementById("lettersGuessed").innerHTML =  'Letters already guessed' + userGuess; 

//document.getElementById("lettersGuessed").innerHTML = toCelsius(77); 
//document.onkeyup = function(event) {
//var userText = document.getElementById("game");
//var html = "<p>wins: " + wins + "</p>" +
