import informarCampoObrigatorio from "../notificacao/informarCampoObrigatorio.js"
import removerFeedback from "../notificacao/removerFeedback.js"


function validarBairro(elBairro){
    let bairroValor = elBairro.value
    let invFeedBairro = document.getElementById("invBairro")

    if (bairroValor === "" || bairroValor == null) {
        informarCampoObrigatorio(invFeedBairro)
    }  else {
        removerFeedback(invFeedBairro)
    }
}

export default validarBairro