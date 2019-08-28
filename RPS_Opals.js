let userScore = 0;
let computerScore = 0;
/* want to show in the dom the _span _div easy to debug later*/ 
const userScore_span = document.getElementById ("user-score");
const computerScore_span = document.getElementById ("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

/* define computer choice - random */
function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = (Math.floor(Math.random() *3)); 
    return choices[randomNumber];
}

/*create win-lose-tie function*/
function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_div.innerHTML = "You Win!";
}
function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_div.innerHTML = "You Lose!";
}
function tie(user, computer){
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_div.innerHTML = "It's a Tie!";
}


/*define game function*/
function game(userChoice){
    const computerChoice = getComputerChoice();
    
    switch (userChoice + computerChoice) {
        case "sp":
        case "pr":
        case "rs":
            win(userChoice, computerChoice);
        break;

        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
        break;

        case "pp":
        case "ss":
        case "rr":
            tie(userChoice, computerChoice);
        break;
    }
}

// function game(userChoice){
//     console.log("You choose "+ userChoice);


   
    rock_div.addEventListener('click', function() {
        /* create game function - takes r,s,p arguments so that something will happen when the user click the button */
        game ('r');
    })
    paper_div.addEventListener('click', function() {
        game ('p');
    })
    scissors_div.addEventListener('click', function() {
        game ('s');
    })

 