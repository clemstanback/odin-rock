const options = ["rock", "paper", "scissors"];
function getRandomInt(min, max) {
    return options[Math.floor(Math.random() * (max - min))] + min;
}

function getComputerChoice() {
  const choice = options[getRandomInt(0, 2)]
  return choice;
}
function checkWinner(playerSElection, computerSelection){
    if(playerSelection == computerSelection){
        retrun "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors")
        (playerSelection == "scissors" && computerSelection == "paper")
        (playerSelection == "paper" && computerSelection == "rock")
    )
}
function playRound(playerSelection, computerSelection)
getComputerChoice();
