// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let licenseType = data.license
let LicenseChoice = ''
if (licenseType === MIT) {
  LicenseChoice = `![License: MIT]`
}

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
//skips down to the license title in README

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

// https://www.setcorrect.com/portfolio/work11/

  ##Table of Contents
  [Description] (url to github/#description)
  [Installation]
  [Usage]
  [Contributing]
  [Tests]
  [License]
  [Questions]

  ## Description
  ${data.description}

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##License
  ${renderLicenseBage(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ##Questions
  If you have any questions, please feel free to reach out at ${email} and ${link}.

`;
}

module.exports = generateMarkdown;
