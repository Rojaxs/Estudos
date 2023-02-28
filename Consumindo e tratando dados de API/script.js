async function buscaEndereco (cep) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try{
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    var consultaCepConvertida = await consultaCep.json();
    if(consultaCepConvertida.erro){
        throw Error('CEP não existe!')
    }
    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById('endereco')
    var estado = document.getElementById('estado')

    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro
    estado.value = consultaCepConvertida.uf

    console.log(consultaCepConvertida)
    return consultaCepConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente! </p>`
        console.log(erro)
    }
}

let ceps =['01001000', '01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
console.log(conjuntoCeps)

Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

var cep = document.getElementById('cep')
cep.addEventListener("focusout" , () => buscaEndereco(cep.value))