
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

// function with logic for a round
function playSingleGame(computerChoice, humanChoice){
    
    if((computerChoice === "Paper" && humanChoice === "Rock" ) || (computerChoice === "Rock" && humanChoice === "Scissors") 
        || (computerChoice === "Scissors" && humanChoice === "Paper")){
            console.log("You lose! " + `${computerChoice}` + " beats " + `${humanChoice}`);
            computerScore++;
    }
    
    else if((computerChoice === "Rock" && humanChoice === "Paper" ) || (computerChoice === "Scissors" && humanChoice === "Rock") 
        || (computerChoice === "Paper" && humanChoice === "Scissors") ){
                console.log("You win! " + `${humanChoice}` + " beats " +  `${computerChoice}`);
                humanScore++;
    }
   
    else if(computerChoice === humanChoice){
        console.log("It's a tie! " + `${computerChoice}` + " against " + `${humanChoice}`);
    }
    else{
        console.log("Invalid round!");
    }

}

//function with logic to repeat a game the equivalent of five rounds
function playGame(){
    
    
    function playRound(){
        let choice = prompt("Rock, paper, scissors");
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice(choice);
        playSingleGame(computerSelection, humanSelection);
        
    }
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
    if(humanScore > computerScore){
        console.log("Congrats! You win!")
    }
    else if(humanScore < computerScore){
        console.log("Oh no! You lose!");
    }
    else{
        console.log("WOW! Tie Game!");
    }
    console.log(humanScore);
    console.log(computerScore);

}

let humanScore = 0;
let computerScore = 0;
playGame();

