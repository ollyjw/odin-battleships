import Ship from "./factories/ship";
import Gameboard from "./factories/gameboard";
// import * as DOM from './modules/dom';
import * as GAME from './modules/game';
import './styles.css';

// DOM.renderOuterContainer();
// DOM.displayBoard();

GAME.startGame();


console.log(Ship('patrolBoat').shipLength);
console.log(Gameboard().getShipLengthArray());