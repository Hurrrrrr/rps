// A single-player rock-paper-scissors game
// Version 2.0: Replaced console input with buttons 

"use strict";

const MIN = 0;
const MAX = 2;
const GAMES = 1;

let playerWins = 0;
let playerLosses = 0;

let result = "";

// Button
const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', rockPress);

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', paperPress);

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', scissorsPress);

// Results display
const results = document.querySelector('#results');

const display = document.createElement('div');


// Main Function




// Randomly determine computer selection
function computerPlay() {
    let roll = (getRandomInt(MIN, MAX));
    if (roll === 0) {
        return ("Rock");
    } else if (roll === 1) {
        return ("Paper");
    } else if (roll === 2) {
        return ("Scissors");
    } else {
        alert ("Error: computerPlay failed");
    }
}

// Randomly generate an integer to use for computer selection
function getRandomInt(minInt, maxInt) {
    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}

// Play a round of RPS
function playRound(playerSelection, computerSelection) {
    let cpuMove = computerPlay();   // Determine the CPU's move
    switch (playerSelection) {
        case "r" :  // Determine the result if user selects Rock
            switch (computerSelection) {
                case "Rock" :
                    console.log("Tie! Rock vs. Rock");
                    return("tie");
                case "Paper" :
                    console.log("You Lose! Rock vs. Paper");
                    return("loss");
                case "Scissors" :
                    console.log("You Win! Rock vs. Scissors");
                    return("win");
                default :
                    alert("Error: playRound failed");
            }
        case "p" :  // Determine the result if user selects Paper
            switch(computerSelection) {
                case "Rock" :
                    console.log("You Win! Paper vs. Rock");
                    return("win");
                case "Paper" :
                    console.log("Tie! Paper vs. Rock");
                    return("tie");
                case "Scissors" :
                    console.log("You Lose! Paper vs. Scissors")
                    return("loss");
                default :
                    alert("Error: playRound failed");
            }
        case "s" :  // Determine the result if user selects Scissors
            switch(computerSelection) {
                case "Rock" :
                    console.log("You Lose! Scissors vs. Rock");
                    return("loss");
                case "Paper" :
                    console.log("You Win! Scissors vs. Paper");
                    return("win");
                case "Scissors" :
                    console.log("Tie! Scissors vs. Paper");
                    return("tie");
                default :
                    alert("Error: playRound failed");
            }
    }
}

// Play a 5-round game of RPS
function game() {
    let wins = 0;
    let ties = 0;
    let losses = 0;
    for (let i = 0; i < GAMES; i++){
        let uInput = prompt("Enter your move: ");
        let cpuMove = computerPlay();
        let result = playRound(uInput, cpuMove);
        if (result === "win") {
            wins++;
        } else if (result === "tie") {
            ties++;
        } else if (result === "loss") {
            losses++;
        } else {
            alert("Error: game failed");
        }
    }
    return (wins-losses);
}

// Inform user of correct usage if their input is invalid
function validateInput(word) {
    let lowerWord = word.toLowerCase();
    // Check for valid input
    if (lowerWord != "r" || lowerWord != "p" || lowerWord != "s") {
        if (lowerWord === "rock" || lowerWord === "r") {
            return "r";
        }
        if (lowerWord === "paper" || lowerWord === "p") {
            return "p";
        }
        if (lowerWord === "scissors" || lowerWord === "s") {
            return "s";
        }
        // If input is invalid, display correct usage
        alert("Usage: rock/r OR paper/p OR scissors/s");
    }
}

// Display the results of a 5-round game
function displayGame(score) {
    if (score < 0) {
        console.log("CPU Wins the Match!");
    } else if (score === 0) {
        console.log("The Match is a Draw!");
    } else if (score > 0) {
        console.log("Player Wins!");
    } else {
        alert("Error: displayGame failed");
    }
}

function voteRock() {
    return playRound("r", computerPlay());
}

function votePaper() {
    return playRound("p", computerPlay());
}

function voteScissors() {
    return playRound("s", computerPlay());
}

// Call functions when the player presses the button
function rockPress (e) {
    let result = voteRock();
    if (result === "win") {
        playerWins++;

    } else if (result === "loss") {
        playerLosses++;
    }
    updateDisplay();
    checkScore();
}

function paperPress (e) {
    let result = votePaper();
    if (result === "win") {
        playerWins++;

    } else if (result === "loss") {
        playerLosses++;
    }
    updateDisplay();
    checkScore();
}

function scissorsPress (e) {
    let result = voteScissors();
    if (result === "win") {
        playerWins++;

    } else if (result === "loss") {
        playerLosses++;
    }
    updateDisplay();
    checkScore();
}

function updateDisplay () {
    display.textContent = `Player score: ${playerWins}, Computer score: ${playerLosses}`;
    results.appendChild(display);
}

function checkScore () {
    if (playerWins >= 5) {
        alert("User wins!");
        playerWins = 0;
        playerLosses = 0;
    }
    
    if (playerLosses >= 5) {
        alert("CPU wins!");
        playerWins = 0;
        playerLosses = 0;
    }
}