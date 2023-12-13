import Gameboard from "./gameboard";

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

    function getRemainingShips() {
        return board.getRemainingShips();
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
        getRemainingShips,     
        getShipList,
        placeShipsRandomly,
        shipLengthArray,
        shipList
    }
}

// Inherit from Player factory
const Computer = () => {
    const proto = Player();
    let nextTarget;

    const hitCoords = [];
    const adjacentTargets = [];
    const linearTargets = [];

    function clearArrVals(arr) {
        while (arr.length > 0) arr.pop();
    }

    // Scan board array and find cells that contain target i.e 'X'
    const find2dCoordinates = (boardArr, target) => {
        const coordsArr = [];
        let coord = [];
        boardArr.forEach((row, i) => {
          row.forEach((item, j) => {
            if (item.toString().includes(target, 1)) {
              coord = [i,j];
              coordsArr.push(coord);
            }
          })
        });
        return coordsArr;
    };
    
    // on hit add the coord to array, on sunk clear arrays
    function handleAttackResults(attackResult, coords) {
        // if attack result is a hit, store in arr
        if (attackResult === 'hit') hitCoords.push(coords);
        if (attackResult === 'sunk') {
            clearArrVals(hitCoords);
            clearArrVals(adjacentTargets);
            clearArrVals(linearTargets);
        }
    }

    function smartAttack(enemyBoard) {
        const enemyBoardArr = enemyBoard.getArray(); // aka player board
        let remainingHitsArr = find2dCoordinates(enemyBoardArr, 'X');

        // console.clear();
        // console.log(`HIT COORDS is: ${hitCoords}`);
        // console.log(`Remaining hits is: ${remainingHitsArr}`);
        // console.log(`ADJACENT TARGETS is: ${adjacentTargets}`);
        // console.log(`LINEAR TARGETS is: ${linearTargets}`);        

        // 1. if no valid targets attack random coord
        if (hitCoords.length === 0 && adjacentTargets.length === 0 && linearTargets.length === 0 && remainingHitsArr.length === 0) {
            return randomAttack(enemyBoard);
        }

        // 2. if a hit exists, store it's adjacent coords in both axis in new arr
        if (hitCoords.length === 1 && adjacentTargets.length === 0 && linearTargets.length === 0) {
            const previousHit = hitCoords[0];
            const nextPossibleTargets = enemyBoard.getAllValidAdjacentCoords(previousHit, enemyBoard);
            nextPossibleTargets.forEach((target) => adjacentTargets.push(target));
            // console.log('condition 2 - PUSH TO ADJACENT');
        }

        // 3. if there are 2 hit coords, store the coords within same axis in new arr (linear)
        if (hitCoords.length > 1) {
            const startPos = hitCoords[0];
            const endPos = hitCoords[hitCoords.length - 1];
            const nextPossibleLinearTargets = enemyBoard.getAllValidLinearCoords(startPos, endPos);
            nextPossibleLinearTargets.forEach((target) => linearTargets.push(target));              
            // console.log('condition 3 - PUSH TO LINEAR');
        }

        // 4. if arrays have been cleared after ship sunk but board array still contain hits (x)
        if (remainingHitsArr.length > 0 && adjacentTargets.length === 0 && linearTargets.length === 0 ) {
            const startPos = remainingHitsArr[0];
            const endPos = remainingHitsArr[remainingHitsArr.length - 1];
            const nextPossibleLinearTargets = enemyBoard.getAllValidLinearCoords(startPos, endPos);

            // if there are no linear targets, find the adjacent targets for each remaining hit
            if (nextPossibleLinearTargets.length === 0) {
                const previousHit = remainingHitsArr.pop();
                const nextPossibleAdjacentTargets = enemyBoard.getAllValidAdjacentCoords(previousHit, enemyBoard);
                nextPossibleAdjacentTargets.forEach((target) => adjacentTargets.push(target));
                //console.log("Condition 4 - PUSH REMAINING HITS TO ADJACENT");
            } else { //else target linear
                nextPossibleLinearTargets.forEach((target) => linearTargets.push(target));
                //console.log("Condition 4 - PUSH REMAINING HITS TO LINEAR");
            }
        }
       
        // if there is a linear target the last one from array will be nextTarget, 
        // else target the last adjacent targets
        if (linearTargets.length > 0) {
            nextTarget = linearTargets.pop();
        } else {
            nextTarget = adjacentTargets.pop();
        }
        
        // console.log(`next target is ${nextTarget}`);
        // console.log(`----------------------------`);
        
        const attackResult = proto.attack(nextTarget, enemyBoard); // returns hit sunk or miss strings
        handleAttackResults(attackResult, nextTarget);
       
        return attackResult;
    }

    function randomAttack(enemyBoard) {
        nextTarget = proto.genRandomCoords();         
        const attackResult = proto.attack(nextTarget, enemyBoard);
        handleAttackResults(attackResult, nextTarget);
        return attackResult;
    }

    function getCoords() {
        return nextTarget;
    }

    return {
        getCoords,
        ...proto,
        randomAttack,
        smartAttack
    }
}

export { Player, Computer };