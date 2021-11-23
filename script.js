function addChoiceButtons() {
    const buttons = document.querySelectorAll(`button`);
    buttons.forEach((button) => {
        button.addEventListener(`click`, () => {
            game(button);
        });
    });
}

function game(button) {
    const roundResult = document.querySelector(`.round-result`);
    const playerScore = document.querySelector(`.playerScore`);
    const compScore = document.querySelector(`.compScore`);
    const comp = compChoice();
    const result = gameRound(button.id, comp);

    switch (result) {
        case `win`:
            roundResult.textContent = `You win! You chose ${button.id}, and the computer chose ${comp}!`;
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            break;
        case `loss`:
            roundResult.textContent = `You Lose! You chose ${button.id}, and the computer chose ${comp}!`;
            compScore.textContent = parseInt(compScore.textContent) + 1;
            break;
        case `tie`:
            roundResult.textContent = `It's a tie! You chose ${button.id}, and the computer chose ${comp}!`;
            break;
        default:
            break;
    }

    if (parseInt(playerScore.textContent) >= 5) {
        roundResult.textContent = `YOU WIN! First to 5, congrats!`;
    } else if (parseInt(compScore.textContent) >= 5) {
        roundResult.textContent= `YOU LOSE! You lost to a computer.. sad`;
    }
}

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

addChoiceButtons();