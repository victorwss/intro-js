describe('Retira os menores valores', () => {
  
    it('Se o vetor estiver vazio, devolve um vetor vazio', () => expect(retiraAsMenores([])).toEqual([]));
    it('Para [5,3,2,1,4] retorna [5,3,2,1,4]', () => expect(retiraAsMenores([5,3,2,1,4])).toEqual([5,3,2,1,4]));
    it('Para [8,9,2,6,1,3] retorna [8,9,6,3]', () => expect(retiraAsMenores([8,9,2,6,1,3])).toEqual([8,9,6,3]));
    it('Para [1,2,3,-4,0,7,0,3,4] retorna [1,2,3,7,3,4]', () => expect(retiraAsMenores([1,2,3,-4,0,7,0,3,4])).toEqual([1,2,3,7,3,4]));

});
  