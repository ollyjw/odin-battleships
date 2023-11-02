import Gameboard from "../factories/gameboard";
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
    startBtn.addEventListener('click', displayNameMenu);
}

// const clearMenu = () => {
//     const menuCard = document.querySelector('.menu-card');
//     menuCard.innerHTML = '';
// }

const displayNameMenu = (playerName) => {
    const menuCard = document.querySelector('.menu-card');
    
    const askNameContainer = document.createElement('div');
    askNameContainer.classList.add('ask-name-container');

    //const outerContainer = document.querySelector('.container');
    menuCard.appendChild(askNameContainer);

    const nameForm = document.createElement('form');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for','name-input');
    nameLabel.textContent = `Admiral one name: `
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
            GAME.resetPlayerObjs();
            GAME.startPreGame();
        }
    })
}

const getName = (playerName) => {
    const nameInputValue = document.getElementById('name-input').value;
    playerName = nameInputValue;
    return playerName;
}

// takes input square id string - returns board array indeces e.g. '10A' = [9,0]
function parseCoords(squareId) {
    let row;
    let col;

    if (squareId.length === 2) {
        // first character (row num) on sqr id will be +1 ahead of array index
        row = parseInt(squareId.charAt(0)) -1;
        // second character (col letter) will be translated from A-J to 0-9
        col = squareId.charCodeAt(1) - 65;
    } else { // sqr id string is 3 characters
        // 10 rows max - always 9
        row = 9;
        // third character convert to num
        col = squareId.charCodeAt(2) - 65;
    }
    return [row, col];
}

// take array input nums and convert it to square id string - [9,0] = '10A'
function convertCoordToId(arrayItem) {
    const [row, col] = arrayItem;
    let newRow = row + 1;
    let newCol = String.fromCharCode(65 + col);
    let stringId = `${newRow}${newCol}`;    
    return stringId;
}

// need to separate render ship placement from display menu...?
const displayShipPlacementMenu = (playerName) => {
    const menuCard = document.querySelector('.menu-card');
    const title = document.createElement('h2');
    title.textContent = `${getName(playerName)} place your ships`;
    title.classList.add('ship-placement-title');
    menuCard.appendChild(title);
}

