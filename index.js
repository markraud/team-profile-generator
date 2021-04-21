// main function of this file is to do the collection of info using inquirer

const inquirer = require('inquirer');
const fs = require('fs');
siteHtml = `
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
    <div class="col s10 m4 l3">
      <div class="card-panel small blue white-text">
        <span class="card-title">Manager</span>
        <ul class="collection">
          <li class="collection-item black-text">Name: ${mgrName}</li>
            <li class="collection-item black-text">Manager</li>
            <li class="collection-item black-text">id: ${mgrId}</li>
            <li class="collection-item black-text">email: ${mgrEmail}</li>
            <li class="collection-item black-text">office num: ${mgrOfficeNum}</li>
        </ul>
      </div>
    </div>
    <div class="col s10 m4 l3">
      <div class="card-panel small blue white-text">
        <span class="card-title">name</span>
        <ul>
          <li>title</li>
          <li>id</li>
          <li>email</li>
          <li>github</li>
        </ul>
      </div>
    </div> 

    <!-- JavaScript, jquery and materialize js links -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script type="text/javascript" src="assets/js/script.js"></script>
</body></html>`

const 

if (!mgrName) {}
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

  

  fs.writeFile("index.html", siteHtml,  (err) =>
  err ? console.error(err) : console.log('Success!'))
  });