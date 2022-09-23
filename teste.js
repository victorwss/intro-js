"use strict";

grupo("Exemplos", "Não bagunce o que está funcionando ou você vai ter nota descontada.", true, -1, 0, () => [
    teste("O maior de 1 e 3 é 3.", () => maiorDosDois            (1, 3), igual(3)),
    teste("O maior de 5 e 3 é 5.", () => maiorDosDois            (5, 3), igual(5)),
    teste("O maior de 1 e 3 é 3.", () => maiorDosDoisSimplificado(1, 3), igual(3)),
    teste("O maior de 5 e 3 é 5.", () => maiorDosDoisSimplificado(5, 3), igual(5)),
]);

grupo("Exercício 1", "Se você não fizer este daqui certo, vai ficar com zero.", false, -10, 0, () => {
    function alunosOk() {
        const alunos = dadosDosAlunos();
        if (!(alunos instanceof Array)) throw new Error("Os dados dos alunos devem estar em um array.");
        if (alunos.length === 0) throw new Error("Você esqueceu de preencher os dados dos alunos.");
        alunos.forEach(a => {
            if (!a.hasOwnProperty("nome")) return;
            const li = document.createElement("li");
            li.append(a.nome);
            document.getElementById("alunos").append(li);
        });
        alunos.forEach(a => {
            const k = Object.keys(a);
            if (!a.hasOwnProperty("nome")) throw new Error("Aluno sem nome.");
            if (!a.hasOwnProperty("ra")) throw new Error("Aluno sem ra.");
            if (k.length !== 2) throw new Error("Aluno com coisas a mais além de nome e ra.");
            if (["João da Silva", "Maria da Silva"].indexOf(a.nome) >= 0) throw new Error("Você esqueceu de editar os nomes dos alunos corretamente.");
            if ([123456, 654321, 0].indexOf(a.ra) >= 0) throw new Error("Você esqueceu de editar os RAs dos alunos corretamente.");
        });
        if (alunos.length > 3) throw new Error("Vocês só podem fazer grupo de até 3 alunos.");
    }
    return [
        teste("Listagem de alunos ok.", () => alunosOk(), naoDeuErro()),
    ];
});

grupo("Exercício 2", "Maior dos quatro", true, 0, 0.5, () => [
    teste("O maior de 1, 3, 5, 7 é 7."  , () => maiorDosQuatro( 1,  3,  5, 7), igual( 7)),
    teste("O maior de 10, 3, 5, 7 é 10.", () => maiorDosQuatro(10,  3,  5, 7), igual(10)),
    teste("O maior de 1, 30, 5, 7 é 30.", () => maiorDosQuatro( 1, 30,  5, 7), igual(30)),
    teste("O maior de 1, 3, 50, 7 é 50.", () => maiorDosQuatro( 1,  3, 50, 7), igual(50)),
]);

grupo("Exercício 3", "Operações", true, 0, 0.5, () => [
    teste("3.5 + 4 deve voltar 7.5."                      , () => operacoesBasicas("A",  3.5, 4   ), igual(  7.5    )),
    teste("9 - 1.75 deve voltar 7.25."                    , () => operacoesBasicas("S",  9  , 1.75), igual(  7.25   )),
    teste("1.8 * 7 deve voltar 12.6."                     , () => operacoesBasicas("M",  1.8, 7   ), igual( 12.6    )),
    teste("7 / 2 deve voltar 3.5."                        , () => operacoesBasicas("D",  7  , 2   ), igual(  3.5    )),
    teste("8 elevado a 3 deve voltar 512."                , () => operacoesBasicas("P",  8  , 3   ), igual(512      )),
    teste("Divisão por zero não deve ser possível."       , () => operacoesBasicas("D", 32  , 0   ), igual(NaN      )),
    teste("Operação que não existe deve voltar undefined.", () => operacoesBasicas("Z",  1  , 2   ), igual(undefined)),
    teste("Operação que não existe deve voltar undefined.", () => operacoesBasicas("d",  1  , 2   ), igual(undefined)),
]);

