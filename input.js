var inquirer = require('inquirer');
inquirer
  .prompt([
      {
    name: 'project.title',
    type: 'confirm',
    message: 'Are you ready to start on your README.md?',
    choices: ['yes', 'no'],
      },
      validate((confirm) => {
       
        var done = this.async();

])  
 .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }

    var prompts = new Rx.Subject();
    inquirer.prompt(prompts);

    inquirer
    .prompt([
        {
        name: 'project.title',
        type: 'input',
        message: 'What is the name of your project?',
    },    
    
    {
        name: 'project.description',
        type: 'input',
        message: 'Enter a description of the project',
        
    },
    {
        name: 'install.instructions',
        type: 'input',
        message: 'Enter installation instructions',
        

    },
    {
        name: 'usage.info',
        type: 'input',
        message: 'Enter usage information',
        
    },
    {
        name: 'contribute.guidelines',
        type: 'input',
        message: 'Enter any contribution guidelines',
        
    },
    {
        name: 'test.instructions',
        type: 'input',
        message: 'Enter test instructions',
        
    },
    {
        name: 'project.icense',
        type: 'list',
        message: 'Please choose a license for this application',
        
    },
    {
        name: 'github.username',
        type: 'input',
        message: 'Please enter your GitHub username',
        
    },
    {
        name: 'user.email',
        type: 'input',
        message: 'Enter your email address for contact information',
        
    },

 
]);


 });
