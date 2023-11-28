import * as GAME from "./game";
import { parseCoords, convertCoordToId } from "./utility/parseCoords";
import { getName } from "./utility/getName";

const renderOuterContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    const boardsContainer = document.createElement('div');
    boardsContainer.classList.add('boards-container');
    container.appendChild(boardsContainer);
}

const renderMainMenu = () => {
    const outerContainer = document.querySelector('.container');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Battleships";
    const startBtnContainer = document.createElement('div');
    startBtnContainer.classList.add("start-pregame-btn-container");
    const startBtn = document.createElement('button');
    startBtn.classList.add('btn', 'start-btn');
    startBtn.id = "start";
    startBtn.textContent = 'Start game';    
    outerContainer.appendChild(menuContainer);    
    menuContainer.appendChild(menuCard);
    menuCard.appendChild(title);
    menuCard.appendChild(startBtnContainer);
    startBtnContainer.appendChild(startBtn);
    startBtn.addEventListener('click', displayNameMenu);
}

const hideElement = (element) => {
    element.classList.add('d-none');
}

const blurElement = (element) => {
    element.classList.add('blur');
}

const removeBlur = (element) => {
    element.classList.remove('blur');
}

const displayNameMenu = () => {
    const menuContainer = document.querySelector('.menu-container');
    const menuCard = document.querySelector('.menu-card');
    const askNameContainer = document.createElement('div');    
    askNameContainer.classList.add('ask-name-container');
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
            getName();
            GAME.startPreGame();
            hideElement(menuContainer);
        }
    })
    document.getElementById('start').disabled = true;
}

// Remove child els from a parent el & returns removed node - e.g. outercontainer
const clearChildElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

