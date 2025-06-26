let computerScore = 0;
let humanScore = 0;
const pick = document.querySelector("div");
const para = document.querySelector("h1");
const round = document.querySelector("p");

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

function playGame() {

    let roundNum = 1;
    round.textContent = `Round ${roundNum}`;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            para.textContent = "Draw! No points earned.";
            humanScore++;
        }
        else if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
            para.textContent = "You Win! Rock beats Scissor.";
            humanScore++;
        }
        else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            para.textContent = "You Win! Paper beats Rock."
            humanScore++;
        }
        else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
            para.textContent = `You Win! Scissor beats Paper.`;
            humanScore++;
        }
        else {
            para.textContent = "You Lose!";
            computerScore++;
        }
    }

    pick.addEventListener("click", (e) => {
        const target = e.target.id;

        const humanPick = target.toUpperCase();
        const computerPick = getComputerChoice();

        playRound(humanPick, computerPick);
        roundNum++;
        round.textContent = `Round ${roundNum}`;


        if (roundNum > 5) {
            if (humanScore > computerScore) {
                alert("You Win!");
            }
            else {
                alert("You lost!");
                
            }
            roundNum = 1;
            round.textContent = `Round ${roundNum}`;
        }
    });


}



playGame();




