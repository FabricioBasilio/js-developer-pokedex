const modal = document.getElementById("modal_details");
const fade = document.getElementById("fade");
const botaoFecharModalDetails = document.getElementById("botaoFecharModalDetails");

botaoFecharModalDetails.addEventListener("click", fecharModalDetails);
fade.addEventListener("click", fecharModalDetails);

// selecionando os elementos depois de um tempo de 2 segundos
setTimeout(() => {
  const itensLista = document.querySelectorAll("li.pokemon span.name");

  itensLista.forEach((itemLista) => {
    itemLista.addEventListener("click", abrirModalDetails);
  });

}, 2000);


function abrirModalDetails(e) {
  modal.classList.remove("hidden");
  fade.classList.remove("hidden");

  const nome = e.target.innerText;
  buscarInformacoes(nome)

} 

function fecharModalDetails() {
  modal.classList.add("hidden");
  fade.classList.add("hidden");
}
