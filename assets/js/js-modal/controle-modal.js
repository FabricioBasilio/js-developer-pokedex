const modal = document.getElementById("modal_details");
const modalImage = document.getElementById("modal_details__image");
const modalName = document.getElementById("modal_details__name");
const modalAltura = document.getElementById("modal_details__height");
const modalWeight = document.getElementById("modal_details__weight");
const modalHabilidades = document.getElementById("modal_details__habilidades");

const fade = document.getElementById("fade");
const botaoFecharModalDetails = document.getElementById(
  "botaoFecharModalDetails"
);

modalName.innerText = "Carregando...";

modalAltura.innerText = "Carregando...";

modalWeight.innerText = "Carregando...";

modalHabilidades.innerText = "Carregando...";

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

  const nome = e.target.innerText.toLowerCase();
  buscarInformacoes(nome);
}

function fecharModalDetails() {
  modal.classList.add("hidden");
  fade.classList.add("hidden");

  modalImage.setAttribute("src", "");
  modalImage.setAttribute("alt", "");

  modalName.innerText = "Carregando...";

  modalAltura.innerText = "Carregando...";

  modalWeight.innerText = "Carregando...";

  modalHabilidades.innerText = "Carregando...";
}
