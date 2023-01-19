//user needs to install node version 16 and type npm install in the terminal to work
//inquirer package needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// // TODO: Create an array of questions for user input
const questions = [    
    {
        type: 'input',
        message: 'What is your GitHub link?',
        name: 'link', 
    },     
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email', 
    },   
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title', 
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description', 
    },
    {
        type: 'input',
        message: 'What installation products are necessary to run this application?',
        name: 'installation', 
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage', 
    },
    {
        type: 'input',
        message: 'Who helped contribute?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'tests', 
    },
    {
        type: 'list',
        message: 'License?',
        name: 'license', 
        choices: ['MIT', 'ISC','Mozilla'],
        default: 'MIT',
    },  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("first", data);
    fs.writeFile(`${fileName}`, data, (err) =>
    err ? console.log(err) : console.log('Yay! Successfully created a README.md!')
    
  )
}

// // TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// // Function call to initialize app
init();