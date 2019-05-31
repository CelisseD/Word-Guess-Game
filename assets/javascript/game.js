// VARIABLES

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var totalGuesses = 9;

// Declares an empty array to hold our guesses

var guessesSoFar = [];

// Declares a list of possible words

var possibleWords = ["Mariah", "Whitney", "Celine", "Adele", "Madonna", "Rihanna", "Beyonce", "Gaga"]

// Empty array holding the computer guess
var computerGuess = "";

// Empty array that holds the actual word that the user has to guess
var secretWord = [];

// Press any key to play again banner
var finishedGame = false;

// Diva singing if you win
var winnerSound = new Audio('...');

