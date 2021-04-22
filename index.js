// main function of this file is to do the collection of info using inquirer

const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];

// wrap everything inside of a init function
function init() {
  //get  manager information
  function makeManager() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter team manager\'s name.',
      name: 'mgrName',
    },
    {
      type: 'input',
      message: 'Enter team manager\'s employee ID.',
      name: 'mgrId',
    },
    {
      type: 'input',
      message: 'Enter team manager\'s email address.',
      name: 'mgrEmail',
    },
    {
      type: 'input',
      message: 'Enter team manager\'s office number.',
      name: 'mgrOfficeNum',
    },
  ])
  .then((response) =>{

  const{mgrName,mgrId,mgrEmail,mgrOfficeNum} = response  // destructuring the response 

  const manager = new Manager(mgrName, mgrId, mgrEmail, mgrOfficeNum);
  teamMembers.push(manager);

  // call makeTeam function
  makeTeam();
    //use switch statement

  });
  }

  function makeTeam() {
    console.log("inside the function");
  }
  //get engineer information

  //get intern information

  // create html team file
  // fs.writeFile("index.html", ,  (err) =>
  // err ? console.error(err) : console.log('Success!'))

  makeManager();
}

init();
