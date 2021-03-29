const point = require("./point");
const coords = require("./Coords")

class Line extends coords.Coordinate {
    /**
     * 
     * @param {Number} x1 
     * @param {Number} y1 
     * @param {Number} x2 
     * @param {Number} y2 
     */
    constructor(x1, y1, x2, y2) {
        super(x1, y1, x2, y2);
        this.sign = "@"
    }


    draw() {
        let coords = this.possibleCoords();

        coords.forEach((coord) => {
            point.point(coord.x, coord.y);
            console.log(this.sign)
        })



    }

}


let myLine = new Line(10, 10, 20, 20);

myLine.draw()
