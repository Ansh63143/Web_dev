let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    } 
    else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win!";
        userScore++;
    } 
    else {
        result = "Computer Wins!";
        computerScore++;
    }

    console.log("Your Choice:", userChoice);
    console.log("Computer Choice:", computerChoice);
    console.log(result);
    console.log("Your Score:", userScore);
    console.log("Computer Score:", computerScore);
}

// Example Calls
playGame("Rock");
playGame("Paper");
playGame("Scissors");