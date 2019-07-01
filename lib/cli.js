"use strict";

const {
  mdLinks
} = require('./index.js');

const argv = process.argv.slice(2); //route='/home/pilar/Escritorio/LIM009-fe-md-links/src/'
//route='./cli.js'

const option = {
  validate: false,
  stats: false
};

switch (argv.length) {
  case 0:
    console.log('Ingrese una ruta');
    break;

  case 1:
    mdLinks(argv[0], option).then(res => res.forEach(element => console.log(element))).catch(res => console.log(res));
    break;

  case 2:
    console.log(argv[1]);
    break;

  case 3:
    console.log(argv[2]);
    break;
}

console.log(argv);
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