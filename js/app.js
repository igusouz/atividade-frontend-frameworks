import validarFormulario from "./componentes/validarFormulario/validarFormulario.js"
import ibge from "./validarApi/ibge.js"

const form = document.getElementById("form")
const nome = document.getElementById("primeiroNome")
const unome = document.getElementById("ultimoNome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const endereco = document.getElementById("endereco")
const numero = document.getElementById("numero")
const uf = document.getElementById("uf")
const cidade = document.getElementById("cidade")
const bairro = document.getElementById("bairro")




form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarFormulario(nome, unome, email, senha, endereco, numero, uf, cidade, bairro)
})

ibge.addEventListener("submit", (eb) => {
    eb.preventDefault()
    validarFormulario(uf, cidade, bairro)
})


