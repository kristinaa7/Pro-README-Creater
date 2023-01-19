// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `\n Open Source License Info: https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `## License`
}
// Helpful link https://www.setcorrect.com/portfolio/work11
// TODO: Create a function to generate markdown for README
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

module.exports = generateMarkdown;
