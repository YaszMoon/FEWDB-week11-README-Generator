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
    choices: [
      "Installation",
      "Usage",
      "License",
      "Contributing",
      "Tests",
      "Questions",
    ],
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
    type: "list",
    name: "license",
    message: "Choose a license.",
    choices: ["MIT", "Other", "GPLv2", "Apache", "GPLv3"],
    when: function (answers) {
      return answers.content.includes("License");
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
    name: "questions",
    message: "How can you be contacted for questions",
    when: function (answers) {
      return answers.content.includes("Questions");
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
  });
}

// function call to initialize program
init();
