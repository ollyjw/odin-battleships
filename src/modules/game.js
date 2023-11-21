import * as Player from '../factories/player';
import * as DOM from './dom';

let player;
let computer;
let turn = 'Player';

const resetPlayerObjs = () => {
    player = Player.Player();
    computer = Player.Computer();
    computer.placeShipsRandomly();    
}

// Main menu - start game btn
const startGame = () => {
    DOM.renderOuterContainer();
    DOM.renderMainMenu();
    resetPlayerObjs();
}

// PRE-GAME - take player name, ship placement
const startPreGame = () => {
    DOM.displayShipPlacement(player);
}

const autoShipPlacement = () => {
    resetPlayerObjs();    
    player.placeShipsRandomly();
    DOM.displayShipPlacement(player);
}

// Once ships placed, start game - render player and enemy boards & add player name to screen
const startGamePlay = () => {
    DOM.renderGameLayout();
    DOM.renderPlayerBoard(player.getBoardArray());
    DOM.renderEnemyBoard(computer.getBoardArray());
    console.log(computer.getBoardArray());
    console.log(player.getBoardArray());
}

// - attack enemy board (get another turn if hit), to be put on click event targetting coords
const playerAttack = (coords) => {
    // returns results of attack on enemy board with input coords - x, m, s, game over
    const attackResult = player.attack(coords, computer.getBoardObj());

    // update DOM boards with attack results
    DOM.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());

    if (attackResult === 'Game Over') {
        // victory/defeat screen
        declareWinner('Player');
    } else if (attackResult === 'Miss') {
        turn = 'Enemy';
        enemyAttack();
        DOM.renderTurnTracker();
    }

    console.log(`Player's shot is a ${attackResult}`);
    // console.log(computer.getBoardObj().allShipsSunk());
    //console.log(player.getBoardObj().allShipsSunk());
    //console.log(computer.getBoardArray())
}

// - receive enemy attack 
const enemyAttack = (attackResult) => {
    setTimeout(() => {

        if (attackResult === 'Game Over') {
            // victory/defeat screen
            declareWinner('Computer');
            return;
        } else if (attackResult === 'Miss') {
            turn = 'Player';
            DOM.renderTurnTracker();
            return;
        }

        // Recursively call attack
        enemyAttack(computer.randomAttack(player.getBoardObj()));  
        // console.log(`Computer's shot is a ${attackResult}`);
        
        // update DOM boards
        DOM.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());

    }, 700);
}

const getTurn = () => {
    return turn;
}

// TO DO: 
// - smart attack - once enemy gets a hit it fires at surrounding coords 
// commentary message box eg "E1 was a miss", "sunk your battleship" etc

// Victory screen / restart btn
const declareWinner = (winner) => {
    DOM.renderVictoryScreen(winner);
}

const playAgain = () => {
    resetPlayerObjs();
    startPreGame();
}

export {
    autoShipPlacement,
    getTurn,
    playAgain,
    playerAttack,
    resetPlayerObjs,
    startPreGame,
    startGame,
    startGamePlay
}