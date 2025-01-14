function spliceAfterDecimal(number) {
    let numStr = number.toString();

    let decimalIndex = numStr.indexOf('.');

    if (decimalIndex === -1) {
        return numStr;
    }

    return numStr.slice(0, decimalIndex + 5);
}

const sideChoice = prompt("Enter 'adj' for adjacent side or 'opp' for opposite side:").toLowerCase();

let angle;
let SineOrCos = "nottrue"; 
if (sideChoice === 'adj') {
    SineOrCos = "cosine"
    const adjacent = parseFloat(prompt("What is the adjacent side?"));
    const hypotenuse = parseFloat(prompt("What is the hypotenuse?"));
    angle = Math.acos(adjacent / hypotenuse) * (180 / Math.PI); 
} else if (sideChoice === 'opp') {
    SineOrCos = "Sine"
    const opposite = parseFloat(prompt("What is the opposite side?"));
    const hypotenuse = parseFloat(prompt("What is the hypotenuse?"));
    angle = Math.asin(opposite / hypotenuse) * (180 / Math.PI); 
} else {
    console.log("Invalid choice. Please enter 'adj' or 'opp'.");
}

if (angle !== undefined) {
    let formattedAngle = spliceAfterDecimal(angle);
    console.log("The angle is:", formattedAngle, "degrees");
    console.log("Used " + SineOrCos + " Function")
}