//Rock, Paper, Scissors - By Liam Doherty

// variables
var roundsPlayed = 0;
var maxRounds = 3;

function rps(player) 
{

    //Array of choices for the computer//
    var choices = ["rock", "paper", "scissors"];
    // Pick a random index based on the array length
    //Pick a random item from the choices array and assigns it to the computer var//
    var computer = choices[Math.floor(Math.random() * choices.length)];

    //if/else statements depending on the outcome of play//
    //Compare player's choice with computer's choice to decide win, lose, or draw//


    if (player == computer) 
    {
        //Displays the result on the web page//
        document.getElementById("result").innerHTML = "It's a draw! You both chose " + player;
    }
    else if (player == "rock" && computer == "scissors") 
    {
        document.getElementById("result").innerHTML = "You win, Rock beats scissors";
    }
    else if (player == "rock" && computer == "paper") 
    {
        document.getElementById("result").innerHTML = "You lose, paper beats rock";
    }
    else if (player == "scissors" && computer == "paper") 
    {
        document.getElementById("result").innerHTML = "You win, scissors beats paper";
    }
    else if (player == "scissors" && computer == "rock") 
    {
        document.getElementById("result").innerHTML = "You lose, rock beats scissors";
    }
    else if (player == "paper" && computer == "rock") 
    {
        document.getElementById("result").innerHTML = "You win, paper beats rock";

    }
    else if (player == "paper" && computer == "scissors") 
    {
        document.getElementById("result").innerHTML = "You lose, scissors beats paper";
    }
    // Display player and computer choices on the web page
    document.getElementById("playerChoice").innerHTML = "You Chose: " + player;
    document.getElementById("computerChoice").innerHTML = "The Computer chose: " + computer;
    //adds +1 to var roundsPlayed for every round
    roundsPlayed++;

    //when number of rounds played reaches 3, the buttons dissapear
    if (roundsPlayed == maxRounds) 
    {
        hide()
    }
    //hide function for buttons, and a message telling user they've reached their 3rd chance
    function hide() 
    {

        document.getElementById("rockBtn").style.display = "none";
        document.getElementById("paperBtn").style.display = "none";
        document.getElementById("scissorBtn").style.display = "none";
        document.getElementById("gameOver").innerHTML = "That's 3 chances, Game over! Refresh to play again.";
        return; // stops the game


    }
}


