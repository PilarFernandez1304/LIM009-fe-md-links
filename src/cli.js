const {mdLinks}= require('./index.js')
const {getLinksStats, getBroken }=require ('./controller/stats.js')


const argv=process.argv.slice(2)


const option = {
    validate: false,
    stats: false
  };

switch(argv.length){
    case 0: 
        console.log('Ingrese una ruta');break;
    case 1:
        console.log(argv[0])
        mdLinks(argv[0],option)
        .then(res=>res.forEach(element => console.log(element)))
        .catch(res=>console.log(res))
        ;break;
        
    case 2:
        console.log(argv[1]);break;
    case 3:
        console.log(argv[2]);break;

}





