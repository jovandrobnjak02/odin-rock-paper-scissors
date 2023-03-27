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

function playRound(playerChoice){

    playerChoice= playerChoice.toLowerCase()
    computerChoice = getComputerChoice().toLowerCase()

    if(playerChoice === computerChoice){
        alert ('Draw')
        return 1
    }
    else if((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')){
        alert(`You lost! ${computerChoice} beats ${playerChoice} `)
        return 2
    }
    else{
        alert(`You win! ${playerChoice} beats ${computerChoice}`)
        return 3
    }
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let roundResult = document.getElementById('roundResult');
let restart = document.getElementById('restart');
let div = document.querySelector('.results');
let playerWIns = 0;
let computerWins = 0;
let gameCount = 0;
let gameText = document.querySelector("#game-count");

rock.addEventListener('click',()=>{
    
    gameCount +=1
   let res =  playRound('rock')
    if(res === 3){
        playerWIns +=1;
    }
    else if(res === 2){
        computerWins +=1
    }
    if(gameCount >= 5){
        let result = document.createElement('h1');
        
        if(playerWIns > computerWins){
            result.innerText = `You win!`
        }else if(computerWins < playerWIns){
            result.innerText = 'Sorry, you lose.'
        }else{
            result.innerText= "It's a draw!"
        }
    
        div.appendChild(result);
        }

    roundResult.innerText = `Result: ${playerWIns} : ${computerWins}`;
    gameText.innerText = `Game Count: ${gameCount}`;
}
);

paper.addEventListener('click',()=>{
    gameCount +=1
    let res =  playRound('paper')
    if(res === 3){
        playerWIns +=1;
    }
    else if(res === 2){
        computerWins +=1
    }
    if(gameCount >= 5){
        let result = document.createElement('h1');
        
        if(playerWIns > computerWins){
            result.innerText = `You win!`
        }else if(computerWins < playerWIns){
            result.innerText = 'Sorry, you lose.'
        }else{
            result.innerText= "It's a draw!"
        }
    
        div.appendChild(result);
        }

    roundResult.innerText = `Result: ${playerWIns} : ${computerWins}`;
    gameText.innerText = `Game Count: ${gameCount}`;
}
);

scissors.addEventListener('click',()=>{
    gameCount +=1
    let res =  playRound('scissors')
    if(res === 3){
        playerWIns +=1;
    }
    else if(res === 2){
        computerWins +=1
    }
    if(gameCount >= 5){
        let result = document.createElement('h1');
        
        if(playerWIns > computerWins){
            result.innerText = `You win!`
        }else if(computerWins < playerWIns){
            result.innerText = 'Sorry, you lose.'
        }else{
            result.innerText= "It's a draw!"
        }
    
        div.appendChild(result);
        }

    roundResult.innerText = `Result: ${playerWIns} : ${computerWins}`;
    gameText.innerText = `Game Count: ${gameCount}`;
}
);

restart.addEventListener('click',
()=>{
    document.location.reload();
})
/*

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
*/