// importamos la funcion que vamos a testear
import { validateAbsolutePath, validatePathisDirectory,validatePathisFile} from "../src/validate.js";


describe('validateAbsolutePath', () => {
    it('validateAbsolutePath debería ser una función', () => {
      expect(typeof validateAbsolutePath).toBe('function');
    });

    it('deberia retornar /home/pilar/Escritorio/LIM009-fe-md-links/src/LIM009-fe-md-links, si la ruta añadida no es Absoluta', async () => {
      return expect(validateAbsolutePath('./LIM009-fe-md-links')).resolves.toBe('/home/pilar/Escritorio/LIM009-fe-md-links/LIM009-fe-md-links')
    });
    it('deberia retornar /home/pilar/Escritorio/LIM009-fe-md-links/src/LIM009-fe-md-links, si la ruta añadida no es Absoluta', async () => {
      return expect(validateAbsolutePath('/home/pilar/Escritorio/LIM009-fe-md-links/LIM009-fe-md-links')).resolves.toBe('/home/pilar/Escritorio/LIM009-fe-md-links/LIM009-fe-md-links')
    });
});



describe('validatePathisDirectory', () => {

    it('validateIfisFile deberia ser una funcion', () => {
      expect(typeof validatePathisDirectory).toBe('function');
    })
    it('deberia retornar true si /home/pilar/Escritorio/LIM009-fe-md-links/src/ es un directorio', async() => {
      return expect(validatePathisDirectory('/home/pilar/Escritorio/LIM009-fe-md-links/src/')).resolves.toBe(true)
    })
})


describe('validatePathisFile',()=>{
  it('validateIfisDirectory deberia ser una funcion',()=>{
    expect(typeof validatePathisFile).toBe('function');
  })
  it('deberia retornar true si se ingresa /home/pilar/Escritorio/LIM009-fe-md-links/src/.cli.js ',()=>{
    return expect(validatePathisFile('/home/pilar/Escritorio/LIM009-fe-md-links/src/cli.js')).resolves.toBe(true)
  })
})

