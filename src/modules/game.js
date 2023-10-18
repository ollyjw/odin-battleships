import { Player } from '../factories/player';
import * as DOM from './dom';

// Main game loop
// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one player’s ships have all been sunk. This function is appropriate for the Game module.

let player = Player();
// let computer = Player.Computer();


// Main menu - start game btn
const startGame = () => {
    DOM.renderOuterContainer();
    DOM.renderMainMenu();
}

// PRE-GAME - take player name, ship placement

const startPreGame = () => {
    DOM.renderPreGame(player);
}


// Start game - display boards & add player name to screen
// - click event on grid cell to attack enemy board
// - receive enemy attack 
// - repeat until all ships sunks

// const startGame = () => {

// }


// Victory screen / restart btn


export {
    startPreGame,
    startGame
}