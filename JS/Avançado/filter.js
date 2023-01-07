
function par(numero) {
    return numero % 2 === 0;
  }
  var pares = [12, 5, 8, 130,1 ,3,5,7].filter(par);

console.log(pares);

var vetor = [39, 23, 76, 90,17,15];

function vendodemaior(vetor) {
  return vetor >= 18;
}


let adultos = vetor.filter(vendodemaior);
console.log(adultos);




function novoAluno(nome,idade){
    return {nome,idade}
}

let alunos=[

    novoAluno=("Amanda",31),
    novoAluno=("Carlos",32),
    novoAluno=("Luana",21),
    novoAluno=("Carolina",27)
]



function temMenosde30(aluno){
return aluno.idade < 30
}


let alunosComMenosde30= alunos.filter(temMenosde30)

console.log(alunosComMenosde30)



