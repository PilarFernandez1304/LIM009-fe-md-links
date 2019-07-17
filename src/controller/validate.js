const fs = require('fs');
const path = require('path');

// validar si ruta es absoluta
const validateAbsolutePath = async (route) => {
  if (!path.isAbsolute(route)) {  
    let pathAbs = path.resolve(route);
    return pathAbs
  }
  else {
    return route
  }
}

// validar si la ruta ingresada es un directorio
const validatePathisDirectory = (route) => {
  let dir = fs.lstatSync(route).isDirectory()
  return dir
}

// recorrer el directorio
const walkIntoDirectory=(route)=> {
  let arrayOfFile = [];
  if (!validatePathisDirectory(route)){
    arrayOfFile.push(route)
  }
  else {
    let readDirectory = fs.readdirSync(route)
    readDirectory.map((read) => { 
      // recorrer array y normalizar las rutas del array
      let next =path.join(route,read)
      // se produce la recursividad
       return (validatePathisDirectory(next)) ?  arrayOfFile=arrayOfFile.concat(walkIntoDirectory(next)) : arrayOfFile.push(next);
      })
  }
 return arrayOfFile  
}

module.exports = {
  validateAbsolutePath,
  validatePathisDirectory,
  walkIntoDirectory
}