const displayShipPlacement = (player) => {
    const boardObj = player.getBoardObj();
    const boardArr = player.getBoardObj().getArray();

    const shipsArray = Gameboard().types; //  ['carrier', 'battleship', 'submarine', 'cruiser', 'patrolBoat']
    const shipLengthArray = boardObj.getShipLengthArray(); // [5, 4, 3, 3, 2] 
    
    // - pop removes & returns last element of array - once the array is empty it will return undefined
    const shipLength = shipLengthArray.pop();
    const shipType = shipsArray.pop();
    let direction = 'vertical';
    
    // Click a square to place ship
    const placeShipClick = (e) => {
        // square id string
        const position = e.target.getAttribute("id");
        // make the legend & the gaps between squares non clickable)
        if (position === null) {
            return;
        }

        // store coords in array format
        const startPos = parseCoords(position);
        // end pos coord calcd from start pos
        const endPos = boardObj.getEndCoord(startPos, direction, shipLength);
        const validShipPlacement = boardObj.canPlaceShipBetween(startPos, endPos);

        console.log(`Current ship is: ${shipType} length is ${shipLength} squares`);
        console.log(`clicked ${e.target.id}`);

        // if coords are empty & within board boundaries
        if (validShipPlacement) {
            boardObj.placeShip(shipType, startPos, endPos); //e.g 'battleship', [0,0], [4,0]
            // recursive - pop a new ship type into placeShip function until every ship is placed
            displayShipPlacement(player);
        }
    }

    // Mouse enter event handler
    const handlePlaceShipMouseEnter = (e) => {
        const position = e.target.getAttribute("id");
        if (position === null) {
            return;
        }
        //console.clear();
        //console.log(`Placing ${shipType}`);
        // console.log(`Square ID: ${position}, board array indeces: ${parseCoords(position)}`);
        displayHoverEffect(position);
    }

    // Mouse leave event handler
    const handlePlaceShipMouseLeave = () => {
        clearHoverEffect();
    }

    // switch ship orientation during placement to put on right click
    const rotateDirection = (e) => {
        // prevent right click menu appearing
        e.preventDefault();
        const position = e.target.getAttribute("id");
        if (position === null) { //e.g. if legend
            return;
        }
        if (direction === 'vertical') {
            direction = 'horizontal';
        } else {
            direction = 'vertical';
        }

        clearHoverEffect(position);
        displayHoverEffect(position);
    }

    // add hover effect to div square id 
    const displayHoverEffect = (position) => {
        //const startPos = position; // eg. '10A'
        const startPos = parseCoords(position); // eg. '[9,0]'
        const endPos = boardObj.getEndCoord(startPos, direction, shipLength);
        
        const allCoords = boardObj.getAllCoords(startPos, endPos);
        // if coords are empty & within board boundaries
        const validShipPlacement = boardObj.canPlaceShipBetween(startPos, endPos);

        //console.log(`${shipType}: Start pos:${startPos} End pos: ${endPos}`);

        allCoords.forEach((coord) => {
            let idString = convertCoordToId(coord);
            // console.log(`id string is: ${idString}`);

            if (validShipPlacement) {
                document.getElementById(`${idString}`).classList.add('valid-ship-placement');
                //console.log('VALID');
            } else {
                document.getElementById(`${idString}`).classList.add('invalid-ship-placement');
                //console.log('INVALID');
            }
        })
    }

    // Remove hover effects (eg on mouseleave)
    const clearHoverEffect = () => {
        const allSquares = document.querySelectorAll('.square');
        allSquares.forEach((square) => {
            square.classList.remove('valid-ship-placement');
            square.classList.remove('invalid-ship-placement');
        })
    }

    let gameboard;

    // 
    // EVERY CLICK GENERATES A NEW BOARD. MUST FIX!
    //

    // if ship contains a number / isnt undefined
    // i.e. if ships still needs to be placed add click event
    if (shipLength !== undefined) { // <= need to get the recursive element to work
        gameboard = displayBoard(boardArr, 'pre-game', placeShipClick);
        gameboard.addEventListener('mouseover', handlePlaceShipMouseEnter);
        gameboard.addEventListener('mouseout', handlePlaceShipMouseLeave);
        gameboard.addEventListener('contextmenu', rotateDirection);
        console.log(boardArr);
    } else { //render board without events
        gameboard = displayBoard(boardArr, 'pre-game');
        console.log(boardArr);
    }

    const outerContainer = document.querySelector('.container');
    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('pre-game-gameboard-container');
    outerContainer.appendChild(gameboardContainer);
    gameboardContainer.appendChild(gameboard);    
}

// mode will be called as'pre-game' or 'game' strings
function displayBoard(boardArr, mode, clickCb) {
    // const outerContainer = document.querySelector('.container');
    // const gameboard = document.querySelector('.gameboard');

    const gameboard = document.createElement('div');
    gameboard.classList.add(`${mode}`, 'gameboard');
    console.log(boardArr.length);
    for (let i = boardArr.length - 1; i >= 0; i--) { // ROW i.e nums
        const row = boardArr[i];
        let rowCoord = i + 1;
        for (let j = 0; j < row.length; j++) { // COL
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;
            if (j === 0) { // ROW LEGEND
                const rowLegend = document.createElement("div");                
                rowLegend.classList.add("legend", "row");
                rowLegend.textContent = i + 1;
                gameboard.append(rowLegend);
            }
            const square = document.createElement('div');
            square.id = coordinate;
            square.classList.add('square');
            gameboard.appendChild(square);

            // 
            // if (mode === 'pre-game' || mode === 'game') {
            //     if (boardArr.includes(typeof Number())) {
            //         square.classList.add('ship');
            //         square.innerHTML = ":)"
            //     };
            // }

        }
    }
    // COL LEGEND
    for (let i = 0; i <= boardArr.length; i++) {
        const colLegend = document.createElement("div");
        colLegend.classList.add("legend", "col");
        colLegend.textContent = String.fromCharCode(64 + i);
        if (i === 0) {
            colLegend.textContent = "";
        }
        gameboard.append(colLegend);
    }
   
    if (clickCb) {
        gameboard.addEventListener('click', clickCb);
        // const squares = document.querySelectorAll(".square");
        // squares.forEach(square => {
        //     square.addEventListener('click', clickCb);
        // })        
    }    
    
    // outerContainer.appendChild(gameboard);
    return gameboard;
}


export {    
    displayNameMenu,
    renderOuterContainer,
    renderMainMenu,
    displayShipPlacementMenu,
    displayShipPlacement
}