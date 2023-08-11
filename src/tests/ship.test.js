import Ship from '../factories/ship.js';

describe('ship', () => {
    let ship;

    beforeEach(() => {
        ship = Ship('battleship');
    })
    
    test('Create new battleship & check init length, hitsAmount & isSunk parameters', () => {    
        expect(ship.length).toBe(4);
        expect(ship.hitsAmount).toBe(0);
        expect(ship.isSunk()).toBe(false);
    })
    
    test('increase hitsAmount by 1 with hit function', () => {
        ship.hit();
        ship.hit();
        expect(ship.hitsAmount).toBe(2);
    })
    
    test('ship sinks when fully hit', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    })
    
    test('ship doesnt sink when partially hit', () => {
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeFalsy();
    })
})