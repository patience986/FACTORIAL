const factorial = require('./factorial');

// Tests
try {
    console.assert(factorial(0) === 1, "Test case 0 failed");
    console.log("Test case 0 passed");

    console.assert(factorial(1) === 1, "Test case 1 failed");
    console.log("Test case 1 passed");

    console.assert(factorial(5) === 120, "Test case 5 failed");
    console.log("Test case 5 passed");

    console.assert(factorial(3) === 6, "Test case 3 failed");
    console.log("Test case 3 passed");

    // Testing error for negative input
    try {
        factorial(-1);
    } catch (error) {
        console.log("Correctly raised Error for negative input.");
    }
} catch (error) {
    console.error(error.message);
}
