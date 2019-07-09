// importamos la funcion que vamos a testear
import { validateAbsolutePath, validatePathisDirectory,walkIntoDirectory} from "../src/controller/validate.js";
const path = require('path')
let salida1 =[
              `${process.cwd()}/test/Prueba/Archivo1.js`,
              `${process.cwd()}/test/Prueba/cli.md`,
              `${process.cwd()}/test/Prueba/sdsd.js`,              
              `${process.cwd()}/test/Prueba/validate.js`,
              `${process.cwd()}/test/Prueba/validate.md` ]

let salida2 = [`${process.cwd()}/test/Prueba/Archivo1.js` ]


describe('validateAbsolutePath', () => {
    it('validateAbsolutePath debería ser una función', () => {
      expect(typeof validateAbsolutePath).toBe('function');
    });

    it('deberia retornar /home/pilar/Escritorio/LIM009-fe-md-links/src/LIM009-fe-md-links, si la ruta añadida no es Absoluta', async () => {
      return expect(validateAbsolutePath('./test/Prueba/Archivo1.js')).resolves.toBe('/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/Archivo1.js')
    });
    it('deberia retornar /home/pilar/Escritorio/LIM009-fe-md-links/src/LIM009-fe-md-links, si la ruta añadida no es Absoluta', async () => {
      return expect(validateAbsolutePath(`${process.cwd()}/test/Prueba/`)).resolves.toBe('/home/pilar/Escritorio/LIM009-fe-md-links/test/Prueba/')
    });
});

describe('validatePathisDirectory', () => {
    it('validateIfisFile deberia ser una funcion', () => {
      expect(typeof validatePathisDirectory).toBe('function');
    })
    it('deberia retornar true si /home/pilar/Escritorio/LIM009-fe-md-links/src/ es un directorio', () => {
      expect(validatePathisDirectory(`${process.cwd()}/test/Prueba/`)).toBe(true)
    })
})



describe('walkIntoDirectory',()=>{
  it('walkIntoDirectory deberia ser una funcion',()=>{
    expect(typeof walkIntoDirectory).toBe('function');
  })
  it('si ingreso una ruta deberia devolver un array con los archivos',()=>{
    expect(walkIntoDirectory(`${process.cwd()}/test/Prueba/`)).toEqual(salida1)
  })
  it('si ingreso una ruta deberia devolver un array con los archivos',()=>{
    expect(walkIntoDirectory(`${process.cwd()}/test/Prueba/Archivo1.js`)).toEqual(salida2)
  })

})