const {validateAbsolutePath,validatePathisDirectory,validatePathisFile,walkIntoDirectory}= require('./validate.js')

route='/home/pilar/Escritorio/LIM009-fe-md-links/src/'
//route='./cli.js'

validateAbsolutePath(route)
    .then(validatedRoute=>{     
    return validatePathisDirectory(validatedRoute)
    })
    .then(e=>console.log('el directorio es',e ))
    .catch(resp=>console.log(`${resp},la ruta es absoluta`))


console.log(validatePathisFile(route))


/*walkIntoDirectory(route)
.then (r=>console.log(r))*/

console.log(walkIntoDirectory(route))




