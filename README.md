# Exercício - Introdução ao Javascript

Exercícios de Introdução ao JavaScript, passando pelos tipos, estruturas e funções da disiplina de Tecnologias Web da Faculdade Impacta de Tecnologia.

## O que fazer?

Abra o arquivo `exercicio.js`. Lá há várias funções a serem desenvolvidas. Desenvolver o código necessário para cada função funcionar de acordo com as respectivas documentações.

Os nomes das funções não devem ser trocados (se você fizer isso, vai se ferrar totalmente porque os testes não vão te perdoar). No entanto, você pode criar outras funções que julgar necessário. Não é recomendado mudar o nome dos parâmetros.

Faça o exercício em grupos de 1 até 3 pessoas.

## Como executar os exercícios? Como saber se o que fiz está certo?

Para executar e testar este exercício, basta abrir o `exercicio.html` em um navegador moderno (Chrome ou Firefox) e a mágica toda vai acontecer automaticamente.

Esta página vai automaticamente rodar um montão de testes e se houverem problemas, ela vai descrever quais foram os testes que falharam.

Obviamente, o arquivo `exercicio.js` dado aqui vai tirar uma nota zero. Você deverá alterá-lo até conseguir a nota 10 (ou até desistir).

Esses testes estão no arquivo `teste.js`. O código responsável por gerenciar os testes está no `testefw.js`. Não mexa nesses arquivos. Também não mexa no `exercicio.html` ou no `exerciocio.css`.

## Como fica a nota?

A página `exercicio.html` já calculará a nota automaticamente. No entanto, há algumas observações a serem feitas:

- Há pontos considerados por realizar a entrega corretamente. Obviamente, esses só poderão ser calculados após você fazer a sua entrega.

- Vocês só devem entregar o arquivo `exercicio.js`. Vou ignorar quaisquer mudanças realizadas em outros arquivos e sempre fazer a correção com os demais arquivos originais.

- Quem tentar colocar algum tipo de malware ou código malicioso no `exercicio.js` fica com nota zero.

- **Fique atento a erros que aparecerem no console do navegador. Scripts que não puderem ser carregados e/ou executados devido a erros sintáticos podem ocasionar uma nota zero.**

- **Scripts que travem ou não terminem de carregar nunca (por exemplo, `while (true) { /* fica preso no laço infinito. */}`) também podem ocasionar uma nota zero.**

- Se o professor encontrar alguma tentativa de burlar os testes, você vai perder pontos! Eis um exemplo de uma implementação sacana para tentar burlar os testes:

```js
// Este é o teste do professor.
teste("4 é menor que 7.", () => retornaMaiorNumero(4, 7), igual(7));
teste("3 é maior que 2.", () => retornaMaiorNumero(3, 2), igual(3));

// Esta é a implementação que visa burlar o teste.
// Ela foi feita apenas para passar nos dois testes acima, mesmo estando totalmente errada em qualquer outro caso.
function retornaMaiorNumero(a, b) {
    if (a === 4) return 7;
    return 3;
}
```

## Como fazer a entrega?

- Caso múltiplas entregas sejam feitas por um mesmo grupo de alunos, apenas a última será considerada, mesmo se entregues por alunos diferentes do mesmo grupo.
- Faça a entrega corretamente pelo Google Forms.
  - Ou seja, não entregue por e-mail e nem pelo classroom.
- Coloque apenas o seu arquivo `exercicio.js` e nada mais.