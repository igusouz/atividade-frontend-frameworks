import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import removerFeedback from "../notificacao/removerFeedback.js"


function validarCidade(elCidade){
    let cidadeValor = elCidade.value
    let invFeedCidade = document.getElementById("invCidade")

    if (cidadeValor === "" || cidadeValor == null) {
        informarCampoObrigatorio(invFeedCidade)
    } else {
        removerFeedback(invFeedCidade)
    }
}

export default validarCidade