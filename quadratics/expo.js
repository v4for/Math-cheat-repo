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

// Transform y_data to ln(y) for exponential regression
let transformed_y_data = y_data.map(y => Math.log(y));

// Calculate the necessary sums for the linear regression on (x, ln(y))
let sum_x = 0;
let sum_transformed_y = 0;
let sum_x_squared = 0;
let sum_x_transformed_y = 0;

for (let i = 0; i < x_data.length; i++) {
    sum_x += x_data[i];
    sum_transformed_y += transformed_y_data[i];
    sum_x_squared += x_data[i] * x_data[i];
    sum_x_transformed_y += x_data[i] * transformed_y_data[i];
}

// Calculate the slope (b) and intercept (ln(a)) for the transformed data
let b = (x_data.length * sum_x_transformed_y - sum_x * sum_transformed_y) / 
        (x_data.length * sum_x_squared - sum_x * sum_x);
let ln_a = (sum_transformed_y - b * sum_x) / x_data.length;

// Back-transform to get 'a' (since ln(a) = intercept)
let a = Math.exp(ln_a);

let growth_factor = Math.exp(b);

console.log(`The Recursive equation is: f(x) = f(x-1) * ${growth_factor.toFixed(2)}`);

console.log(`The Explicit equation is: f(x) = ${a.toFixed(2)} * ${growth_factor.toFixed(2)}^x `);


// Calculate the next two values (predict for x = end_x + 1 and end_x + 2)
let next_x1 = end_x + 1;
let next_x2 = end_x + 2;
let next_y1 = a * Math.exp(b * next_x1);
let next_y2 = a * Math.exp(b * next_x2);

// Output the predicted next values
console.log(`The predicted value for x = ${next_x1} is f(${next_x1}) = ${next_y1.toFixed(2)}`);
console.log(`The predicted value for x = ${next_x2} is f(${next_x2}) = ${next_y2.toFixed(2)}`);
