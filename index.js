//user needs to install node version 16 and type npm install in the terminal to work
//inquirer package needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// // TODO: Create an array of questions for user input
const questions = [    
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username', 
    },     
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email', 
    },   
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'project', 
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
        type: 'test',
        message: 'License?',
        name: 'license', 
        choices: ['MIT', 'ISC','MPL', 'GPL'],
        default: 'MIT',
    },  ];

inquirer
    .prompt(questions)

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

    .then((answers) => {
        const READMEfile = generateMarkdown(answers);

        fs.writeFile('README.md', READMEfile, (err) =>
        err ? console.log(err) : console.log('Yay! Successfully created a README.md!')
      )
    });

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();