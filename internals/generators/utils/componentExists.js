/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require("fs");
const path = require("path");
const pageFeatures = fs.readdirSync(
  path.join(__dirname, "../../../src/features")
);
const pagePages = fs.readdirSync(path.join(__dirname, "../../../src/pages"));
const components = pageFeatures.concat(pagePages);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
