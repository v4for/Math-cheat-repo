function spliceAfterDecimal(number) {
    let numStr = number.toString();

    let decimalIndex = numStr.indexOf('.');

    if (decimalIndex === -1) {
        return numStr;
    }

    return numStr.slice(0, decimalIndex + 5); 
}

const mysteryangle = prompt("What is the tan angle?")

let tan1 = Math.tan(mysteryangle*Math.PI/180);

let tan2 = spliceAfterDecimal(tan1) 

console.log(tan2); 

const opp = prompt("What is opp")

console.log(opp * Number(tan2))