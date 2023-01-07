let args=process.argv.slice(2);

let a=Number(args[0]);
let b=Number(args[1]);
let c=soma(a,b);


function soma(x,y){
    return x+y;
}

function mult(x,y){
    return x * y;
}

console.log(c);