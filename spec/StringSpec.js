describe('Inverter Palavras', () => {

    it('String vazia deve voltar string vazia', () => expect(inverterPalavras('')).toEqual(''));
    it('"bom dia" deve retornar "aid mob"', () => expect(inverterPalavras('bom dia')).toEqual('aid mob'));
    it('"subi no onibus" deve retornar "subino on ibus"', () => expect(inverterPalavras('subi no onibus')).toEqual('subino on ibus'));
    it('"eu sei" deve retornar "ies ue"', () => expect(inverterPalavras('eu sei')).toEqual('ies ue'));

});

describe('Converte Datas', () => {


    it('Data vazia deve devolver null', () => expect(converteDataParaFormaCompleta('')).toEqual(null));
    it('Data "10/11/2019" deve devolver "10 de Novembro de 2019"', () => expect(converteDataParaFormaCompleta('10/11/2019')).toEqual("10 de Novembro de 2019"));
    it('Data "03/02/2000" deve devolver "03 de Fevereiro de 2000"', () => expect(converteDataParaFormaCompleta('03/02/2000')).toEqual("03 de Fevereiro de 2000"));
    it('Data "07/05/1987" deve devolver "07 de Maio de 1987"', () => expect(converteDataParaFormaCompleta('07/05/1987')).toEqual("07 de Maio de 1987"));


});