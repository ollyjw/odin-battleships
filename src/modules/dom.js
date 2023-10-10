import Gameboard from "../factories/gameboard";


// We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class/factory.
// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.


const board = Gameboard().createBoardArray();

export function displayBoard() {
    const container = document.createElement('div');
    container.classList.add('container');
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');

    for (let i = board.length - 1; i >= 0; i--) { // ROW i.e nums
        const row = board[i];
        //console.log(row);
        let rowCoord = i + 1;
        for (let j = 0; j < row.length; j++) {             
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;
            if (j === 0) {
                const rowLegend = document.createElement("div");                
                rowLegend.classList.add("legend", "row");
                rowLegend.textContent = i + 1;
                gameboard.append(rowLegend);
            }
            const square = document.createElement('div');
            square.id = coordinate;
            square.classList.add('square');
            gameboard.appendChild(square);           
        }
    }
    for (let i = 0; i <= 10; i++) {
        const colLegend = document.createElement("div");
        colLegend.classList.add("legend", "col");
        colLegend.textContent = String.fromCharCode(64 + i);
        if (i === 0) {
            colLegend.textContent = "";
        }
        gameboard.append(colLegend);
    }
    document.body.appendChild(container);
    container.appendChild(gameboard);
}