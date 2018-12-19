let hand;
let cScore = 0;
let pScore = 0;
let roundResult = document.querySelector('#round-result');
let gameScore = document.querySelector('.game-score');
let displayWinner = document.querySelector('#display-winner');

function computerPlay() {
    if (Math.floor(Math.random()*3) == 0) {
        hand = "rock";}
        else if  (Math.floor(Math.random()*3) == 1) {
        hand = "paper";}
        else { hand = "scissors";}
        return hand;
    }


function playRound(playerSelection, computerSelection){
    if (pScore == 5) {
        return;
    }
    if (cScore == 5) {
        return; 
    }
    if (playerSelection == computerSelection) {
        roundResult.textContent = "It's a draw, you both selected " + playerSelection
        gameScore.textContent = pScore + " - " + cScore;
        }
        else if ((playerSelection == "rock" && computerSelection == "scissors")
               ||(playerSelection == "paper" && computerSelection == "rock")
               ||(playerSelection == "scissors" && computerSelection == "paper")
                ) {
            roundResult.textContent = "You have won! " + playerSelection + " beats " + computerSelection;
            pScore++;
            gameScore.textContent = pScore + " - " + cScore;
            }
        else {
            roundResult.textContent = "You have lost! " + computerSelection + " beats " + playerSelection;
            cScore++;
            gameScore.textContent = pScore + " - " + cScore;
            }
    if (pScore == 5) {
        displayWinner.textContent = "You win!";
    }
    if (cScore == 5) {
        displayWinner.textContent = "You lose";  
    }
}

function reset() {
    cScore = 0;
    pScore = 0;
    roundResult.textContent = 'N/A'
    gameScore.textContent = "0 - 0"
    displayWinner.textContent = ""
    document.querySelector("#player-hand").src = "";
    document.querySelector("#cpu-hand").src = ``;
}

let resetGame = document.querySelector('.reset');
resetGame.addEventListener('click', reset);

let chooseRock = document.querySelector('#rock')
chooseRock.addEventListener('click', function playRock() {
    playRound("rock", computerPlay());
    if (pScore != 5 && cScore != 5) {
        document.querySelector("#player-hand").src = "images/paper.png";
        document.querySelector("#cpu-hand").src = `images/${hand}.png`;
        }
})

let choosePaper = document.querySelector('#paper')
choosePaper.addEventListener('click', function playPaper(){
    playRound("paper", computerPlay());
    if (pScore != 5 && cScore != 5) {
    document.querySelector("#player-hand").src = "images/paper.png";
    document.querySelector("#cpu-hand").src = `images/${hand}.png`;
    }
    
})

let chooseScissors = document.querySelector('#scissors')
chooseScissors.addEventListener('click', function playScissors(){
    playRound("scissors", computerPlay())
    if (pScore != 5 && cScore != 5) {
        document.querySelector("#player-hand").src = "images/paper.png";
        document.querySelector("#cpu-hand").src = `images/${hand}.png`;
        }
})





/*while (cScore < 5 && pScore < 5) {
        let playerSelection = prompt("Choose your hand").toLowerCase()
        let computerSelection = computerplay();
        let score = playRound(playerSelection,computerSelection)
        if (score == "win") {
            pScore = pScore + 1; 
            console.log("You have won! " + playerSelection + " beats " + computerSelection);
            }
            else if (score == "lose") {
            cScore = cScore + 1;
            console.log("You have lost! " + computerSelection + " beats " + playerSelection);
            }
            else {console.log("It's a draw, you both selected " + playerSelection);} */ 