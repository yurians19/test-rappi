'use strict';

/* const fs = require('fs'); */

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.on('SIGINT', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'canReach' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER y1
 *  3. INTEGER x2
 *  4. INTEGER y2
 */

function canReach(x1, y1, x2, y2) {
    let ubi = false
    let res = 'NO'
    if (Number.isInteger(x1) && Number.isInteger(y1) && Number.isInteger(x2) && Number.isInteger(y2)) {
        while (!ubi) {
            if (x1 < x2) {
                x1+=y1
            } else if (y1 < y2){
                y1+=x1
            } else if (x1 == x2 && y1 == y2){
                ubi = true
                res = 'Yes'
            } else if (x1 > x2 || y1 > y2){
                ubi = true
                res = 'No'
            }
        }
    }
    console.log('x1',x1,'y1',y1,res);
    return res
    // Write your code here

}

function main() {
    /* const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const x1 = parseInt(readLine().trim(), 10);

    const y1 = parseInt(readLine().trim(), 10);

    const x2 = parseInt(readLine().trim(), 10);

    const y2 = parseInt(readLine().trim(), 10);

    const result = canReach(x1, y1, x2, y2);
    console.log(result);
    process.exit()

    /* ws.write(result + '\n');

    ws.end(); */
}