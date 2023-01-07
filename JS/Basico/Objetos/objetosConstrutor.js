/*
var calcMedia=function(){

    return(this.nota1+this.nota2)/2;
}

var turma=[
    {
    nome:"Lia",
    nota1:10,
    nota2:10,
    media:calcMedia
},
{
  nome:"Mia",
    nota1:9,
    nota2:8,
    media:calcMedia
},
]

var aluno=turma[0];
console.log(aluno);
console.log(aluno.media());
*/




/*
function criarAluno(nome,n1,n2){
    return{
    nome:"gil",
    nota1:9,
    nota2:8,
    media:function(){

        return(this.nota1+this.nota2)/2;
    }
}
}
var aluno=criarAluno();
console.log(aluno);
console.log(aluno.media());

*/




/*
function criarAluno(nome,n1,n2){
    return{
    nome:nome,
    nota1:n1,
    nota2:n2,
    media:function(){

        return(this.nota1+this.nota2)/2;
    }
}
}
var turma=[ 
    criarAluno("Hij",7,7),
    criarAluno("Nia",10,7),]
   

var aluno=turma[1];
console.log(aluno);
console.log(aluno.media());

var aluno=turma[1];
turma.forEach(function(elemento){
    console.log(elemento);
})


var aluno=turma[0];
for(var aluno of turma){
    console.log(aluno.nome);
}
*/



/*

function criarAluno(nome,n1,n2){
    return{
    nome:nome,
    nota1:n1,
    nota2:n2,
    media:function(){

        return(this.nota1+this.nota2)/2;
    }
}
}
var turma=[ 
    criarAluno("Hij",7,7),
    criarAluno("Nia",10,7),]
   



var aluno=turma[1];
turma.forEach(function(elemento){
    console.log(elemento);
})

*/




/*
function criarAluno(nome,n1,n2){
    return{
    nome:nome,
    nota1:n1,
    nota2:n2,
    media:function(){

        return(this.nota1+this.nota2)/2;
    }
}
}
var turma=[ 
    criarAluno("Hij",7,7),
    criarAluno("Nia",10,7)
]



var aluno=turma[0];
for(var aluno of turma){
    console.log(aluno.nome);
}



*/





/*
function criarAluno(nome,n1,n2){
    return{
    nome:nome,
    nota1:n1,
    nota2:n2,
    media:function(){

        return(this.nota1+this.nota2)/2;
    }
}
}
var turma=[ 
    criarAluno("Hij",7,7),
    criarAluno("Nia",10,7)
]
var aluno=turma[0];

for(var aluno of turma){
    console.log(aluno.nome+"-"+aluno.media());
}

*/



//construtores

function aluno(nome,n1,n2){
    this.nome=nome;
    this.nota1=n1;
    this.nota2=n2;
   
     this.media=function(){
   
       return(this.nota1+this.nota2)/2;
   }
   
       }
   
   //var turma=[ 
      // criarAluno("Hij",7,7),
      // criarAluno("Nia",10,7)
   //]
   //var aluno=turma[0];
   //Instanciando objeto
   var a= new aluno("Jag",10,9);
   console.log(a.media());
   
   //for(var aluno of turma){
       //console.log(aluno.nome+"-"+aluno.media());
   //}
   
   