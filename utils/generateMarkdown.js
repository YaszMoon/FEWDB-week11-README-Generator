// function to generate markdown for README
function generateMarkdown(data) {
  // Table of Contents
  // Holder for list of optional sections
  let contentsSections = "";
  // Populate list
  data.content.forEach((element) => {
    let forLink = element.toLowerCase();
    contentsSections += `- [${element}](#${forLink})\n\n`;
  });
  // Holder for table of contents which will appear after the Descrption
  let tableContents = `${contentsSections}- [License](#license)\n\n- [Questions](#questions)`;

  // License
  // Holders for badge and respective info
  let licenseBadge;
  let licenseInfo;
  // Add respective information based on user choice
  switch (data.license) {
    case "MIT":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseInfo = `[**MIT License**](https://choosealicense.com/licenses/mit/)\n\nA short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
      break;
    case "BSD 3-clause":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      licenseInfo = `[**BSD 3-Clause License**](https://choosealicense.com/licenses/bsd-3-clause/\n\nA permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent.)`;
      break;
    case "Unlicense":
      licenseBadge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      licenseInfo = `[**The Unlicense**](https://choosealicense.com/licenses/unlicense/)\n\nA license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
      break;
    case "Apache":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseInfo = `[**Apache License 2.0**](https://choosealicense.com/licenses/apache-2.0/)\n\nA permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
      break;
    case "GPLv3":
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseInfo = `[**GNU GPLv3**](https://choosealicense.com/licenses/gpl-3.0/)\n\nPermissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
      break;
    default:
      break;
  }

  // Optional sections
  // Holder for content
  let sections = "";
  // Populate sections with user selections
  data.content.forEach((element) => {
    switch (element) {
      case "Installation":
        sections += `## Installation\n\n${data.installation}\n\n`;
        break;
      case "Usage":
        sections += `## Usage\n\n${data.usage}\n\n`;
        break;
      case "Contributing":
        sections += `## Contributing\n\n${data.contributing}\n\n`;
        break;
      case "Tests":
        sections += `## Tests\n\n${data.tests}\n\n`;
        break;
      case "Credits":
        sections += `## Credits\n\n${data.credits}\n\n`;
        break;
      default:
        break;
    }
  });

  // Questions
  let questions = `To get intouch:\n\nGithub Username: ${data.github}\n\nEmail: ${data.email}`;

  // Construct README doc
  const readme = `${licenseBadge}\n\n# ${data.title}\n\n## Description\n\n${data.descrip}\n\n## Table of Contents\n\n${tableContents}\n\n${sections}## License\n\n${licenseInfo}\n\n## Questions\n\n${questions}\n`;

  return readme;
}

module.exports = generateMarkdown;
