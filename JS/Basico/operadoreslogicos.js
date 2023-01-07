var a=10;
var b=10;
var c=20;
var d=20;
// e-somente é verdadeira se ambos forem verdadeiras
if(a==b && c==d ){
    console.log("A igual b e c igual d");
}
else{
    console.log("A não é igual b e c não é igual d");
}
if(a==b && a==d ){
    console.log("A igual b e c igual d");
}
else{
    console.log("A não é igual b e a não é igual d");
}

//ou-Somente é falso quando ambas forem falsas

if(a==b || c==b){
    console.log("verdadeiro ou falso=verdadeiro");

}

if(a==b || c==d){
    console.log("verdadeiro ou verdadeiro=verdade");
}

if(c==d || a==d){
    console.log("falso ou verdadeiro=verdadeiro");
}
if(b==d || a==d){
    console.log("falso ou falso=falso");
}