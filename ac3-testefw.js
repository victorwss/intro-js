"use strict";

class NaoImplementadoAinda extends Error {
    constructor() {
        super("Não implementado ainda.");
    }
}

function naoFizIssoAinda() {
    throw new NaoImplementadoAinda();
}

const TesteFw = (() => {

    function escapeHtml(unsafe) {
        return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
    }

    class Grupo {
        #sucessos = 0;
        #niy = 0;
        #pulados = 0;
        #erros = 0;
        #percorridos = 0;
        #peso;
        #minima = 0;
        #maxima = 0;
        #fracionado;
        #totalTestes;
        #testes;
        #elemento;
        #atualizarSuite;

        constructor(nome, subtitulo, fracionado, intervalo, fazTestes, atualizarSuite) {
            let minima = 0, maxima = 0;
            if (typeof intervalo === "number") {
                if (intervalo < 0) this.#minima = intervalo;
                if (intervalo > 0) this.#maxima = intervalo;
            } else if (intervalo instanceof Array && intervalo.length === 2) {
                this.#minima = intervalo[0];
                this.#maxima = intervalo[1];
            } else {
                throw new Error("O intervalo foi definido de forma incorreta.");
            }
            let peso = this.#maxima - this.#minima;
            this.#peso = peso;
            try {
                this.#testes = fazTestes();
            } catch (e) {
                this.#testes = [new Teste("A inicialização deveria ter sido bem sucedida!", () => { throw e; }, naoDeuErro())];
            }
            let elemento = document.createElement("li");
            this.#fracionado = fracionado;
            this.#elemento = elemento;
            this.#totalTestes = this.#testes.length;

            elemento.classList.add("testefw-grupo", "testefw-futuro");
            const subPesoTexto = this.#minima === 0
                    ? `Peso: ${peso} ponto${peso === 1 ? "" : "s"}.`
                    : `Penalidade para quem fizer isso errado: -${peso} ponto${peso === 1 ? "" : "s"}.`;
            elemento.innerHTML = ""
                    + `<div class="testefw-mostrar testefw-botao">+</div>`
                    + `<div class="testefw-ocultar testefw-botao">-</div>`
                    + `<h2 class="testefw-cabecalho">${nome}: <span class="testefw-sucessos">0</span> / ${this.#testes.length}</h2>`
                    + `<h3 class="testefw-cabecalho">${subtitulo}</h3>`
                    + `<h3 class="testefw-cabecalho ${this.#minima === 0 ? "" : "testefw-perigo"}">${subPesoTexto}</h3>`
                    + `<ul></ul>`;
            document.querySelector("#testefw-resultados").append(elemento);

            const mostrar = elemento.querySelector(".testefw-mostrar");
            const ocultar = elemento.querySelector(".testefw-ocultar");
            const detalhes = elemento.querySelector("ul");
            mostrar.onclick = function() {
                detalhes.classList.remove("testefw-oculto");
                mostrar.classList.add("testefw-oculto");
                ocultar.classList.remove("testefw-oculto");
            };
            ocultar.onclick = function() {
                detalhes.classList.add("testefw-oculto");
                mostrar.classList.remove("testefw-oculto");
                ocultar.classList.add("testefw-oculto");
            };
            ocultar.onclick();

            this.#testes.forEach(proximoTeste => proximoTeste.agrupar(detalhes, this));
            this.#atualizarSuite = atualizarSuite;
        }

        get sucessos() { return this.#sucessos; }
        get pulados() { return this.#pulados; }
        get niy() { return this.#niy; }
        get erros() { return this.#erros; }
        get maxima() { return this.#maxima; }
        get totalTestes() { return this.#totalTestes; }

        get nota() {
            if (!this.#fracionado && this.#sucessos !== this.#totalTestes) return this.#minima;
            return this.#minima + this.#peso * this.#sucessos / this.#totalTestes;
        }

        atualizar(tipo) {
            this.#percorridos++;
            if (tipo === "ok") this.#sucessos++;
            if (tipo === "niy") this.#niy++;
            if (tipo === "skip") this.#pulados++;
            if (tipo === "erro") this.#erros++;
            const tipoItem =
                    this.#sucessos === this.#percorridos
                            ? (this.#percorridos === this.#totalTestes ? "testefw-ok" : "testefw-executando-ok")
                    : this.#sucessos > 0
                            ? (this.#percorridos === this.#totalTestes ? "testefw-parcial" : "testefw-executando-parcial")
                    : this.#niy + this.#pulados < this.#percorridos
                            ? (this.#percorridos === this.#totalTestes ? "testefw-erro" : "testefw-executando-erro")
                    : this.#pulados === this.#percorridos
                            ? (this.#percorridos === this.#totalTestes ? "testefw-skip" : "testefw-executando-skip")
                    : (this.#percorridos === this.#totalTestes ? "testefw-niy" : "testefw-executando-niy");
            const deveEsconder = this.#sucessos === this.#totalTestes || this.#niy + this.#pulados === this.#totalTestes;
            this.#elemento.querySelector(deveEsconder ? ".testefw-ocultar" : ".testefw-mostrar").onclick();
            this.#elemento.querySelector(".testefw-sucessos").innerHTML = this.#sucessos;
            this.#elemento.classList.remove(
                "testefw-ok", "testefw-parcial", "testefw-erro", "testefw-skip", "testefw-niy", "testefw-futuro",
                "testefw-executando-ok", "testefw-executando-parcial", "testefw-executando-erro", "testefw-executando-skip", "testefw-executando-niy"
            );
            this.#elemento.classList.add(tipoItem);

            this.#atualizarSuite();
        }

        adicionarTestes(onde) {
            this.#testes.forEach(teste => onde.push(teste));
        }
    }

    class Teste {
        #executar;
        #elemento;
        #grupo;

        constructor(regra, execucao, testeDoResultado, preCondicao, posOperacao) {
            const tamanhoPrefixo = "() => ".length;
            const codigo = execucao.toString().substring(tamanhoPrefixo);
            const escapeRegra = escapeHtml(regra);
            const escapeCodigo = escapeHtml(codigo);
            const elemento = document.createElement("li");
            elemento.classList.add("testefw-exercicio", "testefw-futuro");
            elemento.innerHTML = ""
                    + `<div class="testefw-regra">Regra: <span>${escapeRegra}</span></div>`
                    + `<div class="testefw-codigo">Código: <span>${escapeCodigo}</span></div>`
                    + `<div class="resultado-esperado">${testeDoResultado.esperado}</div>`
                    + `<div class="resultado-obtido">Aguardando a execução.</div>`

            function atualizarHtml(tipo, esperado, obtido) {
                elemento.classList.remove("testefw-ok", "testefw-niy", "testefw-erro", "testefw-skip", "testefw-executando", "testefw-futuro");
                elemento.classList.add(`testefw-${tipo}`);
                if (esperado !== undefined) elemento.querySelector(".resultado-esperado").innerHTML = esperado;
                elemento.querySelector(".resultado-obtido").innerHTML = obtido;
                return tipo;
            }

            function executar() {
                if (preCondicao && !preCondicao()) {
                    return atualizarHtml(
                            "skip",
                            undefined,
                            `Resultado obtido: <span class="testefw-skip">O teste não pôde ser executado por causa de erros detectados em testes anteriores.</span>`
                    );
                }
                let ok = false;
                try {
                    let resultado = execucao();
                    testeDoResultado.testar(resultado);
                    ok = true;
                    return atualizarHtml("ok", undefined, `Resultado obtido: <span class="testefw-funcionou">Funcionou como esperado.</span>`);
                } catch (e) {
                    if (e instanceof NaoImplementadoAinda) return atualizarHtml("niy", undefined, `Resultado obtido: <span class="testefw-naoimplementado">Não implementado ainda.</span>`);
                    if (e instanceof ErroFormatado) return atualizarHtml("erro", e.esperado, e.obtido);
                    console.log(e);
                    return atualizarHtml("erro", undefined, `Resultado obtido: Um erro inesperado - <span class="testefw-inesperado">[${e.constructor.name}] ${escapeHtml(e.message)}</span>`);
                } finally {
                    if (posOperacao) posOperacao(ok);
                }
            }

            this.#executar = executar;
            this.#elemento = elemento;
            this.#grupo = null;
        }

        agrupar(onde, grupo) {
            onde.append(this.#elemento);
            this.#grupo = grupo;
        }

        preTeste() {
            this.#elemento.classList.add("testefw-executando");
        }

        testar() {
            this.#grupo.atualizar(this.#executar());
        }
    }

    function deepEqual(x, y) {
        if (x === y) return true;
        if (x !== x && y !== y) return true; // NaN === NaN
        if (x === null || y === null || typeof x !== "object" || typeof y !== "object") return false;
        if (Object.keys(x).length !== Object.keys(y).length) return false;

        for (let prop in x) {
            if (!y.hasOwnProperty(prop) || !deepEqual(x[prop], y[prop])) return false;
        }

        return true;
    }

    function deepDiff(x, y) {
        const xStack = [];
        const yStack = [];

        function diffFindInner(x, y) {
            if (x === y) return null;
            if (x !== x && y !== y) return null; // NaN === NaN

            // Testes rasos lembrando que o === já falhou.
            if (x === null || x === undefined || y === null || y === undefined) {
                return [
                        x === undefined ? "(undefined)" : x === null ? "(null)" : "(value)",
                        y === undefined ? "(undefined)" : y === null ? "(null)" : "(value)"
                ];
            };
            if (typeof x !== typeof y) return [`(typeof === ${typeof x})`, `(typeof === ${typeof y})`];
            if (typeof x !== "object") return [`(value === ${x})`, `(value === ${y})`];

            const xc = x.constructor.name;
            const yc = y.constructor.name;
            if (xc !== yc) return [`(class === ${xc})`, `(class === ${yc})`];

            const xs = Object.keys(x).length;
            const ys = Object.keys(y).length;
            if (xs !== ys) return [`(length == ${xs})`, `(length == ${ys})`];

            for (let prop in x) {
                if (!y.hasOwnProperty(prop)) return [prop, `(undefined ${prop})`];
                let p, q;
                for (let v = 0; v < xStack.length - 1; v++) {
                    if (xStack[v] === x) {
                        p = v;
                        break;
                    }
                }
                for (let v = 0; v < yStack.length - 1; v++) {
                    if (yStack[v] === y) {
                        q = v;
                        break;
                    }
                }
                if (p === q && p !== undefined) continue; // Evita recursão infinita.
                if (p !== undefined || q !== undefined) return [`${p} (${prop})`, `${q} (${prop})`];
                const dif = diffFind(x[prop], y[prop]);
                if (dif !== null) return [`${prop}->${dif[0]}`, `${prop}->${dif[1]}`];
            }

            return null;
        }

        function diffFind(x, y) {
            try {
                xStack.push(x);
                yStack.push(y);
                return diffFindInner(x, y);
            } finally {
                xStack.pop();
                yStack.pop();
            }
        }

        return diffFind(x, y);
    }

    function determinarTipo(elemento) {
        if (elemento === null) return "null";
        if (typeof elemento !== "object") return typeof elemento;
        return elemento.constructor.name;
    }

    function igual(valorEsperado) {
        const v1 = typeof valorEsperado === "string" ? `"${valorEsperado}"` : escapeHtml("" + valorEsperado);
        return {
            testar: valorObtido => {
                const diff = deepDiff(valorEsperado, valorObtido);
                if (diff === null) return;
                throw new ErroFormatado(valorEsperado, valorObtido, diff);
            },
            esperado: `Resultado esperado: ${v1}.`
        };
    }

    function naoDeuErro() {
        return {
            testar: resultado => {},
            esperado: `Resultado esperado: Apenas executar corretamente e não lançar nenhum erro.`
        };
    }

    function erroSerio(ev, arquivo, linha, coluna, erro) {
        const zoado = document.createElement("div");
        zoado.classList.add("testefw-gravissimo");
        zoado.innerHTML = ""
                + "<h1>SE VOCÊ ESTÁ VENDO ISSO, É PORQUE O JAVASCRIPT NÃO RODOU CORRETAMENTE.</h1>"
                + "<p>Este é um erro gravíssimo. Veja mais detalhes no console do navegador para tentar entender onde ocorreu o erro.</p>"
                + "<p>Quem entregar para o professor algo que faça esta mensagem aparecer, vai ficar com nota zero!</p>";
        document.body.prepend(zoado);
    }

    // https://stackoverflow.com/a/47593316/540552 - xoshiro128ss
    class RepeatableRandom {
        #a; #b; #c; #d;

        constructor(a, b, c, d) {
            this.#a = a >>> 0;
            this.#b = b >>> 0;
            this.#c = c >>> 0;
            this.#d = d >>> 0;
        }

        next() {
            let a = this.#a, b = this.#b, c = this.#c, d = this.#d;
            const t = b << 9;
            let r = a * 5;
            r = (r << 7 | r >>> 25) * 9;
            c ^= a;
            d ^= b;
            b ^= c;
            a ^= d;
            c ^= t;
            d = d << 11 | d >>> 21;
            this.#a = a;
            this.#b = b;
            this.#c = c;
            this.#d = d;
            return (r >>> 0) / 4294967296;
        }

        nextInt(min, max) {
            return min + Math.floor(this.next() * (max - min + 1));
        }
    }

    class Suite {
        #grupos;

        constructor() {
            this.#grupos = [];
        }

        static #preparoGlobal() {
            window.onerror = erroSerio;

            const jaTemR = document.querySelector("#testefw-resultados");
            if (jaTemR) jaTemR.remove();
            const jaTemN = document.querySelector("#testefw-nota");
            if (jaTemN) jaTemN.remove();

            document.body.innerHTML += ""
                    + '<div id="testefw-nota">'
                    + '    <ul id="testefw-alunos"></ul>'
                    + '    <h1>Nota: <span id="testefw-valor">0</span> / <span id="testefw-valormax">0</span></h1>'
                    + '    <div>'
                    + '        <h2>Sucessos: <span id="testefw-contasucessos">0 / 0</span></h2>'
                    + '        <h2>Erros: <span id="testefw-contaerros">0 / 0</span></h2>'
                    + '        <h2>Pulados: <span id="testefw-contapulos">0 / 0</span></h2>'
                    + '        <h2>Não implementados: <span id="testefw-contaniy">0 / 0</span></h2>'
                    + '    </div>'
                    + '</div>'
                    + '<ul id="testefw-resultados"></ul>';
        }

        testarTudo(delay, preparacao) {
            const atualizar = () => this.#atualizar();
            const adicionouGrupo = g => this.#grupos.push(g);
            Suite.#preparoGlobal();
            if (document.querySelectorAll(".testefw-gravissimo").length > 0) return;
            preparacao(new Callbacks(adicionouGrupo, atualizar));
            this.#executarTestes(delay);
        }

        #executarTestes(intervalo) {
            const passos = [];
            this.#grupos.forEach(grupo => grupo.adicionarTestes(passos));
            if (intervalo < 0) {
                passos.forEach(proximoTeste => proximoTeste.testar());
                return;
            }
            let i = 0, interval;
            function proximo() {
                if (i >= passos.length) {
                    clearInterval(interval);
                    return;
                }
                passos[i].testar();
                i++;
            }
            interval = setInterval(proximo, intervalo);
        }

        #atualizar() {
            let nota = 0, valormax = 0, totalSucessos = 0, totalErros = 0, totalPulos = 0, totalNiy = 0, totalTestes = 0, penalidades = 0;
            for (let idx in this.#grupos) {
                const grupo = this.#grupos[idx];
                const gn = grupo.nota;
                if (gn < 0) {
                    penalidades -= gn;
                } else {
                    nota += gn;
                }
                totalTestes += grupo.totalTestes;
                totalSucessos += grupo.sucessos;
                totalErros += grupo.erros;
                totalPulos += grupo.pulados;
                totalNiy += grupo.niy;
                valormax += grupo.maxima;
            }
            function arredondar(num, casas) {
                return Math.round(num * 10 ** casas) / 10 ** casas;
            }
            nota = arredondar(nota, 2);
            if (penalidades > 0) {
                const notaPenalizada = arredondar(nota - penalidades, 2);
                penalidades = arredondar(penalidades, 2);
                document.querySelector("#testefw-valor").innerHTML = `${nota} - ${penalidades} = ${notaPenalizada}` + (notaPenalizada < 0 ? " (0)" : "");
            } else {
                document.querySelector("#testefw-valor").innerHTML = "" + nota;
            }
            document.querySelector("#testefw-valormax").innerHTML = "" + (valormax < 0 ? 0 : arredondar(valormax, 2));
            document.querySelector("#testefw-contasucessos").innerHTML = totalSucessos + " / " + totalTestes;
            document.querySelector("#testefw-contaerros").innerHTML = totalErros + " / " + totalTestes;
            document.querySelector("#testefw-contapulos").innerHTML = totalPulos + " / " + totalTestes;
            document.querySelector("#testefw-contaniy").innerHTML = totalNiy + " / " + totalTestes;
        }
    }

    class Callbacks {
        #adicionouGrupo;
        #atualizarSuite;

        constructor(adicionouGrupo, atualizarSuite) {
            this.#adicionouGrupo = adicionouGrupo;
            this.#atualizarSuite = atualizarSuite;
        }

        get teste() {
            return function(regra, execucao, testeDoResultado, preCondicao, posOperacao) {
                return new Teste(regra, execucao, testeDoResultado, preCondicao, posOperacao);
            };
        }

        get grupo() {
            const adicionouGrupo = this.#adicionouGrupo;
            const atualizarSuite = this.#atualizarSuite;
            return function(nome, subtitulo, fracionado, intervalo, fazTestes) {
                const g = new Grupo(nome, subtitulo, fracionado, intervalo, fazTestes, atualizarSuite);
                adicionouGrupo(g);
                return g;
            };
        }

        get igual() {
            return igual;
        }

        get naoDeuErro() {
            return naoDeuErro;
        }

        get escapeHtml() {
            return escapeHtml;
        }

        get RepeatableRandom() {
            return RepeatableRandom;
        }
    }

    class ErroFormatado extends Error {
        #esperado;
        #obtido;

        constructor(valorEsperado, valorObtido, diff) {
            const v1 = typeof valorEsperado === "string" ? `"${valorEsperado}"` : escapeHtml("" + valorEsperado);
            const t1 = determinarTipo(valorEsperado);
            const v2 = typeof valorObtido === "string" ? `"${valorObtido}"` : escapeHtml("" + valorObtido);
            const t2 = determinarTipo(valorObtido);
            let esperado, obtido;
            if (t1 === t2 && v1 === v2) {
                esperado = `Resultado esperado: [${t1}] ${v1}.`;
                obtido = `Resultado obtido: [${t2}] ${v2}. `
                        + `Entretanto, ainda assim a comparação de igualdade entre o obtido e o esperado resultou em false. `
                        + `As diferenças são <span class="testefw-destaque">${diff[0]}</span> e <span class="testefw-destaque">${diff[1]}</span>.`
            } else if (t1 === t2) {
                esperado = `Resultado esperado: <span class="testefw-destaque">${v1}</span>.`;
                obtido = `Resultado obtido: <span class="testefw-destaque">${v2}</span>.`;
            } else if (v1 === v2) {
                esperado = `Resultado esperado: <span class="testefw-destaque">[${t1}]</span> ${v1}.`;
                obtido = `Resultado obtido: <span class="testefw-destaque">[${t2}]</span> ${v2}.`;
            } else {
                esperado = `Resultado esperado: <span class="testefw-destaque">[${t1}]</span> <span class="testefw-destaque">${v1}</span>.`;
                obtido = `Resultado obtido: <span class="testefw-destaque">[${t2}]</span> <span class="testefw-destaque">${v2}</span>.`;
            }
            super(esperado + " " + obtido);
            this.#esperado = esperado;
            this.#obtido = obtido;
        }

        get esperado() { return this.#esperado; }
        get obtido() { return this.#obtido; }
    }

    return configurador => delay => new Suite().testarTudo(delay, configurador);
})();