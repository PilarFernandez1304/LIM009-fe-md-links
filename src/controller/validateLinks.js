
const { extracLinks } = require('./md-links.js');
const fetch = require('node-fetch');



const validateLinks = (routesMd) => {
    let objLinks = extracLinks(routesMd);
    let runObjLinks = objLinks.map((linksVal) => new Promise((resolve) => {
        let linksHref = fetch(linksVal.href);
        return linksHref
            .then((res) => {
                if (res.status >= 200 && res.status < 400) {
                    linksVal.status = res.status;
                    linksVal.message = res.statusText;
                    resolve(linksVal);
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
    return Promise.all(runObjLinks)
}




module.exports = {
    validateLinks
}