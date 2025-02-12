
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
    choice = choice.toLowerCase();
    if(choice === "rock"){
        return "Rock";
    }
    else if(choice === "paper"){
        return "Paper";
    }
    else if(choice === "scissors"){
        return "Scissors";
    }
    else{
        return "Invalid choice"
    }
}

// function that encapsulates the general logic of the game
function playGame(){
    
    // defining scoring variables
    let humanScore = 0;
    let computerScore = 0;
    
    // function that encapsulates the logic of a single round
    function playRound(){
        let choice = prompt("Rock, paper, scissors");
        // obtains data from the functions responsible for dealing with choices
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice(choice);

        // test all scenarios of a rock, paper, scissors game and update  scores
        if((computerSelection === "Paper" && humanSelection === "Rock" ) || (computerSelection === "Rock" && humanSelection === "Scissors") 
            || (computerSelection === "Scissors" && humanSelection === "Paper")){
                console.log("You lose! " + `${computerSelection}` + " beats " + `${humanSelection}`);
                computerScore++;
        }
        
        else if((computerSelection === "Rock" && humanSelection === "Paper" ) || (computerSelection === "Scissors" && humanSelection === "Rock") 
            || (computerSelection === "Paper" && humanSelection === "Scissors") ){
                    console.log("You win! " + `${humanSelection}` + " beats " +  `${computerSelection}`);
                    humanScore++;
        }
       
        else if(computerSelection === humanSelection){
            console.log("It's a tie! " + `${computerSelection}` + " against " + `${humanSelection}`);
        }
        else{
            console.log("Invalid round!");
        }
        
    }
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    // compare scores and evaluate the winner
    if(humanScore > computerScore){
        console.log("Congrats! You win!")
    }
    else if(humanScore < computerScore){
        console.log("Oh no! You lose!");
    }
    else{
        console.log("WOW! Tie Game!");
    }
}

playGame();

