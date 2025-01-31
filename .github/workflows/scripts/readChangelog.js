var fs = require("fs");

module.exports = async ({ core }) => {
  const { version, path } = process.env;

  try {
    core.info(`Read changes in version ${version}.`);
    const changelog = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });

    const versionChanges = changelog
      .split(/(?=## \d+\.\d+\.\d+)/g)
      .find((changes) => changes.startsWith(`## ${version}`))
      ?.replace(`## ${version}`, "")
      ?.trim();

    core.setOutput("changes", versionChanges);
    core.info(`Changes retrieved successfully.`);
  } catch (error) {
    core.setFailed(error);
  }
};
