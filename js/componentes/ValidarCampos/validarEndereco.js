import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import informarFormatoInvalido from "../notificacao/informarFormatoInvalido.js"
import removerFeedback from "../notificacao/removerFeedback.js"
import validarFormatoNome from "../validarFormatos/validarFormatoNome.js"

function validarEndereco(elEndereco){
    let enderecoValor  = elEndereco.value
    let invFeedEndereco = document.getElementById("invEndereco")

    if (enderecoValor === "" || enderecoValor == null) {
        informarCampoObrigatorio(invFeedEndereco)
    } else if (validarFormatoNome(enderecoValor)== false) {
        informarFormatoInvalido(invFeedEndereco)  
    }else {
        removerFeedback(invFeedEndereco)
    }
}

export default validarEndereco