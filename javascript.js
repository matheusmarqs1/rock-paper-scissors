
/*--------------------                  ROCK, PAPER, SCISSORS           --------------------                                      */


// Trigger the event listener for each button, ensuring that the event handler called uses the specific button that was clicked.
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.id));
});

let result = document.querySelector(".results"); 
let score = document.querySelector(".score");
let scoreHuman = document.createElement("li");
score.appendChild(scoreHuman);
let scoreComputer = document.createElement("li");
score.appendChild(scoreComputer);

let finalResult = document.querySelector("p");

// By using the Math.random method, we can generate random numbers between 0 and 1 and divide them into predefined intervals. 
// Each interval corresponds to a specific range of values, representing one of the computer's three possible choices.

function getComputerChoice(){
    if(Math.random() <= (1/3)){
        return "rock";
    }
    else if(Math.random() <= (2/3)){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;  
let winner = '';
    
// Using the user's choice captured by the event listener, we define a function that simulates a round of the game. 
// This function compares the user's selection with the computer's choice and determines the outcome for that round.
function playRound(humanSelection){
    
    if(humanScore == 5 || computerScore == 5){
        
        score.removeChild(scoreHuman);
        score.removeChild(scoreComputer);
        result.textContent = '';
        finalResult.textContent = "The winner is " + `${ winner = (humanScore == 5) ? "User" : "Computer"} !!`;
        buttons.forEach((button) => {
            button.removeEventListener("click", () => playRound(button.id));
        });
        
        return;
    }
    else{
        let computerSelection = getComputerChoice();
    
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

        scoreHuman.textContent = "Human Score: " + `${humanScore}`;
        scoreComputer.textContent = "Computer Score: " + `${computerScore}`;

    }
        
}
