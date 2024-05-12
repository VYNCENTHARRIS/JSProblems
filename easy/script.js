// Problem 1 Easy

function ourExerciseLogger() {
    let currentExercise = ""; // This variable holds the current exercise, starts as empty

    // This returned function is a closure with access to currentExercise
    return function (exercise) {
        currentExercise = exercise; // Update the current exercise
        console.log(`Today's exercise: ${currentExercise}`); // Log the exercise
    };
}

// How we can use
const exercise = ourExerciseLogger(); // Create an instance of the logger
exercise("Running");   // Output: Today's exercise: Running
exercise("Swimming");  // Output: Today's exercise: Swimming
exercise("Dancing");   // Output: Today's exercise: Dancing
exercise("Fencing");   // Output: Today's exercise: Fencing






