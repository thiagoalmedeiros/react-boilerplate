/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component/index.js');
const componentSharedGenerator = require('./shared/index.js');
const containerGenerator = require('./container/index.js');
const routeGenerator = require('./route/index.js');
const languageGenerator = require('./language/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('sharedComponent', componentSharedGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('route', routeGenerator);
  plop.setGenerator('language', languageGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../../app/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      try {
        fs.accessSync(path.join(__dirname, `../../app/components/${comp}`), fs.F_OK);
        return `components/${comp}`;
      } catch (f) {
        return `components/shared/${comp}`;
      }
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
