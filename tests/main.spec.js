/* global context, it, describe */

describe('Main', () => {
  describe.only('Method A', () => {
    context('Case A', () => {
      it('should happen blablabla', () => {
        // espera o que aconteça
        // Entrada de dados / método sum(2,3)
        // Espera retornar (5) => true | (6) => false => broken test
        throw new Error('Erro');
      });
    });

    context('Case B', () => {
      it('should happen blablabla', () => {
        // espera o que aconteça
        // Entrada de dados / método sum(2,3)
        // Espera retornar (5) => true | (6) => false => broken test

      });

      it('should happen fon', () => {
        // espera o que aconteça
        // Entrada de dados / método sum(2,3)
        // Espera retornar (5) => true | (6) => false => broken test

      });
    });
  });

  describe('Method B', () => {

  });
});
