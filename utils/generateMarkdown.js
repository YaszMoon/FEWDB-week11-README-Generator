// function to generate markdown for README
function generateMarkdown(data) {
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

  return `# ${data.title}\n\n## Description\n\n${data.descrip}\n\n${sections}## Questions\n\n${data.questions}\n\n`;
}

module.exports = generateMarkdown;
