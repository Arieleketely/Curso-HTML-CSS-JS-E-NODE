var nota1=8.0;
var nota2=7.0;


var media=(nota1+nota2)/2;
var conceito="";

if(media>=8){
    conceito="otimo";
}else if(media>=6.5){
    conceito="bom";
}else{
    conceito="Regular";
}
console.log(media);
console.log(conceito);

switch(conceito){
    case "otimo":
        console.log("Parabens otimo aluno");
        //caso acima for verdadeiro pare
        break;
    case "bom":
        console.log("quase perfeito");
        break;
        case "regular":
            
            console.log("estude mais um pouco");
break;
            default:

                console.log("ouve algum erro");
}