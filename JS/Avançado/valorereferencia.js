let alunoum={
    nome:"Carol",
    idade:15};

let alunodois=alunoum;

alunodois.idade=25;

console.log(alunoum);

/*aluno um será modificado. O que estar dentro do aluno dois vai para o aluno um
No JS se colocarmos um objeto um dentro do outro o objeto recebe
 como referencia o valor do objeto qu recebeu ou seja se o objeto A recebe o B
 logo os valores de A  estarão em B.Se fosem tipos primitivos como string,int entre outros
  seria modificado o valor das variaveis como no exemplo abaixo:
*/

let num=15;

let idadenova=num;

idadenova=10;

console.log("Antiga idade"+ num);
console.log("Nova idade"+ idadenova);


