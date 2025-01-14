function spliceAfterDecimal(number) {
    let numStr = number.toString();
    let decimalIndex = numStr.indexOf('.');

    if (decimalIndex === -1) {
        return numStr;
    }

    return numStr.slice(0, decimalIndex + 5); 
}

const mysteryangle = prompt("What is the tan angle?");
let tan1;

if (mysteryangle) {
    tan1 = Math.tan(mysteryangle * Math.PI / 180);
} else {
    const opposite = parseFloat(prompt("Enter the length of the opposite side:"));
    const adjacent = parseFloat(prompt("Enter the length of the adjacent side:"));
    tan1 = opposite / adjacent;
}

let tan2 = spliceAfterDecimal(tan1);

console.log(tan2);

const opp = parseFloat(prompt("What is opp"));
console.log(opp * Number(tan2));

if (!mysteryangle) {
    function calculateAngle(opposite, adjacent) {
        const angleRadians = Math.atan(opposite / adjacent);
        const angleDegrees = angleRadians * (180 / Math.PI);
        return angleDegrees;
    }

    const opposite = parseFloat(prompt("Enter the length of the opposite side:"));
    const adjacent = parseFloat(prompt("Enter the length of the adjacent side:"));
    const angle = calculateAngle(opposite, adjacent);
    console.log(`The angle is ${angle} degrees`);
}