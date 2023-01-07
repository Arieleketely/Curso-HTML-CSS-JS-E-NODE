
var numeros = [3,7,8,10];
var dobro = numeros.map(function(valor) {
  return valor * 2;
});

console.log(dobro);
console.log(numeros);

function novoAluno(nome,idade){
    return {nome,idade}
}

let alunos=[

    novoAluno=("Amanda",31),
    novoAluno=("Carlos",32),
    novoAluno=("Luana",21),
    novoAluno=("Carolina",27)
]

function nomescomIdade(aluno){
    return aluno.nome + " tem "+ aluno.idade + "anos";

}
console.log(alunos.map(nomescomIdade));