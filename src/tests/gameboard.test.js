import Gameboard from '../factories/gameboard.js';

describe('Gameboard factory tests', () => {
    let board;

    beforeEach(() => {
        board = Gameboard();
    })
    
    test('Create a 10x10 board array i.e 10 arrays with 10 items each', () => {
        expect(board.createBoardArray()).toStrictEqual([
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '']
        ]);
    })

    test('Get all numbers between and including 2 input numbers & store in array', () => {
        expect(board.getAllNumsBetween(8,3)).toEqual([3,4,5,6,7,8]);
    })

    test('Get all coordinates between any given 2 inputted coordinates', () => {
        expect(board.getAllCoords([3,0],[3,3])).toEqual([
            [3,0],
            [3,1],
            [3,2],
            [3,3]
        ])
    })

    test('Place a battleship in the gameboard array', () => {
        board.placeShip('battleship', [3,0], [3,3]);
        expect(board.getArray()).toEqual([
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            [2, 2, 2, 2, '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '']
        ])
    })

    test('Place a cruiser in the gameboard array', () => {
        board.placeShip('cruiser', [0,5], [2,5]);
        expect(board.getArray()).toEqual([
            ['', '', '', '', '', 4, '', '', '', ''],
            ['', '', '', '', '', 4, '', '', '', ''],
            ['', '', '', '', '', 4, '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '']
        ])
    })

    test('recieve attack on empty coords', () => {
        board.receiveAttack([0,5]);
        expect(board.getArray()[0][5]).toEqual('M');
    })

    test('recieve attack on battleship', () => {
        board.placeShip('battleship', [3,0], [3,3]);
        board.receiveAttack([3,0]);
        expect(board.getArray()[3][0]).toEqual('2X');
    })

    test('place all ships and recieve attack on patrol boat', () => {
        board.placeShip('patrolBoat', [9,0], [9,1]);
        board.placeShip('battleship', [3,0], [3,3]);
        board.placeShip('submarine', [5,2], [5,4]);
        board.placeShip('carrier', [5,9], [9,9]);
        board.placeShip('cruiser', [0,1], [0,3]);
        board.receiveAttack([9,0]);
        expect(board.getArray()[9][0]).toEqual('5X');
    })

    test('Are all ships sunk: false test', () => {
        board.placeShip('patrolBoat', [9,0], [9,1]);
        expect(board.allShipsSunk()).toBeFalsy();
    })

    test('Are all ships sunk: true test', () => {
        board.placeShip('patrolBoat', [9,0], [9,1]);
        board.receiveAttack([9,0]);
        board.receiveAttack([9,1]);
        expect(board.allShipsSunk()).toBeTruthy();
    })

})