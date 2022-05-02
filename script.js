// A single-player console rock-paper-scissors game

const MIN = 0;
const MAX = 2;
const GAMES = 5;

let wins = 0;
let ties = 0;
let losses = 0;


"use strict";

// Prompt user for input

// Validate user input

// Randomly determine computer selection
    // Randomly generate an integer between 0 and 2

// Compare user and computer selections

// Record and display result

// Repeat until five rounds are complete



/* TODO: test and connect the validate input function
    figure out why only one game is played
    keep track of score
    output final result
*/


game();


// Randomly generate an integer to use for computer selection
function getRandomInt(minInt, maxInt) {
    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}

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

// Play a round of RPS
function playRound(playerSelection, computerSelection) {
    let cpuMove = computerPlay();   // Determine the CPU's move
    switch (playerSelection) {
        case "r" :  // Determine the result if user selects Rock
            switch (computerSelection) {
                case "Rock" :
                    console.log("Tie! Rock vs. Rock");
                    return "tie";
                case "Paper" :
                    console.log("You Lose! Rock vs. Paper");
                    return "loss";
                case "Scissors" :
                    console.log("You Win! Rock vs. Scissors");
                    return "win";
                default :
                    alert("Error: playRound failed");
            }
        case "p" :  // Determine the result if user selects Paper
            switch(computerSelection) {
                case "Rock" :
                    console.log("You Win! Paper vs. Rock");
                    return "win";
                case "Paper" :
                    console.log("Tie! Paper vs. Rock");
                    return "tie";
                case "Scissors" :
                    console.log("You Lose! Paper vs. Scissors")
                    return "loss";
                default :
                    alert("Error: playRound failed");
            }
        case "s" :  // Determine the result if user selects Scissors
            switch(computerSelection) {
                case "Rock" :
                    console.log("You Lose! Scissors vs. Rock");
                    return "loss";
                case "Paper" :
                    console.log("You Win! Scissors vs. Paper");
                    return "win";
                case "Scissors" :
                    console.log("Tie! Scissors vs. Paper");
                    return "tie";
                default :
                    alert("Error: playRound failed");
            }
    }
}

// Play a 5-round game of RPS
function game() {
    for (let i = 0; i < GAMES; i++){
        let uInput = prompt("Enter your move: ");
        let cpuMove = computerPlay();
        let result = playRound(uInput, cpuMove);
        if (result === "win") {
            return "w";
        } else if (result === "tie") {
            return "t";
        } else if (result === "loss") {
            return "l";
        } else {
            alert("Error: game failed");
        }
    }
}

// Validate user input for move
function validateInput(word) {
    let lowerWord = word.toLowerCase();
    while (lowerWord = "") {
        if (lowerWord === "rock" || lowerWord === "r") {
            return "r";
        }
        if (lowerWord === "paper" || lowerWord === "p") {
            return "p";
        }
        if (lowerWord === "scissors" || lowerWord === "s") {
            return "s";
        }
        alert("Usage: rock/r OR paper/p OR scissors/s");
    }
}