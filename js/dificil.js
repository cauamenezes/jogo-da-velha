'use strict';

const celulas = document.getElementsByClassName('celula');
let turno = document.getElementById('tituloTurno');
let vencedorModal = document.getElementById('vencedorModal');
let pontosJogador = document.getElementById('pontosJogador');
let qtdeEmpates = document.getElementById('qtdeEmpates');
let pontosComputador = document.getElementById('pontosComputador');
let calculaPontosJogador = 0;
let calculaPontosComputador = 0;
let calculaEmpates = 0;
let jogoEmAndamento = true;

pontosJogador.innerHTML = 0;
qtdeEmpates.innerHTML = 0;
pontosComputador.innerHTML = 0;

turno.innerHTML = 'Jogo da Velha: Difícil';

const jogar = (divId) => {
    if (celulas[divId].textContent == '') {
        document.getElementById(divId).innerHTML = 'X';
        verificarGanhador();
        if (jogoEmAndamento) {
            setTimeout(() => {
                bot();
                verificarGanhador();
            }, 250);
        }
    }
};

const verificarGanhador = () => {
    if (
        (celulas[0].textContent == 'X' &&
            celulas[1].textContent == 'X' &&
            celulas[2].textContent == 'X') ||
        (celulas[3].textContent == 'X' &&
            celulas[4].textContent == 'X' &&
            celulas[5].textContent == 'X') ||
        (celulas[6].textContent == 'X' &&
            celulas[7].textContent == 'X' &&
            celulas[8].textContent == 'X') ||
        (celulas[0].textContent == 'X' &&
            celulas[3].textContent == 'X' &&
            celulas[6].textContent == 'X') ||
        (celulas[1].textContent == 'X' &&
            celulas[4].textContent == 'X' &&
            celulas[7].textContent == 'X') ||
        (celulas[2].textContent == 'X' &&
            celulas[5].textContent == 'X' &&
            celulas[8].textContent == 'X') ||
        (celulas[0].textContent == 'X' &&
            celulas[4].textContent == 'X' &&
            celulas[8].textContent == 'X') ||
        (celulas[2].textContent == 'X' &&
            celulas[4].textContent == 'X' &&
            celulas[6].textContent == 'X')
    ) {
        mostrarModal();
        vencedorModal.innerHTML = 'Você venceu!';
        calculaPontosJogador++;
        pontosJogador.innerHTML = calculaPontosJogador;
        jogoEmAndamento = false;
    } else if (
        (celulas[0].textContent == 'O' &&
            celulas[1].textContent == 'O' &&
            celulas[2].textContent == 'O') ||
        (celulas[3].textContent == 'O' &&
            celulas[4].textContent == 'O' &&
            celulas[5].textContent == 'O') ||
        (celulas[6].textContent == 'O' &&
            celulas[7].textContent == 'O' &&
            celulas[8].textContent == 'O') ||
        (celulas[0].textContent == 'O' &&
            celulas[3].textContent == 'O' &&
            celulas[6].textContent == 'O') ||
        (celulas[1].textContent == 'O' &&
            celulas[4].textContent == 'O' &&
            celulas[7].textContent == 'O') ||
        (celulas[2].textContent == 'O' &&
            celulas[5].textContent == 'O' &&
            celulas[8].textContent == 'O') ||
        (celulas[0].textContent == 'O' &&
            celulas[4].textContent == 'O' &&
            celulas[8].textContent == 'O') ||
        (celulas[2].textContent == 'O' &&
            celulas[4].textContent == 'O' &&
            celulas[6].textContent == 'O')
    ) {
        mostrarModal();
        vencedorModal.innerHTML = 'Computador venceu!';
        calculaPontosComputador++;
        pontosComputador.innerHTML = calculaPontosComputador;
        jogoEmAndamento = false;
    } else if (
        celulas[0].textContent != '' &&
        celulas[1].textContent != '' &&
        celulas[2].textContent != '' &&
        celulas[3].textContent != '' &&
        celulas[4].textContent != '' &&
        celulas[5].textContent != '' &&
        celulas[6].textContent != '' &&
        celulas[7].textContent != '' &&
        celulas[8].textContent != ''
    ) {
        mostrarModal();
        vencedorModal.innerHTML = 'Empate!';
        calculaEmpates++;
        qtdeEmpates.innerHTML = calculaEmpates;
        jogoEmAndamento = false;
    }
};

