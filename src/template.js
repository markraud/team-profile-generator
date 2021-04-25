//help us create the team by running some functions that output a string that is HTML
const fs = require('fs');
let teamString = "";
let manager = "mark-mgr";
let engineer = "mark-eng";
let intern = "mark-int";
function createTeamHtml(members){
  //loop through teamMembers array and determine type
  members.forEach(element => {
    if (element.getRole() === 'Manager') {
      // add html for manager
      console.log(element.getName());
      console.log(element.getId()); 
      console.log(element.getEmail());
      console.log(element.getOfficeNumber());
      manager = `<div class="col s10 m4 l3">
      <div class="card-panel small blue white-text">
        <span class="card-title">Manager</span>
        <ul class="collection">
          <li class="collection-item black-text">Name: ${element.getName()}</li>
            <li class="collection-item black-text">id: ${element.getId()}</li>
            <li class="collection-item black-text">email: ${element.getEmail()}</li>
            <li class="collection-item black-text">office num: ${element.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `
    } else if (element.getRole() === 'Engineer') {
      // add html for engineer
      console.log(element.getName());
      console.log(element.getId()); 
      console.log(element.getEmail());
      console.log(element.getGithub());
      engineer = `
      <div class="col s10 m4 l3">
      <div class="card-panel small blue white-text">
        <span class="card-title">Engineer</span>
        <ul class="collection">
          <li class="collection-item black-text">Name: ${element.getName()}</li>
            <li class="collection-item black-text">id: ${element.getId()}</li>
            <li class="collection-item black-text">email: ${element.getEmail()}</li>
            <li class="collection-item black-text">GitHub: ${element.getGithub()}</li>
        </ul>
      </div>
    </div>
      `

    } else {
      // add html for intern
      console.log(element.getName());
      console.log(element.getId()); 
      console.log(element.getEmail());
      console.log(element.getSchool());
      intern = `
      <div class="col s10 m4 l3">
      <div class="card-panel small blue white-text">
        <span class="card-title">Intern</span>
        <ul class="collection">
          <li class="collection-item black-text">Name: ${element.getName()}</li>
            <li class="collection-item black-text">id: ${element.getId()}</li>
            <li class="collection-item black-text">email: ${element.getEmail()}</li>
            <li class="collection-item black-text">school: ${element.getSchool()}</li>
        </ul>
      </div>
    </div>
      `
    };
  });

  teamString = `
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!--Import Google Icon Font-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <!-- Link to style sheet if needed -->
  <link rel="stylesheet" href="../dist/style.css" />
  <title>Team Website</title>
</head>
<body>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">My Team</a>
    </div>
  </nav>
  <div id="employDiv"class="row">
  ${manager}
  ${engineer}
  ${intern}
  </div>
  <!-- JavaScript, jquery and materialize js links -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script type="text/javascript" src="assets/js/script.js"></script>
</body>
</html>
  `;

  fs.writeFile("index.html", `${teamString}` ,  (err) =>
    err ? console.error(err) : console.log('Success!'))
  return teamString;

}


module.exports = createTeamHtml;