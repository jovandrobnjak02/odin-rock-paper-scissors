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

console.log(getComputerChoice())