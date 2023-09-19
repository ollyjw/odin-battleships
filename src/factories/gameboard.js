import Ship from "./ship";

// Gameboards should be able to place ships at specific coordinates by calling the ship factory function. DONE
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.


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
    
    const ship = {
        carrier: Ship('carrier'),
        battleship: Ship('battleship'),
        submarine: Ship('submarine'),
        cruiser: Ship('cruiser'),
        patrolBoat: Ship('patrolBoat'),
    };

    // place ship's id into the board array between input coords
    function placeShip(shipType, startPos, endPos) { //e.g 'battleship', [0,0], [4,0]
        
        // Store all coords between start coord & end coord
        const allCoords = getAllCoords(startPos, endPos);
        // amount of coords between the 2 given inputs
        const coordsAmount = allCoords.length;
        // Get shipLength & id props from Ship factory
        const { shipLength, id } = ship[shipType];
        
        const types = Object.keys(ship); // ['carrier', 'battleship', etc]       
        for (let i = 0; types.length > i; i++) {           
            if (shipType === types[i] && shipLength === coordsAmount) {
                allCoords.forEach((coord) => {
                    const [row, col] = coord;
                    boardArr[row][col] = id;
                })
            }
        }     
        return boardArr;
    }

    // return array of all coords between, & including, two input coords eg. [0,0], [0,3]
    function getAllCoords(startPos, endPos) {
        // formats each input into array with 2 items
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

    return { 
        createBoardArray,
        getAllCoords,
        getAllNumsBetween,
        placeShip,
    };
}

export default Gameboard;