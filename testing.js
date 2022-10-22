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


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You win!"
    } else if (playerSelection == computerSelection) {
        result = "Draw!"
    } else {
        result = "You lose!"
    }
}    