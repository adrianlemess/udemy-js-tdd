/**
 * Desafio FizzBuzz
 *
 * Escreva uma lib que receba um número e:
 * Se o número for divisível por 3, no lugar do número escreva 'Fizz' - x
 * Se o número for divisível por 5, no lugar do número escreva 'Buzz' - x
 * Se o número for divisível por 3 e por 5, no lugar escreva 'FizzBuzz'
 * Se não for múltiplo de nada retorna o número
 */

import { expect } from 'chai';
import fizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number when non-multiple', () => {
    expect(fizzBuzz(7)).to.be.equal(7);
    expect(fizzBuzz(4)).to.be.equal(4);
  });

  it('should return 0 when 0', () => {
    expect(fizzBuzz(0)).to.be.equal(0);
  });
});
