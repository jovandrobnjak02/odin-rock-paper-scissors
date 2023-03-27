function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)

    switch(choice){
        case 0:
            return 'Rock'
            break;
        case 1:
            return 'Paper'
            break;
        default:
            return 'Scissors';

    }

}

function playRound(playerChoice, computerChoice){

    playerChoice= playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if(playerChoice === computerChoice){
        return 'Draw'
    }
    else if((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')){
        console.log(`You lost!${computerChoice} beats ${playerChoice} `)
        return 'Lose'
    }
    else{
        console.log(`You win!${playerChoice} beats ${computerChoice}`)
        return 'Win'
    }
}

function game(){
    let playerWins=0
    let computerWins=0
    let result;

    for(let i =0;i<5;i++){
        let playerChoice = prompt('Rock, paper or scissors?')
        result = playRound(playerChoice,getComputerChoice())
        if(result == "Win"){
            playerWins++;
        }
        else if(result == 'Lose'){
            computerWins++;
        }
    }

    if(playerWins > computerWins){
        console.log(`Player won ${playerWins} rounds, computer won ${computerWins}. Player wins!`)
    }else if( computerWins > playerWins){
    console.log(`Player won ${playerWins} rounds, computer won ${computerWins}. Computer wins!`)
    }else{
        console.log('Its a draw')
    }
}
