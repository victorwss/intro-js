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

// EXERCÍCIO 0.
/**
 * Função que retorna um Array contendo os nomes e os RAs dos alunos que fizeram este exercício.
 * @returns {Array} Os dados dos alunos que fizeram este exercício.
 */
function dadosDosAlunos() {
    return [
        {
            "nome": "João da Silva",
            "ra": 6123456
        },
        {
            "nome": "Maria da Silva",
             "ra": 6654321
        }
    ];
};

// EXERCÍCIO 1.
/**
 * Função que recebe quatro números e retorna o maior deles.
 * @param {number} a O primeiro número.
 * @param {number} b O segundo número.
 * @param {number} c O terceiro número.
 * @param {number} d O quarto número.
 * @returns {number} O resultado da operação.
 */
function maiorDosQuatro(a, b, c, d) {
    naoFizIssoAinda();
}

// EXERCÍCIO 2.
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
    naoFizIssoAinda();
}

// EXERCÍCIO 3.
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
 * Dica: Use a função auxiliar determinarTipo que já foi deixada de antemão dentro da função.
 * E sim, olocar uma função dentro de outra função é normal em JavaScript.
 *
 * @param {*} elemento1 O primeiro operando.
 * @param {*} elemento2 O segundo operando.
 * @returns {String} A mensagem com o resultado da comparação.
 */
function comparadorBasico(elemento1, elemento2) {
    function determinarTipo(elemento) {
        if (elemento === null || typeof elemento !== "object") return typeof elemento;
        return elemento.constructor.name;
    }

    naoFizIssoAinda();
}

// EXERCÍCIO 4.
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
    naoFizIssoAinda();
}

// EXERCÍCIO 5.
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
    naoFizIssoAinda();
}

// EXERCÍCIO 6.
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
    naoFizIssoAinda();
}

// EXERCÍCIO 7.
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
    naoFizIssoAinda();
}

// EXERCÍCIO 8.
/**
 * Recebe um vetor de números e retorna o menor elemento do vetor.
 * Se o vetor estiver vazio, retorna undefined.
 * @param {Array<number>} vetor O vetor de números (nunca indefinido).
 * @return {number|undefined} O menor valor do vetor ou undefined se o vetor estiver vazio.
 */
function acharMenor(vetor) {
    naoFizIssoAinda();
}

// EXERCÍCIO 9.
/**
 * Recebe um vetor de números e devolve um outro vetor apenas com os números pares deste vetor.
 * Se o vetor estiver vazio, devolve um vetor vazio.
 * @param {Array<number>} O vetor com números inteiros (nunca indefinido).
 * @returns {Array<number>} O vetor contendo apenas números pares do original (ou vazio se não houver nenhum).
 */
function acharPares(vetor) {
    naoFizIssoAinda();
}

// EXERCÍCIO 10.
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
 * @param {number} pessoa.peso A massa da pessoa em kg.
 * @param {number} pessoa.altura A altura da pessoa em metros.
 * @returns {String} Estado do peso da pessoa.
 */
function calcularImc(pessoa) {
    naoFizIssoAinda();
}

// EXERCÍCIO 11.
/**
 * Escreva uma função que recebe os três lados de um triângulo e retorne qual tipo de triângulo é.
 *
 * Pode ser "Equilátero", "Isósceles" ou "Escaleno".
 *
 * Pode ainda ser "Não é um triângulo" quando um dos lados é igual ou maior que a soma dos outros dois
 * ou quando pelo menos um lado tem tamanho zero ou negativo.
 *
 * @param {number} a O tamanho do primeiro lado do triângulo.
 * @param {number} a O tamanho do segundo lado do triângulo.
 * @param {number} a O tamanho do terceiro lado do triângulo.
 * @returns {String} O tipo de triângulo resultante.
 */
function tipoTriangulo(a, b, c) {
    naoFizIssoAinda();
}

