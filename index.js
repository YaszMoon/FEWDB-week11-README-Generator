const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a description for your project.",
    name: "descrip",
  },
  {
    type: "checkbox",
    message: "What sections would you like to include in your README?",
    choices: ["Installation", "Usage", "Contributing", "Tests", "Credits"],
    name: "content",
  },
  {
    type: "input",
    name: "installation",
    message: "Give details regarding the installation.",
    when: function (answers) {
      return answers.content.includes("Installation");
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Give details regarding the use of your project.",
    when: function (answers) {
      return answers.content.includes("Usage");
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Add guidelines for contributing to the repository.",
    when: function (answers) {
      return answers.content.includes("Contributing");
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Provide examples for how to run the test(s).",
    when: function (answers) {
      return answers.content.includes("Tests");
    },
  },
  {
    type: "input",
    name: "credits",
    message:
      "Add your collaborators, third-party attributes, tutorial links etc.",
    when: function (answers) {
      return answers.content.includes("Credits");
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license.",
    choices: ["MIT", "BSD 3-clause", "Unlicense", "Apache", "GPLv3"],
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address."
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    
    let text = generateMarkdown(data);
    console.log(text);
    writeToFile("sample/README.md", text);
  });
}

// function call to initialize program
init();
