const rockChoice:HTMLImageElement = document.querySelector('#rock')
const paperChoice:HTMLImageElement = document.querySelector('#paper')
const scissorsChoice:HTMLImageElement = document.querySelector('#scissors')
const countdownTimer = document.querySelector('#countdownTimer')

const userDisplay:HTMLImageElement = document.querySelector('#userDisplay')
const compDisplay:HTMLImageElement = document.querySelector('#compDisplay')

const userScore:HTMLSpanElement = document.querySelector('#userScore')
const compScore:HTMLSpanElement = document.querySelector('#compScore')

let userScoreDisplay:number = 0
let compScoreDisplay:number = 0

let userChoice:string
let compChoice:string

let countdown:number = 3


const choices = ['rock', 'paper', 'scissors']

rockChoice.addEventListener('click', (e) =>{
    userChoice = rockChoice.name
    compChoice = computerChoice(choices)
    gameLogic(compChoice,userChoice)
    startCountdown()
})

paperChoice.addEventListener('click', (e) => {
    userChoice = paperChoice.name
    compChoice = computerChoice(choices)
    gameLogic(compChoice,userChoice)
    startCountdown()
})

scissorsChoice.addEventListener('click', (e) => {
    userChoice = scissorsChoice.name
    compChoice = computerChoice(choices)
    gameLogic(compChoice,userChoice)
    startCountdown()
})


function computerChoice(choices):string{
    let choice = Math.floor(Math.random() * choices.length)
    if(choice === 0){
        compChoice = 'rock'
        return compChoice
    }
    else if(choice === 1){
        compChoice = 'paper'
        return compChoice
    }
    else{
        compChoice = 'scissors'
        return compChoice
    }
}

function gameLogic(compChoice,userChoice){
    if(compChoice === userChoice){
        console.log('Tie!!!!')
    }else if(compChoice === 'rock' && userChoice === 'paper'){
        console.log('User Wins - paper stronger than rock')
        userScoreDisplay += 1
        userScore.innerHTML = userScoreDisplay.toString()
    }else if(compChoice === 'paper' && userChoice === 'scissors'){
        console.log('User Wins - scissors stronger than paper')
        userScoreDisplay += 1
        userScore.innerHTML = userScoreDisplay.toString()
    }else if(compChoice === 'scissors' && userChoice === "rock"){
        console.log('User Wins - rock stronger than scissors')
        userScoreDisplay += 1
        userScore.innerHTML = userScoreDisplay.toString()
    }else if(compChoice === 'rock' && userChoice === 'scissors'){
        console.log('Comp Wins - rock is stronger than scissors')
        compScoreDisplay += 1
        compScore.innerHTML = compScoreDisplay.toString()
    }else if(compChoice === 'paper' && userChoice === 'rock'){
        console.log('Comp Wins - paper is stronger than rock')
        compScoreDisplay += 1
        compScore.innerHTML = compScoreDisplay.toString()
    }else if(compChoice === 'scissors' && userChoice === 'paper'){
        console.log('Comp Wins - scissors is stronger than paper')
        compScoreDisplay += 1
        compScore.innerHTML = compScoreDisplay.toString()
    }
}

function startCountdown(){
    if(countdown >= 1){
        countdownTimer.innerHTML = countdown.toString()
        countdown = countdown - 1
        setTimeout(startCountdown, 1000)
    }else{
        countdownTimer.innerHTML = 'GO'
        displayPicks()
    }
}

function displayPicks(){
    userDisplay.classList.add('user-display-in')
    compDisplay.classList.add('comp-display-in')
    userDisplay.src = `Images/${userChoice}.png`
    compDisplay.src = `Images/${compChoice}.png`
}