var rockChoice = document.querySelector('#rock');
var paperChoice = document.querySelector('#paper');
var scissorsChoice = document.querySelector('#scissors');
var countdownTimer = document.querySelector('#countdownTimer');
var userDisplay = document.querySelector('#userDisplay');
var compDisplay = document.querySelector('#compDisplay');
var userScore = document.querySelector('#userScore');
var compScore = document.querySelector('#compScore');
var userScoreDisplay = 0;
var compScoreDisplay = 0;
var userChoice;
var compChoice;
var countdown = 3;
var choices = ['rock', 'paper', 'scissors'];
rockChoice.addEventListener('click', function (e) {
    userChoice = rockChoice.name;
    compChoice = computerChoice(choices);
    gameLogic(compChoice, userChoice);
    startCountdown();
});
paperChoice.addEventListener('click', function (e) {
    userChoice = paperChoice.name;
    compChoice = computerChoice(choices);
    gameLogic(compChoice, userChoice);
    startCountdown();
});
scissorsChoice.addEventListener('click', function (e) {
    userChoice = scissorsChoice.name;
    compChoice = computerChoice(choices);
    gameLogic(compChoice, userChoice);
    startCountdown();
});
function computerChoice(choices) {
    var choice = Math.floor(Math.random() * choices.length);
    if (choice === 0) {
        compChoice = 'rock';
        return compChoice;
    }
    else if (choice === 1) {
        compChoice = 'paper';
        return compChoice;
    }
    else {
        compChoice = 'scissors';
        return compChoice;
    }
}
function gameLogic(compChoice, userChoice) {
    if (compChoice === userChoice) {
        console.log('Tie!!!!');
    }
    else if (compChoice === 'rock' && userChoice === 'paper') {
        console.log('User Wins - paper stronger than rock');
        userScoreDisplay += 1;
        userScore.innerHTML = userScoreDisplay.toString();
    }
    else if (compChoice === 'paper' && userChoice === 'scissors') {
        console.log('User Wins - scissors stronger than paper');
        userScoreDisplay += 1;
        userScore.innerHTML = userScoreDisplay.toString();
    }
    else if (compChoice === 'scissors' && userChoice === "rock") {
        console.log('User Wins - rock stronger than scissors');
        userScoreDisplay += 1;
        userScore.innerHTML = userScoreDisplay.toString();
    }
    else if (compChoice === 'rock' && userChoice === 'scissors') {
        console.log('Comp Wins - rock is stronger than scissors');
        compScoreDisplay += 1;
        compScore.innerHTML = compScoreDisplay.toString();
    }
    else if (compChoice === 'paper' && userChoice === 'rock') {
        console.log('Comp Wins - paper is stronger than rock');
        compScoreDisplay += 1;
        compScore.innerHTML = compScoreDisplay.toString();
    }
    else if (compChoice === 'scissors' && userChoice === 'paper') {
        console.log('Comp Wins - scissors is stronger than paper');
        compScoreDisplay += 1;
        compScore.innerHTML = compScoreDisplay.toString();
    }
}
function startCountdown() {
    if (countdown >= 1) {
        countdownTimer.innerHTML = countdown.toString();
        countdown = countdown - 1;
        setTimeout(startCountdown, 1000);
    }
    else {
        countdownTimer.innerHTML = 'GO';
        displayPicks();
    }
}
function displayPicks() {
    userDisplay.classList.add('user-display-in');
    compDisplay.classList.add('comp-display-in');
    userDisplay.src = "Images/" + userChoice + ".png";
    compDisplay.src = "Images/" + compChoice + ".png";
}
