/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const featuresGenerator = require("./components/index.js");
const pagesGenerator = require("./pages/index.js");

/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = "rbgen";

module.exports = (plop) => {
  plop.setGenerator("features", featuresGenerator);
  plop.setGenerator("pages", pagesGenerator);
  plop.addHelper("directory", (comp) => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../src/components/${comp}`),
        fs.F_OK
      );
      return `features/${comp}`;
    } catch (e) {
      return `features/${comp}`;
    }
  });
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
  plop.setActionType("prettify", (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      "/../../src/",
      config.path,
      plop.getHelper("properCase")(answers.name),
      "**",
      "**.js"
    )}`;

    try {
      execSync(`npm run prettify -- "${folderPath}"`);
      return folderPath;
    } catch (err) {
      throw err;
    }
  });
  plop.setActionType("backup", (answers, config) => {
    try {
      fs.copyFileSync(
        path.join(__dirname, config.path, config.file),
        path.join(
          __dirname,
          config.path,
          `${config.file}.${BACKUPFILE_EXTENSION}`
        ),
        "utf8"
      );
      return path.join(
        __dirname,
        config.path,
        `${config.file}.${BACKUPFILE_EXTENSION}`
      );
    } catch (err) {
      throw err;
    }
  });
};

module.exports.BACKUPFILE_EXTENSION = BACKUPFILE_EXTENSION;
