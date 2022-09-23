"use strict";

let nota = 0;

function teste(regra, execucao, esperado) {
    const tamanhoPrefixo = "() => ".length;
    const codigo = execucao.toString().substring(tamanhoPrefixo);

    function criarHtml(ok, mensagem) {
        const divRegra = document.createElement("div");
        divRegra.classList.add("regra");
        divRegra.append("Regra: ");
        const spanRegra = document.createElement("span");
        spanRegra.append(regra);
        divRegra.appendChild(spanRegra);

        const divCodigo = document.createElement("div");
        divCodigo.classList.add("codigo");
        divCodigo.append("Código: ");
        const spanCodigo = document.createElement("span");
        spanCodigo.append(codigo);
        divCodigo.appendChild(spanCodigo);

        const divResultado = document.createElement("div");
        divResultado.classList.add("resultado");
        divResultado.append("Resultado: ");
        const spanResultado = document.createElement("span");
        spanResultado.append(mensagem);
        divResultado.appendChild(spanResultado);

        const tudo = document.createElement("li");
        tudo.classList.add("teste", ok ? "ok" : "erro");
        tudo.appendChild(divRegra);
        tudo.appendChild(divCodigo);
        tudo.appendChild(divResultado);
        return {"elemento": tudo, "ok": ok};
    }

    return {
        "regra": regra,
        "execucao": codigo,
        "executar": function() {
            try {
                esperado(execucao);
                return criarHtml(true, "Funcionou.");
            } catch (e) {
                return criarHtml(false, e.message);
            }
        }
    };
}

function arredondar(num) {
    return Math.round(num * 100) / 100;
}

function grupo(nome, subtitulo, fracionado, minima, maxima, fazTestes) {
    const peso = maxima - minima;
    let testes;
    try {
        testes = fazTestes();
    } catch (e) {
        testes = [regra("A inicialização deveria ter sido bem sucedida!", () => { throw e; }, naoDeuError())];
    }
    let sucessos = 0;
    const detalhes = document.createElement("ul");

    testes.forEach(proximoTeste => {
        const resposta = proximoTeste.executar();
        if (resposta.ok) sucessos++;
        detalhes.append(resposta.elemento);
    });

    const cabecalho = document.createElement("h2");
    cabecalho.classList.add("cabecalho");
    cabecalho.append(document.createTextNode(nome + ": " + sucessos + "/" + testes.length));

    const sub = document.createElement("h3");
    sub.classList.add("cabecalho");
    sub.append(subtitulo);

    const mostrar = document.createElement("div");
    mostrar.append("+");
    mostrar.classList.add("botao", "oculto");
    const esconder = document.createElement("div");
    esconder.append("-");
    esconder.classList.add("botao");
    mostrar.onclick = function() {
        detalhes.querySelectorAll(".teste").forEach(e => e.classList.remove("oculto"));
        mostrar.classList.add("oculto");
        esconder.classList.remove("oculto");
    };
    esconder.onclick = function() {
        detalhes.querySelectorAll(".teste").forEach(e => e.classList.add("oculto"));
        esconder.classList.add("oculto");
        mostrar.classList.remove("oculto");
    };

    const item = document.createElement("li");
    item.classList.add("exercicio", sucessos === 0 ? "erro" : sucessos === testes.length ? "ok" : "parcial");
    item.append(mostrar, esconder, cabecalho, sub, detalhes);

    document.getElementById("resultados").append(item);
    if (fracionado || sucessos === testes.length) nota += peso * sucessos / testes.length;
    nota += minima;
    document.getElementById("valor").innerHTML = "" + (nota < 0 ? 0 : arredondar(nota));
    if (sucessos === testes.length) esconder.click();
}

function deepEqual(x, y) {
    if (x === y) return true;
    if (x !== x && y !== y) return true; // NaN === NaN
    if (x === null || y === null || typeof x !== "object" || typeof y !== "object") return false;
    if (Object.keys(x).length !== Object.keys(y).length) return false;

    for (let prop in x) {
        if (!y.hasOwnProperty(prop)) return false;
        if (!deepEqual(x[prop], y[prop])) return false;
    }

    return true;
}

function igual(valorEsperado) {
    return (execucao) => {
        let resultado = execucao();
        if (!deepEqual(resultado, valorEsperado)) {
            if (typeof valorEsperado === "string") valorEsperado = `"${valorEsperado}"`;
            if (typeof resultado === "string") resultado = `"${resultado}"`;
            throw new Error(`O resultado esperado era ${valorEsperado}, mas foi obtido ${resultado}.`);
        }
    };
}

function naoDeuErro() {
    return (execucao) => execucao();
}