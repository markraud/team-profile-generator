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
      .then((response) => {
        console.log(response.mgrName, response.mgrId, response.mgrEmail, response.mgrOfficeNum);
        teamMembers.push(response.mgrName, response.mgrId, response.mgrEmail, response.mgrOfficeNum);
        console.log(teamMembers);

        // call makeTeam function
        makeTeam();


      });
  }

  function makeTeam() {
    //inquirer to ask if its an engineer or intern
    inquirer
      .prompt([
        {
          type: 'list',
          choices: ["Engineer", "Intern", "Team is complete. Quit"],
          message: 'Would you like to add another team member? Select type or quit.',
          name: 'memberAdd',
        },
      ])
      .then((response) => {
        // console.log(response);
        memType = response.memberAdd;
        // console.log(memType);
        //use switch statement to determine if its an engineer or intern
        switch(memType){
          case "Engineer":
            console.log("Type is Engineer");
            makeEngineer();
            break;
          case "Intern":
            console.log("Type is Intern");
            makeIntern();
            break;
          default:
            console.log("Default...put quit here.");
          }
      });
  }

  //get engineer information
  function makeEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter Engineer\'s name.',
          name: 'engName',
        },
        {
          type: 'input',
          message: 'Enter Engineer\'s ID.',
          name: 'engId',
        },
        {
          type: 'input',
          message: 'Enter Engineer\'s email.',
          name: 'engEmail',
        },
        {
          type: 'input',
          message: 'Enter Engineer\'s GitHub ID.',
          name: 'gitHubId',
        },
      ])
      .then((response) => {
        console.log("Response from makeEngineer");
        console.log(response);
        // teamMembers.push()


      });

  }

  //get intern information

  // create html team file
  // fs.writeFile("index.html", ,  (err) =>
  // err ? console.error(err) : console.log('Success!'))

  makeManager();
}

init();
