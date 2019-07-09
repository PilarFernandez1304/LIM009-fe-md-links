import { filesMd, extracLinks } from "../src/controller/md-links.js";
const path = require('path')


const input = [`${process.cwd()}/test/Prueba/cli.js`,
`${process.cwd()}/test/Prueba/validate.md`,
`${process.cwd()}/test/Prueba/validate.js`,
`${process.cwd()}/test/Prueba/cli.md`]

const ouput = [
    '/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/validate.md',
    '/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md'
]
const ouputLinks = [{
    file: '/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md',
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm'
},
{
    file: '/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md',
    href:
        'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text:
        'Módulos, librerías, paquetes, frameworks... ¿cuál es la dife'
},
{
    file: '/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md',
    href:
        'https://carlosazaust.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js'
},
{
    file: '/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md',
    href: 'https://docs.np.com/getting-started/what-is-npm',
    text: 'NPM'
},
{
         file: "/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/cli.md",
         href: "'https://github.com/Laboratoria/LIM008-fe-md-lin'",
         text: "Laboratoria",
}]


describe('filesMd', () => {
    it('fileMd deberia ser una funcion', () => {
        expect(typeof filesMd).toBe('function');
    });
    it('deberia botarme un array solo con las rutas de los archivos md si le ingreso un array con las rutas de todo tipo archivos', () => {
        expect(filesMd(input)).toEqual(ouput)
    })
})


describe('extractLinks', () => {
    it('extractLinks deberia ser una funcion', () => {
        expect(typeof extracLinks).toBe('function');
    })
    it('deberia retornar un array de Objetos con la ruta, el link y el nombre', () => {
        expect(extracLinks(`${process.cwd()}/test/Prueba/`)).toEqual(ouputLinks)
    })
})
