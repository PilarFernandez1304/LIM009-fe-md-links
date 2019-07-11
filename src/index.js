const {extracLinks} =require ('./controller/md-links.js');
const {validateLinks}= require ('./controller/validateLinks.js');



const mdLinks = (path, options) => {
  if (options.validate) {
    return validateLinks(path)
  } else {
    return new Promise(resolve => 
      resolve(extracLinks(path)));
  }
};


module.exports={
    mdLinks
}