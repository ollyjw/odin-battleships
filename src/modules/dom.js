import Gameboard from "../factories/gameboard";
import Ship from "../factories/ship";
import * as GAME from "./game";


// display both the player’s boards and render them using information from the Gameboard class/factory.
// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.

const renderOuterContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
}


const renderMainMenu = () => {
    const outerContainer = document.querySelector('.container');
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Battleships";
    const startBtnContainer = document.createElement('div');
    startBtnContainer.classList.add("btn-container");
    const startBtn = document.createElement('btn');
    startBtn.classList.add('start-btn');
    startBtn.textContent = 'Start game';
    startBtn.addEventListener('click', GAME.startPreGame());
    outerContainer.appendChild(menuCard);
    menuCard.appendChild(title);
    menuCard.appendChild(startBtnContainer);
    startBtnContainer.appendChild(startBtn);
}


const renderPreGame = (player) => {    
    const boardObj = player.getBoardObj();

    const shipLength = boardObj.getShipLengthArray().pop();
    let direction = 'vertical';

    // Click a square to place ship
    const placeShipClick = (e) => {
        const positionAttribute = e.target.getAttribute('array-position'); // eg '9-0' 

        const startPos = positionAttribute;
        const endPos = boardObj.getEndCoord(startPos, direction, shipLength);

        let shipType;
        for (let i = 0; Ship().types.length > i; i++) {
            shipType = Ship().types[i];
        }

        boardObj.placeShip(shipType, startPos, endPos);
        renderPreGame(player);
    }

}


const board = Gameboard().createBoardArray();

function displayBoard() {
    const outerContainer = document.querySelector('.container');
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');

    for (let i = board.length - 1; i >= 0; i--) { // ROW i.e nums
        const row = board[i];
        //console.log(row);
        let rowCoord = i + 1;
        for (let j = 0; j < row.length; j++) {             
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;
            if (j === 0) {
                const rowLegend = document.createElement("div");                
                rowLegend.classList.add("legend", "row");
                rowLegend.textContent = i + 1;
                gameboard.append(rowLegend);
            }
            const square = document.createElement('div');
            square.id = coordinate;
            // array position
            square.setAttribute('array-position', `${i}-${j}`);
            square.classList.add('square');
            gameboard.appendChild(square);           
        }
    }
    for (let i = 0; i <= 10; i++) {
        const colLegend = document.createElement("div");
        colLegend.classList.add("legend", "col");
        colLegend.textContent = String.fromCharCode(64 + i);
        if (i === 0) {
            colLegend.textContent = "";
        }
        gameboard.append(colLegend);
    }
    
    outerContainer.appendChild(gameboard);
}


export {
    displayBoard,
    renderOuterContainer,
    renderMainMenu,
    renderPreGame
}