//help us create the team by running some functions that output a string that is HTML
const fs = require('fs');
let teamString = "";
function createTeamHtml(members){
  //loop through teamMembers array and determine type
  members.forEach(element => {
    if (element.getRole() === 'Manager') {
      console.log('manager'); // add html for manager
    } else if (element.getRole() === 'Engineer') {
      console.log('engineer'); // add html for engineer
    } else {
      console.log('intern'); // add html for intern
    };
  });

  teamString = `<html> ${members} </html>`;

  // console.log(teamHtml);
  // fs.writeFile("index.html", `${teamHtml}` ,  (err) =>
  //   err ? console.error(err) : console.log('Success!'))
  return teamString;

}


module.exports = createTeamHtml;