// EXERCÍCIO 12.
/**
 * No HTML, existe uma <div id="triangulo">.
 * Dentro desta <div> há três <input>s à esquerda de um <button> e um quarto <input> à direita.
 * Ao clicar neste <button>:
 * 1. Leia os valores dos primeiros três <input>s.
 * 2. Converta os valores lidos para valores numéricos (use a função interna lerNumero que já está aí).
 * 3. Utilize a função tipoTriangulo do exercício 11 para saber qual tipo de triângulo é o resultado disso.
 * 4. Coloque o nome do tipo de triângulo resultante na <input> à direita do <button>.
 *
 * Se a função lerNumero lançar um erro, coloque a mensagem de erro "Informe os números corretamente" no <input> mais à direita.
 *
 * Um esqueleto da implementação final já foi deixado pelo professor para ajudar.
 */
function verificarTriangulo() {
    function lerNumero(texto, erro) {
        if (/^(?:[1-9][0-9]*(?:\.[0-9]+)?|\-[1-9][0-9]*(?:\.[0-9]+)?|0(?:\.[0-9]+)?|\-0\.[0-9]+)$/g.test(texto)) return parseFloat(texto);
        throw new Error("Informe os números corretamente");
    }
    let texto;
    try {
        const a = lerNumero(naoFizIssoAinda());
        const b = lerNumero(naoFizIssoAinda());
        const c = lerNumero(naoFizIssoAinda());
        texto = naoFizIssoAinda(a, b, c);
    } catch (e) {
        texto = e.message;
    }
    naoFizIssoAinda(texto);
}

// Classe para os exercícios 13 a 19.
/**
 * A classe AlunoMatricula representa os dados de um(a) aluno(a) matriculado(a) em alguma disciplina.
 * Nesta classe temos o nome do(a) aluno(a), o gênero dele(a) e o nome da disciplina, bem como as notas
 * dos seus 5 ACs, a nota da prova, a nota da sua prova substitutiva e a presença.
 *
 * As notas dos ACs sempre estarão devidamente preenchidas com um número de 0 a 10 em cada
 * e sempre serão 5 notas.
 *
 * As notas da prova e da sub também serão um número de 0 a 10. Caso o(a) aluno(a) não tenha feito
 * uma dessas provas, o valor 0 será considerado.
 *
 * A presença é um número entre 0 e 1, onde 0 significa que o(a) aluno(a) nunca compareceu às aulas,
 * 1 significa que nunca faltou e valores intermediários como 0.5 ou 0.7 significam que ele(a)
 * compareceu em algumas aulas e faltou noutras.
 */
class AlunoMatricula {

    // EXERCÍCIO 13.
    /**
     * Considerando a descrição da classe como dada acima, implemente o construtor dela.
     * Basta salvar todos os valores recebidos dentro do "this". O nome dos campos
     * deve ser igual ao nome dos parâmetros com um "_" antes.
     *
     * Observação: O certo seria validar todos os parâmetros no construtor, mas isso é algo
     * razoavelmente complicado de se fazer e vocês só estão começando com LP II, POO e JavaScript,
     * então, deixemos esse aspecto pra uma outra ocasião.
     *
     * @param {String} nome O nome do(a) aluno(a).
     * @param {String} genero "M" se for um aluno ou "F" se for uma aluna.
     * @param {String} disciplina O nome da disciplina.
     * @param {Array<number>} acs Os 5 ACs feitos pelo(a) aluno(a).
     * @param {number} prova A nota da prova do(a) aluno(a).
     * @param {number} sub A nota da prova substitutiva do aluno(a).
     * @param {number} presenca A quantidade de presença que o(a) aluno(a) teve na aula.
     */
    constructor(nome, genero, disciplina, acs, prova, sub, presenca) {
        naoFizIssoAinda();
    }

    // Não mexa neste método. Deixá-lo assim vai te ajudar bastante na hora de buscar solucionar os demais exercícios.
    // Além disso, os testes vão inspeionar se a estrutura das instâncias desta classe estão corretas por meio deste método aqui.
    toString() {
        return JSON.stringify(this);
    }

    // EXERCÍCIO 14.
    // Crie os métodos getters para obter o nome do(a) aluno(a), o gênero e o nome da disciplina e acrescente-os aqui.

