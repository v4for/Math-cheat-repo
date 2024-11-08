function fitQuadratic(x, y) {
  let A = [];
  for (let i = 0; i < x.length; i++) {
    A.push([x[i] * x[i], x[i], 1]);
  }

  let AT = A[0].map((_, colIndex) => A.map(row => row[colIndex]));

  let ATA = multiplyMatrices(AT, A);

  let ATy = multiplyMatrixVector(AT, y);

  let beta = gaussianElimination(ATA, ATy);

  return {
    a: beta[0],
    b: beta[1],
    c: beta[2]
  };
}

function multiplyMatrices(A, B) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      result[i][j] = A[i].reduce((sum, value, k) => sum + value * B[k][j], 0);
    }
  }
  return result;
}

function multiplyMatrixVector(A, b) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    result[i] = A[i].reduce((sum, value, k) => sum + value * b[k], 0);
  }
  return result;
}

function gaussianElimination(A, b) {
  let n = A.length;
  let M = A.map((row, i) => row.slice());
  let d = b.slice();

  for (let i = 0; i < n; i++) {
    let maxRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(M[j][i]) > Math.abs(M[maxRow][i])) {
        maxRow = j;
      }
    }
    [M[i], M[maxRow]] = [M[maxRow], M[i]];
    [d[i], d[maxRow]] = [d[maxRow], d[i]];

    for (let j = i + 1; j < n; j++) {
      let factor = M[j][i] / M[i][i];
      for (let k = i; k < n; k++) {
        M[j][k] -= factor * M[i][k];
      }
      d[j] -= factor * d[i];
    }
  }

  let x = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    x[i] = d[i] / M[i][i];
    for (let j = i - 1; j >= 0; j--) {
      d[j] -= M[j][i] * x[i];
    }
  }

  return x;
}

let number = parseInt(prompt("Enter a number:"));

let x_data = [];
for (let i = 1; i <= number; i++) {
    x_data.push(i);
}

let y_data = [];

for (let i = 0; i < x_data.length; i++) {
  let input = parseInt(prompt(`Enter a number for y_data[${i + 1}]:`));
  y_data.push(input);
}

let { a, b, c } = fitQuadratic(x_data, y_data);

console.log("This would be right for quadratic equations only");
console.log(`The explicit equation is: f(x) = ${a.toFixed(2)}x^2 + ${b.toFixed(2)}x + ${c.toFixed(2)}`);

let next_x1 = number + 1;
let next_x2 = number + 2;

let next_y1 = a * next_x1 * next_x1 + b * next_x1 + c;
let next_y2 = a * next_x2 * next_x2 + b * next_x2 + c;

console.log(`Predicted y value for x = ${next_x1}: ${next_y1.toFixed(2)}`);
console.log(`Predicted y value for x = ${next_x2}: ${next_y2.toFixed(2)}`);

let firstDifferences = [];
for (let i = 1; i < y_data.length; i++) {
  firstDifferences.push(y_data[i] - y_data[i - 1]);
}

let secondDifferences = [];
for (let i = 1; i < firstDifferences.length; i++) {
  secondDifferences.push(firstDifferences[i] - firstDifferences[i - 1]);
}

console.log("First differences:", firstDifferences);
console.log("Second differences:", secondDifferences);
