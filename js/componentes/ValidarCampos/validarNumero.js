import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import informarFormatoInvalido from "../notificacao/informarFormatoInvalido.js"
import removerFeedback from "../notificacao/removerFeedback.js"
import validarFormatoNumero from "../validarFormatos/validarFormatoNumero.js"

function validarNumero(elNumero){
    let numeroValor = elNumero.value
    let invFeedNumero = document.getElementById("invNumero")

    if (numeroValor === "" || numeroValor == null) {
        informarCampoObrigatorio(invFeedNumero)
    } else if (validarFormatoNumero(numeroValor) == false) {
        informarFormatoInvalido(invFeedNumero)
    } else {
        removerFeedback(invFeedNumero)
    }
}

export default validarNumero
