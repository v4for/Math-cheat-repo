// Function to calculate the hypotenuse using Pythagorean theorem
function calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }
  
  // Example usage
  const sideA = prompt("Enter the length of side A:");
  const sideB = prompt("Enter the length of side B:");
  const hypotenuse = calculateHypotenuse(Number(sideA), Number(sideB));
  
  console.log(`The hypotenuse of a triangle with sides ${sideA} and ${sideB} is ${hypotenuse}`);
  