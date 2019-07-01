
'use strict'
const fs = require('fs');
const path = require('path');

let validateAbsolutePath = async (route) => {

  if (!path.isAbsolute(route)) {
    let pathAbs = path.resolve(route);
    return pathAbs
  }
  else {
    return route
  }
}

let validatePathisDirectory = (route) => {
  let dir = fs.lstatSync(route).isDirectory()
  return dir
}

let validatePathisFile =  (route) => {
  let files = fs.lstatSync(route).isFile()
  return files
}


let walkIntoDirectory=(route)=> {
  let arrayOfFile = [];
  if (!validatePathisDirectory(route)){
    arrayOfFile.push(route)
  }
  else {
    let readDirectory = fs.readdirSync(route)
    readDirectory.map((read) => { 
      let next =path.join(route,read)
       return (validatePathisDirectory(next)) ?  arrayOfFile=arrayOfFile.concat(walkIntoDirectory(next)) : arrayOfFile.push(next);
      })
  }
 return arrayOfFile  
}

module.exports = {
  validateAbsolutePath,
  validatePathisDirectory,
  validatePathisFile,
  walkIntoDirectory
}