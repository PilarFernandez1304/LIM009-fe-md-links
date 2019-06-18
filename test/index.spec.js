// importamos la funcion que vamos a testear
import { validateAbsolutePath, validateIfisDirectory } from "../src/valideRoute.js";


describe('validateAbsolutePath', () => {
    it('validateAbsolutePath debería ser una función', () => {
      expect(typeof validateAbsolutePath).toBe('function');
    });

    it('deberia retornar /home/pilar/Escritorio/LIM009-fe-md-links/src/LIM009-fe-md-links, si la ruta añadida no es Absoluta', () => {
      return expect(validateAbsolutePath('./LIM009-fe-md-links')).resolves.toBe('/home/pilar/Escritorio/LIM009-fe-md-links/LIM009-fe-md-links')
    });
    it('deberia retornar /home/pilar/Escritorio/LIM009-fe-md-links/src/LIM009-fe-md-links, si la ruta añadida es Absoluta', () => {
      return expect(validateAbsolutePath('/home/pilar/LIM009-fe-md-links')).rejects.toBe('/home/pilar/LIM009-fe-md-links')
    });
});



describe('validateIfisFile', () => {

    it('validateIfisFile deberia ser una funcion', () => {
      expect(typeof validateIfisDirectory).toBe('function');
    })
    it('deberia retornar true si /home/pilar/Escritorio/LIM009-fe-md-links/src/ es un directorio', () => {
      return expect(validateIfisDirectory('/home/pilar/Escritorio/LIM009-fe-md-links/src/')).resolves.toBe(true)
    })
    it('deberia retornar,Error: ENOENT: no such file or directory, lstat ./cli.js si no reconoce que es un directorio', () => {
      return expect(validateIfisDirectory('./cli.js')).rejects.toBe("Error: ENOENT: no such file or directory, lstat './cli.js'")
    })
    
})