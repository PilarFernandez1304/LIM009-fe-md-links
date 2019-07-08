const {mdLinks}= require('./index.js')
const {getLinksStats, getBrokenLinksStats }=require ('./controller/stats.js')


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
        mdLinks(argv[0], option)
        .then(response => response.forEach((links) => 
        console.log(`\n Path :${links.file} \n Link : ${links.href}  \n Texto : ${links.text}`)))
        ;break;
        
    case 2:
        console.log(argv[1])
        if (argv[1] === '--stats' || argv[1] === '--s') {
            option.stats = true;
            getLinksStats(argv[0])
              .then(response => console.log(response))
              .catch(error => console.log(error));
        }else 
        if(argv[1] === '--validate' || argv[1] === '--v') {
            option.validate = true;
            mdLinks(argv[0], option)
              .then(response => response.map(links => 
                console.log(`\n Path :${links.file} \n Link : ${links.href}${links.status}${links.message} \n texto : ${links.text} `)))
          };
        ;break;
    case 3:
        console.log(argv[2])
        if (argv[1] === '--validate' && argv[2] === '--stats' || argv[1] === '--stats' && argv[2] === '--validate') {
            option.validate = true;
            option.stats = true;
            Promise.all([getLinksStats(argv[0]), getBrokenLinksStats(argv[0])])
              .then(response => response.forEach(properties => console.log(properties)))
              .catch(error => console.log(error));
          }
        ;break;

}





