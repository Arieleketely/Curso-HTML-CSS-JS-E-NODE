let alunoum={
    nome:"Ariele",
    idade:10
}

let alunodois=Object.assign({},alunoum);

//ou {...alunoum);

alunodois.idade=27;

console.log("idade sem modificar"+alunoum.idade);

console.log("idade modificada"+alunodois.idade);

