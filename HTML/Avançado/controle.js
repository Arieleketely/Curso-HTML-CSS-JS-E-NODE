
var video=document.getElementById("video");
function play(){
    video.play();
    }

function retrocecer(){
video.currentTimer -=15;
}

function avancar(){
    video.currentTimer +=15;
}

function diminuir_velocidade(){

    video.playbackRate -=0.1;
}

function aumentar_velocidade(){
    video.playbackRate +=0.1;

}


function parar(){
video.pause();
video.currentTimer=0;
}

