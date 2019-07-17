
const { extracLinks } = require('./md-links.js');
const fetch = require('node-fetch');



const validateLinks = (routesMd) => {
    let ArrobjLinks = extracLinks(routesMd);
    let runArrObjLinks = ArrobjLinks.map((linksVal) => new Promise((resolve) => {
        // valida la propiedad href que esta dentro de mi array de objeto
        return fetch(linksVal.href) // objeto con propiedades de respuesta de la peticion       
            .then((res) => {
                if (res.status >= 200 && res.status < 400) {
                    linksVal.status = res.status;
                    linksVal.message = res.statusText;
                    resolve(linksVal); // retorno mi objeto
                } else {
                    linksVal.status = res.status;
                    linksVal.message = 'Fail';
                    resolve(linksVal);
                }
            })
            .catch(()=>{
                linksVal.status = 'No existe';
                linksVal.message = 'Fail';
                resolve(linksVal);
            })
        })
    )
    
    return Promise.all(runArrObjLinks)
}




module.exports = {
    validateLinks
}