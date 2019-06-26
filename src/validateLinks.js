const {extracLinks} = require('./md-links.js');
const fetch = require('node-fetch');

fileMd=[ '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.js',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/validate.js',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/validate.md',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md' ]

const validateLinks=(routesMd)=>{
    let objLinks= extracLinks(routesMd);
    let runObjLinks=objLinks.map((linksVal)=>new Promise((resolve)=>{
    let linksHref=fetch(linksVal.href);
        return linksHref
        .then((res)=>{
            if(res.status >= 200 && res.status < 400){
                linksVal.status = res.status;
                linksVal.message = res.statusText;
                console.log(linksVal)
                resolve(linksVal);
            }
        })

        }
    )
    )
    

    return runObjLinks
}


console.log(validateLinks(fileMd));

module.exports={
    validateLinks
}