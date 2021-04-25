// main function of this file is to do the collection of info using inquirer

const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamHtml = require('./src/template');

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
        teamMembers.push(new Manager(response.mgrName, response.mgrId, response.mgrEmail, response.mgrOfficeNum));
        // console.log(teamMembers);

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
          choices: ["Engineer", "Intern", "Quit"],
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
            makeEngineer();
            break;
          case "Intern":
            makeIntern();
            break;
          case "quit":
            writeHtml();
          default:
            writeHtml();
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
        teamMembers.push(new Engineer(response.engName, response.engId, response.engEmail, response.gitHubId));
        makeTeam();


      });

  }

  //get intern information
  function makeIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter Intern\'s name.',
          name: 'internName',
        },
        {
          type: 'input',
          message: 'Enter Intern\'s ID.',
          name: 'internId',
        },
        {
          type: 'input',
          message: 'Enter Intern\'s email.',
          name: 'internEmail',
        },
        {
          type: 'input',
          message: 'Enter Intern\'s school.',
          name: 'internSchool',
        },
      ])
      .then((response) => {
        // console.log("Response from makeIntern");
        // console.log(response);
        teamMembers.push(new Intern(response.internName, response.internId, response.internEmail, response.internSchool));
        makeTeam();
      });

  }

  // create html team file
  function writeHtml() {
    teamHtml(teamMembers);
    console.log(teamHtml);
    
    // fs.writeFile("index.html", `${teamHtml}` ,  (err) =>
    // err ? console.error(err) : console.log('Success!'))
  }

  makeManager();
}

init();
