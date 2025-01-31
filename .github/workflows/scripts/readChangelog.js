var fs = require("fs");

module.exports = async ({ core }) => {
  const { version, path } = process.env;

  try {
    core.info(`Read changes in version ${version}.`);
    const changelog = fs.readFileSync(path, {
      encoding: "utf8",
      flag: "r",
    });

    core.info(changelog);
    core.info(changelog.split(/(?=## \d+\.\d+\.\d+)/g).toString());
    core.info(
      changelog
        .split(/(?=## \d+\.\d+\.\d+)/g)
        .find((version) => version.startsWith(`## ${version}`))
    );

    const versionChanges = changelog
      .split(/(?=## \d+\.\d+\.\d+)/g)
      .find((version) => version.startsWith(`## ${version}`))
      .replace(`## ${version}`, "")
      .trim();

    core.setOutput("changes", versionChanges);
    core.info(`Changes retrieved successfully.`);
  } catch (error) {
    core.setFailed(`Error retrieving changes for version ${version}: ${error}`);
  }
};
