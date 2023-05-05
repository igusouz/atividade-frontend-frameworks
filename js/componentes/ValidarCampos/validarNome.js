import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import informarFormatoInvalido from "../notificacao/informarFormatoInvalido.js"
import removerFeedback from "../notificacao/removerFeedback.js"
import validarFormatoNome from "../validarFormatos/validarFormatoNome.js"

function validarNome(elNome) {
    let nomeValor = elNome.value
    let invFeedNome = document.getElementById("invNome")

    if (nomeValor === "" || nomeValor == null) {
        informarCampoObrigatorio(invFeedNome)
    } else if (validarFormatoNome(nomeValor) == false) {
        informarFormatoInvalido(invFeedNome)
    } else {
        removerFeedback(invFeedNome)
    }
}

export default validarNome
