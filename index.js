const { Line } = require("./scripts/line");

let thing = new Line(10, 20, 30, 10);

let width = process.stdout.columns;
let height = process.stdout.rows;

let str = ''
let sign = '▇'

for(let h = 0; h < height; h++) {

    for(let w = 0; w < width; w++) {

        str +=  sign;

    }

    str += '\n'

}


setInterval(() => {
    console.log(str)
  // Clear Screen
  thing.x1 += 1;
  thing.x2 -= 1;
  thing.draw();
}, 500);

thing.draw();
