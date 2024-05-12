/* Very Hard */

// Define a Person class with basic properties and methods
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    // Method to simulate doing exercise
    exercise() {
        console.log("I am exercising because it's healthy.");
    }

    // Method to display the person's job
    fetchJob() {
        console.log(this.name + " works as a " + this.job);
    }
}

// Define a Programmer class that extends Person
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages; // Array of programming languages known
        this.busy = true; // Defaults to true, though not optimal handling
    }

    // Method to set busy status to false
    completeTask() {
        this.busy = false;
    }

    // Method to set busy status to true
    acceptNewTask() {
        this.busy = true;
    }

    // Check if the programmer is busy and respond accordingly
    offerNewTask() {
        if (this.busy) {
            console.log(this.name + " cannot take new tasks right now.");
        } else {
            console.log(this.name + " is available for new tasks.");
        }
    }

    // Add a new programming language to the list
    learnLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

    // List all programming languages the programmer knows
    listLanguages() {
        return this.languages.join(", ");
    }
}

// Example usage
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

// Adding new languages to programmers
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

// Output the languages they know
console.log(c1.listLanguages());  // Output: HTML, C#, LUA, CSS
console.log(c2.listLanguages());  // Output: HTML, SASS, Ruby, C++
console.log(c3.listLanguages());  // Output: HTML, CSS, JS, R, JAVA

// Logging person and programmer details
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

// Running methods from the Person class
person1.exercise();
person1.fetchJob();

