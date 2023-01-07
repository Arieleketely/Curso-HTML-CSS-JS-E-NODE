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
   