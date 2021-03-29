// Global Object
const consoleHeight = process.stdout.rows;
const consoleWidth = process.stdout.columns;
// Empty canvas for ascii art
const canvas = [];

const EMPTY_SPACE = "\033[48;5;04m" + " ";
/**
 * @author Muhammad Mehedi Hasan
 * @param {Number} width Width of the Canvas
 * @param {Number} height Height of the Canvas
 * @param {String} color Background Color of the canvas
 */


function createCanvas(width, height, color) {
    
    // Creating the Canvas
    for(let row = 0; row < height; row++) {
        let columns = []
        for(let column = 0; column < width; column++) {
            columns.push(EMPTY_SPACE);
        }
        canvas.push(columns);
    }

    // Drawing in the console
    drawCanvas()
    
}

function drawCanvas() {
    let finalCanvas = "";
    for(let row = 0; row < canvas.length; row++) {
        let column = "";
        for(let col = 0; col < canvas[row].length; col++) {
            column += canvas[row][col];
        }
        column += "\n\x1b[0m";
        finalCanvas += column;
    }

    console.log(finalCanvas)
}


function updateAnimation (callback, ...arguments)  {
    setInterval(() => {
        callback(arguments);
    }, 2000);
}

// todo: Making color workable



// testing branch
createCanvas(consoleWidth, consoleHeight)
updateAnimation(() => {
    console.clear()
    drawCanvas()
    
})
