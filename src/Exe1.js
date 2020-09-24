/**
 * Função que recebe dois números e retorna o maior deles
 * @param {Number} a primeiro número.
 * @param {Number} b segundo número.
 * @returns {Number} resultado da operação.
 */
function maiorDosDois(a,b) {
    if(a > b) {
        return a
    } else {
        return b
    }
}

/**
 * Função que recebe quatro números e retorna o maior deles
 * @param {Number} a primerio número.
 * @param {Number} b segundo número.
 * @param {Number} c terceiro número.
 * @param {Number} d quarto número.
 * @returns {Number} resultado da operação.
 */
function maiorDosQuatro(a,b,c,d) { }

/**
 * Função que recebe uma operação em formato de texto e devolve o resultado desta operação com os dois números passados,
 * na ordem em que eles foram passados. (Use as funções do Math se necessário)
 * 
 * As operações são identificadas da seguinte maneira:
 *  - A: Adição - Soma numero1 com numero2
 *  - S: Subtração - Subtrai numero2 do numero1
 *  - M: Multiplicação - Multiplica numero1 com numero2
 *  - D: Divisão - Divide numero1 pelo numero2
 *  - P: Potência - Eleva o numero1 pelo numero2
 * 
 * Verifique onde é possível fazer a operação  
 * Nos casos em que não for definido - divisão por zero, por exemplo - retornar NaN (not-a-number).
 * 
 * Se a operação passada não for uma das letras acima, retornar undefined.
 * 
 * @param {String} operacao
 * @param {Number} numero1
 * @param {Number} numero2
 * @returns {Number} resultado da operação
 */
function operacoesBasicas(operacao, numero1, numero2) { }

/**
 * Escreva uma função que recebe dois elementos e retorna uma mensagem dizendo se eles são estritamente iguais,
 * equivalentes ou diferentes, com o seu tipo entre parênteses logo após o valor.
 * 
 * Seguem os exemplos:
 *   - 2 e 1: Elemento 2 (number) é diferente do elemento 1 (number)
 *   - "ABC" e "ABC": Elemento ABC (string) é estritamente igual ao elemento ABC (string)
 *   - "2" e 2: Elemento 2 (string) é equivalente ao elemento 2 (number)
 * @param {*} elemento1
 * @param {*} elemento2
 * @returns {string} mensagem com o resultado da comparação 
 */
function comparadorBasico(elemento1, elemento2) {}
