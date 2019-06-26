// importamos la funcion que vamos a testear
import { validateAbsolutePath, validatePathisDirectory,validatePathisFile,walkIntoDirectory} from "../src/validate.js";

let salida1 =[
              '/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.js',
              '/home/pilar/Escritorio/LIM009-fe-md-links/src/md-links.js',
              "/home/pilar/Escritorio/LIM009-fe-md-links/src/stats.js",              
              '/home/pilar/Escritorio/LIM009-fe-md-links/src/validate.js',
              "/home/pilar/Escritorio/LIM009-fe-md-links/src/validateLinks.js" ]

let salida2 = ['/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.js' ]



describe('validateAbsolutePath', () => {
    it('validateAbsolutePath debería ser una función', () => {
      expect(typeof validateAbsolutePath).toBe('function');
    });

    it('deberia retornar /home/pilar/Escritorio/LIM009-fe-md-links/src/LIM009-fe-md-links, si la ruta añadida no es Absoluta', async () => {
      return expect(validateAbsolutePath('./src/cli.js')).resolves.toBe('/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.js')
    });
    it('deberia retornar /home/pilar/Escritorio/LIM009-fe-md-links/src/LIM009-fe-md-links, si la ruta añadida no es Absoluta', async () => {
      return expect(validateAbsolutePath('/home/pilar/Escritorio/LIM009-fe-md-links/src/')).resolves.toBe('/home/pilar/Escritorio/LIM009-fe-md-links/src/')
    });
});

describe('validatePathisDirectory', () => {
    it('validateIfisFile deberia ser una funcion', () => {
      expect(typeof validatePathisDirectory).toBe('function');
    })
    it('deberia retornar true si /home/pilar/Escritorio/LIM009-fe-md-links/src/ es un directorio', () => {
      expect(validatePathisDirectory('/home/pilar/Escritorio/LIM009-fe-md-links/src/')).toBe(true)
    })
})


describe('validatePathisFile',()=>{
  it('validateIfisDirectory deberia ser una funcion',()=>{
    expect(typeof validatePathisFile).toBe('function');
  })
  it('deberia retornar true si se ingresa /home/pilar/Escritorio/LIM009-fe-md-links/src/.cli.js ',()=>{
   expect(validatePathisFile('/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.js')).toBe(true)
  })
})


describe('walkIntoDirectory',()=>{
  it('walkIntoDirectory deberia ser una funcion',()=>{
    expect(typeof walkIntoDirectory).toBe('function');
  })
  it('si ingreso una ruta deberia devolver un array con los archivos',()=>{
    expect(walkIntoDirectory('/home/pilar/Escritorio/LIM009-fe-md-links/src/')).toEqual(salida1)
  })
  it('si ingreso una ruta deberia devolver un array con los archivos',()=>{
    expect(walkIntoDirectory('/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.js')).toEqual(salida2)
  })

})