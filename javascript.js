/*
 * Game: Rock, Paper, Scissors
 * 
 * A classic game implemented in JavaScript where the player competes against the computer.
 * First to score 5 points wins the match.
 */

// Game configuration constants.
const WINNING_SCORE = 5;
const RESULT_DELAY = 1000;

// Set up event listeners for choice buttons.
let buttons = document.querySelectorAll("button");

// When any button is clicked, get which button was clicked (rock/paper/scissors).
function handleClick(event) {
    playRound(event.target.id);
}

// Add listener to each button.
buttons.forEach(button => button.addEventListener("click", handleClick));

// DOM elements for displaying game results.
let result = document.querySelector(".results"); 
let score = document.querySelector(".score");
let scoreHuman = document.querySelector(".scoreHuman");
let scoreComputer = document.querySelector(".scoreComputer");
let finalResult = document.querySelector("p");

// Computer makes random choice.
function getComputerChoice(){
    // Get random number between 0-1.
    let random = Math.random();

    // Split into 3 equal parts for each choice.
    if(random <= (1/3)) return "rock";
    else if(random <= (2/3)) return "paper";
    else return "scissors";
    
}

// Game state variables.
let humanScore = 0;
let computerScore = 0;  
let winner = '';
let gameOver = false;
    
// Play one round of the game.
function playRound(humanSelection){

    if(gameOver) return; // Don't play if game is over.
    let computerSelection = getComputerChoice();

    // Compare choices to determine winner.
    if((computerSelection === "paper" && humanSelection === "rock" ) || (computerSelection === "rock" && humanSelection === "scissors") 
        || (computerSelection === "scissors" && humanSelection === "paper")){
            result.textContent = "You lose! " + `${computerSelection}` + " beats " + `${humanSelection}`;
            ++computerScore;
                
    }
            
    else if((computerSelection === "rock" && humanSelection === "paper" ) || (computerSelection === "scissors" && humanSelection === "rock") 
        || (computerSelection === "paper" && humanSelection === "scissors") ){
                result.textContent = "You win! " + `${humanSelection}` + " beats " +  `${computerSelection}`;
                ++humanScore;
                    
    }
        
    else if(computerSelection === humanSelection){
        result.textContent = "It's a tie! " + `${computerSelection}` + " against " + `${humanSelection}`;
    }

    else{
        result.textContent = "Invalid round!";
    }

    updateScore();
    endGame();
        
}

/*
    Checks if game has ended (either player reached 5 points)
    and displays winner after a brief delay.
*/
function endGame(){
    if(humanScore == WINNING_SCORE || computerScore == WINNING_SCORE){
        gameOver = true;
       setTimeout(() => {
        scoreHuman.textContent = '';
        scoreComputer.textContent = '';
        result.textContent = '';
        finalResult.textContent = "The winner is " + `${ winner = (humanScore == 5) ? "User" : "Computer"} !!`;
        buttons.forEach(button => button.removeEventListener("click", handleClick));
       }, RESULT_DELAY); 
        
    }
}
// Updates the score display.
function updateScore() {
    scoreHuman.textContent = "Human Score: " + `${humanScore}`;
    scoreComputer.textContent = "Computer Score: " + `${computerScore}`;
}
