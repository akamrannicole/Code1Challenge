
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to determine the grade based on the input marks
function determineGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

// Function to validate user input
function validateInput(input) {
    return !isNaN(input) && input >= 0 && input <= 100;
}

// Function to prompt user for input until valid input is received
function promptForValidInput() {
    rl.question("Enter student marks (between 0 and 100): ", function(input) {
        input = parseFloat(input);

        if (validateInput(input)) {
            rl.close(); 
            main(input); 
        } else {
            console.log("Invalid input! Please enter a number between 0 and 100.");
            promptForValidInput(); 
        }
    });
}

// Main function
function main(marks) {
    const grade = determineGrade(marks);
    console.log(`Grade: ${grade}`);
}

promptForValidInput();
