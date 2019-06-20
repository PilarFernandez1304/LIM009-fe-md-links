const path = require('path');
const fs = require('fs');

fileMd=[ '/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.js',
'/home/pilar/Escritorio/LIM009-fe-md-links/src/validate.js',
'/home/pilar/Escritorio/LIM009-fe-md-links/src/validate.md',
'/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.md' ]

let filesMd = (fileArr)=>{
    let newArrayFileMd=[]
    fileArr.forEach(element => {
      if(path.extname(element) ==='.md'){
          return newArrayFileMd.push(element)
      }  
    });
    return newArrayFileMd

}

// extraer links

let extracLinks =(ArrFileMd)=>{
    

}

