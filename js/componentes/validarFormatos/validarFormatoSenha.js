function validarFormatoSenha(txtSenha){
    let re = /^(?=.*\d)(?=.*[A-Z])(?=.*[$*&@#])/
    return re.test(txtSenha)
}

export default validarFormatoSenha