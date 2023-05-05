function validarFormatoNome(txtNome) {
    let re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    return re.test(txtNome)
}

export default validarFormatoNome