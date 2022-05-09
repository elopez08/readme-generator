// TODO: Include packages needed for this application

// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

//When it finishes, make the generation here on this location:
const generateMarkdown = require('./utils/generateREADME.js');
// Array of questions for user input

// TODO: Create an array of questions for user input
const questions = [
    //First question: Title of Project
    {
        type: 'input',
        name: 'nameperson',
        message: 'What is your full name? (Required!)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please type in your full name!');
                return false;
            }
        }
    },
    //Second Question: Username for Github
    {
        type: 'input',
        name: 'gituser',
        message: 'What is your username for Github? (REQUIRED!)',
        validate: gituserInput => {
            if (gituserInput) {
                return true;
            }
            else {
                console.log('Type if your Git User Name!');
                return false;
            }
        }

    },
    //Third Question: Email Address
    {
        type: 'input',
        name: 'emailaddress',
        message: 'What is your email address? (REQUIRED!)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('You need to type in your email address!');
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'aboutme',
        message: 'Describe yourself. (REQUIRED!)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('You need to type in your email address!');
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'desciptioninfo',
        message: 'Please provide a descriptive detail about the project.',
        validate: descriptiveInput => {
            if (descriptiveInput) {
                return true;
            }
            else {
                console.log('There is no description made.  Please provide one!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you make this project? (REQUIRED)',
        validate: descriptiveInput => {
            if (descriptiveInput) {
                return true;
            }
            else {
                console.log('Wihtout a reason, people will not know why you made it.  Please describe why did you make the project!');
                return false;
            }
        }

    },

    
    {
        type: 'input',
        name: 'what',
        message: 'What would be the purpose of this project? (REQUIRED)',
        validate: descriptiveInput => {
            if (descriptiveInput) {
                return true;
            }
            else {
                console.log('If there is no purpose, then how would people know the importance of this project?  Please provide an explanation!');
                return false;
            }
        }

    },

    
    {
        type: 'input',
        name: 'how',
        message: 'How would someone use this project? (REQUIRED)',
        validate: descriptiveInput => {
            if (descriptiveInput) {
                return true;
            }
            else {
                console.log('Wihtout a general summary, the person in question will not know what to do with it.  Explain briefly on how they will use this!');
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'installation',
        message: 'How would someone install this project on their devices? (REQUIRED)',
        validate: descriptiveInput => {
            if (descriptiveInput) {
                return true;
            }
            else {
                console.log('The person will not be able to use it appropriately without installing it.  Place provide an explanation on what they need to do to use it!');
                return false;
            }
        }

    },


    
    {
        type: 'input',
        name: 'usage',
        message: 'Briefly explain the usage of this project. (REQUIRED)',
        validate: descriptiveInput => {
            if (descriptiveInput) {
                return true;
            }
            else {
                console.log('It is probably for the best to explain how this project is used.  Provide at least an example scenario on how the project is used if someone wishes to use it.');
                return false;
            }
        }

    },

    {
        type: 'list',
        name: 'license',
        message: 'If applicable, please select the following licenses you will use for this project.',
        choices: ['AGPL','Apache','MIT','No License']
    },

    {
        type: 'input',
        name: 'test',
        message: 'Provide a brief explanation on how would the project be tested. (REQUIRED)',
        validate: descriptiveInput => {
            if (descriptiveInput) {
                return true;
            }
            else {
                console.log('It will cause some difficulties without explaining the results.  To ensure the best guidance, please briefly explanin on how the project will be tested.');
                return false;
            }
        }

    },

    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would there be anyone contributing this project?',
        validate: contributor => {
            if (contributor) {
                return true;
            }
            else {
                console.log('There will not be anyone contributing this project.');
            }
        }

    },

    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide a guideline for your contributors. (REQUIRED)',
        //Check to see if this is true.  If yes, then this will trigger since it is a true.
        when: ({confirmContributers}) => {
            if (confirmContributers) {
                return true;
            }
            else {
                return false;
            }
        },
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            }
            else
            {
                console.log('There are contributors that will be on this project!  If you do not have a guideline, they would not know what to do and what not to do.  Work as a team.  Start with a guideline!');
                //Goes baack to the the loop again
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributorname',
        message: 'Please provide the name of the person contributing this project. (REQUIRED)',
        //Check to see if this is true.  If yes, then this will trigger since it is a true.
        when: ({confirmContributers}) => {
            if (confirmContributers) {
                return true;
            }
            else {
                return false;
            }
        },
        validate: contributorInput => {
            if (contributorInput) {
                return true;
            }
            else
            {
                console.log('Wait, there is someone contributing the project!  Please provide their name!');
                //Goes baack to the the loop again
                return false;
            }
        }
    },



];

// TODO: Create a function to write README file


//function writeToFile(fileName, data) {}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};




// TODO: Create a function to initialize app
//function init() {}

//This is so that when we answer all the questions, we will store that data and then put it in 'readmeData'
//The init is a function that will trigger the final line on the bottom
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
//When it initiates, it'll then use the readmeData information AFTER it has been filled as a Promise.  It'll then display on the console... AND THEN it'll return to the generateMarkdown, which is then transferred to that file
.then(readmeData => {
    console.log(readmeData);
    //const generateMarkdown = require('./utils/generateREADME.js');
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})