    // EXERCÍCIO 15.
    /**
     * Este método calcula a nota final do(a) aluno(a) na disciplina. Ela é calculada da seguinte forma:
     *
     * 1. 50% da nota é a média das 4 melhores ACs. A pior nota de AC é desconsiderada.
     * 2. Os outros 50% da nota é a melhor nota dentre a prova e a substitutiva.
     * 3. Somadas as duas partes, a nota é arredondada da seguinte forma:
     *    A. Arredonda-se para o múltiplo de 0.5 mais próximo.
     *    B. Caso esteja exatamente entre dois múltiplos de 0.5, então ela é arredondada para cima.
     *    Por exemplo:
     *       7.1 é arredondado para 7.0.
     *       7.4 é arredondado para 7.5.
     *       8.25 é arredondado para 8.5.
     *       8.75 é arredondado para 9.0.
     *
     * Dica: Use o método Math.round. No entanto, para obter múltiplos de 0.5 ao invés de
     * apenas números inteiros, você vai precisar de um pouquinho de "criatividade com matemática".
     * Dica 2: Lembra da função acharMenor do exercício 8? Ela pode ser útil aqui.
     *
     * @returns {number} A média final do(a) aluno(a) na disciplina.
     */
    get media() {
        naoFizIssoAinda();
    }

    // EXERCÍCIO 16.
    /**
     * Este método deve retornar a situação do(a) aluno(a), que é uma dessas 4:
     * - "AP" se o(a) aluno(a) foi aprovado(a).
     * - "RM" se foi reprovado(a) por média insuficiente.
     * - "RF" se foi reprovado(a) por falta.
     * - "RMF" se foi reprovado(a) por média insuficiente e por falta.
     *
     * - Lembrando que para um(a) aluno(a) ser aprovado(a), tem que obter pelo menos a média 6
     *   (na verdade, é 5.75, vez que há o arredondamento).
     *
     * - Lembrando também que é necessário pelo menos 75% de presença.
     *
     * Dica: Use o método media() do exercício 15.
     *
     * @returns {String} A situação final do(a) aluno(a) na disciplina.
     */
    get situacao() {
        naoFizIssoAinda();
    }

    // EXERCÍCIO 17.
    /**
     * Este método é muito parecido com o do exercício anterior. No entanto, ele deve retornar a situação por exetenso.
     * Ou seja:
     * - Deve retornar "aprovado" ou "aprovada" ao invés de "AP".
     * - Deve retornar "reprovado por média" ou "reprovada por média" ao invés de "RM".
     * - Deve retornar "reprovado por falta" ou "reprovada por falta" ao invés de "RF".
     * - Deve retornar "reprovado por média e falta" ou "reprovada por média e falta" ao invés de "RMF".
     *
     * Dica: Use o método situacao definido no exercício 16 e use também o gênero do(a) aluno(a) para decidir o que retornar.
     *
     * @returns {String} A situação final do(a) aluno(a) na disciplina, escrito por extenso.
     */
    get situacaoPorExtenso() {
        naoFizIssoAinda();
    }

    // EXERCÍCIO 18.
    /**
     * Este método deve retornar uma string contendo uma frase de status do(a) aluno(a) no seguinte formato:
     * <nome> tem média <média> na disciplina de <disciplina> e foi <situação>, com <presença>% de presença.
     *
     * É importante que a média tenha sempre uma casa decimal após a vírgula e que a presença seja uma
     * porcentagem inteira, sem casas decimais.
     *
     * Dica: Use os métodos media e situacaoPorExtenso definidos nos exercícios 15 e 17.
     *
     * Exemplos:
     *
     * const c1 = new AlunoMatricula("Maria Luiza", "F", "Desenvolvimento Web", [8, 7, 9, 4.5, 8], 9, 0, 84);
     * const s1 = c1.status; // Isso vai ser "Maria Luiza tem média 8.5 na disciplina de Desenvolvimento Web e foi aprovada com 84% de presença."
     *
     * const c2 = new AlunoMatricula("Anderson", "M", "LP 2", [3.4, 5.0, 2.0, 4.8, 0], 2.9, 1.8, 80);
     * const s2 = c2.status; // Isso vai ser "Anderson tem média 3.3 na disciplina de LP 2 e foi reprovado por média com 80% de presença."
     *
     * const c3 = new AlunoMatricula("Chiquinha", "F", "Química Orgânica III", [9, 8, 7, 6, 5], 4, 3, 21);
     * const s3 = c3.status; // Isso vai ser "Chiquinha tem média 6.0 na disciplina de Química Orgânica III e foi reprovada por falta com 21% de presença."
     *
     * @returns {String} O status descritivo do(a) aluno(a).
     */
    get status() {
        naoFizIssoAinda();
    }
}

