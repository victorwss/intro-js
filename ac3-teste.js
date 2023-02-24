"use strict";

(() => {
    const grupo = TesteFw.grupo;
    const teste = TesteFw.teste;
    const igual = TesteFw.igual;
    const naoDeuErro = TesteFw.naoDeuErro;
    const numeroMaximoDeAlunos = 5;
    let jsonOk = false;

    if (document.querySelectorAll(".gravissimo").length > 0) return;

    grupo("Exemplos", "Não bagunçar os exemplos dados", true, -1, 0, () => [
        teste("O maior de 1 e 3 é 3.", () => maiorDosDois            (1, 3), igual(3)),
        teste("O maior de 5 e 3 é 5.", () => maiorDosDois            (5, 3), igual(5)),
        teste("O maior de 1 e 3 é 3.", () => maiorDosDoisSimplificado(1, 3), igual(3)),
        teste("O maior de 5 e 3 é 5.", () => maiorDosDoisSimplificado(5, 3), igual(5)),
    ]);

    grupo("Exercício 0", "JSON com a identificação do(a)(s) aluno(a)(s)", false, -10, 0, () => {
        function validarJsonAlunos() {
            const alunos = dadosDosAlunos(), nomes = [], ras = [];
            if (!(alunos instanceof Array)) throw new Error("Os dados do(a)(s) aluno(a)(s) deveriam estar em um array.");
            if (alunos.length === 0) throw new Error("Você(s) se esqueceu(ram) de preencher os dados com o JSON do(a)(s) aluno(a)(s).");
 
            alunos.forEach((a, i) => {
                const j = i + 1;
                const k = Object.keys(a);

                if (!a.hasOwnProperty("nome")) throw new Error(`O(a) aluno(a) ${j} está sem nome no JSON.`);
                if (!a.hasOwnProperty("ra")) throw new Error(`O(a) aluno(a) ${j} está sem RA no JSON.`);
                if (k.length !== 2) throw new Error(`O(a) aluno(a) ${j} coisas a mais além de nome e RA no JSON.`);

                if (typeof a.nome !== "string") throw new Error(`O nome do(a) aluno(a) ${j} deveria ser uma string.`);
                if (["João da Silva", "Maria da Silva", ""].indexOf(a.nome.trim()) >= 0) throw new Error(`O nome do(a) aluno(a) ${j} não está correto.`);
                if (a.nome !== a.nome.trim()) throw new Error(`Não deixe espaços em branco sobrando no começo ou no final do nome do(a) aluno(a) ${j} no JSON.`);
                if (nomes.indexOf(a.nome) >= 0) throw new Error("Há nomes repetidos no JSON.");
                nomes.push(a.nome);

                if (typeof a.ra !== "number") throw new Error(`O RA do(a) aluno(a) ${j} deveria ser um número.`);
                if (Number.isNaN(a.ra) || a.ra !== Math.floor(a.ra) || a.ra <= 0 || a.ra === 123456 || a.ra === 654321) throw new Error(`O RA do(a) aluno(a) ${j} não está correto.`);
                if (ras.indexOf(a.ra) >= 0) throw new Error("Há RAs repetidos no JSON.");
                ras.push(a.ra);
            });
            if (alunos.length > 5) throw new Error(`Vocês só podem fazer grupo de até ${numeroMaximoDeAlunos} alunos(as).`);
            return alunos;
        }

        function mostrarValidacaoJsonAlunos() {
            try {
                const alunos = validarJsonAlunos();
                alunos.forEach(a => {
                    const li = document.createElement("li");
                    li.append(a.nome);
                    document.querySelector("#alunos").append(li);
                });
                document.querySelector("#alunosAc").classList.remove("oculto");
            } catch (e) {
                const zoado = document.createElement("div");
                zoado.classList.add("gravissimo");
                zoado.innerHTML = ""
                        + "<h1>SE VOCÊ ESTÁ VENDO ISSO, É PORQUE VOCÊ NÃO DEFINIU CORRETAMENTE O JSON COM OS INTEGRANTES DO SEU GRUPO.</h1>"
                        + "<p>Arrumar isto é a primeira coisa que você tem que fazer neste AC, e assim que o fizer esta mensagem vai desaparecer.</p>"
                        + "<p>Procure a função dadosDosAlunos() no arquivo ac3.js.</p>"
                        + "<p>Quem entregar para o professor um JavaScript que faça esta mensagem aparecer, vai ficar com nota zero!</p>";
                document.body.prepend(zoado);
                document.querySelector(".nota").style.display = "none";
                throw e;
            }
        }

        return [
            teste("Listagem de alunos ok.", () => mostrarValidacaoJsonAlunos(), naoDeuErro(), undefined, ok => jsonOk = ok),
        ];
    });

    function testOk() { return jsonOk; }

    grupo("Exercício 1", "Maior dos quatro", true, 0, 0.3, () => [
        teste("O maior de 1, 3, 5, 7 é 7."     , () => maiorDosQuatro( 1,  3,  5,  7), igual( 7), testOk),
        teste("O maior de 1, 3, 5, 9 é 9."     , () => maiorDosQuatro( 1,  3,  5,  9), igual( 9), testOk),
        teste("O maior de 1, 3, 5, 0 é 5."     , () => maiorDosQuatro( 1,  3,  5,  0), igual( 5), testOk),
        teste("O maior de 10, 3, 5, 7 é 10."   , () => maiorDosQuatro(10,  3,  5,  7), igual(10), testOk),
        teste("O maior de 1, 30, 5, 7 é 30."   , () => maiorDosQuatro( 1, 30,  5,  7), igual(30), testOk),
        teste("O maior de 1, 3, 50, 7 é 50."   , () => maiorDosQuatro( 1,  3, 50,  7), igual(50), testOk),
        teste("O maior de -4, -2, -9, -3 é -2.", () => maiorDosQuatro(-4, -2, -9, -3), igual(-2), testOk),
    ]);

    grupo("Exercício 2", "Operações", true, 0, 0.5, () => [
        teste("3.5 + 4 deve voltar 7.5."                      , () => operacoesBasicas("A",  3.5, 4   ), igual(  7.5    ), testOk),
        teste("9 - 1.75 deve voltar 7.25."                    , () => operacoesBasicas("S",  9  , 1.75), igual(  7.25   ), testOk),
        teste("1.8 * 7 deve voltar 12.6."                     , () => operacoesBasicas("M",  1.8, 7   ), igual( 12.6    ), testOk),
        teste("7 / 2 deve voltar 3.5."                        , () => operacoesBasicas("D",  7  , 2   ), igual(  3.5    ), testOk),
        teste("8 elevado a 3 deve voltar 512."                , () => operacoesBasicas("P",  8  , 3   ), igual(512      ), testOk),
        teste("Divisão por zero não deve ser possível."       , () => operacoesBasicas("D", 32  , 0   ), igual(NaN      ), testOk),
        teste("Operação que não existe deve voltar undefined.", () => operacoesBasicas("Z",  1  , 2   ), igual(undefined), testOk),
        teste("Operação que não existe deve voltar undefined.", () => operacoesBasicas("d",  1  , 2   ), igual(undefined), testOk),
    ]);

    grupo("Exercício 3", "Comparador básico", true, 0, 0.5, () => {

        // Algumas classes bobas apenas para testarmos algo além dos tipos mais simples.
        class Abacaxi    {} // Sem toString aqui.
        class Laranja    {                                         toString() { return "laranja verde"; }}
        class Cliente    { constructor(nome) { this.nome = nome; } toString() { return this.nome;       }}
        class Fornecedor { constructor(nome) { this.nome = nome; } toString() { return this.nome;       }}
        class Uva        {                                         toString() { return "1";             }}

        // Criamos algumas instâncias dessas classes.
        const abcx1 = new Abacaxi(); // Temos um abacaxi aqui.
        const abcx2 = new Abacaxi(); // E um outro abacaxi aqui.
        const larnj = new Laranja();
        const uva   = new Uva();
        const rafa  = new Cliente("Rafaela");
        const pedro = new Cliente("Pedro");
        const xara  = new Cliente("Pedro");   // Homônimo do cara acima. Temos dois clientes chamados Pedro.
        const paula = new Fornecedor("Paula");
        const droga = "[E esse é um dos motivos pelo qual o == e o != são uma droga, prefira sempre o === e o !==]";

        return [
            teste("3 e 3 são estritamente iguais."                  , () => comparadorBasico(3    , 3    ), igual("Elemento 3 (number) é estritamente igual ao elemento 3 (number)."                      ), testOk),
            teste("undefined e undefined são estritamente iguais."  , () => comparadorBasico(            ), igual("Elemento undefined (undefined) é estritamente igual ao elemento undefined (undefined)."), testOk),
            teste('"ABC" e "ABC" são estritamente iguais.'          , () => comparadorBasico("ABC", "ABC"), igual("Elemento ABC (string) é estritamente igual ao elemento ABC (string)."                  ), testOk),
            teste('3 e "3" são equivalentes.'                       , () => comparadorBasico(3    , "3"  ), igual("Elemento 3 (number) é equivalente ao elemento 3 (string)."                             ), testOk),
            teste("null e undefined são equivalentes."              , () => comparadorBasico(null        ), igual("Elemento null (object) é equivalente ao elemento undefined (undefined)."               ), testOk),
            teste("1 e 2 são diferentes."                           , () => comparadorBasico(1    , 2    ), igual("Elemento 1 (number) é diferente do elemento 2 (number)."                               ), testOk),
            teste('"1" e 2 são diferentes.'                         , () => comparadorBasico(  "1", 2    ), igual("Elemento 1 (string) é diferente do elemento 2 (number)."                               ), testOk),
            teste("Array e objeto são diferentes."                  , () => comparadorBasico([]   , {}   ), igual("Elemento  (Array) é diferente do elemento [object Object] (Object)."                   ), testOk),
            teste("Abacaxi e laranja são diferentes."               , () => comparadorBasico(abcx1, larnj), igual("Elemento [object Object] (Abacaxi) é diferente do elemento laranja verde (Laranja)."   ), testOk),
            teste("Cliente e fornecedor são diferentes."            , () => comparadorBasico(pedro, paula), igual("Elemento Pedro (Cliente) é diferente do elemento Paula (Fornecedor)."                  ), testOk),
            teste("Dois clientes diferentes são diferentes."        , () => comparadorBasico(pedro, rafa ), igual("Elemento Pedro (Cliente) é diferente do elemento Rafaela (Cliente)."                   ), testOk),
            teste("Um cliente é igual a si mesmo."                  , () => comparadorBasico(pedro, pedro), igual("Elemento Pedro (Cliente) é estritamente igual ao elemento Pedro (Cliente)."            ), testOk),
            teste("Dois clientes homônimos são diferentes."         , () => comparadorBasico(pedro, xara ), igual("Elemento Pedro (Cliente) é diferente do elemento Pedro (Cliente)."                     ), testOk),
            teste("Dois abacaxis são diferentes."                   , () => comparadorBasico(abcx1, abcx2), igual("Elemento [object Object] (Abacaxi) é diferente do elemento [object Object] (Abacaxi)." ), testOk),
            teste("true e false são diferentes."                    , () => comparadorBasico(true , false), igual("Elemento true (boolean) é diferente do elemento false (boolean)."                      ), testOk),
            teste("true e 1 são equivalentes."                      , () => comparadorBasico(true , 1    ), igual("Elemento true (boolean) é equivalente ao elemento 1 (number)."                         ), testOk),
            teste("true e 1 são equivalentes."                      , () => comparadorBasico(true , "1"  ), igual("Elemento true (boolean) é equivalente ao elemento 1 (string)."                         ), testOk),
            teste("false e 0 são equivalentes."                     , () => comparadorBasico(false, 0    ), igual("Elemento false (boolean) é equivalente ao elemento 0 (number)."                        ), testOk),
            teste("true e 2 são diferentes."                        , () => comparadorBasico(true , 2    ), igual("Elemento true (boolean) é diferente do elemento 2 (number)."                           ), testOk),

            // E eis aqui está o motivo mais forte para nunca se usar == e sempre usar ===.
            teste(`Fornecedora Paula e nome Paula são equivalentes. ${droga}`, () => comparadorBasico(paula, "Paula"), igual("Elemento Paula (Fornecedor) é equivalente ao elemento Paula (string)."), testOk),
            teste(`Uva e true são equivalentes. ${droga}`                    , () => comparadorBasico(uva  ,   true ), igual("Elemento 1 (Uva) é equivalente ao elemento true (boolean)."           ), testOk),
        ];
    });

    grupo("Exercício 4", "Primeiro nome", true, 0, 0.4, () => [
        teste("Yuri Dirickson deve retornar Yuri.", () => primeiroNome("Yuri Dirickson"), igual("Yuri"  ), testOk),
        teste("Marina Silva deve retornar Marina.", () => primeiroNome("Marina Silva"  ), igual("Marina"), testOk),
        teste("Tatá Wernerck deve retornar Tatá." , () => primeiroNome("Tatá"          ), igual("Tatá"  ), testOk),
        teste("Robson deve retornar Robson."      , () => primeiroNome("Robson"        ), igual("Robson"), testOk),
        teste("Victor deve retornar Victor."      , () => primeiroNome("Victor"        ), igual("Victor"), testOk),
    ]);

    grupo("Exercício 5", "Nome abreviado", true, 0, 0.3, () => [
        teste("Yuri Dirickson deve retornar Yuri D.", () => abreviadorNomes("Yuri Dirickson"), igual("Yuri D."  ), testOk),
        teste("Marina Silva deve retornar Marina S.", () => abreviadorNomes("Marina Silva"  ), igual("Marina S."), testOk),
        teste("Tatá Wernerck deve retornar Tatá W." , () => abreviadorNomes("Tatá Wernerck" ), igual("Tatá W."  ), testOk),
        teste("Robson deve retornar Robson."        , () => abreviadorNomes("Robson"        ), igual("Robson"   ), testOk),
        teste("Victor deve retornar Victor."        , () => abreviadorNomes("Victor"        ), igual("Victor"   ), testOk),
    ]);

    grupo("Exercício 6", "Datas", true, 0, 0.6, () => {
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
        };
        const testes = [];
        for (const chave in datas) {
            const valor = datas[chave];
            testes.push(teste(`Data ${chave} deve devolver ${valor}.`, () => converteDataParaFormaCompleta(chave), igual(valor), testOk));
        }
        return testes;
    });

    grupo("Exercício 7", "Somar pares", true, 0, 0.5, () => [
        teste("1 e 4 deve devolver 6."  , () => somadorPares(1,  4), igual( 6), testOk),
        teste("2 e 9 deve devolver 20." , () => somadorPares(2,  9), igual(20), testOk),
        teste("2 e 10 deve devolver 30.", () => somadorPares(2, 10), igual(30), testOk),
        teste("1 e 10 deve devolver 30.", () => somadorPares(1, 10), igual(30), testOk),
        teste("2 e 11 deve devolver 30.", () => somadorPares(2, 11), igual(30), testOk),
        teste("1 e 11 deve devolver 30.", () => somadorPares(1, 11), igual(30), testOk),
        teste("2 e 12 deve devolver 42.", () => somadorPares(2, 12), igual(42), testOk),
        teste("1 e 3 deve devolver 2."  , () => somadorPares(1,  3), igual( 2), testOk),
        teste("8 e 8 deve devolver 8."  , () => somadorPares(8,  8), igual( 8), testOk),
        teste("3 e 3 deve devolver 0."  , () => somadorPares(3,  3), igual( 0), testOk),
    ]);

    grupo("Exercício 8", "Achar o menor", true, 0, 0.3, () => [
        teste("Se o vetor estiver vazio, devolve undefined."  , () => acharMenor([                            ]), igual(undefined), testOk),
        teste("Para [42] retorna 42."                         , () => acharMenor([                          42]), igual(       42), testOk),
        teste("Para [1, 2, 3, 4, 5] retorna 1."               , () => acharMenor([         1,   2,  3,   4,  5]), igual(        1), testOk),
        teste("Para [1, 2, 3, 4, 0] retorna 0."               , () => acharMenor([         1,   2,  3,   4,  0]), igual(        0), testOk),
        teste("Para [1, 2, -3, 4, 0] retorna -3."             , () => acharMenor([         1,   2, -3,   4,  0]), igual(       -3), testOk),
        teste("Para [42, 12, 21] retorna 12."                 , () => acharMenor([                 42,  12, 21]), igual(       12), testOk),
        teste("Para [42, 12, 21, -27, 8, -22, 9] retorna -27.", () => acharMenor([42, 12, 21, -27,  8, -22,  9]), igual(      -27), testOk),
    ]);

    grupo("Exercício 9", "Achar os pares", true, 0, 0.5, () => [
        teste("Se o vetor estiver vazio, devolve um vetor vazio.", () => acharPares([               ]), igual([           ]), testOk),
        teste("Para [1, 3, 5, 7, 9] retorna vazio."              , () => acharPares([1, 3,  5,  7, 9]), igual([           ]), testOk),
        teste("Para [1, 2, 3, 4, 5] retorna [2, 4]."             , () => acharPares([1, 2,  3,  4, 5]), igual([   2,  4   ]), testOk),
        teste("Para [1, 2, 3, 4, 0] retorna [2, 4, 0]."          , () => acharPares([1, 2,  3,  4, 0]), igual([   2,  4, 0]), testOk),
        teste("Para [1, 2, 3, -4, 0] retorna [2, -4, 0]."        , () => acharPares([1, 2,  3, -4, 0]), igual([   2, -4, 0]), testOk),
        teste("Para [6, 2, -3, -4, 0] retorna [6, 2, -4, 0]."    , () => acharPares([6, 2, -3, -4, 0]), igual([6, 2, -4, 0]), testOk),
    ]);

    grupo("Exercício 10", "IMC", true, 0, 0.6, () => [
        teste('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.'                           , () => calcularImc({ "peso":  50    , "altura": 1.7  }), igual("Abaixo do peso"              ), testOk),
        teste('Deve devolver "Normal" para IMC a partir de 18,5 e abaixo de 25.'                  , () => calcularImc({ "peso":  60    , "altura": 1.7  }), igual("Normal"                      ), testOk),
        teste('Deve devolver "Excesso de peso" para IMC a partir de 25 e abaixo de 30.'           , () => calcularImc({ "peso":  72.25 , "altura": 1.7  }), igual("Excesso de peso"             ), testOk),
        teste('Deve devolver "Obesidade leve (Grau I)" para IMC a partir de 30 e abaixo de 35.'   , () => calcularImc({ "peso":  86.7  , "altura": 1.7  }), igual("Obesidade leve (Grau I)"     ), testOk),
        teste('Deve devolver "Obesidade severa (Grau II)" para IMC a partir de 35 e abaixo de 40.', () => calcularImc({ "peso": 101.15 , "altura": 1.7  }), igual("Obesidade severa (Grau II)"  ), testOk),
        teste('Deve devolver "Obesidade mórbida (Grau III)" para IMC a parte de 40.'              , () => calcularImc({ "peso": 160    , "altura": 1.7  }), igual("Obesidade mórbida (Grau III)"), testOk),

        teste('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.'                           , () => calcularImc({ "peso":   0    , "altura": 2.0  }), igual("Abaixo do peso"              ), testOk),
        teste('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.'                           , () => calcularImc({ "peso":  73.999, "altura": 2.0  }), igual("Abaixo do peso"              ), testOk),
        teste('Deve devolver "Normal" para IMC a partir de 18,5 e abaixo de 25.'                  , () => calcularImc({ "peso":  74    , "altura": 2.0  }), igual("Normal"                      ), testOk),
        teste('Deve devolver "Normal" para IMC a partir de 18,5 e abaixo de 25.'                  , () => calcularImc({ "peso":  99.999, "altura": 2.0  }), igual("Normal"                      ), testOk),
        teste('Deve devolver "Excesso de peso" para IMC a partir de 25 e abaixo de 30.'           , () => calcularImc({ "peso": 100    , "altura": 2.0  }), igual("Excesso de peso"             ), testOk),
        teste('Deve devolver "Excesso de peso" para IMC a partir de 25 e abaixo de 30.'           , () => calcularImc({ "peso": 119.999, "altura": 2.0  }), igual("Excesso de peso"             ), testOk),
        teste('Deve devolver "Obesidade leve (Grau I)" para IMC a partir de 30 e abaixo de 35.'   , () => calcularImc({ "peso": 120    , "altura": 2.0  }), igual("Obesidade leve (Grau I)"     ), testOk),
        teste('Deve devolver "Obesidade leve (Grau I)" para IMC a partir de 30 e abaixo de 35.'   , () => calcularImc({ "peso": 139.999, "altura": 2.0  }), igual("Obesidade leve (Grau I)"     ), testOk),
        teste('Deve devolver "Obesidade severa (Grau II)" para IMC a partir de 35 e abaixo de 40.', () => calcularImc({ "peso": 140    , "altura": 2.0  }), igual("Obesidade severa (Grau II)"  ), testOk),
        teste('Deve devolver "Obesidade severa (Grau II)" para IMC a partir de 35 e abaixo de 40.', () => calcularImc({ "peso": 159.999, "altura": 2.0  }), igual("Obesidade severa (Grau II)"  ), testOk),
        teste('Deve devolver "Obesidade mórbida (Grau III)" para IMC a parte de 40.'              , () => calcularImc({ "peso": 160    , "altura": 2.0  }), igual("Obesidade mórbida (Grau III)"), testOk),
        teste('Deve devolver "Obesidade mórbida (Grau III)" para IMC a parte de 40.'              , () => calcularImc({ "peso": 9999999, "altura": 2.0  }), igual("Obesidade mórbida (Grau III)"), testOk),

        teste('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.'                           , () => calcularImc({ "peso":   0    , "altura": 0.5  }), igual("Abaixo do peso"              ), testOk),
        teste('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.'                           , () => calcularImc({ "peso":   4.624, "altura": 0.5  }), igual("Abaixo do peso"              ), testOk),
        teste('Deve devolver "Normal" para IMC a partir de 18,5 e abaixo de 25.'                  , () => calcularImc({ "peso":   4.625, "altura": 0.5  }), igual("Normal"                      ), testOk),
        teste('Deve devolver "Normal" para IMC a partir de 18,5 e abaixo de 25.'                  , () => calcularImc({ "peso":   6.249, "altura": 0.5  }), igual("Normal"                      ), testOk),
        teste('Deve devolver "Excesso de peso" para IMC a partir de 25 e abaixo de 30.'           , () => calcularImc({ "peso":   6.25 , "altura": 0.5  }), igual("Excesso de peso"             ), testOk),
        teste('Deve devolver "Excesso de peso" para IMC a partir de 25 e abaixo de 30.'           , () => calcularImc({ "peso":   7.499, "altura": 0.5  }), igual("Excesso de peso"             ), testOk),
        teste('Deve devolver "Obesidade leve (Grau I)" para IMC a partir de 30 e abaixo de 35.'   , () => calcularImc({ "peso":   7.5  , "altura": 0.5  }), igual("Obesidade leve (Grau I)"     ), testOk),
        teste('Deve devolver "Obesidade leve (Grau I)" para IMC a partir de 30 e abaixo de 35.'   , () => calcularImc({ "peso":   8.749, "altura": 0.5  }), igual("Obesidade leve (Grau I)"     ), testOk),
        teste('Deve devolver "Obesidade severa (Grau II)" para IMC a partir de 35 e abaixo de 40.', () => calcularImc({ "peso":   8.75 , "altura": 0.5  }), igual("Obesidade severa (Grau II)"  ), testOk),
        teste('Deve devolver "Obesidade severa (Grau II)" para IMC a partir de 35 e abaixo de 40.', () => calcularImc({ "peso":   9.999, "altura": 0.5  }), igual("Obesidade severa (Grau II)"  ), testOk),
        teste('Deve devolver "Obesidade mórbida (Grau III)" para IMC a parte de 40.'              , () => calcularImc({ "peso":  10    , "altura": 0.5  }), igual("Obesidade mórbida (Grau III)"), testOk),
        teste('Deve devolver "Obesidade mórbida (Grau III)" para IMC a parte de 40.'              , () => calcularImc({ "peso": 9999999, "altura": 0.5  }), igual("Obesidade mórbida (Grau III)"), testOk),

        teste('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.'                           , () => calcularImc({ "peso": 100    , "altura": 9999 }), igual("Abaixo do peso"              ), testOk),
        teste('Deve devolver "Abaixo do peso" para IMC abaixo de 18,5.'                           , () => calcularImc({ "peso": 100    , "altura": 2.33 }), igual("Abaixo do peso"              ), testOk),
        teste('Deve devolver "Normal" para IMC a partir de 18,5 e abaixo de 25.'                  , () => calcularImc({ "peso": 100    , "altura": 2.32 }), igual("Normal"                      ), testOk),
        teste('Deve devolver "Normal" para IMC a partir de 18,5 e abaixo de 25.'                  , () => calcularImc({ "peso": 100    , "altura": 2.01 }), igual("Normal"                      ), testOk),
        teste('Deve devolver "Excesso de peso" para IMC a partir de 25 e abaixo de 30.'           , () => calcularImc({ "peso": 100    , "altura": 2.0  }), igual("Excesso de peso"             ), testOk),
        teste('Deve devolver "Excesso de peso" para IMC a partir de 25 e abaixo de 30.'           , () => calcularImc({ "peso": 100    , "altura": 1.83 }), igual("Excesso de peso"             ), testOk),
        teste('Deve devolver "Obesidade leve (Grau I)" para IMC a partir de 30 e abaixo de 35.'   , () => calcularImc({ "peso": 100    , "altura": 1.82 }), igual("Obesidade leve (Grau I)"     ), testOk),
        teste('Deve devolver "Obesidade leve (Grau I)" para IMC a partir de 30 e abaixo de 35.'   , () => calcularImc({ "peso": 100    , "altura": 1.7  }), igual("Obesidade leve (Grau I)"     ), testOk),
        teste('Deve devolver "Obesidade severa (Grau II)" para IMC a partir de 35 e abaixo de 40.', () => calcularImc({ "peso": 100    , "altura": 1.69 }), igual("Obesidade severa (Grau II)"  ), testOk),
        teste('Deve devolver "Obesidade severa (Grau II)" para IMC a partir de 35 e abaixo de 40.', () => calcularImc({ "peso": 100    , "altura": 1.59 }), igual("Obesidade severa (Grau II)"  ), testOk),
        teste('Deve devolver "Obesidade mórbida (Grau III)" para IMC a parte de 40.'              , () => calcularImc({ "peso": 100    , "altura": 1.58 }), igual("Obesidade mórbida (Grau III)"), testOk),
        teste('Deve devolver "Obesidade mórbida (Grau III)" para IMC a parte de 40.'              , () => calcularImc({ "peso": 100    , "altura": 0.01 }), igual("Obesidade mórbida (Grau III)"), testOk),
    ]);

    function teste11e12Feliz(func) {
        return [
            teste('Deve devolver "Equilátero" para 5, 5 e 5.'      , eval(`() => ${func}( 5  ,   5,  5  )`), igual("Equilátero"        ), testOk),
            teste('Deve devolver "Equilátero" para 8, 8 e 8.'      , eval(`() => ${func}( 8  ,   8,  8  )`), igual("Equilátero"        ), testOk),
            teste('Deve devolver "Equilátero" para 3.3, 3.3 e 3.3.', eval(`() => ${func}( 3.3, 3.3,  3.3)`), igual("Equilátero"        ), testOk),
            teste('Deve devolver "Isósceles" para 12, 8 e 12.'     , eval(`() => ${func}(12  ,   8, 12  )`), igual("Isósceles"         ), testOk),
            teste('Deve devolver "Isósceles" para 12, 12 e 8.8.'   , eval(`() => ${func}(12  ,  12,  8.8)`), igual("Isósceles"         ), testOk),
            teste('Deve devolver "Isósceles" para 5, 13 e 13.'     , eval(`() => ${func}( 5  ,  13, 13  )`), igual("Isósceles"         ), testOk),
            teste('Deve devolver "Escaleno" para 4, 2 e 3.'        , eval(`() => ${func}( 4  ,   2,  3  )`), igual("Escaleno"          ), testOk),
            teste('Deve devolver "Escaleno" para 3, 2.5 e 1.'      , eval(`() => ${func}( 3  , 2.5,  1  )`), igual("Escaleno"          ), testOk),
            teste('Deve devolver "Escaleno" para 7.2, 2.5 e 5.1.'  , eval(`() => ${func}( 7.2, 2.5,  5.1)`), igual("Escaleno"          ), testOk),
        ];
    }

    function teste11e12Infeliz(func) {
        return [
            teste('Deve devolver "Não é um triângulo" para 7.2, 1.5 e 3.', eval(`() => ${func}( 7.2, 2.5,  3  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 1, 2 e 3.'    , eval(`() => ${func}( 1  , 2  ,  3  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 2, 2 e 4.'    , eval(`() => ${func}( 2  , 2  ,  4  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 2, 5 e 1.'    , eval(`() => ${func}( 2  , 5  ,  1  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 2, 2 e 0.'    , eval(`() => ${func}( 2  , 2  ,  0  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 0, 2 e 1.'    , eval(`() => ${func}( 0  , 2  ,  1  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 0, 2 e 0.'    , eval(`() => ${func}( 0  , 2  ,  0  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 0, 0 e 0.'    , eval(`() => ${func}( 0  , 0  ,  0  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 2, 2 e -1.'   , eval(`() => ${func}( 2  , 2  , -1  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para 2, -2 e 5.'   , eval(`() => ${func}( 2  ,-2  ,  5  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para -7, 8 e 2.'   , eval(`() => ${func}(-7  , 8  ,  2  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para -5, -5 e -5.' , eval(`() => ${func}(-5  ,-5  , -5  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para -5, -5 e 4.'  , eval(`() => ${func}(-5  ,-5  ,  4  )`), igual("Não é um triângulo"), testOk),
            teste('Deve devolver "Não é um triângulo" para -3, -4 e 5.'  , eval(`() => ${func}(-3  ,-4  , -5  )`), igual("Não é um triângulo"), testOk),
        ];
    }

    grupo("Exercício 11 - parte 1 (caso feliz - é um triângulo)"   , "Tipo de triângulo", true, 0, 0.4, () => teste11e12Feliz  ("tipoTriangulo"));
    grupo("Exercício 11 - parte 2 (caso infeliz - não é triângulo)", "Tipo de triângulo", true, 0, 0.4, () => teste11e12Infeliz("tipoTriangulo"));

    function informarLados(a, b, c) {
        document.querySelector("#ladoA").value = "" + a;
        document.querySelector("#ladoB").value = "" + b;
        document.querySelector("#ladoC").value = "" + c;
        let resultado = "", crash = null;
        const bt = document.querySelector("#botaoTriangulo"), oldClick = bt.onclick;
        bt.onclick = function() {
            try {
                oldClick();
                resultado = document.querySelector("#tipoTriangulo").value;
            } catch (e) {
                crash = e;
            }
        };
        bt.click();
        bt.onclick = oldClick;
        limparForm12();
        if (crash) throw crash;
        return resultado;
    }

    function testeTrianguloMuitoInfeliz() {
        return [
            teste('Deve devolver "Informe os números corretamente." para entrada com letras no A.', () => informarLados("a",   5,   5), igual("Informe os números corretamente."), testOk),
            teste('Deve devolver "Informe os números corretamente." para entrada com letras no B.', () => informarLados(  5, "b",   5), igual("Informe os números corretamente."), testOk),
            teste('Deve devolver "Informe os números corretamente." para entrada com letras no C.', () => informarLados(  5,   5, "c"), igual("Informe os números corretamente."), testOk),
            teste('Deve devolver "Informe os números corretamente." para entrada vazia no A.'     , () => informarLados( "",   5,   5), igual("Informe os números corretamente."), testOk),
            teste('Deve devolver "Informe os números corretamente." para entrada vazia no B.'     , () => informarLados(  5,  "",   5), igual("Informe os números corretamente."), testOk),
            teste('Deve devolver "Informe os números corretamente." para entrada vazia no C.'     , () => informarLados(  5,   5,  ""), igual("Informe os números corretamente."), testOk),
            teste(
                'Deve devolver "Informe os números corretamente." para entrada com palavras.',
                () => informarLados("Willy Wonka - Rachadinha de chocolate com laranja", "Tonho da Lua - Senhor dos exércitos de robôs", "Dudu Bananinha - Sheik chapeiro"),
                igual("Informe os números corretamente."),
                testOk
            ),
        ];
    }

    grupo("Exercício 12 - parte 1 (caso feliz - é um triângulo)"          , "Tipo de triângulo no formulário", true, 0, 0.3, () => teste11e12Feliz  ("informarLados"));
    grupo("Exercício 12 - parte 2 (caso infeliz - não é triângulo)"       , "Tipo de triângulo no formulário", true, 0, 0.3, () => teste11e12Infeliz("informarLados"));
    grupo("Exercício 12 - parte 3 (caso muito infeliz - entrada inválida)", "Tipo de triângulo no formulário", true, 0, 0.3, testeTrianguloMuitoInfeliz              );

    const alunosMatriculasValidos = [
        {
            "criar": () => new AlunoMatricula("Maria Luiza", "F", "Desenvolvimento Web", Object.freeze([8, 7, 9, 4.5, 8]), 9, 0, 84),
            "json": '{"_nome":"Maria Luiza","_genero":"F","_disciplina":"Desenvolvimento Web","_acs":[8,7,9,4.5,8],"_prova":9,"_sub":0,"_presenca":84}',
            "status": "Maria Luiza tem média 8.5 na disciplina de Desenvolvimento Web e foi aprovada com 84% de presença.",
            "funciona": false, media: 8.5, situacao: "AP", situacaoPorExtenso: "aprovada",
        },
        {
            "criar": () => new AlunoMatricula("Anderson", "M", "LP 2", Object.freeze([3.4, 5.0, 2.0, 4.8, 0]), 1.8, 2.9, 80),
            "json": '{"_nome":"Anderson","_genero":"M","_disciplina":"LP 2","_acs":[3.4,5,2,4.8,0],"_prova":1.8,"_sub":2.9,"_presenca":80}',
            "status": "Anderson tem média 3.5 na disciplina de LP 2 e foi reprovado por média com 80% de presença.",
            "funciona": false, media: 3.5, situacao: "RM", situacaoPorExtenso: "reprovado por média",
        },
        {
            "criar": () => new AlunoMatricula("Chiquinha", "F", "Química Orgânica III", Object.freeze([9, 8, 7, 6, 5]), 4, 3, 21),
            "json": '{"_nome":"Chiquinha","_genero":"F","_disciplina":"Química Orgânica III","_acs":[9,8,7,6,5],"_prova":4,"_sub":3,"_presenca":21}',
            "status": "Chiquinha tem média 6 na disciplina de Química Orgânica III e foi reprovada por falta com 21% de presença.",
            "funciona": false, media: 6, situacao: "RF", situacaoPorExtenso: "reprovada por falta",
        },
        {
            "criar": () => new AlunoMatricula("Bozoliro", "M", "presidência, governo e chefe de estado", Object.freeze([1, 2.5, 0, 1, 1.5]), 2.2, 0, 17),
            "json": '{"_nome":"Bozoliro","_genero":"M","_disciplina":"presidência, governo e chefe de estado","_acs":[1,2.5,0,1,1.5],"_prova":2.2,"_sub":0,"_presenca":17}',
            "status": "Bozoliro tem média 2 na disciplina de presidência, governo e chefe de estado e foi reprovado por média e falta com 17% de presença.",
            "funciona": false, media: 2, situacao: "RMF", situacaoPorExtenso: "reprovado por média e falta",
        },
        {
            "criar": () => new AlunoMatricula("Molusco da Silva", "M", "presidência, governo e chefe de estado", Object.freeze([8.5, 9, 7, 8.5, 10]), 10, 0, 88),
            "json": '{"_nome":"Molusco da Silva","_genero":"M","_disciplina":"presidência, governo e chefe de estado","_acs":[8.5,9,7,8.5,10],"_prova":10,"_sub":0,"_presenca":88}',
            "status": "Molusco da Silva tem média 9.5 na disciplina de presidência, governo e chefe de estado e foi aprovado com 88% de presença.",
            "funciona": false, media: 9.5, situacao: "AP", situacaoPorExtenso: "aprovado",
        },
        {
            "criar": () => new AlunoMatricula("Bruxa do 71", "F", "atriz de novela mexicana", Object.freeze([0.71, 0.71, 0.71, 0.71, 0.71]), 0, 0.71, 71),
            "json": '{"_nome":"Bruxa do 71","_genero":"F","_disciplina":"atriz de novela mexicana","_acs":[0.71,0.71,0.71,0.71,0.71],"_prova":0,"_sub":0.71,"_presenca":71}',
            "status": "Bruxa do 71 tem média 0.5 na disciplina de atriz de novela mexicana e foi reprovada por média e falta com 71% de presença.",
            "funciona": false, media: 0.5, situacao: "RMF", situacaoPorExtenso: "reprovada por média e falta",
        },
        {
            "criar": () => new AlunoMatricula("Chuck Norris", "M", "Ator", Object.freeze([10, 10, 10, 10, 10]), 10, 10, 100),
            "json": '{"_nome":"Chuck Norris","_genero":"M","_disciplina":"Ator","_acs":[10,10,10,10,10],"_prova":10,"_sub":10,"_presenca":100}',
            "status": "Chuck Norris tem média 10 na disciplina de Ator e foi aprovado com 100% de presença.",
            "funciona": false, media: 10, situacao: "AP", situacaoPorExtenso: "aprovado",
        },
        {
            "criar": () => new AlunoMatricula("Dollynho", "M", "Seu amiguinho", Object.freeze([10, 10, 10, 10, 10]), 10, 10, 0),
            "json": '{"_nome":"Dollynho","_genero":"M","_disciplina":"Seu amiguinho","_acs":[10,10,10,10,10],"_prova":10,"_sub":10,"_presenca":0}',
            "status": "Dollynho tem média 10 na disciplina de Seu amiguinho e foi reprovado por falta com 0% de presença.",
            "funciona": false, media: 10, situacao: "RF", situacaoPorExtenso: "reprovado por falta",
        },
        {
            "criar": () => new AlunoMatricula("Dollynha", "F", "Sua amiguinha", Object.freeze([0, 0, 0, 0, 0]), 0, 0, 100),
            "json": '{"_nome":"Dollynha","_genero":"F","_disciplina":"Sua amiguinha","_acs":[0,0,0,0,0],"_prova":0,"_sub":0,"_presenca":100}',
            "status": "Dollynha tem média 0 na disciplina de Sua amiguinha e foi reprovada por média com 100% de presença.",
            "funciona": false, media: 0, situacao: "RM", situacaoPorExtenso: "reprovada por média",
        },
        {
            "criar": () => new AlunoMatricula("Zerinho", "M", "fazer algo útil", Object.freeze([0, 0, 0, 0, 0]), 0, 0, 0),
            "json": '{"_nome":"Zerinho","_genero":"M","_disciplina":"fazer algo útil","_acs":[0,0,0,0,0],"_prova":0,"_sub":0,"_presenca":0}',
            "status": "Zerinho tem média 0 na disciplina de fazer algo útil e foi reprovado por média e falta com 0% de presença.",
            "funciona": false, media: 0, situacao: "RMF", situacaoPorExtenso: "reprovado por média e falta",
        },
    ];

    Array.prototype.map = function(inner) {
        const mapped = [];
        this.forEach((e, i) => mapped.push(inner(e, i)));
        return mapped;
    };

    grupo("Exercício 13", "Construtor da classe AlunoMatricula", true, 0, 0.4, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir instanciar um aluno nome corretamente [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString() + ".toString()"),
                igual(aluno.json),
                testOk,
                ok => aluno.funciona = ok
            )
        )
    );

    grupo("Exercício 14 - parte 1 (getter nome)", "Getter nome da classe AlunoMatricula", true, 0, 0.2, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir obter o nome do(a) aluno(a) de uma instância de AlunoMatricula corretamente [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString() + ".nome"),
                igual(JSON.parse(aluno.json)._nome),
                () => jsonOk && aluno.funciona
            )
        )
    );

    grupo("Exercício 14 - parte 2 (getter genero)", "Getter genero da classe AlunoMatricula", true, 0, 0.2, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir obter o gênero de uma instância de AlunoMatricula corretamente [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString() + ".genero"),
                igual(JSON.parse(aluno.json)._genero),
                () => jsonOk && aluno.funciona
            )
        )
    );

    grupo("Exercício 14 - parte 3 (getter disciplina)", "Getter disciplina da classe AlunoMatricula", true, 0, 0.2, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir obter o nome da disciplina de uma instância de AlunoMatricula corretamente [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString() + ".disciplina"),
                igual(JSON.parse(aluno.json)._disciplina),
                () => jsonOk && aluno.funciona
            )
        )
    );

    grupo("Exercício 15", "Média na classe AlunoMatricula", true, 0, 0.4, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir obter a média de uma instância de AlunoMatricula corretamente [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString() + ".media"),
                igual(aluno.media),
                () => jsonOk && aluno.funciona
            )
        )
    );

    grupo("Exercício 16", "Situação na classe AlunoMatricula", true, 0, 0.3, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir obter a situação de uma instância de AlunoMatricula corretamente [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString() + ".situacao"),
                igual(aluno.situacao),
                () => jsonOk && aluno.funciona
            )
        )
    );

    grupo("Exercício 17", "Situação por extenso na classe AlunoMatricula", true, 0, 0.3, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir obter a situação por extenso de uma instância de AlunoMatricula corretamente [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString() + ".situacaoPorExtenso"),
                igual(aluno.situacaoPorExtenso),
                () => jsonOk && aluno.funciona
            )
        )
    );

    grupo("Exercício 18", "Status na classe AlunoMatricula", true, 0, 0.3, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir obter o status de uma instância de AlunoMatricula corretamente [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString() + ".status"),
                igual(aluno.status),
                () => jsonOk && aluno.funciona
            )
        )
    );

    function informarDados(nome, genero, disciplina, acs, prova, sub, presenca) {
        document.querySelector("#nome").value = nome;
        if (genero === "M") document.querySelector("#ele").checked = true;
        if (genero === "F") document.querySelector("#ela").checked = true;
        document.querySelector("#disciplina").value = disciplina;
        acs.forEach((e, i) => document.querySelector("#ac" + (i + 1)).value = "" + e);
        document.querySelector("#prova").value = "" + prova;
        document.querySelector("#sub").value = "" + sub;
        document.querySelector("#presenca").value = "" + presenca;
        let resultado = "", crash = null;
        const bt = document.querySelector("#botaoCadastrar"), oldClick = bt.onclick;
        bt.onclick = function() {
            try {
                oldClick();
                resultado = document.querySelector("#notas :last-child").innerHTML;
            } catch (e) {
                crash = e;
            }
        };
        bt.click();
        bt.onclick = oldClick;
        limparForm19();
        limparListasForm19();
        if (crash) throw crash;
        return resultado;
    }

    grupo("Exercício 19 - parte 1 (caminho feliz - entrada válida)", "Formulário com AlunoMatricula", true, 0, 0.7, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve conseguir preencher uma instância de AlunoMatricula corretamente no formulário [${JSON.parse(aluno.json)._nome}].`,
                eval(aluno.criar.toString().replace("new AlunoMatricula", "informarDados")),
                igual(aluno.status),
                () => jsonOk && aluno.funciona
            )
        )
    );

    const alunosMatriculasInvalidos = [
        {
            "criar": '() => informarDados("Teste", "X", "Desenvolvimento Web", [8, 7, 9, 4.5, 8], 9, 0, 84)',
            "erro": "Escolha o gênero do(a) aluno(a) corretamente.",
            "causa": "nenhum gênero escolhido",
        }
    ];

    ["", "   "].forEach(lixo => {
        alunosMatriculasInvalidos.push({
            "criar": `() => informarDados("${lixo}", "M", "Desenvolvimento Web", Object.freeze([8, 7, 9, 4.5, 8]), 9, 0, 84)`,
            "erro": "Informe o nome do(a) aluno(a) corretamente.",
            "causa": `o nome inválido "${lixo}"`,
        });
        alunosMatriculasInvalidos.push({
            "criar": `() => informarDados("Teste", "F", "${lixo}", Object.freeze([8, 7, 9, 4.5, 8]), 9, 0, 84)`,
            "erro": "Informe o nome da disciplina corretamente.",
            "causa": `a disciplina inválida "${lixo}"`,
        });
    });
    ["", "   ", "-1", "-", "abc", "5.678", "11", "10.01", "5.", ".4", ".", "3.4.5"].forEach(lixo => {
        [0, 1, 2, 3, 4].forEach(j => {
            const arr = [8, 7, 9, 4.5, 8];
            arr[j] = lixo;
            alunosMatriculasInvalidos.push({
                "criar": `() => informarDados("Teste", "F", "Teste", Object.freeze(${JSON.stringify(arr)}), 9, 0, 84)`,
                "erro": `Informe a nota do AC ${j + 1} corretamente, entre 0 e 10, com até duas casas decimais.`,
                "causa": `o valor inválido "${lixo}" para o AC ${j + 1}`,
            });
        });
        alunosMatriculasInvalidos.push({
            "criar": `() => informarDados("Teste", "F", "Teste", Object.freeze([8, 7, 9, 4.5, 8]), "${lixo}", 0, 84)`,
            "erro": "Informe a nota da prova corretamente, entre 0 e 10, com até duas casas decimais.",
            "causa": `o valor inválido "${lixo}" para a prova`,
        });
        alunosMatriculasInvalidos.push({
            "criar": `() => informarDados("Teste", "F", "Teste", Object.freeze([8, 7, 9, 4.5, 8]), 9, "${lixo}", 84)`,
            "erro": "Informe a nota da sub corretamente, entre 0 e 10, com até duas casas decimais.",
            "causa": `o valor inválido "${lixo}" para a sub`,
        });
    });
    ["", "   ", "-1", "-", "abc", "5.6", "101", "5.", ".4", "."].forEach(lixo => {
        alunosMatriculasInvalidos.push({
            "criar": `() => informarDados("Teste", "F", "Desenvolvimento Web", Object.freeze([8, 7, 9, 4.5, 8]), 9, 0, "${lixo}")`,
            "erro": "Informe a presença corretamente, deve ser um inteiro entre 0 e 100.",
            "causa": `o valor inválido "${lixo}" para a presença`,
        });
    });

    grupo("Exercício 19 - parte 2 (caminho infeliz - entrada inválida)", "Formulário com AlunoMatricula", true, 0, 0.6, () =>
        alunosMatriculasInvalidos.map((aluno, i) =>
            teste(
                `Não deve conseguir preencher uma instância de AlunoMatricula com ${aluno.causa} [${i + 1}].`,
                eval(aluno.criar),
                igual(aluno.erro),
                testOk
            )
        )
    );

    let alunosMatriculasValidos2 = [];

    ["10.00", "10.0", "0.0", "0.00"].forEach(nota => {
        [0, 1, 2, 3, 4].forEach(j => {
            const arr = ["10", "10", "10", "10", "10"];
            arr[j] = nota;
            alunosMatriculasValidos2.push({
                "criar": () => informarDados("Teste", "F", "Teste", arr, "10", "10", 84),
                "campo": "AC " + (j + 1), "valor": nota,
            });
        });
        alunosMatriculasValidos2.push({
            "criar": () => informarDados("Teste", "F", "Teste", ["10", "10", "10", "10", "10"], nota, "10", 84),
            "campo": "prova", "valor": nota,
        });
        alunosMatriculasValidos2.push({
            "criar": () => informarDados("Teste", "F", "Teste", ["10", "10", "10", "10", "10"], "10", nota, 84),
            "campo": "sub", "valor": nota,
        });
    });

    grupo("Exercício 19 - parte 3 (caminho feliz - casos especiais)", "Formulário com AlunoMatricula", true, 0, 0.1, () =>
        alunosMatriculasValidos2.map((aluno, i) =>
            teste(
                `Deve aceitar o valor ${aluno.valor} no campo ${aluno.campo}.`,
                aluno.criar,
                igual("Teste tem média 10 na disciplina de Teste e foi aprovada com 84% de presença."),
                testOk
            )
        )
    );

    function testarEfeitosColaterais(prepararCoisa) {
        const coisa = eval(prepararCoisa);
        const campos = ["toString", "nome", "genero", "disciplina", "media", "situacao", "situacaoPorExtenso", "status"];
        const valores1 = {};
        for (const c in campos) {
            valores1[campos[c]] = coisa[campos[c]];
        }
        const valores2 = {};
        for (const c in campos) {
            valores2[campos[c]] = coisa[campos[c]];
        }
        for (const c in campos) {
            const v1 = escapeHtml(valores1[campos[c]]);
            const v2 = escapeHtml(valores2[campos[c]]);
            if (v1 !== v2) {
                throw new ErroFormatado(`O campo ${c} tinha o valor <span class="esperado">${v1}</span> que subitamente mudou para <span class="obtido">${v2}</span>.`);
            }
        }
        return true;
    }

    grupo("Exercícios 13 a 19 - testar efeitos colaterais indesejados", "Getters não devem causar efeitos colaterais", true, 0, 0.1, () =>
        alunosMatriculasValidos.map(aluno =>
            teste(
                `Deve se certificar que chamar os getters de AlunoMatricula não causa efeitos colaterais estranhos [${JSON.parse(aluno.json)._nome}].`,
                testarEfeitosColaterais(`${aluno.criar.toString()}`),
                igual(true),
                () => jsonOk && aluno.funciona
            )
        )
    );

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
            "Eu vou entregar por meio do One Drive.",
            "Eu vou entregar por meio do Google Drive.",
            "Eu vou entregar por e-mail.",
            "Eu vou entregar um CD com o código para o professor.",
            "Eu vou entregar um pen-drive com o código para o professor.",
            "Eu vou entregar pelo WhatsApp.",
            "Eu vou entregar pelo Telegram.",
            "Eu vou entregar pelo MediaFire.",
            "Eu vou entregar no Classroom.",
            "Eu vou imprimir o código e entregar em papel pro professor.",
            "Eu vou tirar uma foto do código e entregar essa foto.",
            "Eu vou entregar o código em PDF.",
            "Eu vou entregar pelos correios.",
            "Eu não vou entregar nada.",
            "Eu vou entregar o arquivo ac3.js que eu alterei e nada mais.",
            "Eu vou entregar o arquivo ac3.js junto com outros arquivos.",
            "Eu vou entregar o arquivo ac3-teste.js que eu alterei.",
            "Eu vou entregar o arquivo ac3-teste.js junto com outros arquivos.",
            "Eu vou entregar o arquivo ac3-testefw.js que eu alterei.",
            "Eu vou entregar o arquivo ac3-testefw.js junto com outros arquivos.",
            "Eu vou entregar o arquivo ac3.html que eu alterei e nada mais.",
            "Eu vou entregar o arquivo ac3.html junto com outros arquivos.",
            "Eu vou entregar o arquivo ac3.css que eu alterei e nada mais.",
            "Eu vou entregar o arquivo ac3.css junto com outros arquivos.",
            "Eu vou entregar o arquivo hot-xxx-video.mp4 que eu baixei e nada mais.",
            "Eu vou entregar um arquivo RAR.",
            "Eu vou pegar uma arma, sequestrar o professor e assim ele vai ter que me dar nota.",
            "Eu vou arrumar uns quinhentos reais, mostrar a grana para o professor e perguntar se ele está a fim de negociar a nota.",
            "Eu vou xingar o professor, ameaçar processar ele e reclamar na imprensa até ele me dar a nota que eu quero.",
            "Oi, eu sou o Dollynho, seu amiguinho.",
            "Vai querer o combo ou só o lanche? Acompanha McFritas para a viagem?",
            "We don't need no validation. / "
                    + "We don't need no version control. / "
                    + "No dark sarcasm in the comments. / "
                    + "Bugs leave my code alone. / "
                    + "HEY, BUGS, LEAVE MY CODE ALONE. / "
                    + "All in all, it was just a gambi in the code. / "
                    + "All in all, it was all just gambis in the code.",
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ];

        const correto = [
            "Eu vou entregar o arquivo ac3.js que eu alterei e nada mais.",
            "Eu vou entregar por meio do Google Forms.",
        ];

        const testes = [];
        for (let i = 1; i <= 5; i++) {
            const bagunca = embaralhar([...formas]);
            testes.push(teste(`Deve achar a melhor forma de entregar [${i}].`, () => comoFazerEntrega(bagunca).sort(), igual(correto)));
        }
        return testes;
    });
})();