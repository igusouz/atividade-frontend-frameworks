import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import informarFormatoInvalido from "../notificacao/informarFormatoInvalido.js"
import removerFeedback from "../notificacao/removerFeedback.js"
import validarFormatoEmail from "../validarFormatos/validarFormatoEmail.js"

function validarEmail(elEmail) {
    let emailValor = elEmail.value
    let invFeedEmail = document.getElementById("invEmail")

    if (emailValor === "" || emailValor == null) {
        informarCampoObrigatorio(invFeedEmail)
    } else if (validarFormatoEmail(emailValor) == false) {
        informarFormatoInvalido(invFeedEmail)
    } else {
        removerFeedback(invFeedEmail)
    }
}

export default validarEmail