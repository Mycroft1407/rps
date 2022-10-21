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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You win! Paper beats rock"; 
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats paper";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You lose! Paper beats rock"; 
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection == "rock" && computerSelection == "Rock" || playerSelection == "paper" && computerSelection == "Paper" || playerSelection == "scissors" && computerSelection == "Scissors") {
        return "Draw!"
    } else {
        console.log("Enter a valid answer")
    } }
  



function game(playRound) {

}