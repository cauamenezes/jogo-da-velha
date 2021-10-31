'use strict';

const celulas = document.getElementsByClassName('celula');
let turno = document.getElementById('tituloTurno');
let vencedorModal = document.getElementById('vencedorModal');
let pontosJogador = document.getElementById('pontosJogador');
let qtdeEmpates = document.getElementById('qtdeEmpates');
let pontosComputador = document.getElementById('pontosComputador');

pontosJogador.innerHTML = 0;
qtdeEmpates.innerHTML = 0;
pontosComputador.innerHTML = 0;

turno.innerHTML = 'Jogo da Velha: Médio';

const jogar = (divId) => {
    if (celulas[divId].textContent == '') {
        document.getElementById(divId).innerHTML = 'X';
        verificarGanhador();
        setTimeout(() => {
            bot();
            verificarGanhador();
        }, 250);
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
        vencedorModal.innerHTML = 'Jogador venceu!';
        pontosJogador.innerHTML = +1;
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
        pontosComputador.innerHTML = +1;
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
        qtdeEmpates.innerHTML = +1;
    }
};

let fechamentoVertical = false;
let fechamentoHorizontal = false;
let fechamentoDiagonal = false;
let botJaJogou;

const bot = () => {
    botJaJogou = false;

    //Impede de fechar na vertical
    fecharJogadorVertical(0, 3, 6);
    fecharJogadorVertical(1, 4, 7);
    fecharJogadorVertical(2, 5, 8);
    fecharJogadorVertical(3, 6, 0);
    fecharJogadorVertical(4, 7, 1);
    fecharJogadorVertical(5, 8, 2);
    fecharJogadorVertical(0, 6, 3);
    fecharJogadorVertical(1, 7, 4);
    fecharJogadorVertical(2, 8, 5);

    //Impede de fechar na horizontal
    if (botJaJogou == false) {
        fecharJogadorHorizontal(0, 1, 2);
        fecharJogadorHorizontal(3, 4, 5);
        fecharJogadorHorizontal(6, 7, 8);
        fecharJogadorHorizontal(1, 2, 0);
        fecharJogadorHorizontal(4, 5, 3);
        fecharJogadorHorizontal(7, 8, 6);
        fecharJogadorHorizontal(0, 2, 1);
        fecharJogadorHorizontal(3, 5, 4);
        fecharJogadorHorizontal(6, 8, 7);
    }

    //Impede de fechar na diagonal
    if (botJaJogou == false) {
        fecharJogadorDiagonal(0, 4, 8);
        fecharJogadorDiagonal(0, 8, 4);
        fecharJogadorDiagonal(4, 8, 0);
        fecharJogadorDiagonal(2, 4, 6);
        fecharJogadorDiagonal(2, 6, 4);
        fecharJogadorDiagonal(4, 6, 2);
    }

    if (botJaJogou == false) {
        jogarAleatorio();
    }
};
const fecharJogadorVertical = (indice1, indice2, indiceFechamento) => {
    if (
        celulas[indice1].textContent == 'X' &&
        celulas[indice2].textContent == 'X' &&
        fechamentoVertical == false
    ) {
        if (celulas[indiceFechamento].textContent == '') {
            document.getElementById(indiceFechamento).innerHTML = 'O';
            fechamentoVertical = true;
            botJaJogou = true;
        }
    }
};

const fecharJogadorHorizontal = (indice1, indice2, indiceFechamento) => {
    if (
        celulas[indice1].textContent == 'X' &&
        celulas[indice2].textContent == 'X' &&
        fechamentoHorizontal == false
    ) {
        if (celulas[indiceFechamento].textContent == '') {
            document.getElementById(indiceFechamento).innerHTML = 'O';
            fechamentoHorizontal = true;
            botJaJogou = true;
        }
    }
};

const fecharJogadorDiagonal = (indice1, indice2, indiceFechamento) => {
    if (
        celulas[indice1].textContent == 'X' &&
        celulas[indice2].textContent == 'X' &&
        fechamentoDiagonal == false
    ) {
        if (celulas[indiceFechamento].textContent == '') {
            document.getElementById(indiceFechamento).innerHTML = 'O';
            fechamentoDiagonal = true;
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

    //     let s = 0;
    //     while (s < 8) {
    //         const indice = Math.random() * (8 - 0) + 0;
    //         const indiceInteiro = Math.trunc(indice);
    //         if (celulas[indiceInteiro].textContent == '') {
    //             document.getElementById(indiceInteiro).innerHTML = 'O';
    //             break;
    //         }
    //         s++;
    //     }
};

const mostrarModal = () => {
    document.querySelector('.modalGanhador').style.display = 'flex';
};
