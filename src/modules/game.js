import * as Player from '../factories/player';
import * as DOM from './dom';

// Main game loop
// The game loop should set up a new game by creating Players and Gameboards.
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one player’s ships have all been sunk. This function is appropriate for the Game module.

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
    //DOM.displayShipPlacementMenu(player);
    DOM.displayShipPlacement(player);
}

const autoShipPlacement = () => {
    resetPlayerObjs();
    console.log(computer.getBoardArray());
    player.placeShipsRandomly();
    DOM.displayShipPlacement(player);
}


// Once ships placed, start game - render player and enemy boards & add player name to screen
const startGamePlay = () => {
    DOM.renderGameLayout();
    DOM.renderPlayerBoard(player.getBoardArray());
    DOM.renderEnemyBoard(computer.getBoardArray());
}

// - attack enemy board (get another turn if hit)
// to be put on click event targetting coords
const playerAttack = (coords) => {
    // returns results of attack on enemy board with input coords - x, m, s, game over
    const attackResult = player.attack(coords, computer.getBoardObj());

    // update DOM boards with attack results
    DOM.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());

    if (attackResult === 'Game Over') {
        // victory/defeat screen
    } else if (attackResult === 'Miss') {
        turn = 'Enemy';
        enemyAttack();
        DOM.renderTurnTracker();
    }
    //console.log(computer.getBoardArray())
}

// - receive enemy attack 
const enemyAttack = (attackResult) => {
    setTimeout(() => {

        if (attackResult === 'Game Over') {
        // victory/defeat screen
            return;
        } else if (attackResult === 'Miss') {
            turn = 'Player';
            DOM.renderTurnTracker();
            return;
        }

        // Recursively call attack
        enemyAttack(computer.randomAttack(player.getBoardObj()));        
        
        // update DOM boards
        DOM.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());

    }, 1000);
}

const getTurn = () => {
    //console.log(turn);
    return turn;
}

// TO DO: revisit sunk ships // smart attack - once enemy gets a hit it fires at surrounding coords // use getname function to print name in turntracker // reset ships button // first start game button should only gen name input once

// Victory screen / restart btn

export {
    autoShipPlacement,
    getTurn,
    playerAttack,
    resetPlayerObjs,
    startPreGame,
    startGame,
    startGamePlay
}