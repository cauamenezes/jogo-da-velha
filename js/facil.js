'use strict';


//Definindo

const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();

function atualizaMostrador() {

    if (gameOver) { return;}

    if (playTime = player1) {

        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "../img/x.png");
    }
    else{
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "../img/circulo.png");
    }


}
function inicializarEspacos(){

    var espacos=document.getElementsByClassName("celula");
    for (var i = 0; i < espacos.length; i++){

        espacos[1].addEventListener("click", function(){

            if (gameOver) {return;}

            if(this.getElementsByTgName("img").length == 0){

                if (playTime == player1) {

                    this.innerHTML = "<img src='../img/x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;

                }else{
                    this.innerHTML = "<img src='../img/circulo.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;


                }atualizaMostrador();

                verificarVencedor();

            }

        });

    }
}

 async function verificarVencedor(){

    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");

    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");

    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if((a1 ==b1 && a1 == c1 && a1 !="" )  ||  (a1 ==a2 && a1 == a3 && a1 !="")    ||  (a1 == b2 && a1 == c3 && a1 !=""))
        vencedor = a1;

}else if((b2 ==b1 && b2==b3 && b2 !="")       ||  (b2==a2 && b2==c2 && b2 !="")  || (b2==a3 && b2 ==c1 && b2 !="")         ){
        vencedor=b2;
}
    else if((c3==c2 && c3==c1 && c3 !="") || (c3==b3 && c3==a3 && c3 !="")){
        vencedor= c3;
    } 

    if(vencedor !="") {
        gameOver = true;

        await sleep(50);
        alert("O ganhador foi o: '" + vencedor + "'");
    }

}

function sleep(ms){

    return new Promise(resolve => setTimeout(resolve, ms));
    
    

}



/*
const celulas = document.querySelectorAll(".celula");

let checarTurno = true;
const checarVez = document.getElementById("Vez");

var playTime =Jogador1
const Jogador1 = "X";
const Jogador2 = "O";

if (playTime = Jogador1){
    var player = document.querySelectorAll("")
}


document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
        jogar(event.target.id);
      
    }   
});
 
function jogar(id) {
    const celula = document.getElementById(id);
    const turno = checarTurno ? Jogador1 : Jogador2;
    celula.textContent = turno;
    checarTurno = !checarTurno;
    checarVencedor(turno);
}

function checarVencedor(turno) {


}
if(checarTurno == Jogador1){

}
*/