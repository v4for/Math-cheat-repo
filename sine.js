function spliceAfterDecimal(number) {
    let numStr = number.toString();

    let decimalIndex = numStr.indexOf('.');

    if (decimalIndex === -1) {
        return numStr;
    }

    return numStr.slice(0, decimalIndex + 5); 
}

const mysteryangle = prompt("What is the sin angle?")

let sin1 = Math.sin(mysteryangle*Math.PI/180);

let sin2 = spliceAfterDecimal(sin1) 

console.log(sin2); 

const hpy = prompt("What is hyp")

console.log(hpy * Number(sin2))