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

turno.innerHTML = 'Jogo da Velha: Fácil';

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
        vencedorModal.innerHTML = 'Você venceu!';
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

function bot() {
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
}

function mostrarModal() {
    document.querySelector('.modalGanhador').style.display = 'flex';
}
