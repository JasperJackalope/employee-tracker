const mysql = require('mysql2');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to three characters for the logo:',
    validate: function (text) {
      return text.length <= 3;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select the shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter the shape color:',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;});