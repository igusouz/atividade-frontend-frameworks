import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import informarFormatoInvalido from "../notificacao/informarFormatoInvalido.js"
import removerFeedback from "../notificacao/removerFeedback.js"
import validarFormatoNome from "../validarFormatos/validarFormatoNome.js"

function validarUnome(elUnome) {
    let unomeValor = elUnome.value
    let invFeedUnome = document.getElementById("invUnome")

    if (unomeValor === "" || unomeValor == null) {
        informarCampoObrigatorio(invFeedUnome)
    } else if (validarFormatoNome(unomeValor) == false) {
        informarFormatoInvalido(invFeedUnome)
    } else {
        removerFeedback(invFeedUnome)
    }
}

export default validarUnome