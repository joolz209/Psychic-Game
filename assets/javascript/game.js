var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var numWins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (character === computerGuess) {

        alert("You win!");
        numWins = numWins + 1;
        showWins();
        //toggleGame();

    } else if (guessesLeft === 0) {
        alert("Lets start over.");
        resetVariables ();

    }

}

document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + numWins;
		restart();
	} 
	else if (guessesLeft === 0) {
        losses++;
        alert("Let's start over.")
        resetVariables ();
    }
    
  };