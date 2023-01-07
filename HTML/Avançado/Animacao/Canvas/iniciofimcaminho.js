let tela=document.getElementById("tela");

let ctx  = tela.getContext("2d");


//camnho da linha
ctx.beginPath();
//espresura da linha
ctx.lineWidth=4;

//definir cor da linha
ctx.strokeStyle="red"
//mover cursor
ctx.moveTo(10,10);
ctx.lineTo(400,300);
ctx.stroke();


//nova linba
ctx.beginPath();



ctx.lineWidth=7;
//cor da linha do triangulo
ctx.strokeStyle="blue";
//preenchimento do triangulo
ctx.fillStyle="green";
ctx.moveTo(50,10);
ctx.lineTo(300,300);
ctx.lineTo(200,300);
//fecha caminho
ctx.closePath();
ctx.fill();
ctx.stroke();