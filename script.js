function compChoice() {
    const choiceArray = [`rock`, `paper`, `scissors`];
    return choiceArray[randomFloor(3)];
}

function randomFloor(num) {
    return Math.floor(Math.random() * num);
}

function gameRound(player, comp) {
    if (player === comp) {
        return `tie`;
    }
    switch (player) {
        case `rock`:
            return (comp === `paper`) ? `loss` : `win`;
            break;
        case `paper`:
            return (comp === `scissors`) ? `loss` : `win`;
            break;
        case `scissors`:
            return (comp === `rock`) ? `loss` : `win`;
            break;
        default:
            return false; //If none of the strings allowed in the game are entered, return false
            break;
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComp = 0;
    for(let round = 0; round < 5; round++) {
        let comp = compChoice();
        let player = prompt(`Pick rock, paper or scissors`).toLowerCase();
        let result = gameRound(player, comp);

        switch (result) {
            case `win`:
                scorePlayer++;
                break;
            case `loss`:
                scoreComp++;
                break;
            case `tie`:
                round--
                break;
            default:
                round-- //Resets round if something other than what is allowed is entered.
                break;
        }
        (!result) ? console.log(`You have to pick either, rock, paper or scissors!`) : 
            (result === `tie`) ? console.log(`It's a tie, go again!`) : 
            (result === `win`) ? console.log(`You win! ${player} beats ${comp}.`) :
            console.log(`You lose! ${comp} beats ${player}.`);
    }
    (scorePlayer > scoreComp) ? console.log(`You win, you got ${scorePlayer} points. The computer got ${scoreComp}.`) : 
        console.log(`You lose! You got ${scorePlayer} points. The computer got ${scoreComp}.`)
}

game();