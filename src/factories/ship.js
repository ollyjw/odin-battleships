// length = number
// hits = number or array of boolean values representing each ship part?
// isSunk = either check if damage >= length OR check if every array element is true

// "REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests."

const Ship = (shipType) => {
    const shipClasses = {
        carrier: {
            length: 5,
        },
        battleship: {
            length: 4,
        },
        submarine: {
            length: 3,
        },
        cruiser: {
            length: 3,
        },
        patrolBoat: {
            length: 2,
        },
    };

    let hitsAmount = 0;
    const { length } = shipClasses[shipType];

    // function that increases the number of ‘hits’ to your ship.
    function hit() {
        this.hitsAmount++;
    };

    // calculates whether has sunk based on ship's length and the number of ‘hits’.
    function isSunk() {
        if (this.hitsAmount >= length) {
            return true;
        } else {
            return false;
        }
    }

    return {
        length,
        hit,
        hitsAmount,
        isSunk
    };
}

export default Ship;