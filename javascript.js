function getComputerChoice() {

    const randomChoice =  Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let pick = "";
    
    switch (randomChoice) {
        case 1:
            pick = "ROCK";
            break;
        case 2:
            pick = "PAPER";
            break;
        case 3:
            pick = "SCISSOR";
            break;
    }

    return pick;
}

function getHumanChoice() {
    return prompt("Enter your pick");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();

        if (humanChoice == computerChoice) {
            console.log("It's a Draw! No points earned.");
            return true;
        }
        else if (humanChoice == "ROCK" && computerChoice == "PAPER"){
            console.log("You win! Rock beats Paper!");
            humanScore++;
        }
        else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        }
        else if (humanChoice == "SCISSOR" && computerChoice == "PAPER") {
            console.log("You win! Scissor beats Paper!");
            humanScore++;
        }
        else if (humanChoice == "ROCK" && computerChoice == "PAPER"){
            console.log("You Lose! Paper Beats Rock!");
            computerScore++;
        }
        else if (humanChoice == "PAPER" && computerChoice == "SCISSOR") {
            console.log("You Lose! Scissor Beats Paper!");
            computerScore++;
        }
        else if (humanChoice == "SCISSOR" && computerChoice == "ROCK") {
            console.log("You Lose! Rock Beats Scissor!");
            computerScore++;
        }

        return false;
    }

    for(let i = 1; i <= 5; i++) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const isDraw = playRound(humanSelection, computerSelection);

        if (isDraw) {
            i--;
        }
    }
    
    if (humanScore > computerScore) {
        console.log("You Win!")
    }
    else {
        console.log("You Lose!");
    }
}

playGame();



