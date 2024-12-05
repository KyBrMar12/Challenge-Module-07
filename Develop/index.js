// TODO: Include packages needed for this application

import inquirer from "inquirer";
import fs from "fs";
//import generateMarkdown from "./utils./generateMarkdown.js";
import generateMarkdown from "./utils/generateMarkdown.js";

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide contribution guidelines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide test instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "GPLv2", "Apache", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("README.md has been generated!")
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();