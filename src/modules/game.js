import * as Player from '../factories/player';
import Ship from '../factories/ship';
import * as DOM from './dom';
import { convertCoordToId } from "./utility/parseCoords";

let player;
let computer;
let turn = 'Player';
let resultString;

const resetPlayerObjs = () => {
    console.clear();
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
    DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
    console.log(computer.getBoardArray());
    console.log(player.getBoardArray());
}

// - attack enemy board (get another turn if hit), to be put on click event targetting coords
const playerAttack = (coords) => {
    // returns results of attack on enemy board with input coords - x, m, s, game over
    const attackResult = player.attack(coords, computer.getBoardObj());

    const [row, col] = coords;
    const boardVal = computer.getBoardObj().getArray()[row][col];

    // update DOM boards with attack results
    DOM.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());
    DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());

    if (attackResult === 'Game Over') {
        declareWinner('Player'); // victory/defeat screen
    } else if (attackResult === 'miss') {
        resultString = `${convertCoordToId(coords)} was a ${attackResult}`;
        turn = 'Enemy';
        enemyAttack();
        DOM.renderTurnTracker();
        DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
    } else if (attackResult === 'hit') {
        resultString = `${convertCoordToId(coords)} was a ${attackResult}! Take another shot`;
        DOM.renderTurnTracker();
        DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
    } else if (attackResult === 'sunk') {
        for (let i = 0; computer.getShipList().length > i; i++) {
            let shipType = computer.getShipList()[i];
            // boardval includes ship class id
            if (boardVal.includes(Ship(shipType).id)) {
                resultString = `You ${attackResult} their ${shipType}! Take another shot`;
            }
        }
        DOM.renderTurnTracker();   
        DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());     
    }
    return attackResult;
}

// - receive enemy attack 
const enemyAttack = (attackResult) => { 
    setTimeout(() => {
        if (attackResult === 'Game Over') {           
            declareWinner('Computer'); // victory/defeat screen
            return;
        } else if (attackResult === 'miss') {
            turn = 'Player';
            resultString = `Computer's shot on ${convertCoordToId(computer.getCoords())} was a ${attackResult}`;
            DOM.renderTurnTracker();
            DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
            return;
        } else if (attackResult === 'hit') {
            resultString = `Computer's shot on ${convertCoordToId(computer.getCoords())} was a ${attackResult}`;
            DOM.renderTurnTracker();
            DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
        } else if (attackResult === 'sunk') {
            for (let i = 0; player.getShipList().length > i; i++) {
                let shipType = player.getShipList()[i];
                // if boardval includes ship class id
                const [row, col] = computer.getCoords();
                const boardVal = player.getBoardArray()[row][col];
                if (boardVal.toString().includes(Ship(shipType).id)) {
                    resultString = `Your ${shipType} has been ${attackResult}!`;
                }
            }
            DOM.renderTurnTracker();
            DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
        }
        
        // Recursively call attack - random attack returns attackResult
        enemyAttack(computer.smartAttack(player.getBoardObj()));
                
        // update DOM boards
        DOM.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());
        DOM.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());       

        return attackResult;
    }, 700);

}

const getTurn = () => {
    return turn;
}

const getResult = () => {
    if (resultString === undefined) {
        resultString = 'Fire when ready!';
    }
    return resultString;
}

// Victory screen / restart btn
const declareWinner = (winner) => {
    DOM.renderVictoryScreen(winner);
}

const playAgain = () => {
    resultString = 'Fire when ready!';
    turn = 'Player';
    resetPlayerObjs();
    startPreGame();
}

export {
    autoShipPlacement,
    getResult,
    getTurn,
    playAgain,
    playerAttack,
    resetPlayerObjs,
    startPreGame,
    startGame,
    startGamePlay
}