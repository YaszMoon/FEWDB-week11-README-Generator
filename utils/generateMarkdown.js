// function to generate markdown for README
function generateMarkdown(data) {
  let licenseInfo;

  switch (data.license) {
    case "MIT":
      licenseInfo =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "BSD 3-clause":
      licenseInfo =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "GPLv2":
      licenseInfo =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "Apache":
      licenseInfo =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPLv3":
      licenseInfo =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      break;
  }

  let sections = "";

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

  return `${licenseInfo}# ${data.title}\n\n## Description\n\n${data.descrip}\n\n${sections}## Questions\n\n${data.questions}\n`;
}

module.exports = generateMarkdown;
