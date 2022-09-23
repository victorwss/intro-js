"use strict";

// Implemente as funções abaixo, conforme pede o enunciado.
// Carregue o arquivo exercicio.html para ver os resultados e a sua nota.

// EXEMPLO 1.

/**
 * Função que recebe dois números e retorna o maior deles.
 * @param {number} a O primeiro número.
 * @param {number} b O segundo número.
 * @returns {number} O resultado da operação.
 */
function maiorDosDois(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// EXEMPLO 2.

/**
 * Função que recebe dois números e retorna o maior deles.
 * @param {number} a O primeiro número.
 * @param {number} b O segundo número.
 * @returns {number} O resultado da operação.
 */
function maiorDosDoisSimplificado(a, b) {
    return a > b ? a : b;
}

// EXERCÍCIO 1.

/**
 * Função que retorna um Array contendo os nomes e os RAs dos alunos que fizeram este exercício.
 * @returns {Array} Os dados dos alunos que fizeram este exercício.
 */
function dadosDosAlunos() {
    return [
        {
            "nome": "João da Silva",
            "ra": 123456
        },
        {
            "nome": "Maria da Silva",
             "ra": 654321
        }
    ];
};

// EXERCÍCIO 2.

/**
 * Função que recebe quatro números e retorna o maior deles.
 * @param {number} a O primeiro número.
 * @param {number} b O segundo número.
 * @param {number} c O terceiro número.
 * @param {number} d O quarto número.
 * @returns {number} O resultado da operação.
 */
function maiorDosQuatro(a, b, c, d) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 3.

/**
 * Função que recebe uma operação em formato de texto e devolve o resultado desta operação com os dois números passados,
 * na ordem em que eles foram passados. (Use as funções do Math se necessário).
 *
 * As operações são identificadas da seguinte maneira:
 *  - A: Adição - Soma numero1 com numero2
 *  - S: Subtração - Subtrai numero2 do numero1
 *  - M: Multiplicação - Multiplica numero1 com numero2
 *  - D: Divisão - Divide numero1 pelo numero2
 *  - P: Potência - Eleva o numero1 pelo numero2
 *
 * Verifique onde é possível fazer a operação.
 * Nos casos em que não for definido - divisão por zero ou 0 elevado a 0, por exemplo - retornar NaN (not-a-number).
 *
 * Se a operação passada não for uma das letras acima, retornar undefined.
 * Ah, as letras sempre devem ser maiúsculas. Em caso de minúsculas (ou símbolos, ou palavras com várias letras,
 * ou qualquer outra coisa), retorne undefined também.
 *
 * @param {String} operacao A letra que identifica a operação a ser realizada.
 * @param {number} numero1 O primeiro operando.
 * @param {number} numero2 O segundo operando.
 * @returns {number} O resultado da operação.
 */
function operacoesBasicas(operacao, numero1, numero2) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 4.

/**
 * Determina o nome do tipo de um elemento.
 *
 * @param {*} elemento O elemento a ter seu tipo determinado.
 * @returns {String} O nome do tipo do elemento dado.
 */
function tipo(elemento) {
    if (elemento === null || typeof elemento !== "object") return typeof elemento;
    return elemento.constructor.name;
}

/**
 * Escreva uma função que recebe dois elementos e retorna uma mensagem dizendo se eles são estritamente iguais,
 * equivalentes ou diferentes, com o seu tipo entre parênteses logo após o valor.
 *
 * Seguem os exemplos:
 *   - comparadorBasico(2, 1): "Elemento 2 (number) é diferente do elemento 1 (number)."
 *   - comparadorBasico("ABC", "ABC"): "Elemento ABC (string) é estritamente igual ao elemento ABC (string)."
 *   - comparadorBasico("2", 2): "Elemento 2 (string) é equivalente ao elemento 2 (number)."
 *   - comparadorBasico(new Cliente(), new Fornecedor()): "Elemento [object Object] (Cliente) é diferente do elemento [object Object] (Fornecedor)."
 *
 * Dica: Use a função tipo dada logo acima desta daqui.
 *
 * @param {*} elemento1 O primeiro operando.
 * @param {*} elemento2 O segundo operando.
 * @returns {String} A mensagem com o resultado da comparação.
 */
function comparadorBasico(elemento1, elemento2) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 5.

/**
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas)
 * e devolve o primeiro nome.
 *
 * Exemplos:
 *  - Yuri Dirickson -> Yuri
 *  - João Silva -> João
 *  - Maria -> Maria
 *
 * @param {String} nomeCompleto Nome completo da pessoa.
 * @returns {String} String com o primeiro nome apenas.
 */
function primeiroNome(nomeCompleto) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 6.

/**
 * Recebe uma string com o nome completo de uma pessoa (primeiro e último nome apenas)
 * e devolve o nome com o sobrenome abreviado. Caso só o primeiro nome seja passado,
 * retorne-o da mesma forma que o recebeu.
 *
 * Exemplos:
 *  - Yuri Dirickson -> Yuri D.
 *  - João Silva -> João S.
 *  - Maria -> Maria
 *
 * @param {String} nomeCompleto Nome completo da pessoa.
 * @returns {String} String com o primeiro nome conforme dado e o segundo nome abreviado.
 */
function abreviadorNomes(nomeCompleto) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 7.

/**
 * Escreva uma função que recebe uma string com a data no formato brasileiro (dia/mês/ano) e
 * converta para o formato: 'Dia de Nome-do-Mês-por-Extenso de Ano'.
 *
 * Exemplos:
 *  - 10/11/2019 -> 10 de Novembro de 2019
 *  - 03/02/2000 -> 03 de Fevereiro de 2000
 *
 * Observação: Note a letra maiúscula do mês.
 *
 * @param {String} data String com a data no formato brasileiro (dia/mês/ano).
 * @returns {String} Data no formato 'Dia de Nome-do-Mês-por-Extenso de Ano'.
 */
function converteDataParaFormaCompleta(data) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 8.

/**
 * Escreva uma função que receba dois números inteiros positivos e devolva a soma de todos
 * os números pares entre os dois números (eles inclusive).
 * 
 * Exemplos:
 *  - 1 e 4 -> 2 + 4 = 6
 *  - 2 e 10 -> 2 + 4 + 6 + 8 + 10 = 30
 *  - 1 e 1 -> 0
 *  - 3 e 5 -> 4
 * @param {number} inicio O primeiro número.
 * @param {number} fim O segundo número.
 * @return {number} O somatório de valores pares entre os dois números, contando com eles.
 */
function somadorPares(inicio, fim) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 9.

/**
 * Recebe um vetor de números e retorna o menor elemento do vetor.
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array<number>} O vetor de números (nunca indefinido).
 * @return {number|undefined} O menor valor do vetor ou undefined se o vetor estiver vazio.
 */
function acharMenor(vetor) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 10.

/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array<number>} O vetor com números inteiros (nunca indefinido).
 * @returns {Array<number>} O vetor contendo apenas números pares do original (ou vazio se não houver nenhum).
 */
