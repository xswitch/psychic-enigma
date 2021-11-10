//Generates a random number from 0-2 and assigns a choice based on result.
function compChoice() {
    const choiceArray = [`rock`, `paper`, `scissors`];
    return choiceArray[randomFloor(3)];
}

function randomFloor(num) {
    return Math.floor(Math.random() * num);
}

function gameRound(player, comp) {
    //Checks if there is a tie
    if (player === comp) {
        return `tie`;
    }
    //If not a tie, check to see if computer has selected what wins over your choice.
    //If it has, return `loss` if not you win and `win` is returned.
    //If none of the strings allowed in the game are entered, return false
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
            return false;
            break;
    }
}

function game() {
    //Init score variables, they need an initial value to increment.
    let scorePlayer = 0;
    let scoreComp = 0;
    for(let round = 0; round < 5; round++) {
        //Generates player and computer choices every loop.
        let comp = compChoice();
        let player = prompt(`Pick rock, paper or scissors`).toLowerCase();
        //Runs the round function and returns win, loss, tie or false.
        let result = gameRound(player, comp);
        //Chooses what happens if you win, lose, tie or type something other than what is allowed.
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
                round--
                break;
        }
        //Logs the result of each round.
        (!result) ? console.log(`You have to pick either, rock, paper or scissors!`) : 
            (result === `tie`) ? console.log(`It's a tie, go again!`) : 
            (result === `win`) ? console.log(`You win! ${player} beats ${comp}.`) :
            console.log(`You lose! ${comp} beats ${player}.`);
    }
    //When 5 rounds without tie or another break has completed, show the final score and pick a winner.
    (scorePlayer > scoreComp) ? console.log(`You win, you got ${scorePlayer} points. The computer got ${scoreComp}.`) : 
        console.log(`You lose! You got ${scorePlayer} points. The computer got ${scoreComp}.`)
}

game();