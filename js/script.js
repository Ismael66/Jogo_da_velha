let jogador = "X";
const botaoRestart = document.getElementById("restart");
const tabuleiro = ["div0", "div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8"];
document.getElementById("btnReset").onclick = function () {
    mudaClasse();
    jogador = "X";
    for (const key in tabuleiro)
        document.getElementById(tabuleiro[key]).innerHTML = "";
}
const start = function () {
    for (const key in tabuleiro) {
        const secaoTabuleiro = document.getElementById(tabuleiro[key]);
        secaoTabuleiro.onclick = function () {
            if (secaoTabuleiro.innerHTML === "") {
                secaoTabuleiro.innerHTML = jogador;
                venceu();
                trocaJogador();
            }
        }
    }
}
const venceu = function () {
    const sequencias = [
        ["div0", "div1", "div2"],
        ["div3", "div4", "div5"],
        ["div6", "div7", "div8"],
        ["div0", "div3", "div6"],
        ["div1", "div4", "div7"],
        ["div2", "div5", "div8"],
        ["div0", "div4", "div8"],
        ["div2", "div4", "div6"]
    ];
    for (const i in sequencias) {
        const posicoes = [
            document.getElementById(sequencias[i][0]).innerHTML,
            document.getElementById(sequencias[i][1]).innerHTML,
            document.getElementById(sequencias[i][2]).innerHTML
        ];
        if (!posicoes.includes(null) &&
            posicoes.join("") === "XXX" ||
            posicoes.join("") === "OOO") {
            fimDeJogo(`"${jogador}" Ganhou!`);
            return;
        }
    }
    empate();
}
const mudaClasse = function() {
    const container = document.querySelector(".containerReset");
    if (container.classList.contains("hidden"))
        container.classList.remove("hidden");
    
    else
        container.classList.add("hidden");
}
const fimDeJogo = function (mensagem) {
    mudaClasse();
    document.querySelector(".containerReset").children[0].innerHTML = mensagem;
}
const empate = function () {
    for (const key in tabuleiro) {
        const secaoTabuleiro = document.getElementById(tabuleiro[key]).innerHTML;
        if (secaoTabuleiro === "")
            return;
    }
    fimDeJogo("Empate!");
}
const trocaJogador = function () {
    if (jogador === "X")
        jogador = "O";
    else
        jogador = "X";
}
start();