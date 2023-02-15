const colors = require('colors/safe');

const from = Number(process.argv[2]);
const before = Number(process.argv[3]);

function getSimpleNumber(fromNumber, beforeNumber) {
    let arr = [];
    for (let i = fromNumber; i <= beforeNumber; i++) {
        for (let j = 2; j <= i; j++) {
            if ((i % j == 0) && (j != i)) {
                break;
            } else {
                arr.push(i);
                break;
            }
        }

    }

    for (let b = 0; b < arr.length; b++) {
        if (b % 3 == 0) {
            console.log(colors.green(arr[b]))
        }
        else if (b % 3 == 1) {
            console.log(colors.yellow(arr[b]))
        }
        else {
            console.log(colors.red(arr[b]))
        }
    }



}

getSimpleNumber(from, before);

