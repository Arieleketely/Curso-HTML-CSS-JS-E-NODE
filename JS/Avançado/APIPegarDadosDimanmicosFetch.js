 /**let url="http://api.exchangeratesapi.io/v1/ latest? access_key = fd7428174cf6a7606f2a29c1aa0971c4";


 
fetch(url)
.then((res) =>{

    return res.json()

})
.then((data) =>{
    console.log(data)
})


//fetch('http://exemplo.com/usuario')
//.then(T => T.json())
//.then(console.log)
*/

fetch("https://viacep.com.br/ws/01001000/json/")
.then(resposta => {
   if (resposta.ok) { // deu certo a requisição
       resposta.json().then(json => console.log(json))
   }
});
//7adfeee2d7064a68a8bb8ae5db91ca42


fetch("https://api.rawg.io/docs/?format=openapi")
.then(resposta => {
   if (resposta.ok) { // deu certo a requisição
       resposta.json().then(json => console.log(json))
   }
});