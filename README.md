# Exercício - Introdução ao Javascript

Exercícios de Introdução ao JavaScript, passando pelos tipos, estruturas e funções da disciplina de Tecnologias Web da Faculdade Impacta de Tecnologia.

## O que fazer?

Basicamente, o que você tem/têm que fazer é abrir o arquivo `ac3.js` e desenvolver o código necessário para cada função/método funcionar de acordo com as respectivas documentações.

Comece pela função que fornece um JSON com o nome e o RA dos alunos. Se você não conseguir fazer isso corretamente, sua nota será zero independente de todo o resto.

Os nomes das funções não devem ser trocados (se você fizer isso, os testes não vão te perdoar). No entanto, você pode criar outras funções que/se julgar necessário. Não é recomendado mudar o nome dos parâmetros, embora você possa fazer isso.

Faça o AC em grupos de 1 até 5 pessoas.

## Como executar os exercícios? Como saber se o que fiz está certo?

Para executar e testar este AC, basta abrir o `ac3.html` em um navegador moderno (Chrome ou Firefox) e a mágica toda vai acontecer automaticamente.

Esta página vai automaticamente rodar um montão de testes (exatos 600, para ser preciso) e se houverem problemas, ela vai descrever quais foram os testes que falharam.

Obviamente, o arquivo `ac3.js` dado aqui vai tirar uma nota zero. Não só isso, já te dará de cara uma caixa de mensagem de erro amarela com letras grandes vermelhas piscando bem chamativas dizendo que você precisa configurar o JSON com o nome dos alunos.

Você deverá alterar este arquivo até conseguir a nota 10 (ou até desistir de fazê-lo, mas espero que não seja o caso).

Se o seu script tiver algum erro sintático (exemplo: parênteses que abre e não fecha em lugar nenhum, else sem if, entre outros), uma caixa amarela com letras grandes vermelhas piscando vai aparecer para te avisar disso.

No arquivo `ac3.html`, também há 2 formulários, um para o exercício 12 e outro para o exercício 19. Eles estão lá porque esses dois exerícios são acerca de manipulação do DOM. No entanto, você também pode interagir com eles diretamente.

## E os demais arquivos?

Os testes estão no arquivo `ac3-teste.js`. O código responsável por gerenciar os testes está no `lib/testefw.js`.
É recomendável você deixar estes arquivos como estão, pois o professsor sempre usará os originais na correção, logo não há porque alterá-los.
Se você tiver coragem, você até pode mexer nesses arquivos para fazer algum experimento, colocar linhas de `console.log` para tentar entender como o código funciona, desmontar ou alterar pedaços para fazer debugging, etc.
No entanto, o funcionamento interno desses arquivos está em um nível bastante avançado e complexo e não é esperado que alunos que estejam recém-começando em JavaScript os entendam.
De toda forma, se quiser fuçar neles, sempre tenha em mão os arquivos originais para se certificar de que não bagunçou nada.

Por fim, há os arquivos `ac3.html` e `ac3.css`. A esta altura, o que eles fazem e como se comportam deve estar claro para a maioria dos alunos.
No entanto, não há o que alterar neles.

## Como fica a nota?

A página `ac3.html` já calculará a nota automaticamente, da seguinte forma:

- Faça o exercício 0 antes de qualquer coisa. Ele se chama exercício 0 porque se você não o fizer direito, a sua nota também será 0.

- Cada exercício do 1 ao 21 tem um peso diferente e uma quantidade de testes diferentes. Se todos os testes passarem, o peso correspondente é somado. Se nenhum passar, nada acontece. Se somente alguns passarem, a nota proporcional a quantidade de testes do exercício e ao peso do exercício será aplicada.

- Se você bagunçar com os dois exemplos dados, sofrerá uma penalidade de -1 ponto. Eles servem apenas para você ter alguma ideia do que deve ser feito, mas não é para zoar com eles.

No entanto, há algumas observações a serem feitas:

- Se você fizer a entrega incorretamente mesmo tendo feito o exercício 21 corretamente, será penalizado em -1 ponto da mesma forma.

- Você só deve entregar o arquivo `ac3.js`. Vou ignorar quaisquer mudanças realizadas em outros arquivos e sempre fazer a correção com os demais arquivos originais.

- Quem tentar colocar algum tipo de malware ou código malicioso no `ac3.js` fica com nota zero.

- **Fique atento a erros que aparecerem no console do navegador. Scripts que não puderem ser carregados e/ou executados devido a erros sintáticos podem ocasionar uma nota zero.**

- **Scripts que travem ou não terminem de carregar nunca (por exemplo, `while (true) { /* fica preso no laço infinito. */}`) também podem ocasionar uma nota zero.**

- Se o professor encontrar alguma tentativa de burlar os testes, você vai perder pontos!

## Burlar os testes!? Como assim!?

Eis um exemplo de uma implementação sacana para tentar burlar os testes:

```js
// Este é o teste do professor.
teste("4 é menor que 7.", () => retornaMaiorNumero(4, 7), igual(7));
teste("3 é maior que 2.", () => retornaMaiorNumero(3, 2), igual(3));

// Esta é a implementação que visa burlar o teste.
// Ela foi feita apenas para passar nos dois testes acima, mesmo estando
// totalmente errada em qualquer outro caso.
function retornaMaiorNumero(a, b) {
    if (a === 4) return 7;
    return 3;
}
```

Além de executar os testes automáticos, o professor vai olhar o código procurando por coisas assim.

É claro que enquanto você(s) estiver(em) desenvolvendo, fazendo experimentos e debugging, você(s) até pode fazer coisas assim.
Apenas se certifique(m) de que no final não se esqueceu(ram) de limpar isso.

## Como fazer a entrega?

- Faça a entrega corretamente pelo Google Forms.
  - Ou seja, não entregue por e-mail e nem pelo classroom.
- Coloque apenas o seu arquivo `ac3.js` e nada mais.
- Caso múltiplas entregas sejam feitas por um mesmo grupo de alunos, apenas a última será considerada, mesmo se entregues por alunos diferentes do mesmo grupo.