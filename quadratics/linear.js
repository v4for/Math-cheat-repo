// Ask the user for the range of x values
let start_x = parseInt(prompt("Enter the start value for x:"));
let end_x = parseInt(prompt("Enter the end value for x:"));

// Create an array of x values from start_x to end_x (inclusive)
let x_data = [];
for (let i = start_x; i <= end_x; i++) {
    x_data.push(i);
}

let y_data = [];

// Collect the corresponding y values from the user
for (let i = 0; i < x_data.length; i++) {
    let input = parseInt(prompt(`Enter a number for y_data[${x_data[i]}]:`));
    y_data.push(input);
}

// Calculate the necessary sums
let sum_x = 0;
let sum_y = 0;
let sum_x_squared = 0;
let sum_x_y = 0;

for (let i = 0; i < x_data.length; i++) {
    sum_x += x_data[i];
    sum_y += y_data[i];
    sum_x_squared += x_data[i] * x_data[i];
    sum_x_y += x_data[i] * y_data[i];
}

// Calculate the slope (m) and intercept (b) using the formulas
let m = (x_data.length * sum_x_y - sum_x * sum_y) / (x_data.length * sum_x_squared - sum_x * sum_x);
let b = (sum_y - m * sum_x) / x_data.length;

// Output the linear equation
console.log(`The Recursive equation is: f(x) = f(x-1) + ${m.toFixed(2)}`);

console.log(`The Explicit equation is: f(x) = ${m.toFixed(2)}x + ${b.toFixed(2)}`);

// Calculate the next two values (predict for x = end_x + 1 and end_x + 2)
let next_x1 = end_x + 1;
let next_x2 = end_x + 2;
let next_y1 = m * next_x1 + b;
let next_y2 = m * next_x2 + b;

// Output the predicted next values
console.log(`The predicted value for x = ${next_x1} is f(${next_x1}) = ${next_y1.toFixed(2)}`);
console.log(`The predicted value for x = ${next_x2} is f(${next_x2}) = ${next_y2.toFixed(2)}`);
