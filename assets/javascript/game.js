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

// FUNCTIONS

// Function that begins the game
function beginGame() {
    guessesLeft = totalGuesses;

    // Starts Game
    document.getElementById("startingMessage").innerText = "Press any letter to play.";

    // Computer picks random word from array of divaBank
    computerGuess = Math.floor(Math.random() * (divaBank.length));
    guessesSoFar = [];
    secretWord = [];

    for (let i =0; i < divaBank[computerGuess].length; i++) {
        secretWord.push("_");
    }
    updateGame();
};

// Function that sends info to update the HTML

function updateGame() {

    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;

    for (let i = 0; i < secretWord.length; i++) {
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