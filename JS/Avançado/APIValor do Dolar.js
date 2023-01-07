
function converter(){
    let input=document.getById(Valor).value;
let valor=input.value;
}


fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")

.then(resposta => {
   if (resposta.ok) { // deu certo a requisição
       resposta.json().then(json => console.log(json))
   }
});

