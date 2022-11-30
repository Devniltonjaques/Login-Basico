// Variaveis
let Nome01 = document.querySelector(".nome")
let Senha01 = document.getElementById("senha")




// Funções
function validar() {
   if(Nome01.value != '' && Nome01.value === 'Nilton') {
        if(Senha01.value != '' && Senha01.value === '123') {
            alert("acertou")
        } else {
            alert("Dados incorretos")
        }
   }  else {
    alert("Dados incorreto")
   }

}
// Validações

