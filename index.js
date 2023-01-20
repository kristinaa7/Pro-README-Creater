//user needs to install node version 16 and inquirer package by typing npm install in the terminal to work
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

//array of user input questions with information to add in the README file
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

//the function writes README file and will print on the console if the file was sucessfully created or not
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) =>
    err ? console.log(err) : console.log('Yay! Successfully created a README.md!'))
}

//the function initializes the app and calls on the inquirer to run the prompt questions
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

//calls the function 'init' above to initialize app
init();