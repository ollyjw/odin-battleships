import Ship from "./ship";

const Gameboard = () => {

    const createBoardArray = () => {
        let board = [];
        for (let row = 0; row < 10; row++) { 
            // gen 10 row arrays
            board[row] = [];
            for (let col = 0; col < 10; col++) {
                // gen 10 cols (add 10 empty strings) inside each row array
                board[row][col] = '';
                // access coords by [rowIndex][colIndex] ie. [0][0] || [9][7]
            }
        }
        return board;
    }

    const boardArr = createBoardArray();
    const shipsArr = [];
    
    const ship = {
        carrier: Ship('carrier'),
        battleship: Ship('battleship'),
        submarine: Ship('submarine'),
        cruiser: Ship('cruiser'),
        patrolBoat: Ship('patrolBoat'),
    };

    const types = Object.keys(ship); // ['carrier', 'battleship', etc]

    function getShipTypes() {
        const types = Object.keys(ship);
        return types;
    }

    // place ship's id into the board array between input coords
    function placeShip(shipType, startPos, endPos) { //e.g 'battleship', [0,0], [4,0]
        
        // Store all coords between start coord & end coord
        const allCoords = getAllCoords(startPos, endPos);
        // amount of coords between the 2 given inputs
        const coordsAmount = allCoords.length;
        // Get shipLength & id props from Ship factory
        const { shipLength, id } = ship[shipType];
        
        for (let i = 0; types.length > i; i++) {           
            if (shipType === types[i] && shipLength === coordsAmount) {
                // push ship obj to ships array
                const shipObj = ship[shipType];
                shipsArr.push(shipObj);
                // add id to each coord (board array indeces)
                allCoords.forEach((coord) => {
                    const [row, col] = coord;
                    boardArr[row][col] = id;
                })
            }
        }     
    }
       
    // push shiplength of each ship into new array
    function createShipLengthArray() {
        const shipLengthArray = [];
        
        for (let i = 0; types.length > i; i++) {
            shipLengthArray.push(ship[types[i]].shipLength);
        }
        
        return shipLengthArray;
    }
    
    // return array of all coords between, & including, two input coords eg. [0,0], [0,3]
    function getAllCoords(startPos, endPos) {
        // formats each input into array with 2 items & assigns var names to items
        const [startRow, startCol] = startPos;
        const [endRow, endCol] = endPos;
        let allCoords = [];

        // if ship is placed vertically (same col values)
        if (startCol === endCol) {
            // get all row values between start & end coords
            const allRowNums = getAllNumsBetween(startRow, endRow);
            // create new array from all row values that returns row value + input col and store in all coords array
            allCoords = allRowNums.map((row) => {
                return [row, startCol];
            });

        } else { // if ship placed horizontally (same row vals)
            const allColNums = getAllNumsBetween(startCol, endCol);
            allCoords = allColNums.map((col) => {
                return [startRow, col];
            })
        }
        return allCoords;
    }

    // return array of nums between 2 input nums
    function getAllNumsBetween(x, y) {
        const nums = [];
        let high, low;

        // Check which num is higher or lower
        if (x > y) {
            high = x;
            low = y;
        } else {
            high = y;
            low = x;
        }
        // push nums from low to high to nums array
        for (let i = low; i <= high; i++) {
            nums.push(i);
        }
        return nums;
    }

    // Find end coord from start coord + shiplength & direction
    function getEndCoord (startPos, direction, shipLength) {
        const [startRow, startCol] = startPos;
        let endRow = startRow;
        let endCol = startCol;
        // vertical goes downwards in array index (upwards in DOM), horizontal goes rightwards
        if (direction === 'vertical') {
            endRow += shipLength - 1;            
        } else if (direction === 'horizontal') {
            endCol += shipLength - 1;
        }
        return [endRow, endCol];
    }

    // takes pair of coords, determines whether the attack hit a ship and sends hit function to the correct ship or records coords of missed shot
    function receiveAttack(coords) {
        const [row, col] = coords;
        // Store value of the given board array indeces
        const boardValue = boardArr[row][col];
        // coords contain a ship if boardValue is a number...
        const coordsContainShip = typeof boardValue === 'number';

        if (coordsContainShip) {
            for (let i = 0; types.length > i; i++) { 
                // grab id from ship props
                const { id } = ship[types[i]];

                // if the board val is equal to id of ship obj
                if (boardValue === id) {
                    // send hit function to that ship obj
                    const shipObj = ship[types[i]];
                    shipObj.hit();
                    // append S to represent Sunk to entire ship coords
                    if (shipObj.isSunk()) {
                        boardArr.forEach((row, r) => {
                            row.forEach((col, c) => {
                                if (boardArr[r][c].toString().includes(id)){
                                    boardArr[r][c] = `${id}S`;
                                }
                            })
                        })
                    } else {
                        // append an X to value to represent a hit
                        boardArr[row][col] += 'X';
                    }                    
                    if (allShipsSunk()) return 'Game Over'; // Game over has to return before final ship sunk
                    if (shipObj.isSunk()) return 'sunk';
                    return 'hit';
                }
            }
        } else {
            // board value to M for a miss
            boardArr[row][col] = 'M';
            return 'miss';
        }
    }
    // The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    const allShipsSunk = () => shipsArr.every((ship) => ship.isSunk());

    // Return number of ships remaining
    function getRemainingShips() {        
        // reduce method accumulates sum of numbers in arr
        return shipsArr.reduce((total, ship) => {
            // add one for every ship in array of 5 items thats not sunk
            if (!ship.isSunk()) {
                total += 1;
            }
            return total;
        }, 0); // 0 = initial value - i.e. count from 0 upwards
    }

    // are coords empty, within board
    // returns true if ship can place between two given coords
    function canPlaceShipBetween(startPos, endPos) {
        const allCoords = getAllCoords(startPos, endPos);
        return allCoords.every((coord) => {
            if (areCoordsWithinBoard(coord) && areCoordsEmpty(coord)) {
                return true;
            }
        })
    }

    // Check if coords are within board boundaries
    function areCoordsWithinBoard(coords) {
        const [row, col] = coords;
        if (row >= 10 || row < 0 || col >= 10 || col <  0) {
            return false;
        } else {
            return true;
        }
    }

    // Check if coords are empty
    function areCoordsEmpty(coords) {
        const [row, col] = coords;
        if (boardArr[row][col] === '') {
            return true;
        } else {
            return false;
        }
    }

    function areCoordsUnplayed(coords) {
        const [row, col] = coords;
        if (boardArr[row][col] === '' || typeof boardArr[row][col] === 'number') {
            return true;
        } else {
            return false;
        }
    }

    // if coords both empty & within board boundaries return true
    function areCoordsEmptyWithinBoard(coords) {
        if (!areCoordsWithinBoard(coords)) return false;
        if (!areCoordsEmpty) return false;
        return true;
    }

    function areCoordsMiss(coords) {
        const [row, col] = coords;
        if (boardArr[row][col] === 'M') {
            return true;
        } else {
            return false;
        }
    }    
    
    function getArray() {
        return boardArr;
    }

    // Take a coord and get all empty coords within board that are above, below, left & right of coord
    function getAllValidAdjacentCoords(coords, boardObj) {
        const [row, col]= coords;
        const possibleMoves = [];
        
        possibleMoves.push([row + 1, col]);
        possibleMoves.push([row - 1, col]);
        possibleMoves.push([row, col + 1]);
        possibleMoves.push([row, col - 1]);

        // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
        // filter out coords that are empty or outside board
        const validMoves = possibleMoves.filter(coord => {
            return !boardObj ? areCoordsEmptyWithinBoard(coord): boardObj.areCoordsEmptyWithinBoard(coord);
        });

        return validMoves;
    }

    // take 2 coords and return all valid coords along same axis 
    function getAllValidLinearCoords(startPos, endPos) {
        const linearTargets = [];
        const [startRow, startCol] = startPos;
        const [endRow, endCol] = endPos;
        let coord;

        if (endRow === startRow) { //same row
            let currentCol = startCol;
            // Loop in positive and negative direction along rows, add empty coords to targets array and break out if coords are outside board boundaries or a missed shot
            while (true) {
                coord = [startRow, currentCol++];
                if (!areCoordsWithinBoard(coord)) break; // break statement terminates current loop
                if (areCoordsMiss(coord)) break;
                if (areCoordsUnplayed(coord)) {
                    linearTargets.push(coord);
                    break;
                }
            }
            currentCol = startCol;
            while (true) {
                coord = [startRow, currentCol--];
                if (!areCoordsWithinBoard(coord)) break;
                if (areCoordsMiss(coord)) break;
                if (areCoordsUnplayed(coord)) {
                    linearTargets.push(coord);
                    break;
                }
            }
        } else { // same column
            let currentRow = startRow;
            // Loop in positive and negative direction along columns
            while (true) {
                coord = [currentRow++, startCol];
                if (!areCoordsWithinBoard(coord)) break;
                if (areCoordsMiss(coord)) break;
                if (areCoordsUnplayed(coord)) {
                    linearTargets.push(coord);
                    break;
                }
            }
            currentRow = startRow;
            while (true) {
                coord = [currentRow--, startCol];
                if (!areCoordsWithinBoard(coord)) break;
                if (areCoordsMiss(coord)) break;
                if (areCoordsUnplayed(coord)) {
                    linearTargets.push(coord);
                    break;
                }
            }
        }
        return linearTargets;
    }

    return { 
        allShipsSunk,
        areCoordsEmptyWithinBoard,
        areCoordsWithinBoard,
        canPlaceShipBetween,
        createBoardArray,
        createShipLengthArray,
        getAllCoords,
        getAllNumsBetween,
        getArray,
        getAllValidAdjacentCoords,
        getAllValidLinearCoords,
        getEndCoord,
        getRemainingShips,
        getShipTypes,
        placeShip,
        receiveAttack,        
        types
    };
}

export default Gameboard;