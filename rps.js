/*
    making a rock paper sissors game
    create a function to randomly select rock, paper or scissors twice - params a/b
    compare a/b
    define outcomes for each combination 
    print outcome
*/

function getComputerChoice () {
    const rps = ["Rock", "Paper", "Scissors"]
    let choice = rps[Math.floor(Math.random()*rps.length)];
    return choice;
}

let result = "";
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        return result = "You win! Rock beats scissors";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return result = "You win! Paper beats rock"; 
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return result = "You win! Scissors beats paper";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return result = "You lose! Paper beats rock"; 
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return result = "You lose! Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return result = "You lose! Rock beats scissors";
    } else if (playerSelection == "rock" && computerSelection == "Rock" || playerSelection == "paper" && computerSelection == "Paper" || playerSelection == "scissors" && computerSelection == "Scissors") {
        return result = "Draw!"
    } else {
        console.log("Enter a valid answer")
    } }
  


let playerscore = 0;
let computerscore = 0;

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        console.log(result);
        if (result == "You win! Rock beats scissors" || "You win! Paper beats rock" || "You win! Scissors beats paper") {
           console.log("You scored " + playerscore ++);
        } else if (result == "You lose! Paper beats rock" || "You lose! Scissors beats paper" || "You lose! Rock beats scissors") {
            console.log("CPU scored " + computerscore ++);
        } else (console.log(result));
    }
}