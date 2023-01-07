function novoAluno(nome, idade){
    return {nome,idade}
}

let alunos=[

    novoAluno=("Amanda",31),
    novoAluno=("Carlos",32),
    novoAluno=("Luana",21),
    novoAluno=("Carolina",27)
]
function idadesomadaturma(total, aluno){
    return total + aluno.idade;
}
console.log(alunos.reduce(idadesomadaturma,0));




var inicio = 0;
var numeros = [1, 2, 3];
for ( var i = 0; i < numeros.length; i++ ){
   inicio += numeros[i];
}
console.log(inicio);

var numerosdois = [1, 2, 3];
var iniciodois = numerosdois.reduce((iniciodois, numerodois) => iniciodois + numerodois, 0);
console.log(iniciodois);



