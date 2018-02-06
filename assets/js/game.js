  var bands = ["my chemical romance", "nirvana", "bad religion", "the offspring", "the greenday", "missfits", "new york dolls", "the vandals", "descendents", "blondie"];
  var bandImages = ["assets/images/my-chemical-romance.jpg", "assets/images/nirvana.jpg",
                    "assets/images/bad-religion.jpg", "assets/images/the-offspring.jpg", "assets/images/the-green-day.jpg", "assets/images/misfits.jpg", "assets/images/new-york-dolls.jpg", "assets/images/the-vandals.jpg", "assets/images/descendents.jpg", "assets/images/blondie.jpg"];
  var bandTracks = ["assets/audio/demolition-lovers.mp3", "assets/audio/Come-as-you-are.mp3", "assets/audio/i-love-my-computer.mp3", "assets/audio/give-it-to-me-baby.mp3", "assets/audio/the-forgotten.mp3", "assets/audio/scream.mp3", "assets/audio/its-too-late.mp3", "assets/audio/the-new-you.mp3", "assets/audio/im_the_one.mp3", "assets/audio/heart-of-glass.mp3"];
  var guesses;
  var word;
  var guessedword;
  var guess;
  var numberOfGuesses = document.getElementById("guesses");
  var lettersGuessed = document.getElementById("letters");
  var win = document.getElementById("wins");
  var loss = document.getElementById("losses");
  var currentWord = document.getElementById("word");
  var currentBandImage = document.getElementById("bandImage");
  var prevGuesses = [];
  var winsCount = 0;
  var lossesCount = 0;
  var track = document.getElementById("music")
  var correct = document.createElement('ul');
  var gameStart = true;
  var gameEnd = false;


  // Function that replaces the word letter
  function replaceAt(original, index, replacement) {
      return original.substr(0, index) + replacement+ original.substr(index + replacement.length);
  }


  // Function that sets values as the game starts
  function newGame() {
      gameEnd = false;
      guesses = 15;
      numberOfGuesses.innerHTML = guesses;
      bandIndex = Math.floor(Math.random() * bands.length);
      word = bands[bandIndex];
      currentBandImage.src = bandImages[bandIndex];
      guessedword = word.replace(/\w/g,'-');
      currentWord.innerHTML = guessedword;
      lettersGuessed.innerHTML = "";
      prevGuesses = [];
      win.innerHTML = winsCount;
      loss.innerHTML = lossesCount;
      track.innerHTML = null;

  }

  // Function that runs when the user presses keys
  document.onkeyup = function(event) {

     // Starting the game
     var userGuess = event.key;
     if (gameStart == true && gameEnd == false) {
       newGame();
       gameStart = false;
     }

     // Printing user guesses
     else if(gameEnd == false && prevGuesses.indexOf(userGuess) == -1) {
       lettersGuessed.innerHTML += userGuess + ", "; 
       guesses = guesses - 1;
       prevGuesses.push(userGuess);
       numberOfGuesses.innerHTML = guesses;

       //Replacing dashes with letters
       for(var i = 0; i < word.length; i++) {
        if(word.substr(i,1) == userGuess) {
          guessedword = replaceAt(guessedword,i,userGuess);
        }
       }

       // Checking for wins and losses
       if(guessedword.match('-') === null) {
          winsCount += 1;
          win.innerHTML = winsCount;
          gameEnd = true;
          track.innerHTML = "<audio id='music' src='" + bandTracks[bandIndex] + "' autoplay></audio>";
       }

       else if (guessedword.match('-')!= null && guesses === 0) {
          lossesCount += 1;
          loss.innerHTML = lossesCount;
          gameEnd = true;
       }
       currentWord.innerHTML = guessedword;
     }
  }



