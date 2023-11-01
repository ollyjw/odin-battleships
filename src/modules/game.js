import * as Player from '../factories/player';
import * as DOM from './dom';

// Main game loop
// The game loop should set up a new game by creating Players and Gameboards.
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one player’s ships have all been sunk. This function is appropriate for the Game module.

let player;
//let computer;

const resetPlayerObjs = () => {
    player = Player.Player();
    // console.log(player);
    //computer = Player.Computer();
}

// Main menu - start game btn
const startGame = () => {
    DOM.renderOuterContainer();
    DOM.renderMainMenu();
    resetPlayerObjs();
}

// PRE-GAME - take player name, ship placement
const startPreGame = () => {
    DOM.displayShipPlacementMenu(player);
    DOM.displayShipPlacement(player);
}


// Once ships placed, start game - render player and enemy boards & add player name to screen
// - click event on grid cell to attack enemy board (get another turn if hit)
// - receive enemy attack 
// - repeat until all ships sunks

// const startGame = () => {

// }


// Victory screen / restart btn


export {
    resetPlayerObjs,
    startPreGame,
    startGame
}