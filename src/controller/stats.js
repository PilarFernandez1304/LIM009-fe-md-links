const {validateLinks}=require('./validateLinks.js')
 



const getLinksStats = (path) => {
    return new Promise((resolve, reject) => {
      validateLinks(path)
        .then((response) => {
          const totalLinks = response.length;
          const uniqueLinks = [...new Set(response.map(response => response.href))].length;
          resolve(`Total : ${totalLinks} Unique: ${uniqueLinks}`);
        })
    });
  };


  
  // Función para ver los links rotos
const getBrokenLinksStats = (path) => {
    return new Promise((resolve, reject) => {
      validateLinks(path)
        .then((response) => {
          const brokenLinks = response.filter(element => element.message === 'Fail').length;
          resolve(`Broken: ${brokenLinks}`);
        })
        
        
    });
};



module.exports={
  getLinksStats,
  getBrokenLinksStats
}
