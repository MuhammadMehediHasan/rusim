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

exports.Coordinate = Coordinate;