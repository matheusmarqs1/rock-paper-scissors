
/*--------------------                          ROCK, PAPER, SCISSORS           --------------------                                      */


//Function with logic to obtain the choice of the computer
function getComputerChoice(){
    if(Math.random() <= (1/3)){
        return "Rock";
    }
    else if(Math.random() <= (2/3)){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

//function with logic to obtain the choice of the user
function getHumanChoice(choice){
    if(choice.toLowerCase() === "rock"){
        return "Rock";
    }
    else if(choice.toLowerCase() === "paper"){
        return "Paper";
    }
    else if(choice.toLowerCase() === "scissors"){
        return "Scissors";
    }
    else{
        return "Invalid choice"
    }
}

// function with logic for a round
function playRound(computerChoice, humanChoice){
    if(computerChoice === "Paper" && humanChoice === "Rock"){
        console.log("You lose! Paper beats Rock");
        ++computerScore;
    }
    else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        console.log("You lose! Rock beats Scissors");
        ++computerScore;
    }
    else if (computerChoice === "Scissors" && humanChoice === "Paper"){
        console.log("You lose! Scissors beats Paper");
        ++computerScore;
    }
    else if(computerChoice === "Rock" && humanChoice === "Paper"){
        console.log("You win! Paper beats Rock");
        ++humanScore;
    }
    else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        console.log("You win! Rock beats Scissors");
        ++humanScore;
    }
    else if (computerChoice === "Paper" && humanChoice === "Scissors"){
        console.log("You win! Scissors beats Paper");
        ++humanScore;
    }
    else if(computerChoice === "Rock" && humanChoice === "Rock"){
        console.log("It's a tie! Rock against Rock");
        
    }
    else if (computerChoice === "Scissors" && humanChoice === "Scissors") {
        console.log("It's a tie! Scissors against Scissors");
        
    }
    else if (computerChoice === "Paper" && humanChoice === "Paper") {
        console.log("It's a tie! Paper against Paper");
        
    }
    

}


// Ask the user
let choice = prompt("Rock, paper or scissors?");

// Creates scoring systems
let humanScore = 0;
let computerScore = 0;


// Sending data to the function with game logic
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice(choice);

// Run the round
playRound(computerSelection, humanSelection);

