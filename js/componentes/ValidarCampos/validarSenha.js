import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import informarFormatoInvalido from "../notificacao/informarFormatoInvalido.js"
import removerFeedback from "../notificacao/removerFeedback.js"
import validarFormatoSenha from "../validarFormatos/validarFormatoNome.js"

function validarSenha(elSenha) {
    let senhaValor = elSenha.value
    let invFeedSenha = document.getElementById("invSenha")

    if (senhaValor === "" || senhaValor == null) {
        informarCampoObrigatorio(invFeedSenha)
    } else if (validarFormatoSenha(senhaValor) == false) {
        informarFormatoInvalido(invFeedSenha)
    } else {
        removerFeedback(invFeedSenha)
    }
}

export default validarSenha