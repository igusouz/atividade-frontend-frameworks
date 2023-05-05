const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";
  
const uf1 = document.getElementById("uf");
const cidade1 = document.getElementById("cidade");
const bairro1 = document.getElementById("bairro");
  
fetch(`${BASE_URL}/localidades/estados`)
  .then(response => response.json())
  .then(ufs => {
    uf1.innerHTML = ufs.map(uf => `<option value="${uf.id}">${uf.nome}</option>`).join("");
  })
  .catch(error => console.error(error));
  
uf1.addEventListener("change", () => {
  const ufId = uf1.value;
  
  fetch(`${BASE_URL}/localidades/estados/${ufId}/municipios`)
    .then(response => response.json())
    .then(cidades => {
      cidade1.innerHTML = cidades.map(cidade => `<option value="${cidade.id}">${cidade.nome}</option>`).join("");
    })
    .catch(error => console.error(error));
});
  
cidade1.addEventListener("change", () => {
  const cidadeId = cidade1.value;
  
  fetch(`${BASE_URL}/localidades/municipios/${cidadeId}/distritos`)
    .then(response => response.json())
    .then(bairros => {
      bairro1.innerHTML = bairros.map(bairro => `<option value="${bairro.id}">${bairro.nome}</option>`).join("");
    })
    .catch(error => console.error(error));
});

bairro1.addEventListener("change", () => {
  const cidadeIdd = cidade1.value;
  const bairroId = bairro1.value;
  
  fetch(`${BASE_URL}/localidades/municipios/${cidadeIdd}/distritos/${bairroId}`)
    .then(response => response.json())
    .then(distrito => {
      const distritoNome = distrito.nome;
      bairro1.innerHTML = `<option value="${bairroId}">${distritoNome}</option>`;
    })
    .catch(error => console.error(error));
});

  export default BASE_URL