grupo("Exercício 4", "Comparador básico", true, 0, 0.5, () => {
    class Abacaxi {}
    class Laranja {}
    const a = new Abacaxi();
    const b = new Laranja();
    return [
        teste("3 e 3 são estritamente iguais."                , () => comparadorBasico(    3,     3), igual("Elemento 3 (number) é estritamente igual ao elemento 3 (number)."                      )),
        teste("undefined e undefined são estritamente iguais.", () => comparadorBasico(            ), igual("Elemento undefined (undefined) é estritamente igual ao elemento undefined (undefined).")),
        teste('"ABC" e "ABC" são estritamente iguais.'        , () => comparadorBasico("ABC", "ABC"), igual("Elemento ABC (string) é estritamente igual ao elemento ABC (string)."                  )),
        teste('3 e "3" são equivalentes.'                     , () => comparadorBasico(    3,   "3"), igual("Elemento 3 (number) é equivalente ao elemento 3 (string)."                             )),
        teste("null e undefined são equivalentes."            , () => comparadorBasico(null        ), igual("Elemento null (object) é equivalente ao elemento undefined (undefined)."               )),
        teste("1 e 2 são diferentes."                         , () => comparadorBasico(    1,     2), igual("Elemento 1 (number) é diferente do elemento 2 (number)."                               )),
        teste('"1" e 2 são diferentes.'                       , () => comparadorBasico(  "1",     2), igual("Elemento 1 (string) é diferente do elemento 2 (number)."                               )),
        teste("Array e objeto são diferentes."                , () => comparadorBasico(   [],    {}), igual("Elemento  (Array) é diferente do elemento [object Object] (Object)."                   )),
        teste("Abacaxi e Laranja são diferentes."             , () => comparadorBasico(    a,     b), igual("Elemento [object Object] (Abacaxi) é diferente do elemento [object Object] (Laranja)." )),
    ];
});

grupo("Exercício 5", "Primeiro nome", true, 0, 0.5, () => [
    teste("Yuri Dirickson deve retornar Yuri.", () => primeiroNome("Yuri Dirickson"), igual("Yuri"  )),
    teste("Marina Silva deve retornar Marina.", () => primeiroNome("Marina Silva"  ), igual("Marina")),
    teste("Robson deve retornar Robson."      , () => primeiroNome("Robson"        ), igual("Robson")),
]);

grupo("Exercício 6", "Nome abreviado", true, 0, 0.5, () => [
    teste("Yuri Dirickson deve retornar Yuri D.", () => abreviadorNomes("Yuri Dirickson"), igual("Yuri D."  )),
    teste("Marina Silva deve retornar Marina S.", () => abreviadorNomes("Marina Silva"  ), igual("Marina S.")),
    teste("Robson deve retornar Robson."        , () => abreviadorNomes("Robson"        ), igual("Robson"   )),
]);

