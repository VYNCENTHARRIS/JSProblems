// Problem 3 Hard



function createPatient(name, ssn) {
    // The PII object stores name and SSN but keeps them hidden from external access.
    const PII = {
        name: name,
        ssn: ssn
    };

    // Public methods: allow controlled access to the data
    // This returned object only exposes methods deemed safe.
    return {
        /**
         * Method to get the patient's name.
         */
        getName: function () {
            return PII.name; // Return only the name property of the PII object.
        },

        // I Intentionally omitting getSSN method to ensure SSN remains inaccessible.
    };
}

// Creating an instance of a patient with encapsulated PII
const patient2 = createPatient("John", "123-45-6789");

// Testing outputs to demonstrate the accessibility of properties
console.log(patient2.names); // Output: Undefined, demonstrating privacy of the PII.
console.log(patient2.ssn); // Output: Undefined, SSN is not accessible, ensuring it's kept private.
console.log(patient2.getName()); // Output: John, accessing the public method that safely returns the name.
console.log(patient2.getSSN); // Output: Undefined, confirming no public access to SSN.


