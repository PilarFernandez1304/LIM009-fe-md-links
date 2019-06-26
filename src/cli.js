

const {validateAbsolutePath,validatePathisDirectory,validatePathisFile,walkIntoDirectory}= require('./validate.js')

const argv=process.argv.slice(2)

route='/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.js'
//route='./cli.js'

switch(argv.length){
    case 0: 
        console.log('Ingrese una ruta');break;
    case 1:
        console.log(argv[0]);break;
    case 2:
        console.log(argv[1]);break;
    case 3:
        console.log('3');break;

}

console.log(argv)




/*validateAbsolutePath(parametro)
    .then(validatedRoute=>{     
    return validatePathisDirectory(validatedRoute)
    })
    .then(e=>console.log('el directorio es',e ))
    .catch(resp=>console.log(`${resp},la ruta es absoluta`))


//console.log(validatePathisFile(parametro))


/*walkIntoDirectory(route)
.then (r=>console.log(r))

console.log(walkIntoDirectory(parametro))
*/