// EXERCÍCIO 19.
/**
 * Esta função já está quase pronta.
 *
 * Ela permite ao usuário ler os dados correspondentes no formulário, criar uma instância de AlunoMatricula
 * e colocar o status dessa instância no elemento #notas. Se ocorrer algum erro que impossibilite este processo,
 * a mensagem de erro será colocada em #notas.
 *
 * Tudo o que você precisa fazer é fechar os buracos que ficaram.
 * Não se preocupe com as funções auxiliares, elas são razoavelmente complexas, mas as partes que as utilizam
 * já estão prontas, então basta deixá-las quietas como estão.
 */
function verificarAlunoMatriculado() {
    function lerNota(texto, oQue) {
        if (/^(?:10(?:\.0)?|[0-9](?:\.[0-9][0-9]?)?)$/g.test(texto)) return parseFloat(texto);
        throw new Error(`Informe a nota d${oQue} corretamente, entre 0 e 10, com até duas casas decimais.`);
    }
    function lerPresenca(texto) {
        if (/^(?:100|[1-9][0-9]?|0)$/g.test(texto)) return parseInt(texto);
        throw new Error("Informe a presença corretamente, deve ser um inteiro entre 0 e 100.");
    }
    function lerTexto(texto, erro) {
        if (texto.trim() === "") throw new Error(erro);
        return texto.trim();
    }

    let texto;
    try {
        const nome        = lerTexto(document.querySelector("#nome").value, "Informe o nome do(a) aluno(a) corretamente.");
        const escolheuEle = naoFizIssoAinda();
        const escolheuEla = naoFizIssoAinda();
        if (!escolheuEle && !escolheuEla) throw new Error("Escolha o gênero do(a) aluno(a) corretamente.");
        const genero = escolheuEle ? "M" : "F";
        const disciplina  = lerTexto(naoFizIssoAinda(), "Informe o nome da disciplina corretamente.");
        const sac1 = naoFizIssoAinda(); // Lê a nota do AC 1, mas vai vir como string ao invés de número.
        const ac1 = lerNota(sac1, "o AC 1");
        const sac2 = naoFizIssoAinda(); // Lê a nota do AC 2, mas vai vir como string ao invés de número.
        const ac2 = lerNota(sac2, "o AC 2");
        const ac3 = lerNota(naoFizIssoAinda(), "o AC 3");
        const ac4 = lerNota(naoFizIssoAinda(), "o AC 4");
        const ac5 = lerNota(naoFizIssoAinda(), "o AC 5");
        const prova = lerNota(naoFizIssoAinda(), "a prova");
        const sub = lerNota(naoFizIssoAinda(), "a sub");
        const presenca = lerPresenca(naoFizIssoAinda());
        texto = new AlunoMatricula(naoFizIssoAinda()).status;
    } catch (e) {
        texto = naoFizIssoAinda();
    }

    const li = naoFizIssoAinda();
    li.append(texto);
    document.querySelector("#notas").append(li);
}

// EXERCÍCIO 20.
/**
 * Esta função recebe um array com várias opções acerca de como você deve fazer a entrega deste AC.
 *
 * Retorne um outro array que contém as duas opções corretas dentre as várias fornecidas. Leia atentamente todos
 * os enunciados aqui e no GitHub para saber quais são as opções corretas, principalmente o README.md.
 *
 * Dica: Use o console.log para ver o que é recebido no array.
 *
 * @param {Array<string>} array Várias possibilidades de como fazer a entrega deste AC.
 * @returns {Array<string>} As opções corretas de entrega.
 */
function comoFazerEntrega(array) {
    naoFizIssoAinda();
}