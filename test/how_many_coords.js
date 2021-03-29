const range = require("./range");

class Coordinate {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this._possibleCoords = [];
    }

    
    calcCoords(x) {
        let y = (x * (this.y1 - this.y2) + this.x1 * this.y2 - this.x2 * this.y1) / (this.x1 - this.x2);

        return {x, y};
    }

    possibleCoords() {

        let xCoords = range.getNumberFromRange(this.x1, this.x2);

        for(let currentX = 0; currentX < xCoords.length; currentX++) {
            this._possibleCoords.push(this.calcCoords(xCoords[currentX]));
        }

        return this._possibleCoords;
    }

    length() {

        if(this._possibleCoords.length <= 0) {
            return this.possibleCoords().length;
        } else {
            return this._possibleCoords.length;
        }

    }


}


// function calculateCoords(x1, y1, x2, y2, x)
// {
//     let y = (x * (y1 - y2) + x1 * y2 - x2 * y1) / (x1 - x2);

//     console.log(x, y);
// }

// calculateCoords(-5, 5, 5, -5, 2)

let lineEquation = new Coordinate(5, -5, -5, 5)
let lineEquation2 = new Coordinate(-5, 5, 5, -5)

// console.log(lineEquation.calcCoords(1))

// lineEquation.possibleCoords()
// console.log("=".repeat(10))
// lineEquation2.possibleCoords()

// console.log(lineEquation.length())
let lineEquation3 = new Coordinate(5, 8, 10, 5)

console.log(lineEquation3.possibleCoords())