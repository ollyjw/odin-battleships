/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");


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
    const shipsArr = [];
    
    const ship = {
        carrier: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier'),
        battleship: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship'),
        submarine: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine'),
        cruiser: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('cruiser'),
        patrolBoat: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('patrolBoat'),
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

    // takes pair of coords, determines whether the attack hit a ship and sends hit function to correct ship or records coords of missed shot
    function receiveAttack(coords) {
        const [row, col] = coords;
        // Store value of the given board array indeces
        const boardValue = boardArr[row][col];
        // coords contain a ship if boardValue is a number...
        const coordsContainShip = typeof boardValue === 'number';

        if (coordsContainShip) {

            const types = Object.keys(ship); // ['carrier', 'battleship', etc]
            for (let i = 0; types.length > i; i++) { 
                // grab id from ship props
                const { id } = ship[types[i]];

                // if the board val is equal to id of ship obj
                if (boardValue === id) {

                    // pull object out of array
                    const shipObj = ship[types[i]];
    
                    shipObj.hit();
    
                    // append an X to value to represent a hit
                    boardArr[row][col] += 'X';
    
                    // append S to represent Sunk to entire ship coords
                    if (shipObj.isSunk()) {
                        boardArr.forEach((row, r) => {
                            row.forEach((col, c) => {
                                boardArr[r][c] += 'S';
                            })
                        })                
                        return 'Sunk';
                    } 
                    if (allShipsSunk()) return 'Game Over';
                }
            }

        } else {
            // board value to M for a miss
            boardArr[row][col] = 'M';
        }
        
    }
    // The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    const allShipsSunk = () => shipsArr.every((ship) => ship.isSunk());

    function getArray() {
        return boardArr;
    }

    return { 
        allShipsSunk,
        createBoardArray,
        getAllCoords,
        getAllNumsBetween,
        getArray,
        placeShip,
        receiveAttack
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// length = number
// hits = number or array of boolean values representing each ship part?
// isSunk = either check if damage >= length OR check if every array element is true

// "REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests."

const Ship = (shipType) => {
    const shipClasses = {
        carrier: {
            shipLength: 5,
            id: 1,
        },
        battleship: {
            shipLength: 4,
            id: 2,
        },
        submarine: {
            shipLength: 3,
            id: 3,
        },
        cruiser: {
            shipLength: 3,
            id: 4,
        },
        patrolBoat: {
            shipLength: 2,
            id: 5,
        },
    };

    let hitsAmount = 0;
    const { shipLength, id } = shipClasses[shipType];

    // function that increases the number of ‘hits’ to your ship.
    function hit() {
        this.hitsAmount++;
    };

    // calculates whether has sunk based on ship's length and the number of ‘hits’.
    function isSunk() {
        if (this.hitsAmount >= shipLength) {
            return true;
        } else {
            return false;
        }
    }

    return {
        shipClasses,
        shipLength,
        hit,
        hitsAmount,
        id,
        isSunk
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/gameboard */ "./src/factories/gameboard.js");
// import './styles.css';
// import Ship from "./factories/ship";


// Ship;
// Gameboard;

let board = (0,_factories_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

board.placeShip('patrolBoat', [9,0], [9,1]);
board.placeShip('battleship', [3,0], [3,3]);
board.placeShip('submarine', [5,2], [5,4]);
board.placeShip('carrier', [5,9], [9,9]);
board.placeShip('cruiser', [0,1], [0,3]);
board.receiveAttack([9,0]);


// 10x10 sqr grid, letter & num coords
// 5 Ship classes occupy differing amount of sqrs
// Ships cannot overlap
// Enemy ships hidden from player sight
// Each turn player announces coord to hit
// Hit or miss is marked on player board
// When all sqrs of ship hit, it sinks
// Game over when all ships have been sunk
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0VBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IGNhbGxpbmcgdGhlIHNoaXAgZmFjdG9yeSBmdW5jdGlvbi4gRE9ORVxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHRoZW4gc2VuZHMgdGhlIOKAmGhpdOKAmSBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwLCBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXHJcbi8vIEdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHJlcG9ydCB3aGV0aGVyIG9yIG5vdCBhbGwgb2YgdGhlaXIgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXHJcblxyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7IFxyXG4gICAgICAgICAgICAvLyBnZW4gMTAgcm93IGFycmF5c1xyXG4gICAgICAgICAgICBib2FyZFtyb3ddID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2VuIDEwIGNvbHMgKGFkZCAxMCBlbXB0eSBzdHJpbmdzKSBpbnNpZGUgZWFjaCByb3cgYXJyYXlcclxuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIGNvb3JkcyBieSBbcm93SW5kZXhdW2NvbEluZGV4XSBpZS4gWzBdWzBdIHx8IFs5XVs3XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2FyZEFyciA9IGNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICAgIGNvbnN0IHNoaXBzQXJyID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHNoaXAgPSB7XHJcbiAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcclxuICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxyXG4gICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcclxuICAgICAgICBwYXRyb2xCb2F0OiBTaGlwKCdwYXRyb2xCb2F0JyksXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHBsYWNlIHNoaXAncyBpZCBpbnRvIHRoZSBib2FyZCBhcnJheSBiZXR3ZWVuIGlucHV0IGNvb3Jkc1xyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKSB7IC8vZS5nICdiYXR0bGVzaGlwJywgWzAsMF0sIFs0LDBdXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3RvcmUgYWxsIGNvb3JkcyBiZXR3ZWVuIHN0YXJ0IGNvb3JkICYgZW5kIGNvb3JkXHJcbiAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gZ2V0QWxsQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGFtb3VudCBvZiBjb29yZHMgYmV0d2VlbiB0aGUgMiBnaXZlbiBpbnB1dHNcclxuICAgICAgICBjb25zdCBjb29yZHNBbW91bnQgPSBhbGxDb29yZHMubGVuZ3RoO1xyXG4gICAgICAgIC8vIEdldCBzaGlwTGVuZ3RoICYgaWQgcHJvcHMgZnJvbSBTaGlwIGZhY3RvcnlcclxuICAgICAgICBjb25zdCB7IHNoaXBMZW5ndGgsIGlkIH0gPSBzaGlwW3NoaXBUeXBlXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHNoaXApOyAvLyBbJ2NhcnJpZXInLCAnYmF0dGxlc2hpcCcsIGV0Y10gICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IHR5cGVzLmxlbmd0aCA+IGk7IGkrKykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdHlwZXNbaV0gJiYgc2hpcExlbmd0aCA9PT0gY29vcmRzQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwdXNoIHNoaXAgb2JqIHRvIHNoaXBzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgICAgICAgICBzaGlwc0Fyci5wdXNoKHNoaXBPYmopO1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGlkIHRvIGVhY2ggY29vcmQgKGJvYXJkIGFycmF5IGluZGVjZXMpXHJcbiAgICAgICAgICAgICAgICBhbGxDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBhbGwgY29vcmRzIGJldHdlZW4sICYgaW5jbHVkaW5nLCB0d28gaW5wdXQgY29vcmRzIGVnLiBbMCwwXSwgWzAsM11cclxuICAgIGZ1bmN0aW9uIGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgLy8gZm9ybWF0cyBlYWNoIGlucHV0IGludG8gYXJyYXkgd2l0aCAyIGl0ZW1zXHJcbiAgICAgICAgY29uc3QgW3N0YXJ0Um93LCBzdGFydENvbF0gPSBzdGFydFBvcztcclxuICAgICAgICBjb25zdCBbZW5kUm93LCBlbmRDb2xdID0gZW5kUG9zO1xyXG4gICAgICAgIGxldCBhbGxDb29yZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaWYgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseSAoc2FtZSBjb2wgdmFsdWVzKVxyXG4gICAgICAgIGlmIChzdGFydENvbCA9PT0gZW5kQ29sKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBhbGwgcm93IHZhbHVlcyBiZXR3ZWVuIHN0YXJ0ICYgZW5kIGNvb3Jkc1xyXG4gICAgICAgICAgICBjb25zdCBhbGxSb3dOdW1zID0gZ2V0QWxsTnVtc0JldHdlZW4oc3RhcnRSb3csIGVuZFJvdyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBhbGwgcm93IHZhbHVlcyB0aGF0IHJldHVybnMgcm93IHZhbHVlICsgaW5wdXQgY29sIGFuZCBzdG9yZSBpbiBhbGwgY29vcmRzIGFycmF5XHJcbiAgICAgICAgICAgIGFsbENvb3JkcyA9IGFsbFJvd051bXMubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbcm93LCBzdGFydENvbF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgKHNhbWUgcm93IHZhbHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENvbE51bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydENvbCwgZW5kQ29sKTtcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsQ29sTnVtcy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzdGFydFJvdywgY29sXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgbnVtcyBiZXR3ZWVuIDIgaW5wdXQgbnVtc1xyXG4gICAgZnVuY3Rpb24gZ2V0QWxsTnVtc0JldHdlZW4oeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBbXTtcclxuICAgICAgICBsZXQgaGlnaCwgbG93O1xyXG5cclxuICAgICAgICAvLyBDaGVjayB3aGljaCBudW0gaXMgaGlnaGVyIG9yIGxvd2VyXHJcbiAgICAgICAgaWYgKHggPiB5KSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB4O1xyXG4gICAgICAgICAgICBsb3cgPSB5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB5O1xyXG4gICAgICAgICAgICBsb3cgPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwdXNoIG51bXMgZnJvbSBsb3cgdG8gaGlnaCB0byBudW1zIGFycmF5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtcztcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWtlcyBwYWlyIG9mIGNvb3JkcywgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmQgc2VuZHMgaGl0IGZ1bmN0aW9uIHRvIGNvcnJlY3Qgc2hpcCBvciByZWNvcmRzIGNvb3JkcyBvZiBtaXNzZWQgc2hvdFxyXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIC8vIFN0b3JlIHZhbHVlIG9mIHRoZSBnaXZlbiBib2FyZCBhcnJheSBpbmRlY2VzXHJcbiAgICAgICAgY29uc3QgYm9hcmRWYWx1ZSA9IGJvYXJkQXJyW3Jvd11bY29sXTtcclxuICAgICAgICAvLyBjb29yZHMgY29udGFpbiBhIHNoaXAgaWYgYm9hcmRWYWx1ZSBpcyBhIG51bWJlci4uLlxyXG4gICAgICAgIGNvbnN0IGNvb3Jkc0NvbnRhaW5TaGlwID0gdHlwZW9mIGJvYXJkVmFsdWUgPT09ICdudW1iZXInO1xyXG5cclxuICAgICAgICBpZiAoY29vcmRzQ29udGFpblNoaXApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7IC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgZXRjXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7IFxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhYiBpZCBmcm9tIHNoaXAgcHJvcHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHNoaXBbdHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBib2FyZCB2YWwgaXMgZXF1YWwgdG8gaWQgb2Ygc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFZhbHVlID09PSBpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBwdWxsIG9iamVjdCBvdXQgb2YgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFt0eXBlc1tpXV07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBzaGlwT2JqLmhpdCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGFuIFggdG8gdmFsdWUgdG8gcmVwcmVzZW50IGEgaGl0XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdICs9ICdYJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBTIHRvIHJlcHJlc2VudCBTdW5rIHRvIGVudGlyZSBzaGlwIGNvb3Jkc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwT2JqLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyLmZvckVhY2goKHJvdywgcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyW3JdW2NdICs9ICdTJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1N1bmsnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFNoaXBzU3VuaygpKSByZXR1cm4gJ0dhbWUgT3Zlcic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gYm9hcmQgdmFsdWUgdG8gTSBmb3IgYSBtaXNzXHJcbiAgICAgICAgICAgIGJvYXJkQXJyW3Jvd11bY29sXSA9ICdNJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyBUaGUgZXZlcnkoKSBtZXRob2Qgb2YgQXJyYXkgaW5zdGFuY2VzIHRlc3RzIHdoZXRoZXIgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gSXQgcmV0dXJucyBhIEJvb2xlYW4gdmFsdWUuXHJcbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBzaGlwc0Fyci5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGFsbFNoaXBzU3VuayxcclxuICAgICAgICBjcmVhdGVCb2FyZEFycmF5LFxyXG4gICAgICAgIGdldEFsbENvb3JkcyxcclxuICAgICAgICBnZXRBbGxOdW1zQmV0d2VlbixcclxuICAgICAgICBnZXRBcnJheSxcclxuICAgICAgICBwbGFjZVNoaXAsXHJcbiAgICAgICAgcmVjZWl2ZUF0dGFja1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsIi8vIGxlbmd0aCA9IG51bWJlclxyXG4vLyBoaXRzID0gbnVtYmVyIG9yIGFycmF5IG9mIGJvb2xlYW4gdmFsdWVzIHJlcHJlc2VudGluZyBlYWNoIHNoaXAgcGFydD9cclxuLy8gaXNTdW5rID0gZWl0aGVyIGNoZWNrIGlmIGRhbWFnZSA+PSBsZW5ndGggT1IgY2hlY2sgaWYgZXZlcnkgYXJyYXkgZWxlbWVudCBpcyB0cnVlXHJcblxyXG4vLyBcIlJFTUVNQkVSIHlvdSBvbmx5IGhhdmUgdG8gdGVzdCB5b3VyIG9iamVjdOKAmXMgcHVibGljIGludGVyZmFjZS4gT25seSBtZXRob2RzIG9yIHByb3BlcnRpZXMgdGhhdCBhcmUgdXNlZCBvdXRzaWRlIG9mIHlvdXIg4oCYc2hpcOKAmSBvYmplY3QgbmVlZCB1bml0IHRlc3RzLlwiXHJcblxyXG5jb25zdCBTaGlwID0gKHNoaXBUeXBlKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwQ2xhc3NlcyA9IHtcclxuICAgICAgICBjYXJyaWVyOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDUsXHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmF0dGxlc2hpcDoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Ym1hcmluZToge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNydWlzZXI6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMyxcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXRyb2xCb2F0OiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDIsXHJcbiAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBoaXRzQW1vdW50ID0gMDtcclxuICAgIGNvbnN0IHsgc2hpcExlbmd0aCwgaWQgfSA9IHNoaXBDbGFzc2VzW3NoaXBUeXBlXTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiB0aGF0IGluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIOKAmGhpdHPigJkgdG8geW91ciBzaGlwLlxyXG4gICAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0c0Ftb3VudCsrO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGVzIHdoZXRoZXIgaGFzIHN1bmsgYmFzZWQgb24gc2hpcCdzIGxlbmd0aCBhbmQgdGhlIG51bWJlciBvZiDigJhoaXRz4oCZLlxyXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpdHNBbW91bnQgPj0gc2hpcExlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcENsYXNzZXMsXHJcbiAgICAgICAgc2hpcExlbmd0aCxcclxuICAgICAgICBoaXQsXHJcbiAgICAgICAgaGl0c0Ftb3VudCxcclxuICAgICAgICBpZCxcclxuICAgICAgICBpc1N1bmtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbi8vIGltcG9ydCBTaGlwIGZyb20gXCIuL2ZhY3Rvcmllcy9zaGlwXCI7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZmFjdG9yaWVzL2dhbWVib2FyZFwiO1xyXG5cclxuLy8gU2hpcDtcclxuLy8gR2FtZWJvYXJkO1xyXG5cclxubGV0IGJvYXJkID0gR2FtZWJvYXJkKCk7XHJcblxyXG5ib2FyZC5wbGFjZVNoaXAoJ3BhdHJvbEJvYXQnLCBbOSwwXSwgWzksMV0pO1xyXG5ib2FyZC5wbGFjZVNoaXAoJ2JhdHRsZXNoaXAnLCBbMywwXSwgWzMsM10pO1xyXG5ib2FyZC5wbGFjZVNoaXAoJ3N1Ym1hcmluZScsIFs1LDJdLCBbNSw0XSk7XHJcbmJvYXJkLnBsYWNlU2hpcCgnY2FycmllcicsIFs1LDldLCBbOSw5XSk7XHJcbmJvYXJkLnBsYWNlU2hpcCgnY3J1aXNlcicsIFswLDFdLCBbMCwzXSk7XHJcbmJvYXJkLnJlY2VpdmVBdHRhY2soWzksMF0pO1xyXG5cclxuXHJcbi8vIDEweDEwIHNxciBncmlkLCBsZXR0ZXIgJiBudW0gY29vcmRzXHJcbi8vIDUgU2hpcCBjbGFzc2VzIG9jY3VweSBkaWZmZXJpbmcgYW1vdW50IG9mIHNxcnNcclxuLy8gU2hpcHMgY2Fubm90IG92ZXJsYXBcclxuLy8gRW5lbXkgc2hpcHMgaGlkZGVuIGZyb20gcGxheWVyIHNpZ2h0XHJcbi8vIEVhY2ggdHVybiBwbGF5ZXIgYW5ub3VuY2VzIGNvb3JkIHRvIGhpdFxyXG4vLyBIaXQgb3IgbWlzcyBpcyBtYXJrZWQgb24gcGxheWVyIGJvYXJkXHJcbi8vIFdoZW4gYWxsIHNxcnMgb2Ygc2hpcCBoaXQsIGl0IHNpbmtzXHJcbi8vIEdhbWUgb3ZlciB3aGVuIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3VuayJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==