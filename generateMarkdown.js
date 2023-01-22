//the function  returns a license badge based on which license is passed and if there is no license selected, it will return an empty string
function renderLicenseBadge(license) {
let licenseType = license
let LicenseChoice = ''
if (licenseType === 'MIT') {
  LicenseChoice = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`}
else if (licenseType === 'ISC') {
LicenseChoice = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`}
else if (licenseType === 'Mozilla') {
LicenseChoice = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`}
else {
  LicenseChoice = ''}
return LicenseChoice;
};

//the function returns the license link, and if there is no license, it will return an empty string
function renderLicenseLink(license) {
  return `\n Open Source License Info: https://opensource.org/licenses/${license}`
}

// the function returns the license section of README and if there is no license, it will return an empty string
function renderLicenseSection(license) {
return `## License`
}

//the function generates a markdown for README
function generateMarkdown(data) {
  console.log("this is from index.js", data);
  return `# ${data.title} 

  ## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Questions
If you have any questions, please feel free to reach out at ${data.email} and ${data.link}.
`;
}

//instructions for Node js to export values from a JS module
module.exports = generateMarkdown;