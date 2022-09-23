describe("Primeiro Nome", () => {
    it("Yuri Dirickson deve retornar Yuri.", () => expect(primeiroNome("Yuri Dirickson")).toEqual("Yuri"));
    it("Marina Silva deve retornar Marina.", () => expect(primeiroNome("Marina Silva")).toEqual("Marina"));
    it("Robson deve retornar Robson.", () => expect(primeiroNome("Robson")).toEqual("Robson"));
});

describe("Abreviador de Nomes", () => {
    it("Yuri Dirickson deve retornar Yuri D.", () => expect(abreviadorNomes("Yuri Dirickson")).toEqual("Yuri D."));
    it("Marina Silva deve retornar Marina S.", () => expect(abreviadorNomes("Marina Silva")).toEqual("Marina S."));
    it("Robson deve retornar Robson.", () => expect(abreviadorNomes("Robson")).toEqual("Robson"));
});

describe("Converte Datas", () => {
    let datas = {
        "31/01/1975": "31 de Janeiro de 1975",
        "10/02/2219": "10 de Fevereiro de 2219",
        "28/03/1677": "28 de Março de 1677",
        "07/04/1944": "07 de Abril de 1944",
        "14/05/2001": "14 de Maio de 2001",
        "22/06/1789": "22 de Junho de 1789",
        "31/07/1821": "31 de Julho de 1821",
        "25/08/1982": "25 de Agosto de 1982",
        "12/09/2044": "12 de Setembro de 2044",
        "01/10/3566": "01 de Outubro de 3566",
        "04/11/1210": "04 de Novembro de 1210",
        "03/12/1777": "03 de Dezembro de 1777",
        "09/01/1500": "09 de Janeiro de 1500",
        "12/02/1989": "12 de Fevereiro de 1989",
        "24/03/2022": "24 de Março de 2022",
        "20/04/2020": "20 de Abril de 2020",
        "16/05/2090": "16 de Maio de 2090",
        "19/06/2051": "19 de Junho de 2051",
        "13/07/2030": "13 de Julho de 2030",
        "13/08/1967": "13 de Agosto de 1967",
        "13/09/1923": "13 de Setembro de 1923",
        "29/10/1848": "29 de Outubro de 1848",
        "30/11/1625": "30 de Novembro de 1625",
        "31/12/1044": "31 de Dezembro de 1044",
    }
    for (let chave in datas) {
        let valor = datas[chave];
        it(`Data ${chave} deve devolver ${valor}.`, () => expect(converteDataParaFormaCompleta(chave)).toEqual(valor));
    }
});