/*
 aluno={
    //propriedades
    nome:"manda",
    notas:[10,10],
//metodo

media:function(n1,n2){
    return (n1+n2)/2;
}
}
console.log(aluno.nome);
    console.log(aluno.media(aluno.notas[0],aluno.notas[1]))

*/



/*
    var aluno2={
        //propriedades
        nome:"flor",
        notas:[10,10],
    //metodo
    
    media:function(n1,n2){
        return (n1+n2)/2;
    }
    }
    console.log(aluno2.nome);
        console.log(aluno2.media(aluno2.notas[0],aluno2.notas[1]))

        */





        /*
        alunoobj={
            //propriedades
            nome:"manda",
            notas:[10,10],
        //metodo
        
        media:function(n1,n2){
            return (this.notas[0]+this.notas[1])/2;
        }
        }
        console.log(alunoobj.nome);
            console.log(alunoobj.media(alunoobj.notas[0],alunoobj.notas[1]))
        console.log(alunoobj.media());

*/







function calcularMedia(){
    return (this.notas[0]+this.notas[1])/2;

}
        alunoobj2={
            //propriedades
            nome:"manda",
            notas:[10,10],
        //metodo
       media:calcularMedia
        }
        console.log(alunoobj2.nome);
         
        console.log(alunoobj2.media());
        