let Usurios=["Amando","Marcia","Fernando"];

//depois de um segundo lista com nomes
function inserirUsuario(nome){
  let promise=new Promise(function(resolve,reject){ 
    setTimeout(()=>{
    usuarios.push(nome);
    let error=false;
    if(!erro){
        resolve();
    }else{
        reject({msg:"erro"})
    }

},1000);
  })
return promise;
}
function listarUsuarios(){
    console.log(usuario);
}


async function execultar(){
    await inserirUsuario("Ketely");
    listarUsuarios();
}
execultar();