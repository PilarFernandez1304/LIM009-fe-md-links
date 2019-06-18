'use strict'
const fs=require ('fs');
const path = require('path');

let validateAbsolutePath= (route)=>{
  return new Promise((resolve,reject)=>{
    if(!path.isAbsolute(route)){
      let pathAbs=path.resolve(route);
      return resolve(pathAbs)
    }
    else{
      return reject(route);
    }  
  })
    
}

 let validateIfisDirectory = (router) => {
   return new Promise((resolve,reject)=>{
  fs.lstat(router, (error,stat) => {
    if(error)
        reject(`${error}`)
         //Handle error
    else{
      let Dir=stat.isDirectory()
        resolve (Dir)
    }
    
    });
  })   
} 

/*let validateIfisFile=(route)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(route,'utf-8',(err,files)=>{
      if(err)
        reject(err)
      else
      resolve(files)
    })
  })
}
  
let readDirectory = (route)=>{
  return new Promise((resolve,reject)=>{
    fs.readdir(route,(err,files)=>{
      if(err)
      reject(err)
      else{
      resolve(files)
      }
    })
  })
}
*/
module.exports ={
    validateAbsolutePath,
    validateIfisDirectory,
    //readDirectory,
    //validateIfisFile
}