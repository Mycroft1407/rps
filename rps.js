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
    console.log(choice);
}