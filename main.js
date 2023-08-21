const form = document.getElementById("form-deposito");
const campoA = document.getElementById("campo-a");
const campoB = document.getElementById("campo-b");
const btn = document.getElementById("btn");

const mensagemResposta = document.getElementById("mensagem-resposta")
const mensagemErro = document.getElementById("mensagem-erro")

let formEValido = false

const mensagemCasoB = `Pode retirar o produto, pois o valor do campo <b>B</b> é maior que o valor do campo <b>A</b>`
const mensagemCasoA = `O valor no campo A não pode ser maior ou igual o valor de retirada do estoque!!`

function validaCampo(campo1, campo2){
    const resultado = parseFloat(campo1.value) > parseFloat(campo2.value)
    return resultado
}

campoA.addEventListener('keyup', function(){
    formEValido = validaCampo(campoB, campoA)
    if (!formEValido){
        mensagemErro.innerHTML = mensagemCasoA;
        mensagemErro.style.display = "block"
        campoA.classList.add('erro')
    } else {
        campoA.classList.remove('erro')
        mensagemErro.style.display = "none";
    }
})

form.addEventListener("submit", function(e){
    e.preventDefault();

    formEValido = validaCampo(campoB, campoA) 
    if(formEValido){
        mensagemResposta.innerHTML = mensagemCasoB;
        mensagemResposta.style.display = "block";
    }
})