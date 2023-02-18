// function to generate markdown for README
function generateMarkdown(data) {
  let sections = ``;

  data.content.forEach((element) => {
    switch (element) {
      case "Installation":
        sections =
          sections +
          `## Installation

          ${data.installation}

          `;
        break;
      case "Usage":
        sections =
          sections +
          `## Usage

          ${data.usage}

          `;
        break;
      case "Contributing":
        sections =
          sections +
          `## Contributing

          ${data.contributing}

          `;
        break;
      case "Tests":
        sections =
          sections +
          `## Tests

          ${data.tests}

          `;
        break;
      case "Credits":
        sections =
          sections +
          `## Credits

          ${data.credits}
          
          `;
        break;
      default:
        break;
    }
  });

  return `# ${data.title}
  
  ## Description
  
  ${data.descrip}
  
  ${sections}
  ## Questions
  
  ${data.questions}

`;
}

module.exports = generateMarkdown;
