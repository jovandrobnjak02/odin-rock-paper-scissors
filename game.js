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

playRound(playerChoice, computerChoice){

    playerChoice= playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
    
    if(playerChoice === computerChoice){
        return 'Draw'
    }
    else if((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')){
        return `You lost!${computerChoice.charAt(0).toUpperCase()} beats ${playerChoice} `
    }
    else{
        return `You win!${playerChoice.charAt(0).toUpperCase()} beats ${computerChoice}`
    }
}