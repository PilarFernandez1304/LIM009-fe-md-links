const path = require('path');
const fs = require('fs');

/*fileMd=[ '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.js',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/validate.js',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/validate.md',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md' ]
*/
const filesMd = (fileArr)=>{
    let newArrayFileMd=[]
    fileArr.forEach(element => {
      if(path.extname(element) ==='.md'){
          return newArrayFileMd.push(element)
      }  
    });
    return newArrayFileMd
}
// extraer links

const extracLinks =(ArrFileMd)=>{
    let newArrayLinks=[];
    let ArrayMd= filesMd(ArrFileMd);
    const regExpresion = /(^|[^!])\[(.*)\]\((.*)\)/g;
    const regExpressionHref = /\((.*)\)/g;
    const regExpressionNameLink = /\[((.*))\]/g;
    ArrayMd.forEach(elempathMd=>{
        let readFileMd=fs.readFileSync(elempathMd,'utf-8');
        let listafLinksMd=readFileMd.match(regExpresion)
        if(listafLinksMd!==null){
         listafLinksMd.forEach(InfoLinks=>{
             let href=InfoLinks.match(regExpressionHref).toString();
             let name = InfoLinks.match(regExpressionNameLink).toString()
         newArrayLinks.push({
            file: path.resolve(elempathMd),
            href: href.split((/[\(\)]/))[1],
            text: name.split(/[\[\]]/)[1].slice(0, 60),
         })
        })
      }
    })
    return newArrayLinks
}


//console.log(extracLinks(fileMd))

module.exports={
    filesMd,
    extracLinks
}