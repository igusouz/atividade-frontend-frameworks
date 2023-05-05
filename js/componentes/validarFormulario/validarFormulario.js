import validarNome from "../ValidarCampos/validarNome.js";
import validarUnome from "../ValidarCampos/validarUnome.js";
import validarEmail from "../ValidarCampos/validarEmail.js";
import validarSenha from "../ValidarCampos/validarSenha.js";
import validarEndereco from "../ValidarCampos/validarEndereco.js";
import validarCidade from "../ValidarCampos/validarCidade.js";
import validarBairro from "../ValidarCampos/validarBairro.js";
import validarUf from "../ValidarCampos/validarUf.js";
import validarNumero from "../ValidarCampos/validarNumero.js";

function validarFormulario(n, m, em, sn, en, c, b, u, nm) {
    validarNome(n)
    validarUnome(m)
    validarEmail(em)
    validarSenha(sn)
    validarEndereco(en)
    validarCidade(c)
    validarBairro(b)
    validarUf(u)
    validarNumero(nm)
}

export default validarFormulario