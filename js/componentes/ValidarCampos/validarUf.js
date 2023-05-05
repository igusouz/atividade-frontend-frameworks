import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import removerFeedback from "../notificacao/removerFeedback.js"



function validarUf(elUf){
    let ufValor = elUf.value
    let invFeedUf = document.getElementById("invUf")

    if (ufValor === "" || ufValor == null) {
        informarCampoObrigatorio(invFeedUf)
    }  else {
        removerFeedback(invFeedUf)
    }
}

export default validarUf