// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

function renderLicenseBadge(license) {
  if (license === "None") return "";
  return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}
function renderLicenseLink(license) {
  if (license === "None") return "";
  switch (license) {
      case "MIT":
          return "[MIT License](https://opensource.org/licenses/MIT)";
      case "GPLv2":
          return "[GNU GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      case "Apache":
          return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
      default:
          return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}
function renderLicenseSection(license) {
  if (license === "None") return "";
  return `## License
This project is licensed under the ${renderLicenseLink(license)}.`;
}



// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description 
📝 
${data.description}


## Demo Video 
📽️- [Full Video demo of README generator](https://drive.google.com/file/d/11JQjV62DXJFTX2LhhoZtiVBToEUw5MER/view)<br/> - 8 minutes
📽️- [Functionality demo of README generator](https://drive.google.com/file/d/12s1NGh0PzDYathmIDTokQUg58NTwh7dU/view) - 4.5 minutes


## Table of Contents 📋 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
💽 
${data.installation}


## Usage
🖱️ 
${data.usage}


${renderLicenseSection(data.license)}


## Contributing
✍️ 
${data.contributing}


## Tests
🖥️ 
${data.tests}


## Questions
❓ 
For additional questions, reach out to me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

//export default generateMarkdown;
export default generateMarkdown;