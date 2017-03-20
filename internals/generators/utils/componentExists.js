/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(path.join(__dirname, '../../../app/components'));
const pageComponentShareds = fs.readdirSync(path.join(__dirname, '../../../app/components/shared'));
const pageContainers = fs.readdirSync(path.join(__dirname, '../../../app/containers'));
const components = pageComponents.concat(pageContainers).concat(pageComponentShareds);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
