let Usurios=["Amando","Marcia","Fernando"];

//depois de um segundo lista com nomes
function inserirUsuario(nome,callback){
    setTimeout(()=>{
    usuarios.push(nome);
    callback();

},1000);
}
function listarUsuarios(){
    console.log(usuario);
}

inserirUsuario("Ariele",listarUsuarios)