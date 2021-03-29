// Clear the screen
// console.clear();


// Requirement 

const readline = require("readline");
const process = require("process");
// let height = process.stdout.rows;
// let width = process.stdout.columns;


/**
 * @name Point 
 * @param {Number} x
 * @param {Number} y
 */

function point(x, y) {
    x = Math.floor(x), y = Math.floor(y);
    readline.cursorTo(process.stdout, x, y);
}



exports.point = point;

// Todo: Make this console log to the center

// let y = Math.floor(height / 2);
// let x = Math.floor(width / 2);


// // readline.cursorTo(process.stdout, x, y);
// let str = "I am in Middle";
// // point(x - str.length / 2, y);

// // console.log("It is on Middle")

// // todo: Some example of `point()`

// let sign = "@";

// for(y = 0; y < height; y++) {


//     point(x, y);
//     console.log(sign)
// }

