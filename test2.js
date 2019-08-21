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
 * Complete the 'getScore' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function getScore(s) {
    // Write your code here
    let arr = []
        let len = s.length
        let   output
        let max = '';
        let max2 = '';
        let arrI = []
        for (var i = 1; i < Math.pow(2, len); i++) {
            output = '';
            for (var j = 0; j < len; j++) {
                if (i & (1 << j)) {
                    output += s[j];
                }
            }
            if (output === output.toLowerCase().split('').reverse().join('')) {
                arr.push(output)
            }
        }
        let unique = [...new Set(arr)];
        unique.forEach((element,index) => {
            let count = 0;
            if (max.length < element.length){
                max = element;
            }
            for (var i = 0; i < element.length; i++) {
                if (max.includes(element.charAt(i))) {
                    count++
                }
            }
            if (count>1) {
                arrI.push(index)
            }
        });
        for (var i = arrI.length -1; i >= 0; i--)
            unique.splice(arrI[i],1);
            
        unique.forEach((element) => {
            if (max2.length < element.length){
                max2 = element;
            }
        });
        return max.length*max2.length

}

function main() {
    /* const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const s = readLine();

    const result = getScore(s);
    console.log('result',result);
    process.exit()


    /* ws.write(result + '\n');

    ws.end(); */
}