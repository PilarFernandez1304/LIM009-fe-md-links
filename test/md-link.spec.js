import {filesMd , extracLinks} from "../src/md-links.js";

const input=[ '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.js',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/validate.js',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/validate.md',
'/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md']

const ouput=[
    '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/validate.md',
    '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md'
]
const ouputLinks=[ { file: '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md',
href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
text: 'Node.js y npm' },
{ file: '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md',
href:
 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
text:
 'Módulos, librerías, paquetes, frameworks... ¿cuál es la dife' },
{ file: '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md',
href:
 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
text: 'Asíncronía en js' },
{ file: '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md',
href: 'https://docs.npmjs.com/getting-started/what-is-npm',
text: 'NPM' },
{ file: '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md',
href:
 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
text: 'Publicar packpage' },
{ file: '/home/pilar/Escritorio/LIM009-fe-md-links/Prueba/cli.md',
href:
 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
text: 'Crear módulos en Node.js' } ]

describe('filesMd',()=>{
    it('fileMd deberia ser una funcion',()=>{
        expect (typeof filesMd).toBe('function');
    });
    it('deberia botarme un array solo con las rutas de los archivos md si le ingreso un array con las rutas de todo tipo archivos',()=>{
        expect(filesMd(input)).toEqual(ouput)
    })
})


describe('extractLinks',()=>{
    it('extractLinks deberia ser una funcion',()=>{
        expect(typeof extracLinks).toBe('function');
    })
    it('deberia retornar un array de Objetos con la ruta, el link y el nombre',()=>{
        expect(extracLinks(input).toEqual(ouputLinks))
    })
})
