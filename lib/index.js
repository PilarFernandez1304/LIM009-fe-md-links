"use strict";

const {
  extractLinks
} = require('./controller/md-links.js');

const {
  validateLinks
} = require('./controller/validateLinks.js');

route = '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/';

const mdLinks = (path, options) => {
  if (options.validate) {
    return validateLinks(path);
  } else {
    return new Promise(resolve => resolve(extractLinks(path)));
  }
};

module.exports = {
  mdLinks
};