function acharPares(vetor) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 11.

/**
 * Escreva uma função que recebe um dicionário com os dados da pessoa, calule o IMC dela colocando o valor obtido
 * na propriedade IMC deste objeto e retorne uma string contendo o o estado do peso dessa pessoa.
 *
 * Fórmula do IMC:
 *    IMC = (massa em kg) / (altura em metros)²
 *
 * Tabela de estados do IMC:
 *  - Menor de 18,5 -> "Abaixo do peso"
 *  - Entre 18,5 e 24,9 -> "Normal"
 *  - Entre 25,0 e 29,9 -> "Excesso de peso"
 *  - Entre 30,0 e 34,9 -> "Obesidade leve (Grau I)"
 *  - Entre 35,0 e 39,9 -> "Obesidade severa (Grau II)"
 *  - Maior e igual a 40,0 -> "Obesidade mórbida (Grau III)"
 * 
 * @param {Object} pessoa Dicionário com dados da pessoa.
 * @param {String} pessoa.nome O nome da pessoa.
 * @param {number} pessoa.peso A massa da pessoa em kg, com uma casa decimal.
 * @param {number} pessoa.altura A altura da pessoa em metros, com duas casas decimais.
 * @returns {String} Estado do peso da pessoa.
 */
function calcularImc(pessoa) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 12.

/**
 * Escreva uma função que recebe os três lados de um triângulo e retorne qual tipo de triângulo é.
 *
 * Pode ser "equilátero", "isósceles" ou "escaleno".
 *
 * Pode ainda ser "não é um triângulo" quando um dos lados é igual ou maior que a soma dos outros dois
 * ou quando pelo menos um lado tem tamanho zero ou negativo.
 *
 * @param {number} a O tamanho do primeiro lado do triângulo.
 * @param {number} a O tamanho do segundo lado do triângulo.
 * @param {number} a O tamanho do terceiro lado do triângulo.
 * @returns {String} O tipo de triângulo resultante.
 */
function tipoTriangulo(a, b, c) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}

// EXERCÍCIO 13.
// EXERCÍCIO 14.
// EXERCÍCIO 15.
// EXERCÍCIO 16.
// EXERCÍCIO 17.
// EXERCÍCIO 18.
// EXERCÍCIO 19.

// EXERCÍCIO 20.

/**
 * Esta função recebe um array com várias opções acerca de como você deve fazer a entrega deste AC.
 *
 * Retorne um outr array que contém as duas opções corretas.
 *
 * Dica: Use o `console.log` para ver o que é recebido no array.
 *
 * @param {Array<string>} array Várias possibilidades de como fazer a entrega deste AC.
 * @returns {Array<number>} Os índices das opções corretas de entrega dentro do array de acordo com o `README.md`.
 */
function comoFazerEntrega(array) {
    throw new Error("NÃO IMPLEMENTADO AINDA.");
}