'use strict';

const celulas = document.getElementsByClassName('celula');
let turno = document.getElementById('tituloTurno');
let vencedorModal = document.getElementById('vencedorModal');
let pontosJogador1 = document.getElementById('pontosJogador1');
let qtdeEmpates = document.getElementById('qtdeEmpates');
let pontosJogador2 = document.getElementById('pontosJogador2');

pontosJogador1.innerHTML = 0;
qtdeEmpates.innerHTML = 0;
pontosJogador2.innerHTML = 0;

turno.innerHTML = 'Vez de: Jogador 1';

let vezJogador = jogador1;

const jogar = (divId) => {
    if (vezJogador == jogador1 && celulas[divId].textContent == '') {
        document.getElementById(divId).innerHTML = 'X';
        verificarGanhador();
        vezJogador = jogador2;
        turno.innerHTML = 'Vez de: Jogador 2';
    } else if (vezJogador == jogador2 && celulas[divId].textContent == '') {
        document.getElementById(divId).innerHTML = 'O';
        verificarGanhador();
        vezJogador = jogador1;
        turno.innerHTML = 'Vez de: Jogador 1';
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
        vencedorModal.innerHTML = 'Jogador 1 venceu!';
        pontosJogador1.innerHTML = +1;
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
        vencedorModal.innerHTML = 'Jogador 2 venceu!';
        pontosJogador2.innerHTML = +1;
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

function mostrarModal() {
    document.querySelector('.modalGanhador').style.display = 'flex';
}
