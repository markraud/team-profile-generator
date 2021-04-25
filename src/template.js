//help us create the team by running some functions that output a string that is HTML


const generateTeam = teamMembers => {
  //there is going to need to be some for loop or something to go thru all the instances in teamMembers
  const generateManager = manager => {
    return ` 
    <div class="col s10 m4 l3">
    <div class="card-panel small blue white-text">
      <span class="card-title">Manager</span>
      <ul class="collection">
        <li class="collection-item black-text">Name: ${mgrName}</li>
          <li class="collection-item black-text">id: ${mgrId}</li>
          <li class="collection-item black-text">email: ${mgrEmail}</li>
          <li class="collection-item black-text">office num: ${mgrOfficeNum}</li>
      </ul>
    </div>
  </div>
  `
  }

  const generateEngineer = engineer => {
    return ` 
    <div class="col s10 m4 l3">
    <div class="card-panel small blue white-text">
      <span class="card-title">Engineer</span>
      <ul class="collection">
        <li class="collection-item black-text">Name: ${engName}</li>
          <li class="collection-item black-text">id: ${engId}</li>
          <li class="collection-item black-text">email: ${engEmail}</li>
          <li class="collection-item black-text">GitHub: ${engGitHub}</li>
      </ul>
    </div>
  </div> 
  `
  }
  
  const generateIntern = intern => {
    return `
    <div class="col s10 m4 l3">
      <div class="card-panel small blue white-text">
        <span class="card-title">Intern</span>
        <ul class="collection">
          <li class="collection-item black-text">Name: ${internName}</li>
            <li class="collection-item black-text">id: ${internId}</li>
            <li class="collection-item black-text">email: ${internEmail}</li>
            <li class="collection-item black-text">school: ${internSchool}</li>
        </ul>
      </div>
    </div>
    `
  }

}




module.exports = teamHtml => {
  return `<!DOCTYPE html>
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
  
  <body>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">My Team</a>
      </div>
    </nav>
    <div class="row">
    ${generateManager}
    ${generateEngineer}
    ${generateIntern}
  
  
    </div>
  
    <!-- JavaScript, jquery and materialize js links -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script type="text/javascript" src="assets/js/script.js"></script>
  </body>
  
  </html>`
}