grupo("Exercício 7", "Datas", true, 0, 1, () => {
    const datas = {
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
    const testes = [];
    for (const chave in datas) {
        const valor = datas[chave];
        testes.push(teste(`Data ${chave} deve devolver ${valor}.`, () => converteDataParaFormaCompleta(chave), igual(valor)));
    }
    return testes;
});

grupo("Exercício 8", "Somar pares", true, 0, 1, () => [
    teste("1 e 4 deve devolver 6."  , () => somadorPares(1,  4), igual( 6)),
    teste("2 e 9 deve devolver 20." , () => somadorPares(2,  9), igual(20)),
    teste("2 e 10 deve devolver 30.", () => somadorPares(2, 10), igual(30)),
    teste("1 e 10 deve devolver 30.", () => somadorPares(1, 10), igual(30)),
    teste("2 e 11 deve devolver 30.", () => somadorPares(2, 11), igual(30)),
    teste("1 e 11 deve devolver 30.", () => somadorPares(1, 11), igual(30)),
    teste("2 e 12 deve devolver 42.", () => somadorPares(2, 12), igual(42)),
    teste("1 e 3 deve devolver 2."  , () => somadorPares(1,  3), igual( 2)),
    teste("8 e 8 deve devolver 8."  , () => somadorPares(8,  8), igual( 8)),
    teste("3 e 3 deve devolver 0."  , () => somadorPares(3,  3), igual( 0)),
]);

grupo("Exercício 9", "Achar o menor", true, 0, 0.5, () => [
    teste("Se o vetor estiver vazio, devolve undefined.", () => acharMenor([              ]), igual(undefined)),
    teste("Para [1, 2, 3, 4, 5] retorna 1."             , () => acharMenor([1, 2,  3, 4, 5]), igual(        1)),
    teste("Para [1, 2, 3, 4, 0] retorna 0."             , () => acharMenor([1, 2,  3, 4, 0]), igual(        0)),
    teste("Para [1, 2, -3, 4, 0] retorna -3."           , () => acharMenor([1, 2, -3, 4, 0]), igual(       -3)),
]);

grupo("Exercício 10", "Achar os pares", true, 0, 0.5, () => [
    teste("Se o vetor estiver vazio, devolve um vetor vazio.", () => acharPares([              ]), igual([        ])),
    teste("Para [1, 2, 3, 4, 5] retorna [2, 4]."             , () => acharPares([1, 2, 3,  4, 5]), igual([2,  4   ])),
    teste("Para [1, 2, 3, 4, 0] retorna [2, 4, 0]."          , () => acharPares([1, 2, 3,  4, 0]), igual([2,  4, 0])),
    teste("Para [1, 2, 3, -4, 0] retorna [2, -4, 0]."        , () => acharPares([1, 2, 3, -4, 0]), igual([2, -4, 0])),
]);

grupo("Exercício 11", "IMC", true, 0, 0.5, () => [
    teste('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.'                        , () => calcularImc({ "peso":  50   , "altura": 1.7 }), igual("Abaixo do peso"              )),
    teste('Deve devolver "Normal" para IMC acima de de 18,5 e abaixo de 25.'               , () => calcularImc({ "peso":  60   , "altura": 1.7 }), igual("Normal"                      )),
    teste('Deve devolver "Excesso de peso" para IMC acima de 25 e abaixo de 30.'           , () => calcularImc({ "peso":  72.25, "altura": 1.7 }), igual("Excesso de peso"             )),
    teste('Deve devolver "Obesidade leve (Grau I)" para IMC acima de 30 e abaixo de 35.'   , () => calcularImc({ "peso":  86.7 , "altura": 1.7 }), igual("Obesidade leve (Grau I)"     )),
    teste('Deve devolver "Obesidade severa (Grau II)" para IMC acima de 35 e abaixo de 40.', () => calcularImc({ "peso": 101.15, "altura": 1.7 }), igual("Obesidade severa (Grau II)"  )),
    teste('Deve devolver "Obesidade mórbida (Grau III)" para IMC acima de 40.'             , () => calcularImc({ "peso": 160   , "altura": 1.7 }), igual("Obesidade mórbida (Grau III)")),
]);

grupo("Exercício 12", "Tipo de triângulo", true, 0, 1, () => [
    teste('Deve devolver "equilátero" para 5, 5 e 5.'            , () => tipoTriangulo( 5  ,   5,  5  ), igual("equilátero"        )),
    teste('Deve devolver "equilátero" para 8, 8 e 8.'            , () => tipoTriangulo( 8  ,   8,  8  ), igual("equilátero"        )),
    teste('Deve devolver "equilátero" para 3.3, 3.3 e 3.3.'      , () => tipoTriangulo( 3.3, 3.3,  3.3), igual("equilátero"        )),
    teste('Deve devolver "isósceles" para 12, 8 e 12.'           , () => tipoTriangulo(12  ,   8, 12  ), igual("isósceles"         )),
    teste('Deve devolver "isósceles" para 12, 12 e 8.8.'         , () => tipoTriangulo(12  ,  12,  8.8), igual("isósceles"         )),
    teste('Deve devolver "isósceles" para 5, 13 e 13.'           , () => tipoTriangulo( 5  ,  13, 13  ), igual("isósceles"         )),
    teste('Deve devolver "escaleno" para 4, 2 e 3.'              , () => tipoTriangulo( 4  ,   2,  3  ), igual("escaleno"          )),
    teste('Deve devolver "escaleno" para 3, 2.5 e 1.'            , () => tipoTriangulo( 3  , 2.5,  1  ), igual("escaleno"          )),
    teste('Deve devolver "escaleno" para 7.2, 2.5 e 5.1.'        , () => tipoTriangulo( 7.2, 2.5,  5.1), igual("escaleno"          )),
    teste('Deve devolver "não é um triângulo" para 7.2, 1.5 e 3.', () => tipoTriangulo( 7.2, 2.5,  3  ), igual("não é um triângulo")),
    teste('Deve devolver "não é um triângulo" para 1, 2 e 3.'    , () => tipoTriangulo( 1  , 2  ,  3  ), igual("não é um triângulo")),
    teste('Deve devolver "não é um triângulo" para 2, 2 e 4.'    , () => tipoTriangulo( 2  , 2  ,  4  ), igual("não é um triângulo")),
    teste('Deve devolver "não é um triângulo" para 2, 5 e 1.'    , () => tipoTriangulo( 2  , 5  ,  1  ), igual("não é um triângulo")),
    teste('Deve devolver "não é um triângulo" para 2, 2 e 0.'    , () => tipoTriangulo( 2  , 2  ,  0  ), igual("não é um triângulo")),
    teste('Deve devolver "não é um triângulo" para 0, 0 e 0.'    , () => tipoTriangulo( 0  , 0  ,  0  ), igual("não é um triângulo")),
    teste('Deve devolver "não é um triângulo" para 2, 2 e -1.'   , () => tipoTriangulo( 2  , 2  , -1  ), igual("não é um triângulo")),
    teste('Deve devolver "não é um triângulo" para 2, -2 e 5.'   , () => tipoTriangulo( 2  ,-2  ,  5  ), igual("não é um triângulo")),
    teste('Deve devolver "não é um triângulo" para -7, 8 e 2.'   , () => tipoTriangulo(-7  , 8  ,  2  ), igual("não é um triângulo")),
]);

//...

grupo("Exercício 20", "Entrega", false, -1, 0, () => {
    function embaralhar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const formas = [
        "Eu vou entregar por meio do Google Forms.",
        "Eu vou entregar por e-mail.",
        "Eu vou entregar pelo WhatsApp.",
        "Eu vou entregar pelo MediaFire.",
        "Eu vou entregar no Classroom.",
        "Eu vou imprimir e entregar em papel pro professor.",
        "Eu vou tirar uma foto do código e entregar essa foto.",
        "Eu vou entregar o código em PDF.",
        "Eu vou entregar pelos correios.",
        "Eu não vou entregar.",
        "Eu vou entregar apenas o arquivo exercicio.js e nada mais.",
        "Eu vou entregar um arquivo RAR.",
        "Eu vou entregar o arquivo exercicio.html.",
        "Eu vou entregar o arquivo exercicio.css.",
        "Eu vou entregar os arquivos teste.js e testefw.js.",
        "Eu alterei os arquivos teste.js e testefw.js para que meus testes passassem.",
    ];
    const correto = [
        "Eu vou entregar apenas o arquivo exercicio.js e nada mais.",
        "Eu vou entregar por meio do Google Forms.",
    ];
    function organizar(bagunca, resposta) {
        let solucao = [bagunca[resposta[0]], bagunca[resposta[1]]];
        solucao.sort();
        return solucao;
    }
    const testes = [];
    for (let i = 0; i < 25; i++) {
        const bagunca = embaralhar([...formas]);
        testes.push(teste(`Deve achar a melhor forma de entregar [${i}].`, () => organizar(bagunca, comoFazerEntrega(bagunca)), igual(correto)));
    }
    return testes;
});