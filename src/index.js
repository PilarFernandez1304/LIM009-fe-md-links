const {extracLinks} =require ('./controller/md-links.js');
const {validateLinks}= require ('./controller/validateLinks.js');

const option={
  validate:false
}


const mdLinks = (path, options) => {
  if (option.validate!==options) {
    return validateLinks(path)
  } 
  else if (option.validate===undefined){
    return new Promise(resolve => 
      resolve(extracLinks(path)));
  }
};


module.exports={
    mdLinks
}

/*mdLinks('/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/',{validate:false}).then(e=>e.forEach((links) => 
console.log(`\n Path :${links.file} \n Link : ${links.href}  ${links.status}  ${links.message}  \n Texto : ${links.text}`)))*/

/*mdLinks('/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/').then(e=>e.forEach((links) => 
console.log(`\n Path :${links.file} \n Link : ${links.href} \n Texto : ${links.text}`)))
.catch(console.error)*/