describe("Cálculo de IMC", () => {
    it('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.', () => expect(calcularImc({ "peso": 50, "altura": 1.7 })).toEqual("Abaixo do peso"));
    it('Deve devolver "Normal" para IMC acima de de 18,5 e abaixo de 25.', () => expect(calcularImc({ "peso": 60, "altura": 1.7 })).toEqual("Normal"));
    it('Deve devolver "Excesso de peso" para IMC acima de 25 e abaixo de 30.', () => expect(calcularImc({ "peso": 72.25, "altura": 1.7 })).toEqual("Excesso de peso"));
    it('Deve devolver "Obesidade leve (Grau I)" para IMC acima de 30 e abaixo de 35.', () => expect(calcularImc({ "peso": 86.7, "altura": 1.7 })).toEqual("Obesidade leve (Grau I)"));
    it('Deve devolver "Obesidade severa (Grau II)" para IMC acima de 35 e abaixo de 40.', () => expect(calcularImc({ "peso": 101.15, "altura": 1.7 })).toEqual("Obesidade severa (Grau II)"));
    it('Deve devolver "Obesidade mórbida (Grau III)" para IMC acima de 40.', () => expect(calcularImc({ "peso": 160, "altura": 1.7 })).toEqual("Obesidade mórbida (Grau III)"));
});
