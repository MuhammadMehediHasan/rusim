function getNumberFromRange(x = 0, y = 0) {

    let number = []
  
    // if x is greater then y
    if(x > y) {

        // Run the loop
        for(x; y <= x; x-- ) {
            number.push(x);
        }
    } else // If y is greater then x

    if(y > x) {
        
        // Run the loop
        for(x; y >= x; x++) {
            number.push(x)
        }
    }


    return number;
}

exports.getNumberFromRange = getNumberFromRange;