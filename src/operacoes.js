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
 *  - R: Raiz - Faz a raiz numero2 do numero1
 * 
 * Verifique onde é possível fazer a operação (cuidado com divisão por zero e raíz pares de números negativos). 
 * Nos casos em que não for definido, retornar NaN (not-a-number).
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
 * Escreva uma função que recebe um número, e duas strings de uma letra que representam, 
 * respectivamente, a temperatura, a escala original da temperatura e a escala a ser convertida
 * a temperatura. Essa função deve devolver a tempertatura convertida para a nova escala.
 * 
 * Caso seja passada alguma escala diferente de K (Kelvin), C (Celsius) ou F (Farenheit), a
 * função deve voltar null.
 * 
 * As fórmulas de conversão são:
 *  - Celsius para Kelvin: K = C + 273.15
 *  - Celsius para Farenheit: F = 1,8*C + 32
 * Exemplos: 
 *  - 25, C, F -> 77
 *  - 32, C, K -> 305.15
 *  - 200, K, F -> -99.67
 * 
 * @param {Number} temperatura a temperatura na escala_original
 * @param {String} escala_original a escala original da temperatura passada (C, K ou F)
 * @param {String} escala_convertida a escala para converter a temperatura passada (C, K ou F)
 * @return {Number} temperatura na escala pedida
 */
function converterTemperatura(temperatura, escala_original, escala_convertida){ }