const displayShipPlacement = (player) => {
    const boardObj = player.getBoardObj();
    const boardArr = player.getBoardArray();    

    // - pop removes & returns last element of array - once the array is empty it will return undefined
    const shipType = player.shipList.pop();
    const shipLength = player.shipLengthArray.pop();

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
        const startPos = parseCoords(position); // eg. 10A = '[9,0]'
        const endPos = boardObj.getEndCoord(startPos, direction, shipLength); //eg. [9,0], 'vertical', 2 = [10,0]
        
        const allCoords = boardObj.getAllCoords(startPos, endPos);
        // if coords are empty & within board boundaries
        const validShipPlacement = boardObj.canPlaceShipBetween(startPos, endPos);

        allCoords.forEach((coord) => {
            //console.log(coord);
            if (boardObj.areWithinBoard(coord)) {
                let idString = convertCoordToId(coord);
                //console.log(`id string is: ${idString}, coord is ${coord}`);   
                if (validShipPlacement) {
                    document.getElementById(`${idString}`).classList.add('valid-ship-placement');
                } else {
                    document.getElementById(`${idString}`).classList.add('invalid-ship-placement');
                }
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

    const handleStartGameplay = () => {
        // if ships arent all placed, don't start
        if (shipLength !== undefined) {
            return;
        }
        GAME.startGamePlay();
    }

    const handleResetShips = () => {
        console.clear();
        GAME.resetPlayerObjs();
        GAME.startPreGame();
    }

    const startGameBtn = document.createElement('button');
    startGameBtn.classList.add('btn','start-btn');
    startGameBtn.textContent = 'Start Game';
    startGameBtn.addEventListener('click', handleStartGameplay);

    const autoShipPlacementBtn = document.createElement('button');
    autoShipPlacementBtn.classList.add('btn', 'place-ships-btn');
    autoShipPlacementBtn.textContent = 'Auto place';
    autoShipPlacementBtn.addEventListener('click', GAME.autoShipPlacement);

    const resetShipsBtn = document.createElement('button');
    resetShipsBtn.classList.add('btn', 'reset-btn');
    resetShipsBtn.textContent = 'Reset Ships';
    resetShipsBtn.addEventListener('click', handleResetShips);

    const outerContainer = document.querySelector('.container');
    const boardsContainer = document.querySelector('.boards-container');
    
    removeBlur(boardsContainer);
    clearChildElements(boardsContainer); 

    let gameboard;

    // if shiplength contains a number / isnt undefined. i.e. if ships still needs to be placed add click event
    if (shipLength !== undefined) {
        gameboard = displayBoard(boardArr, 'pre-game', placeShipClick);
        gameboard.addEventListener('mouseover', handlePlaceShipMouseEnter);
        gameboard.addEventListener('mouseout', handlePlaceShipMouseLeave);
        gameboard.addEventListener('contextmenu', rotateDirection);
    } else { //render board without events
        gameboard = displayBoard(boardArr, 'pre-game');        
    }

    let instructions;

    if (shipLength) { // if contains a num
        instructions = `Place the ${shipType}, ${getName()}. Right click to rotate.`;
    } else {
        instructions = `Click on start game to begin!`;
    }

    const instructionsPara = document.createElement('p');
    instructionsPara.classList.add('instructions');
    instructionsPara.textContent = instructions;

    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('pre-game-gameboard-container');
    outerContainer.appendChild(boardsContainer);
    boardsContainer.appendChild(gameboardContainer);
    gameboardContainer.appendChild(gameboard);   

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    gameboardContainer.appendChild(btnContainer);
    btnContainer.appendChild(instructionsPara);
    btnContainer.appendChild(btnGroup);

    btnGroup.appendChild(autoShipPlacementBtn);
    btnGroup.appendChild(resetShipsBtn);    
    btnGroup.appendChild(startGameBtn);
}

// mode will be called as'pre-game' or 'player'/'enemy' strings
function displayBoard(boardArr, mode, clickCb) {
    const gameboard = document.createElement('div');
    gameboard.classList.add(`${mode}`, 'gameboard');

    for (let i = boardArr.length - 1; i >= 0; i--) { // ROW i.e nums
        const row = boardArr[i];
        let rowCoord = i + 1;
        for (let j = 0; j < row.length; j++) { // COL
            if (j === 0) { // ROW LEGEND
                const rowLegend = document.createElement("div");                
                rowLegend.classList.add("legend", "row");
                rowLegend.textContent = i + 1;
                gameboard.append(rowLegend);
            }
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;
            const square = document.createElement('div');
            square.id = coordinate;
            square.classList.add('square');
            gameboard.appendChild(square);
            
            if (mode === 'pre-game' || mode === 'player') {
                if (typeof boardArr[i][j] === 'number') {
                    square.classList.add("ship");
                    square.innerHTML = ":)";
                };
            }
            
            if (boardArr[i][j].toString().includes('X')) {
                square.classList.add("hit");
                square.innerHTML = "X";
            } else if (boardArr[i][j].toString().includes('S')) {
                square.classList.add("sunk");
            } else if (boardArr[i][j] === 'M') {
                square.classList.add("miss");
            }
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
    }    
    
    return gameboard;
}

const renderTurnTracker = () => {
    const turnTrackerContainer = document.querySelector('.turn-tracker-container');
    const turnTracker = document.createElement('h2');
    turnTracker.classList.add('turntracker'); 
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment-container');
    const commentBox = document.createElement('p');
    commentBox.classList.add('comment-box');

    turnTracker.textContent = `${GAME.getTurn()}'s turn`;
    if (GAME.getTurn() === 'Player') {
        turnTracker.textContent = `${getName()}'s turn`;
    } 

    commentBox.textContent = `${GAME.getResult()}`;
    clearChildElements(turnTrackerContainer);
    turnTrackerContainer.appendChild(turnTracker);
    turnTrackerContainer.appendChild(commentContainer);
    commentContainer.appendChild(commentBox);
}

const renderGameLayout = () => {
    const playerContainer = document.createElement('div');
    playerContainer.classList.add("player-container");
    const enemyContainer = document.createElement('div');
    enemyContainer.classList.add("enemy-container");
    const turnTrackerContainer = document.createElement('div');
    turnTrackerContainer.classList.add('turn-tracker-container');    
    
    const boardsContainer = document.querySelector('.boards-container');    
    clearChildElements(boardsContainer);
    boardsContainer.appendChild(playerContainer);
    boardsContainer.appendChild(turnTrackerContainer);
    renderTurnTracker();
    boardsContainer.appendChild(enemyContainer);
}

const renderBoardUpdates = (enemyBoardArr, playerBoardArr) => {
    renderEnemyBoard(enemyBoardArr);
    renderPlayerBoard(playerBoardArr);
}

const renderPlayerBoard = (playerBoardArr) => {
    const playerContainer = document.querySelector('.player-container');
    clearChildElements(playerContainer);

    const playerBoard = displayBoard(playerBoardArr, 'player');

    const playerHeading = document.createElement('h2');
    playerHeading.classList.add('board-title', 'player');
    playerHeading.textContent = 'Player board';
    const remainingShipCounter = document.createElement('p');
    remainingShipCounter.classList.add('ship-counter');
    remainingShipCounter.textContent = 'X Ships remaining';

    playerContainer.appendChild(playerBoard);
    playerContainer.appendChild(playerHeading);
    playerContainer.appendChild(remainingShipCounter);
}

const renderEnemyBoard = (enemyBoardArr) => {
    const enemyContainer = document.querySelector('.enemy-container');
    clearChildElements(enemyContainer);
    
    const enemyBoard = displayBoard(enemyBoardArr, 'enemy', handleAttackClick);

    const enemyHeading = document.createElement('h2');
    enemyHeading.classList.add('board-title', 'enemy');
    const remainingShipCounter = document.createElement('p');
    remainingShipCounter.classList.add('ship-counter');
    remainingShipCounter.textContent = 'X Ships remaining';

    enemyHeading.textContent = 'Enemy board';
    enemyContainer.appendChild(enemyBoard);
    enemyContainer.appendChild(enemyHeading);
    enemyContainer.appendChild(remainingShipCounter);    
}

const handleAttackClick = (e) => {
    if (GAME.getTurn() === 'Enemy') return;
    const position = e.target.getAttribute("id");
    if (position === null) return;
    const coords = parseCoords(position);
    GAME.playerAttack(coords);
}

const renderVictoryScreen = (winner) => {
    const modal = document.createElement('div');
    modal.classList.add('game-over-modal');
    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    const playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add('btn', 'play-again-btn');
    playAgainBtn.textContent = 'Play again';
    const returnToMenuBtn = document.createElement('button');
    returnToMenuBtn.classList.add('btn', 'return-menu-btn');
    returnToMenuBtn.textContent = 'Return to menu';
    playAgainBtn.addEventListener('click', handlePlayAgain);
    returnToMenuBtn.addEventListener('click', handleReturnToMenu);
    
    const header = document.createElement('h2');
    const para = document.createElement('p');
    if (winner === 'Player') {
        header.textContent = `You win!`;
        para.textContent = `Congratulations! Want to play another round?`;
    } else {
        header.textContent = `You lose`;
        para.textContent = `Better luck next time. Want to try again?`;
    }

    const outerContainer = document.querySelector('.container');
    const boardsContainer = document.querySelector('.boards-container');
    blurElement(boardsContainer);
    outerContainer.appendChild(modal);
    modal.appendChild(header);
    modal.appendChild(para);
    modal.appendChild(btnGroup);
    btnGroup.appendChild(returnToMenuBtn);
    btnGroup.appendChild(playAgainBtn);    
}

const removeModal = () => {
    const modal = document.querySelector('.game-over-modal');
    modal.remove();
}

const handleReturnToMenu = () => {
    const body = document.querySelector('body');
    clearChildElements(body);
    GAME.startGame();
}

const handlePlayAgain = () => {
    removeModal();
    GAME.playAgain();
}

export {    
    displayNameMenu,
    renderOuterContainer,
    renderMainMenu,
    displayShipPlacement,
    renderBoardUpdates,
    renderEnemyBoard,
    renderGameLayout,
    renderPlayerBoard,
    renderTurnTracker,
    renderVictoryScreen
}