let botJaJogou;
let primeiraJogada = true;

const bot = () => {
    botJaJogou = false;

    if (primeiraJogada) {
        if (celulas[4].textContent == '') {
            document.getElementById(4).innerHTML = 'O';
            primeiraJogada = false;
            botJaJogou = true;
        } else {
            document.getElementById(0).innerHTML = 'O';
            primeiraJogada = false;
            botJaJogou = true;
        }
    }

    //ganha na vertical
    botGanha(0, 3, 6);
    botGanha(1, 4, 7);
    botGanha(2, 5, 8);
    botGanha(3, 6, 0);
    botGanha(4, 7, 1);
    botGanha(5, 8, 2);
    botGanha(0, 6, 3);
    botGanha(1, 7, 4);
    botGanha(2, 8, 5);

    //ganha na horizontal
    botGanha(0, 1, 2);
    botGanha(3, 4, 5);
    botGanha(6, 7, 8);
    botGanha(1, 2, 0);
    botGanha(4, 5, 3);
    botGanha(7, 8, 6);
    botGanha(0, 2, 1);
    botGanha(3, 5, 4);
    botGanha(6, 8, 7);

    //ganha na diagonal
    botGanha(0, 4, 8);
    botGanha(0, 8, 4);
    botGanha(4, 8, 0);
    botGanha(2, 4, 6);
    botGanha(2, 6, 4);
    botGanha(4, 6, 2);

    //Impede de fechar na vertical
    fecharJogador(0, 3, 6);
    fecharJogador(1, 4, 7);
    fecharJogador(2, 5, 8);
    fecharJogador(3, 6, 0);
    fecharJogador(4, 7, 1);
    fecharJogador(5, 8, 2);
    fecharJogador(0, 6, 3);
    fecharJogador(1, 7, 4);
    fecharJogador(2, 8, 5);

    //Impede de fechar na horizontal
    if (botJaJogou == false) {
        fecharJogador(0, 1, 2);
        fecharJogador(3, 4, 5);
        fecharJogador(6, 7, 8);
        fecharJogador(1, 2, 0);
        fecharJogador(4, 5, 3);
        fecharJogador(7, 8, 6);
        fecharJogador(0, 2, 1);
        fecharJogador(3, 5, 4);
        fecharJogador(6, 8, 7);
    }

    //Impede de fechar na diagonal
    if (botJaJogou == false) {
        fecharJogador(0, 4, 8);
        fecharJogador(0, 8, 4);
        fecharJogador(4, 8, 0);
        fecharJogador(2, 4, 6);
        fecharJogador(2, 6, 4);
        fecharJogador(4, 6, 2);
        fecharJogador(4, 8, 6);
    }

    if (botJaJogou == false) {
        jogarAleatorio();
    }
};

const fecharJogador = (indice1, indice2, indiceFechamento) => {
    if (
        celulas[indice1].textContent == 'X' &&
        celulas[indice2].textContent == 'X'
    ) {
        if (celulas[indiceFechamento].textContent == '') {
            document.getElementById(indiceFechamento).innerHTML = 'O';
            botJaJogou = true;
        }
    }
};

const jogarAleatorio = () => {
    for (let i = 0; i < 10; i++) {
        const indice = Math.random() * (8 - 0) + 0;
        const indiceInteiro = Math.trunc(indice);
        if (celulas[indiceInteiro].textContent == '') {
            document.getElementById(indiceInteiro).innerHTML = 'O';
            break;
        }
    }
};

const botGanha = (indice1, indice2, indiceFechamento) => {
    if (
        celulas[indice1].textContent == 'O' &&
        celulas[indice2].textContent == 'O' &&
        celulas[indiceFechamento].textContent == ''
    ) {
        document.getElementById(indiceFechamento).innerHTML = 'O';
        botJaJogou = true;
    }
};

const limparGrade = () => {
    for (let i = 0; i < 9; i++) {
        celulas[i].innerHTML = '';
    }
    jogoEmAndamento = true;
};

const mostrarModal = () => {
    document.querySelector('.modalGanhador').style.display = 'flex';
};

const ocultarModal = () => {
    document.querySelector('.modalGanhador').style.display = 'none';
};
