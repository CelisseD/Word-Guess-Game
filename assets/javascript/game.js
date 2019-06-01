// VARIABLES

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var totalGuesses = 10;

// Declares an empty array to hold our guesses

var guessesSoFar = [];

// Declares a list of possible divas

var divaBank = ["Mariah", "Whitney", "Celine", "Adele", "Madonna", "Rihanna", "Beyonce", "Gaga"]

// Empty array holding the computer guess
var computerGuess = "";

// Empty array that holds the actual word that the user has to guess
var secretWord = [];

// Press any key to play again banner
var finishedGame = false;

// Diva singing if you win
var winnerSound = new Audio('...');

var secretWordText = "";

var computerGuessIndex;

var secretWordIndex;

var compareGuess; 

// FUNCTIONS

// Function that begins the game
function resetGame() {
    guessesLeft = totalGuesses;

    // Starts Game
    document.getElementById("startingMessage").innerText = "Press any letter to play.";

    // Computer picks random word from array of divaBank
    computerGuess = Math.floor(Math.random() * (divaBank.length));
    guessesSoFar = [];
    secretWord = [];

    for (i =0; i < divaBank[computerGuess].length; i++) {
        secretWord.push("_");
    }
    updateGame();
};

// Function that sends info to update the HTML

function updateGame() {

    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;

    for (i = 0; i < secretWord.length; i++) {
        secretWordText += secretWord[i];
    }

    console.log("computerGuess: ", secretWordText);
    console.log("secretWord: ", secretWordText);
    console.log("computerGuessIndex: ", computerGuess);
    console.log("Diva: ", divaBank[computerGuessIndex]);
    document.getElementById("computerGuess").innerText = secretWordText;
    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("guessesSoFar").innerText = guessesSoFar;
};

// Function to go through all the letters in a word and compare to user input

function compareGuess(letter) {
    var stringArray = [];
    console.log("Computer Guess Index: ", computerGuessIndex);
    for (i = 0; i < divaBank[computerGuessIndex].length; i++) {
        if (divaBank[computerGuessIndex][i] === letter) {
            stringArray.push(i);
        }
    }

    if (stringArray.length <= 0) {
        guessesLeft--;
    }
    else {
        for (i = 0; i < stringArray.length; i++) {
            secretWord[stringArray[i]] = letter;
        }
    }
}

// Function to check for a win or a loss based on keys user entered

function checkForWin() {
    if (secretWord.indexOf("_") === -1) {
        wins++;
        finishedGame = true;
        document.getElementById("startingMessage").innerText = "Congrats! You Win!";
    }
};

function checkForLoss() {
    if (guessesLeft <= 0) {
        finishedGame = true;
        losses++;
        document.getElementById("startingMessage").innerText = "You lose and have disappointed Mariah.";
    }
};

function letterPress(letter) {
    if (guessesLeft > 0) {
        if (guessesSoFar.indexOf(letter) === -1) {
            guessesSoFar.push(letter);
            compareGuess(letter);
        }
    }
};

// Start the game by pressing a key using document.onkeyup
// toLowerCase changes whatever the user presses into lowercase to match the computer array

document.onkeyup = "function(event)"; {
    if (finishedGame) {
        resetGame();
        finishedGame = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterPress(event.key.toLowerCase());
            updateGame();
            checkForWin();
            checkForLoss();
        }
    }
};