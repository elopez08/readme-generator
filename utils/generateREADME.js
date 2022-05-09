// This is if there is no contributors
function renderContributingSection(confirmContributers, datacontribute, dataperson) {
  if (!confirmContributers) 
  {
    return `
  Thank you for your interest in helping out.  At this time, however, I'll not accept contributions from third parties.  Try back again later!
    `;
  } 
  else 
  {
    return `
  ${datacontribute}
  ${dataperson}
    `;
  }
}

//Returns a license badge.  If there is no license, it'll return an empty string
function renderLicenseBadge(license) { 
    //Because we have an option string that has: 'no license, it is used here
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } 
  //If anything else, return what was in that license as its text
  else 
  {
    return ' ';
  }
}

//Tries to detect a license.  If there isn't a license, then it'll return an empty sring
function renderLicenseLink(license) {
  if (license !== 'no license') 
  {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } 
  else 
  {
    return ' ';
  }
}

// Returns a license to the readme.  If none, then it doesn't contain a string.
function renderLicenseSection(license) {
  if (license !== 'no license') 
  {
  return `
  ## [License](#table-of-contents)

  The application is covered under the following license:

  ${renderLicenseLink(license)}
    `;
  } 
  else 
  {
    return ' ';
  }
 }

 // Makes a content.  If there isn't a license, it'll return an empty string.
function renderLicenseTOC(license) {
  if (license !== 'no license') 
  {
    return `
  * [License](#license)
    `;
  } 
  else 
  {
    return ' ';
  }
 }

// Function to generate markdown for README
function generateMarkdown(data) {
    //First it'll display on what the title of the page is.  In this case, my name since that's the first question.
  return `
  # ${data.nameperson}
  
  ${renderLicenseBadge(data.license)}

  ## About Me
  ${data.aboutme}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, ['Contribution: '] + data.contribute, ['Name of the contributor: '] + data.contributorname)}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  You may find my work at Github by clicking the following link:
  [GitHub](https://github.com/${data.gituser})

  To reach me out by email, you may respond to:
  [Email: ${data.emailaddress}](mailto:${data.emailaddress})
`;
}

module.exports = generateMarkdown;
