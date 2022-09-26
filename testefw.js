"use strict";

class NaoImplementadoAinda extends Error {
    constructor() { super("<span class='naoimplementado'>Não implementado ainda.</span>"); }
}

function naoFizIssoAinda() {
    throw new NaoImplementadoAinda();
}

const TesteFw = (() => {
    let nota = 0;
    const naoExecutado = "<span class='naoexecutado'>O teste não pôde ser executado por causa de erros detectados em testes anteriores.</span>";

    class ErroFormatado extends Error {
        constructor(message) { super(message); }
    }

    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    }

    function arredondar(num, casas) {
        return Math.round(num * 10 ** casas) / 10 ** casas;
    }

    function teste(regra, execucao, esperado, preCondicao, posOperacao) {
        const tamanhoPrefixo = "() => ".length;
        const codigo = execucao.toString().substring(tamanhoPrefixo);

        function criarHtml(tipo, mensagem) {
            const tudo = ""
                    + `<li class='teste ${tipo}'>`
                    + `    <div class='regra'>Regra: <span>${escapeHtml(regra)}</span></div>`
                    + `    <div class='codigo'>Código: <span>${escapeHtml(codigo)}</span></div>`
                    + `    <div class='resultado'>Resultado: <span>${mensagem}</span></div>`
                    + `</li>`;
            return {"elemento": tudo, "tipo": tipo};
        }

        return {
            "regra": regra,
            "execucao": codigo,
            "executar": function() {
                let ok = false;
                try {
                    if (preCondicao) {
                        const ok = preCondicao();
                        if (!preCondicao()) return criarHtml("skip", naoExecutado);
                    }
                    esperado(execucao);
                    ok = true;
                    return criarHtml("ok", "<span class='funcionou'>Funcionou.</span>");
                } catch (e) {
                    if (e instanceof NaoImplementadoAinda) return criarHtml("niy", e.message);
                    let m = e instanceof ErroFormatado ? e.message : `<span class='inesperado'>[${e.constructor.name}] ${escapeHtml(e.message)}</span>`;
                    return criarHtml("erro", m);
                } finally {
                    if (posOperacao) posOperacao(ok);
                }
            }
        };
    }

    function grupo(nome, subtitulo, fracionado, minima, maxima, fazTestes) {
        const peso = maxima - minima;
        let testes;
        try {
            testes = fazTestes();
        } catch (e) {
            testes = [teste("A inicialização deveria ter sido bem sucedida!", () => { throw e; }, naoDeuErro())];
        }
        let sucessos = 0, niy = 0, pulados = 0;
        const detalhes = document.createElement("ul");

        testes.forEach(proximoTeste => {
            const resposta = proximoTeste.executar();
            if (resposta.tipo === "ok") sucessos++;
            if (resposta.tipo === "niy") niy++;
            if (resposta.tipo === "skip") pulados++;
            detalhes.innerHTML += resposta.elemento;
        });

        const deveEsconder = sucessos === testes.length || niy + pulados === testes.length;
        const cabecalho = document.createElement("h2");
        cabecalho.classList.add("cabecalho");
        cabecalho.append(`${nome}: ${sucessos} / ${testes.length}`);
        const subPeso = document.createElement("h3");
        subPeso.classList.add("cabecalho");
        if (minima === 0) {
            subPeso.append(`Peso: ${peso} ponto${peso === 1 ? "" : "s"}.`);
        } else {
            subPeso.append(`Penalidade para quem fizer isso errado: -${peso} ponto${peso === 1 ? "" : "s"}.`);
            subPeso.classList.add("perigo");
        }
        const sub = document.createElement("h3");
        sub.classList.add("cabecalho");
        sub.append(subtitulo);

        const mostrar = document.createElement("div");
        mostrar.append(deveEsconder ? "+" : "-");
        mostrar.classList.add("botao");
        mostrar.onclick = function() {
            detalhes.classList.toggle("oculto");
            mostrar.innerHTML = mostrar.innerHTML === "+" ? "-" : "+";
        };

        const tipoItem =
                sucessos === testes.length ? "ok"
                : sucessos > 0 ? "parcial"
                : niy + pulados < testes.length ? "erro"
                : pulados === testes.length ? "skip"
                : "niy";

        const item = document.createElement("li");
        item.classList.add("exercicio", tipoItem);
        item.append(mostrar, cabecalho, sub, subPeso, detalhes);

        document.querySelector("#resultados").append(item);
        if (fracionado || sucessos === testes.length) nota += peso * sucessos / testes.length;
        nota += minima;
        document.querySelector("#valor").innerHTML = "" + (nota < 0 ? 0 : arredondar(nota, 2));
        if (deveEsconder) detalhes.classList.add("oculto");

        return {
            "sucessos": sucessos,
            "total": testes.length,
            "niy": niy,
            "skip": pulados,
            "erros": testes.length - sucessos - niy - pulados
        };
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

    function igual(valorEsperado) {
        return (execucao) => {
            let resultado = execucao();
            if (!deepEqual(resultado, valorEsperado)) {
                if (typeof valorEsperado === "string") valorEsperado = `"${valorEsperado}"`;
                if (typeof resultado === "string") resultado = `"${resultado}"`;
                throw new ErroFormatado(`O esperado era <span class="esperado">${valorEsperado}</span>, mas foi obtido <span class="obtido">${resultado}</span>.`);
            }
        };
    }

    function naoDeuErro() {
        return (execucao) => execucao();
    }

    window.onerror = function(ev, arquivo, linha, coluna, erro) {
        const zoado = document.createElement("div");
        zoado.classList.add("gravissimo");
        zoado.innerHTML = ""
                + "<h1>SE VOCÊ ESTÁ VENDO ISSO, É PORQUE O SEU JAVASCRIPT NÃO RODOU.</h1>"
                + `<p>Este é um erro gravíssimo. O erro especificamente foi ${erro ? erro.message : erro}, no arquivo ${arquivo}, na linha ${linha} e coluna ${coluna}.`
                + "Veja mais detalhes no console do navegador para tentar entender onde ocorreu o erro.</p>"
                + "<p>Quem entregar para o professor um JavaScript que faça esta mensagem aparecer, vai ficar com nota zero!</p>";
        document.body.prepend(zoado);
    };

    return Object.freeze({ teste: teste, grupo: grupo, igual: igual, naoDeuErro, naoDeuErro });
})();