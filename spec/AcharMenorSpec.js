describe('Achar menor em um vetor', () => {
  
    it('Se o vetor estiver vazio, devolve undefined', () => expect(acharMenor([])).toEqual(undefined));
    it('Para [1,2,3,4,5] retorna 1', () => expect(acharMenor([1,2,3,4,5])).toEqual(1));
    it('Para [1,2,3,4,0] retorna 0', () => expect(acharMenor([1,2,3,4,0])).toEqual(0));
    it('Para [1,2,-3,4,0] retorna -3', () => expect(acharMenor([1,2,-3,4,0])).toEqual(-3));

});
  