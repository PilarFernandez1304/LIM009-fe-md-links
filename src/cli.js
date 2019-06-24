const {validateAbsolutePath,validatePathisDirectory,validatePathisFile,walkIntoDirectory}= require('./validate.js')

//route='/home/pilar/Escritorio/LIM009-fe-md-links/src/'
//route='./cli.js'

const argv=process.argv
let parametro=argv.splice()

console.log(parametro)

validateAbsolutePath(parametro)
    .then(validatedRoute=>{     
    return validatePathisDirectory(validatedRoute)
    })
    .then(e=>console.log('el directorio es',e ))
    .catch(resp=>console.log(`${resp},la ruta es absoluta`))


console.log(validatePathisFile(parametro))


/*walkIntoDirectory(route)
.then (r=>console.log(r))*/

console.log(walkIntoDirectory(parametro))




