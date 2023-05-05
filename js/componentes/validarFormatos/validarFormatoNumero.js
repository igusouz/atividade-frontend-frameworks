function validarFormatoNumero(txtNumero) {
    let re = /^\d+$/
    return re.test(txtNumero)
}

export default validarFormatoNumero