const rockChoice:HTMLImageElement = document.querySelector('#rock')
const paperChoice:HTMLImageElement = document.querySelector('#paper')
const scissorsChoice:HTMLImageElement = document.querySelector('#scissors')

let userChoice:string
let compChoice:string

const choices = ['rock', 'paper', 'scissors']

rockChoice.addEventListener('click', (e) =>{
    userChoice = rockChoice.name
    compChoice = computerChoice(choices)
    gameLogic(compChoice, userChoice)
})

paperChoice.addEventListener('click', (e) => {
    userChoice = paperChoice.name
    compChoice = computerChoice(choices)
    gameLogic(compChoice, userChoice)
})

scissorsChoice.addEventListener('click', (e) => {
    userChoice = scissorsChoice.name
    compChoice = computerChoice(choices)
    gameLogic(compChoice, userChoice)
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
    }else if(compChoice === 'paper' && userChoice === 'scissors'){
        console.log('User Wins - scissors stronger than paper')
    }else if(compChoice === 'scissors' && userChoice === "rock"){
        console.log('User Wins - rock stronger than scissors')
    }else if(compChoice === 'rock' && userChoice === 'scissors'){
        console.log('Comp Wins - rock is stronger than scissors')
    }else if(compChoice === 'paper' && userChoice === 'rock'){
        console.log('Comp Wins - paper is stronger than rock')
    }else if(compChoice === 'scissors' && userChoice === 'paper'){
        console.log('Comp Wins - scissors is stronger than paper')
    }
}