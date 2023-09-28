import Gameboard from "./gameboard";

// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal (i.e. it shouldn’t shoot the same coordinate twice).

const Player = () => {
    let board = Gameboard();

    function getBoardObj() {
        return board;
    }

    function getBoardArray() {
        board.getArray();
    }

    function attack(coords, enemyBoard) {
        return enemyBoard.receiveAttack(coords);
    }

    function genRandomCoords() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return [x, y];
    }

    return {
        attack,
        genRandomCoords,
        getBoardArray,
        getBoardObj
    }
}

// Inherit from Player factory
const Computer = () => {
    const proto = Player();

    function randomAttack(enemyBoard) {
        let randomCoords = proto.genRandomCoords();
        const attackedCoord = proto.attack(randomCoords, enemyBoard);
        return attackedCoord;
    }

    return {
        ...proto,
        randomAttack
    }
}

export { Player, Computer };