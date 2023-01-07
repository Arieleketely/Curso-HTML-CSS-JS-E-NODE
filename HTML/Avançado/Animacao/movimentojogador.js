let jogador=document.getElementById("jogador");

let xInicial=0;
let yInicial=0;




function moverjogador(x,y){

    let posx = x + "px";
    let posy = y + "px";

    jogador.style.top=posx;
    jogador.style.left=posy;

}

setInterval(function(){

    moverjogador(xInicial++, yInicial++);

},24);