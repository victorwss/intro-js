describe('Operações Básicas', () => {
  
  it('3.5 + 4 deve voltar 7.5', () => expect(operacoesBasicas('A', 3.5, 4)).toEqual(7.5));
  it('9 - 1.75 deve voltar 7.25', () => expect(operacoesBasicas('S', 9, 1.75)).toEqual(7.25));
  it('1.8 * 7 deve voltar 12.6', () => expect(operacoesBasicas('M', 1.8, 7)).toEqual(12.6));
  it('7 / 2 deve voltar 3.5', () => expect(operacoesBasicas('D', 7, 2)).toEqual(3.5));
  it('8 elevado a 3 deve voltar 512', () => expect(operacoesBasicas('P', 8, 3)).toEqual(512));
  it('16 raíz de 4 deve voltar 2', () => expect(operacoesBasicas('R', 16, 4)).toEqual(2));
  it('Raízes pares não deve calcular para negativos', () => expect(operacoesBasicas('R', -9, 2)).toEqual(NaN));
  it('Divisão por zero não deve ser possível', () => expect(operacoesBasicas('D', 32, 0)).toEqual(NaN))
  it('Operação que não existe deve voltar undefined', () => expect(operacoesBasicas('Z',1,2)).toEqual(undefined));
});
