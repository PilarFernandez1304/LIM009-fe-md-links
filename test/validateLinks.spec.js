import { validateLinks } from '../src/controller/validateLinks.js'
import { getLinksStats, getBrokenLinksStats} from '../src/controller/stats.js'

const fetchMock = require('../__mocks__/node-fetch.js');


const ouputValidate = [
    {
        "file": "/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md",
        "href": "https://www.genbeta.com/desarrollo/node-js-y-npm",
        "message": "OK", 
        "status": 200,
        "text": "Node.js y npm"
    },
    {
        "file": "/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md",
        "href": "http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175",
        "message": "OK",
        "status": 200,
        "text": "Módulos, librerías, paquetes, frameworks... ¿cuál es la dife"
    },
    {
        "file": "/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md",
        "href": "https://carlosazaust.com/manejando-la-asincronia-en-javascript/",
        "status": "No existe",
        "message": "Fail",
        "text": "Asíncronía en js"
    },
    {
        "file": "/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md",
        "href": 'https://github.com/Laboratoria/LIM008-fe-md-lin',
        "text": 'Laboratoria',
        "status": 404,
        "message": 'Fail'
    },
]


describe('validateLinks', () => {
    it('validateLinks deberia ser una funcion', () => {
        expect(typeof validateLinks).toBe('function');
    })
    it('Deberia regresar un objeto con los datos de los links', (done) => {
        fetchMock           
            .mock("http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175", 200)
            .mock("https://www.genbeta.com/desarrollo/node-js-y-npm",200)
            .mock("https://carlosazaust.com/manejando-la-asincronia-en-javascript/",'No existe')
            .mock("https://github.com/Laboratoria/LIM008-fe-md-lin",404)
            .mock('*', 200)

        let ApliValidateLinks = validateLinks(`${process.cwd()}/test/Prueba/`)
        ApliValidateLinks.then(response => {
            expect(response).toEqual(ouputValidate);
            done();
        })
            .catch(error => done());
    })

    
   
})

describe('getLinksStats', () => {
    it('Debería de ser una función', () => {
      expect(typeof getLinksStats).toBe('function');
    });
    it('Debería retornar un Objeto con dos propiedades, el total de links encontrados y la cantidad de links únicos', (done) => {
      return new Promise((resolve) => {
        getLinksStats(`${process.cwd()}/test/Prueba/`)
          .then((response) => {
            expect(response).toEqual('Total: 5 Unique: 5');
            resolve(response);
            done();
          })
          .catch(error => done());
      });
    });
  });

  describe('getBrokenLinksStats', () => {
    it('Debería ser una función', () => {
      expect(typeof getBrokenLinksStats).toBe('function');
    });
    it('Debería retornar el total de links rotos', (done) => {
      return new Promise((resolve) => {
        getBrokenLinksStats(`${process.cwd()}/test/Prueba/`)
          .then((response) => {
            expect(response).toEqual('Broken: 3');
            resolve(response);
            done();
          })
          .catch(error =>{ 
           
            
            done()});
        
      });
    });
  });