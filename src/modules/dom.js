//import Gameboard from "../factories/gameboard";
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
    outerContainer.appendChild(menuCard);
    menuCard.appendChild(title);
    menuCard.appendChild(startBtnContainer);
    startBtnContainer.appendChild(startBtn);
    startBtn.addEventListener('click', displayNameMenu());
}

// const clearMenu = () => {
//     const menuCard = document.querySelector('.menu-card');
//     menuCard.innerHTML = '';
// }

const displayNameMenu = (playerName) => {
    playerName = 'one';

    const menuCard = document.querySelector('.menu-card');
    
    const askNameContainer = document.createElement('div');
    askNameContainer.classList.add('ask-name-container');

    //const outerContainer = document.querySelector('.container');
    menuCard.appendChild(askNameContainer);

    const nameForm = document.createElement('form');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for','name-input');
    nameLabel.textContent = `Admiral ${playerName} name: `
    const nameInput = document.createElement('input');
    nameInput.id = 'name-input';
    const nameSubmit = document.createElement('button');
    nameSubmit.textContent = "Submit";
    askNameContainer.appendChild(nameForm);
    nameForm.appendChild(nameLabel);
    nameForm.appendChild(nameInput);
    nameForm.appendChild(nameSubmit);
    nameSubmit.addEventListener('click',(e) => {
        e.preventDefault();
        if (nameInput.value != '') {
            getName(playerName);
            //clearMenu();
            GAME.startPreGame();
        }
    })
}

const getName = (playerName) => {
    const nameInputValue = document.getElementById('name-input').value;
    playerName = nameInputValue;
    return playerName;
}

const displayShipPlacementMenu = (player, playerName) => {
    const boardObj = player.getBoardObj();
    const boardArr = player.getBoardObj().getArray();

    // need to separate render ship placement from display menu
    const menuCard = document.querySelector('.menu-card');
    const title = document.createElement('h2');
    title.textContent = `${getName(playerName)} place your ships`;
    title.classList.add('ship-placement-title');
    menuCard.appendChild(title);

    // takes input square id e.g '8A' - returns array which reflects chessboard array indeces i.e. '[7,0]'
    function parseCoords(sqr) {
        const row = parseInt(sqr.charAt(0)) -1;
        const col = sqr.charCodeAt(1) - 65;
        return [row, col];
    }

    const shipLength = boardObj.getShipLengthArray().pop();
    let direction = 'vertical';

    // Click a square to place ship
    const placeShipClick = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.addEventListener('click', (e) => {
                const position = e.target.getAttribute("id");

                // store coords in array format
                const startPos = parseCoords(position);
                const endPos = boardObj.getEndCoord(startPos, direction, shipLength);

                let shipType;
                for (let i = 0; Ship().types.length > i; i++) {
                    shipType = Ship().types[i];
                }

                boardObj.placeShip(shipType, startPos, endPos);
                displayShipPlacementMenu(player);

                console.log(`clicked ${square.id}`);

            })
        })
    }

    let gameboard;

    // need to initialise displayboard before i can use the intended format that includes click callback arg. brain too mushy to understand fixes at present
    // TypeError: Cannot destructure property 'shipLength' of 'shipClasses[shipType]' as it is undefined. ship:32

    gameboard = displayBoard(boardArr);
    console.log(boardArr);
    gameboard = displayBoard(boardArr, 'pre-game', placeShipClick());

    return gameboard;
}

function displayBoard(boardArr, mode, clickCb) {
    const outerContainer = document.querySelector('.container');
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');

    for (let i = boardArr.length - 1; i >= 0; i--) { // ROW i.e nums
        const row = boardArr[i];
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
            square.classList.add('square');
            gameboard.appendChild(square);
        }
    }
    // LEGEND
    for (let i = 0; i <= 10; i++) {
        const colLegend = document.createElement("div");
        colLegend.classList.add("legend", "col");
        colLegend.textContent = String.fromCharCode(64 + i);
        if (i === 0) {
            colLegend.textContent = "";
        }
        gameboard.append(colLegend);
    }

    // if (mode === 'pre-game' || mode === 'game') {

    // }
    
    if (clickCb) {
        gameboard.addEventListener('click', clickCb);
    }    
    
    outerContainer.appendChild(gameboard);
}


export {    
    renderOuterContainer,
    renderMainMenu,
    displayShipPlacementMenu
}