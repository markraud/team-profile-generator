const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter team memeber name.',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter team member job title.',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter team member ID',
      name: 'id',
    },
  ])
  .then((response) =>{

  const{name,title,id} = response  // this is destructuring the response object

  fs.writeFile("index.html", `
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <!-- Link to style sheet if needed -->
      <link rel="stylesheet" href="assets/css/style.css" />
      <!--Let browser know website is optimized for mobile-->
      <title>Document</title>
  </head>
  
  <body class="container grey darken-3>
      <div class="row">
        <div class="col s12 m6 l3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Your Information</span>
              <ul class="collection">
              <li class="collection-item black-text">Name: ${name}</li>
              <li class="collection-item black-text">Job: ${title}</li>
              <li class="collection-item black-text">ID: ${id}</li>
            </ul>
            </div>
            <div class="card-action">
            <img src="monster.webp" alt="monster truck" width="600" height="600">
            </div>
          </div>
        </div>
      </div>
  
      <!-- JavaScript, jquery and materialize js links -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script type="text/javascript" src="assets/js/script.js"></script>
  </body>
  
  </html>`,  (err) =>
  err ? console.error(err) : console.log('Success!'))
  });