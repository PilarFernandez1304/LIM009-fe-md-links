const { validateLinks } = require('./validateLinks.js');

//route='/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/'

const getLinksStats = path => {
  return new Promise((resolve, reject) => {
    validateLinks(path).then(response => {
      const totalLinks = response.length;
      const uniqueLinks = [...new Set(response.map(response => response.href))].length;
      resolve(`Total : ${totalLinks} Unique: ${uniqueLinks}`);
    });
  });
};

//getLinksStats(route).then(r=>console.log(r))

// Función para ver los links rotos
const getBrokenLinksStats = path => {
  return new Promise((resolve, reject) => {
    validateLinks(path).then(response => {
      const brokenLinks = response.filter(element => element.message === 'Fail').length;
      resolve(`Broken: ${brokenLinks}`);
    });
  });
};
//getBrokenLinksStats(route).then(r=>console.log(r))


module.exports = {
  getLinksStats,
  getBrokenLinksStats
};