// Problem 2 Medium

function sharePizza(x, y) {           // X = Total # of Slices, Y = Total # of People
    if (y === 0) { // Ensure there is at least one person to avoid division by zero(error)
        return "Error: There must be at least one person to share the pizza.";
    }
    const slicesPerPerson = x / y; // Calculate how many slices each person gets
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${x} slice pizza`;
}

// Usage
console.log(sharePizza(8, 2));  // Output: Each person gets 4.00 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 3));  // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
console.log(sharePizza(21, 20)); // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(sharePizza(10, 3));  // Output: Each person gets 3.33 slices of pizza; from our 10 slice pizza
