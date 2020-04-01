/**
 * Recebe um vetor de números e retorna o menor elemento do vetor. 
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array} vetor 
 * @return {Number} o menor valor.
 */
function acharMenor(vetor) { 
    let menor = vetor.length ? vetor[0] : undefined;
    for(let i = 1; i < vetor.length; i++){
        if(menor > vetor[i]) menor = vetor[i]
    }
    return menor;
}

/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array} vetor com números inteiros.
 * @returns {Array} vetor contendo apenas números pares do original (ou vazio se não houver nenhum)
 */
function acharPares(vetor) {
    let resultado = []
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0) resultado.push(vetor[i])
    }
    return resultado
 }