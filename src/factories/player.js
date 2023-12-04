import Gameboard from "./gameboard";

// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal (i.e. it shouldn’t shoot the same coordinate twice).

const Player = () => {
    let board = Gameboard();
    const shipLengthArray = getShipLengthArray();   
    const shipList = getShipList();

    function getBoardObj() {
        return board;
    }

    function getBoardArray() {
        return board.getArray();
    }

    // ['carrier', 'battleship', 'submarine', 'cruiser', 'patrolBoat']
    function getShipList() {
        return board.getShipTypes();
    }

    // [5, 4, 3, 3, 2] 
    function getShipLengthArray() {
        return board.createShipLengthArray();
    }

    function attack(coords, enemyBoard) {
        const repeatPlay = isRepeatPlay(coords, enemyBoard);
        if (repeatPlay) return 'repeat';

        return enemyBoard.receiveAttack(coords);
    }

    // Check if the coords have been targetted already
    function isRepeatPlay(coords, enemyBoard) {
        const [row, col] = coords;
        const boardArr = enemyBoard.getArray();
        const boardValue = boardArr[row][col];
        if (typeof boardValue === 'number') return false;
        if (boardValue === '') return false;
        return true;
    }

    // generate 2 random numbers between 0-9 and return in array
    function genRandomCoords() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return [x, y];
    }

    // Recursive ship placement - pop new shiptype & shiplength until all ships placed
    function placeShipsRandomly() {
        const shipType = shipList.pop();
        if (shipType === undefined) return;
        const shipLength = shipLengthArray.pop();
        if (shipLength === undefined) return;

        let startPos, direction, endPos, validShipPlacement;

        // while theres no valid ship placement assign values to vars for use in functions until shipType & shipLength return undefined
        while (!validShipPlacement) {
            startPos = genRandomCoords();
            direction = Math.random() < 0.5 ? 'vertical' : 'horizontal';
            endPos = board.getEndCoord(startPos, direction, shipLength);

            validShipPlacement = board.canPlaceShipBetween(startPos, endPos);
        }
        
        board.placeShip(shipType, startPos, endPos);
        placeShipsRandomly();
    }

    return {
        attack,
        genRandomCoords,
        getBoardArray,
        getBoardObj,        
        getShipList,
        placeShipsRandomly,
        shipLengthArray,
        shipList
    }
}

// Inherit from Player factory
const Computer = () => {
    const proto = Player();
    let randomCoords;

    const hitCoords = [];
    const adjacentTargets = [];
    const linearTargets = [];

    function clearArrVals(arr) {
        while (arr.length > 0) arr.pop();
    }
    
    // on hit add the coord to array, on sunk clear arrays
    function handleAttackResults(attackResult, coords) {
        if (attackResult === 'hit') hitCoords.push(coords);
        if (attackResult === 'sunk') {
            clearArrVals(hitCoords);
            clearArrVals(adjacentTargets);
            clearArrVals(linearTargets);
        }
    }

    // TO FIX: when 2 separate ships are hit & no valid linear targets are around them we get a 'coords is not iterable' error. need to switch back to using adjacent targets/ other axis?
    function smartAttack(enemyBoard) {
        // if no valid targets attack random coord
        if (hitCoords.length === 0 && adjacentTargets.length === 0 && linearTargets.length === 0) {
            return randomAttack(enemyBoard);
        }

        // if attack result is a hit, get the adjacent coords in x & y axis & add to new arr
        if (hitCoords.length === 1 && adjacentTargets.length === 0 && linearTargets.length === 0) {
            const previousHit = hitCoords[0];
            const nextPossibleTargets = enemyBoard.getAllValidAdjacentCoords(previousHit, enemyBoard);
            nextPossibleTargets.forEach((target) => adjacentTargets.push(target));
        }

        //if there are 2 hits, fire along same axis
        if (hitCoords.length > 1) {
            clearArrVals(adjacentTargets);

            const startPos = hitCoords[0];
            const endPos = hitCoords[hitCoords.length - 1];
            const nextPossibleLinearTargets = enemyBoard.getAllValidLinearCoords(startPos, endPos);
            nextPossibleLinearTargets.forEach((target) => linearTargets.push(target));            
        }

        let nextTarget;

        if (adjacentTargets.length > 0) {
            nextTarget = adjacentTargets.pop();
        } else {
            nextTarget = linearTargets.pop();
        }

        // returns hit sunk or miss strings
        const attackResult = proto.attack(nextTarget, enemyBoard);
        handleAttackResults(attackResult, nextTarget);

        return attackResult;
    }

    function randomAttack(enemyBoard) {
        randomCoords = proto.genRandomCoords(); 
        
        const attackResult = proto.attack(randomCoords, enemyBoard);
        handleAttackResults(attackResult, randomCoords);
        return attackResult;
    }

    function getCoords() {
        return randomCoords;
    }

    return {
        getCoords,
        ...proto,
        randomAttack,
        smartAttack
    }
}

export { Player, Computer };